/* =====================================================================
   PookiesFlix — APP LOGIC
   You shouldn't need to edit this file. Edit js/data.js instead to add
   new memories/photos.
   ===================================================================== */

(function () {
  // -------------------------------------------------------------------
  // STATE
  // -------------------------------------------------------------------
  let allItems = []; // flattened list of { ...item, categoryTitle }
  let myList = JSON.parse(localStorage.getItem('pookiesflix-mylist') || '[]');
  let currentModalItem = null;
  let viewerItem = null;
  let viewerIndex = 0;
  let viewerTimer = null;
  let viewerPaused = false;
  let viewerIsVideo = false;
  const VIEWER_INTERVAL = 5000; // ms per photo

  // -------------------------------------------------------------------
  // HELPERS
  // -------------------------------------------------------------------

  // Fills `el` with either a real <img> (if src provided) or a
  // gradient + emoji placeholder. Falls back to placeholder if the
  // image fails to load (e.g. file not added yet).
  function setMedia(el, src, icon, gradient) {
    el.innerHTML = '';
    const grad = gradient || ['#333', '#111'];
    el.style.background = `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`;

    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.onerror = () => {
        img.remove();
        addPlaceholderIcon(el, icon);
      };
      el.appendChild(img);
    } else {
      addPlaceholderIcon(el, icon);
    }
  }

  function addPlaceholderIcon(el, icon, className) {
    const span = document.createElement('span');
    span.className = className || 'card-placeholder-icon';
    span.textContent = icon || '🎬';
    el.appendChild(span);
  }

  function isVideoSrc(src) {
    return !!src && /\.(mov|mp4|webm)$/i.test(src);
  }

  function findItem(id) {
    return allItems.find((it) => it.id === id);
  }

  function isLiked(id) {
    return myList.includes(id);
  }

  function toggleLike(id) {
    if (isLiked(id)) {
      myList = myList.filter((x) => x !== id);
    } else {
      myList.push(id);
    }
    localStorage.setItem('pookiesflix-mylist', JSON.stringify(myList));
  }

  // -------------------------------------------------------------------
  // INIT
  // -------------------------------------------------------------------
  function init() {
    // Flatten all items for easy lookup / search
    CATEGORIES.forEach((cat) => {
      cat.items.forEach((item) => {
        allItems.push({ ...item, categoryTitle: cat.title });
      });
    });

    document.getElementById('profile-name').textContent = PROFILE_NAME;

    setupIntro();
    setupProfileScreen();
    setupNavbar();
    setupModal();
    setupViewer();
    setupSearch();

    renderHero();
    renderRows();
  }

  // -------------------------------------------------------------------
  // INTRO SPLASH (Netflix-style "ta-dum")
  // -------------------------------------------------------------------
  let audioCtx = null;
  let taDumPlayed = false;

  function getAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    return audioCtx;
  }

  // Synthesizes a two-note brass-style "ta-dum" swell.
  function scheduleTaDum(ctx) {
    const now = ctx.currentTime;

    function note(freq, start, duration, peakGain) {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc2.type = 'sine';
      osc1.frequency.value = freq;
      osc2.frequency.value = freq * 2;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 900;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now + start);
      gain.gain.linearRampToValueAtTime(peakGain, now + start + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + start + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now + start);
      osc2.start(now + start);
      osc1.stop(now + start + duration + 0.1);
      osc2.stop(now + start + duration + 0.1);
    }

    note(98, 0, 0.4, 0.25);     // "ta"
    note(73.42, 0.35, 1.5, 0.3); // "dum"
  }

  // Plays the real Netflix sound clip (audio/ta-dum.mp3). Falls back to
  // a synthesized chord only if that file is missing or fails to play.
  function playSynthFallback() {
    if (taDumPlayed) return;
    const ctx = getAudioCtx();
    if (!ctx || ctx.state === 'suspended') return;
    taDumPlayed = true;
    try {
      scheduleTaDum(ctx);
    } catch (e) {
      /* ignore audio errors */
    }
  }

  function playTaDum() {
    if (taDumPlayed) return;
    const audio = document.getElementById('intro-sound');
    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(() => { taDumPlayed = true; }).catch(playSynthFallback);
      } else {
        taDumPlayed = true;
      }
    } else {
      playSynthFallback();
    }
  }

  function tryResumeAndPlay() {
    if (taDumPlayed) return;
    const audio = document.getElementById('intro-sound');
    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(() => { taDumPlayed = true; }).catch(() => {
          const ctx = getAudioCtx();
          if (!ctx) return;
          ctx.resume().then(playSynthFallback).catch(() => {});
        });
      } else {
        taDumPlayed = true;
      }
    } else {
      const ctx = getAudioCtx();
      if (!ctx) return;
      ctx.resume().then(playSynthFallback).catch(() => {});
    }
  }

  function setupIntro() {
    const intro = document.getElementById('intro-screen');
    let finished = false;

    function finishIntro() {
      if (finished) return;
      finished = true;
      intro.classList.add('fade-out');
      document.getElementById('profile-screen').classList.add('visible');
      setTimeout(() => intro.remove(), 800);
    }

    playTaDum();
    document.addEventListener('click', tryResumeAndPlay, { once: true });
    document.addEventListener('keydown', tryResumeAndPlay, { once: true });
    document.addEventListener('touchstart', tryResumeAndPlay, { once: true });

    intro.addEventListener('click', finishIntro);
    setTimeout(finishIntro, 2300);
  }

  // -------------------------------------------------------------------
  // PROFILE SCREEN
  // -------------------------------------------------------------------
  function setupProfileScreen() {
    document.getElementById('profile-select').addEventListener('click', () => {
      const profileScreen = document.getElementById('profile-screen');
      const app = document.getElementById('app');

      profileScreen.classList.add('fade-out');

      setTimeout(() => {
        profileScreen.classList.add('hidden');
        app.classList.remove('hidden');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            app.classList.add('visible');
          });
        });
      }, 500);
    });
  }

  // -------------------------------------------------------------------
  // NAVBAR
  // -------------------------------------------------------------------
  function setupNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        const target = link.dataset.scroll;
        if (target === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (target === 'rows') {
          document.getElementById('rows').scrollIntoView({ behavior: 'smooth' });
        } else if (target === 'mylist') {
          const row = document.getElementById('row-mylist');
          if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            document.getElementById('rows').scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    document.querySelector('.logo').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------------
  // HERO
  // -------------------------------------------------------------------
  function renderHero() {
    const featured = allItems.find((it) => it.featured) || allItems[0];
    if (!featured) return;

    const backdrop = document.getElementById('hero-backdrop');
    setMedia(backdrop, featured.cover, featured.icon, featured.gradient);
    // hero placeholder icon should be bigger
    const placeholderIcon = backdrop.querySelector('.card-placeholder-icon');
    if (placeholderIcon) {
      placeholderIcon.style.fontSize = '6rem';
    }

    document.getElementById('hero-tag').textContent = featured.tag || 'FEATURED MEMORY';
    document.getElementById('hero-title').textContent = featured.title;
    document.getElementById('hero-description').textContent = featured.description;

    document.getElementById('hero-play').onclick = () => openViewer(featured, 0);
    document.getElementById('hero-info').onclick = () => openModal(featured);
  }

  // -------------------------------------------------------------------
  // ROWS
  // -------------------------------------------------------------------
  function renderRows() {
    const rowsContainer = document.getElementById('rows');
    rowsContainer.innerHTML = '';

    // "My List" row first (if non-empty)
    rowsContainer.appendChild(buildRow('My List', myList.map(findItem).filter(Boolean), 'mylist'));

    // Then all data categories
    CATEGORIES.forEach((cat) => {
      rowsContainer.appendChild(buildRow(cat.title, cat.items));
    });
  }

  function buildRow(title, items, idSuffix) {
    const row = document.createElement('section');
    row.className = 'row';
    if (idSuffix) {
      row.id = `row-${idSuffix}`;
    }
    if (!items || items.length === 0) {
      row.classList.add('hidden-row');
    }

    const heading = document.createElement('h2');
    heading.className = 'row-title';
    heading.textContent = title;
    row.appendChild(heading);

    const wrapper = document.createElement('div');
    wrapper.className = 'row-track-wrapper';

    const leftArrow = document.createElement('button');
    leftArrow.className = 'row-arrow left';
    leftArrow.innerHTML = '‹';
    leftArrow.setAttribute('aria-label', 'scroll left');

    const rightArrow = document.createElement('button');
    rightArrow.className = 'row-arrow right';
    rightArrow.innerHTML = '›';
    rightArrow.setAttribute('aria-label', 'scroll right');

    const track = document.createElement('div');
    track.className = 'row-track';

    if (!items || items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-row-msg';
      empty.textContent = 'Nothing here yet — add some memories to your list!';
      track.appendChild(empty);
    } else {
      items.forEach((item) => {
        track.appendChild(buildCard(item));
      });
    }

    leftArrow.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth * 0.9, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth * 0.9, behavior: 'smooth' });
    });

    wrapper.appendChild(leftArrow);
    wrapper.appendChild(track);
    wrapper.appendChild(rightArrow);
    row.appendChild(wrapper);

    return row;
  }

  function buildCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = item.id;
    card.dataset.title = item.title.toLowerCase();

    const media = document.createElement('div');
    media.className = 'card-media';
    setMedia(media, item.cover, item.icon, item.gradient);

    const heart = document.createElement('span');
    heart.className = 'card-heart';
    heart.textContent = isLiked(item.id) ? '❤️' : '🤍';

    const label = document.createElement('div');
    label.className = 'card-label';
    label.textContent = item.title;

    media.appendChild(heart);
    media.appendChild(label);
    card.appendChild(media);

    card.addEventListener('click', () => openModal(item, card));

    return card;
  }

  // -------------------------------------------------------------------
  // MODAL (DETAILS)
  // -------------------------------------------------------------------
  function setupModal() {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') closeModal();
    });
  }

  function openModal(item, originEl) {
    currentModalItem = item;

    const backdrop = document.getElementById('modal-backdrop');
    setMedia(backdrop, item.cover, item.icon, item.gradient);
    const placeholderIcon = backdrop.querySelector('.card-placeholder-icon');
    if (placeholderIcon) {
      placeholderIcon.style.fontSize = '4rem';
    }

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-date').textContent = item.date || '';
    const videoCount = item.photos.filter((p) => isVideoSrc(p.src)).length;
    const photoCount = item.photos.length - videoCount;
    const countParts = [];
    if (photoCount) countParts.push(`${photoCount} photo${photoCount === 1 ? '' : 's'}`);
    if (videoCount) countParts.push(`${videoCount} video${videoCount === 1 ? '' : 's'}`);
    document.getElementById('modal-count').textContent = countParts.join(', ');
    document.getElementById('modal-description').textContent = item.description || '';

    document.getElementById('modal-play').onclick = () => openViewer(item, 0);

    const likeBtn = document.getElementById('modal-like');
    refreshLikeButton(likeBtn, item.id);
    likeBtn.onclick = () => {
      toggleLike(item.id);
      refreshLikeButton(likeBtn, item.id);
      renderRows(); // refresh My List row + heart icons
    };

    // Photo grid
    const photoList = document.getElementById('photo-list');
    photoList.innerHTML = '';
    item.photos.forEach((photo, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'photo-thumb';
      setMediaThumb(thumb, photo);

      if (photo.caption) {
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;
        thumb.appendChild(caption);
      }

      thumb.addEventListener('click', () => openViewer(item, index));
      photoList.appendChild(thumb);
    });

    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    overlay.classList.add('active');

    // Netflix-style "expand from card" transition: animate the modal
    // growing out from the position/size of the clicked card.
    modal.style.transition = 'none';
    if (originEl) {
      const cardRect = originEl.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();
      const scaleX = cardRect.width / modalRect.width;
      const scaleY = cardRect.height / modalRect.height;
      const translateX = (cardRect.left + cardRect.width / 2) - (modalRect.left + modalRect.width / 2);
      const translateY = (cardRect.top + cardRect.height / 2) - (modalRect.top + modalRect.height / 2);
      modal.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    } else {
      modal.style.transform = 'scale(0.85)';
    }
    modal.style.opacity = '0';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('visible');
        modal.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease';
        modal.style.transform = 'translate(0, 0) scale(1, 1)';
        modal.style.opacity = '1';
      });
    });
  }

  function setMediaThumb(el, photo) {
    el.innerHTML = '';
    if (photo.src && isVideoSrc(photo.src)) {
      const video = document.createElement('video');
      video.src = photo.src;
      video.muted = true;
      video.preload = 'metadata';
      video.onerror = () => {
        video.remove();
        addPlaceholderIcon(el, photo.icon, 'photo-placeholder-icon');
      };
      el.appendChild(video);
      const badge = document.createElement('span');
      badge.className = 'photo-video-badge';
      badge.textContent = '▶';
      el.appendChild(badge);
    } else if (photo.src) {
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = '';
      img.onerror = () => {
        img.remove();
        addPlaceholderIcon(el, photo.icon, 'photo-placeholder-icon');
      };
      el.appendChild(img);
    } else {
      addPlaceholderIcon(el, photo.icon, 'photo-placeholder-icon');
    }
  }

  function refreshLikeButton(btn, id) {
    if (isLiked(id)) {
      btn.textContent = '✓';
      btn.classList.add('active');
      btn.title = 'Remove from My List';
    } else {
      btn.textContent = '+';
      btn.classList.remove('active');
      btn.title = 'Add to My List';
    }
  }

  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    overlay.classList.remove('visible');
    setTimeout(() => {
      overlay.classList.remove('active');
      modal.style.transition = '';
      modal.style.transform = '';
      modal.style.opacity = '';
    }, 250);
    currentModalItem = null;
  }

  // -------------------------------------------------------------------
  // FULLSCREEN SLIDESHOW VIEWER
  // -------------------------------------------------------------------
  function setupViewer() {
    document.getElementById('viewer-close').addEventListener('click', closeViewer);
    document.getElementById('viewer-prev').addEventListener('click', () => stepViewer(-1));
    document.getElementById('viewer-next').addEventListener('click', () => stepViewer(1));
    document.getElementById('viewer-playpause').addEventListener('click', togglePause);

    document.addEventListener('keydown', (e) => {
      const viewerActive = document.getElementById('viewer-overlay').classList.contains('active');
      const modalActive = document.getElementById('modal-overlay').classList.contains('active');

      if (viewerActive) {
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowLeft') stepViewer(-1);
        if (e.key === 'ArrowRight') stepViewer(1);
        if (e.key === ' ') {
          e.preventDefault();
          togglePause();
        }
      } else if (modalActive) {
        if (e.key === 'Escape') closeModal();
      }
    });
  }

  function openViewer(item, index) {
    viewerItem = item;
    viewerIndex = index;
    viewerPaused = false;

    document.getElementById('viewer-occasion').textContent = item.title;
    const overlay = document.getElementById('viewer-overlay');
    overlay.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add('visible'));
    });
    renderViewerSlide();
  }

  function closeViewer() {
    const overlay = document.getElementById('viewer-overlay');
    overlay.classList.remove('visible');
    setTimeout(() => overlay.classList.remove('active'), 250);
    clearInterval(viewerTimer);
    viewerTimer = null;
    viewerItem = null;
  }

  function renderViewerSlide() {
    if (!viewerItem) return;
    const photo = viewerItem.photos[viewerIndex];
    const stage = document.getElementById('viewer-stage');
    stage.innerHTML = '';
    const grad = viewerItem.gradient || ['#333', '#111'];
    stage.style.background = `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`;

    viewerIsVideo = isVideoSrc(photo.src);

    if (photo.src && viewerIsVideo) {
      const video = document.createElement('video');
      video.src = photo.src;
      video.controls = true;
      video.playsInline = true;
      video.className = 'viewer-video';
      video.onerror = () => {
        video.remove();
        addPlaceholderIcon(stage, photo.icon, 'viewer-placeholder-icon');
      };
      stage.appendChild(video);
    } else if (photo.src) {
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = '';
      img.onerror = () => {
        img.remove();
        addPlaceholderIcon(stage, photo.icon, 'viewer-placeholder-icon');
      };
      stage.appendChild(img);
    } else {
      addPlaceholderIcon(stage, photo.icon, 'viewer-placeholder-icon');
    }

    document.getElementById('viewer-caption').textContent = photo.caption || '';

    const playpauseBtn = document.getElementById('viewer-playpause');
    if (viewerIsVideo) {
      clearInterval(viewerTimer);
      viewerTimer = null;
      pauseProgressBar();
      document.getElementById('viewer-progress').style.transition = 'none';
      document.getElementById('viewer-progress').style.width = '0%';
      playpauseBtn.classList.add('hidden');
    } else {
      playpauseBtn.classList.remove('hidden');
      startViewerTimer();
    }
  }

  function stepViewer(direction) {
    if (!viewerItem) return;
    const total = viewerItem.photos.length;
    viewerIndex = (viewerIndex + direction + total) % total;
    renderViewerSlide();
  }

  function togglePause() {
    if (viewerIsVideo) return;
    viewerPaused = !viewerPaused;
    document.getElementById('viewer-playpause').textContent = viewerPaused ? '▶' : '⏸';
    if (viewerPaused) {
      clearInterval(viewerTimer);
      viewerTimer = null;
      pauseProgressBar();
    } else {
      startViewerTimer();
    }
  }

  function startViewerTimer() {
    clearInterval(viewerTimer);
    if (viewerPaused) return;
    resetProgressBar();
    viewerTimer = setInterval(() => {
      stepViewer(1);
    }, VIEWER_INTERVAL);
  }

  function resetProgressBar() {
    const bar = document.getElementById('viewer-progress');
    bar.style.transition = 'none';
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${VIEWER_INTERVAL}ms linear`;
        if (!viewerPaused) {
          bar.style.width = '100%';
        }
      });
    });
  }

  function pauseProgressBar() {
    const bar = document.getElementById('viewer-progress');
    const computed = getComputedStyle(bar).width;
    bar.style.transition = 'none';
    bar.style.width = computed;
  }

  // -------------------------------------------------------------------
  // SEARCH
  // -------------------------------------------------------------------
  function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      const rows = document.querySelectorAll('#rows .row');

      rows.forEach((row) => {
        let visibleCount = 0;
        const cards = row.querySelectorAll('.card');
        cards.forEach((card) => {
          const matches = !query || card.dataset.title.includes(query);
          card.style.display = matches ? '' : 'none';
          if (matches) visibleCount++;
        });

        if (cards.length === 0) {
          // empty "My List" row etc. — leave default visibility handling alone
          row.style.display = query ? 'none' : '';
        } else {
          row.style.display = visibleCount > 0 ? '' : 'none';
        }
      });
    });
  }

  // -------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', init);
})();

/* =====================================================================
   PookiesFlix — DATA FILE
   =====================================================================
   This is the only file you usually need to edit to add new memories.

   HOW TO ADD A NEW PHOTO MEMORY ("show"):
   1. Make a folder inside /photos, e.g.  photos/beach-trip-2025/
   2. Drop your photos in there, e.g. IMG_001.jpg, IMG_002.jpg, ...
   3. Copy one of the "item" blocks below and edit it:
        - id:          unique short id, no spaces (e.g. "beach-trip-2025")
        - title:       shown on the card / hero / modal
        - tag:         small label above the title in the hero banner
        - date:        shown in the modal (e.g. "March 2025")
        - description: a sentence or two about the memory
        - icon:        an emoji shown on placeholder cards (optional once
                        you add real photos, but doesn't hurt to leave it)
        - gradient:     two hex colors used for the placeholder card
        - cover:       path to a cover photo, e.g. "photos/beach-trip-2025/IMG_001.jpg"
                        — leave as null to use a colorful placeholder instead
        - featured:    set to true on ONE item to make it the homepage hero
        - photos:      list every photo you want to show, each with:
                          src:     "photos/beach-trip-2025/IMG_001.jpg"
                                   (or null to show a placeholder)
                          caption: a short caption / date for that photo

   4. Add the item into one of the CATEGORIES below, or create a new
      category by copying a whole { title: "...", items: [...] } block.

   That's it — refresh the page and your new memory shows up!
   ===================================================================== */

const PROFILE_NAME = "Pookie";

const CATEGORIES = [
  {
    title: "Our Story",
    items: [
      {
        id: "how-we-met",
        title: "How We Met",
        tag: "PookiesFlix Original",
        date: "The Beginning",
        description: "The very first chapter of us — every great series has to start somewhere. This is ours.",
        icon: "✨",
        gradient: ["#e50914", "#6e0a10"],
        cover: null,
        featured: true,
        photos: [
          { src: null, caption: "The first photo together", icon: "📸" },
          { src: null, caption: "That one coffee shop", icon: "☕" },
          { src: null, caption: "Where it all started", icon: "💫" },
          { src: null, caption: "Day one feels", icon: "🥰" }
        ]
      },
      {
        id: "first-date",
        title: "The First Date",
        tag: "Limited Series",
        date: "Episode 1",
        description: "Nervous laughs, butterflies, and the start of something amazing.",
        icon: "🌹",
        gradient: ["#b81d24", "#4a0408"],
        cover: null,
        photos: [
          { src: null, caption: "Pre-date jitters", icon: "🦋" },
          { src: null, caption: "The big moment", icon: "🌹" },
          { src: null, caption: "Couldn't stop smiling", icon: "😊" }
        ]
      },
      {
        id: "love-notes",
        title: "Little Love Notes",
        tag: "Mini Series",
        date: "Ongoing",
        description: "All the tiny moments, texts, and notes that say 'I love you' in their own way.",
        icon: "💌",
        gradient: ["#8e44ad", "#3b1d4f"],
        cover: null,
        photos: [
          { src: null, caption: "Good morning text", icon: "💌" },
          { src: null, caption: "Surprise note", icon: "📝" },
          { src: null, caption: "Cute doodle", icon: "🎨" }
        ]
      }
    ]
  },

  {
    title: "Date Nights",
    items: [
      {
        id: "dinner-dates",
        title: "Dinner Dates",
        tag: "Comfort Watch",
        date: "Various Dates",
        description: "Good food, better company. All our favorite dinner dates in one place.",
        icon: "🍝",
        gradient: ["#d35400", "#5a2406"],
        cover: null,
        photos: [
          { src: null, caption: "That fancy restaurant", icon: "🍽️" },
          { src: null, caption: "Pasta night", icon: "🍝" },
          { src: null, caption: "Dessert was worth it", icon: "🍰" },
          { src: null, caption: "Candlelight dinner", icon: "🕯️" }
        ]
      },
      {
        id: "movie-nights",
        title: "Movie Nights In",
        tag: "Cozy Vibes",
        date: "Every Weekend",
        description: "Blankets, popcorn, and way too many snacks. Our favorite way to spend a night.",
        icon: "🍿",
        gradient: ["#2c3e50", "#0f1a24"],
        cover: null,
        photos: [
          { src: null, caption: "Movie marathon setup", icon: "🍿" },
          { src: null, caption: "Falling asleep mid-movie", icon: "😴" },
          { src: null, caption: "Best snacks ever", icon: "🍫" }
        ]
      },
      {
        id: "coffee-runs",
        title: "Coffee Runs",
        tag: "Daily Dose",
        date: "Whenever",
        description: "Lattes, laughs, and lazy mornings together.",
        icon: "☕",
        gradient: ["#6f4e37", "#2e1f17"],
        cover: null,
        photos: [
          { src: null, caption: "Matching orders", icon: "☕" },
          { src: null, caption: "Cute cafe corner", icon: "🪑" },
          { src: null, caption: "Latte art", icon: "🎨" }
        ]
      },
      {
        id: "karaoke-night",
        title: "Karaoke Night",
        tag: "Musical Special",
        date: "That One Night",
        description: "We may not be great singers, but we had the best time anyway.",
        icon: "🎤",
        gradient: ["#f39c12", "#7a4d09"],
        cover: null,
        photos: [
          { src: null, caption: "Mic drop moment", icon: "🎤" },
          { src: null, caption: "Off-key duet", icon: "🎶" }
        ]
      }
    ]
  },

  {
    title: "Trips & Adventures",
    items: [
      {
        id: "beach-trip",
        title: "Beach Trip",
        tag: "Summer Special",
        date: "Summer",
        description: "Sun, sand, and the two of us. One of our favorite getaways.",
        icon: "🏖️",
        gradient: ["#1abc9c", "#0e4f43"],
        cover: null,
        photos: [
          { src: null, caption: "Toes in the sand", icon: "🏖️" },
          { src: null, caption: "Sunset walk", icon: "🌅" },
          { src: null, caption: "Beach day selfie", icon: "🤳" },
          { src: null, caption: "Ocean view", icon: "🌊" },
          { src: null, caption: "Ice cream by the shore", icon: "🍦" }
        ]
      },
      {
        id: "mountain-getaway",
        title: "Mountain Getaway",
        tag: "Adventure Series",
        date: "That Weekend",
        description: "Fresh air, breathtaking views, and cozy cabin nights.",
        icon: "⛰️",
        gradient: ["#27ae60", "#123c22"],
        cover: null,
        photos: [
          { src: null, caption: "View from the top", icon: "⛰️" },
          { src: null, caption: "Cozy cabin", icon: "🏡" },
          { src: null, caption: "Campfire night", icon: "🔥" }
        ]
      },
      {
        id: "road-trip",
        title: "The Road Trip",
        tag: "Epic Saga",
        date: "Somewhere, Sometime",
        description: "Bad playlists, snack breaks, and way too many photo stops.",
        icon: "🚗",
        gradient: ["#2980b9", "#0e2f47"],
        cover: null,
        photos: [
          { src: null, caption: "Snack stop", icon: "🍟" },
          { src: null, caption: "Scenic overlook", icon: "🛣️" },
          { src: null, caption: "Singing in the car", icon: "🎵" },
          { src: null, caption: "Pit stop selfie", icon: "🤳" }
        ]
      },
      {
        id: "city-exploring",
        title: "City Exploring",
        tag: "Urban Adventure",
        date: "That City Trip",
        description: "Getting lost on purpose, finding the best little spots together.",
        icon: "🏙️",
        gradient: ["#8e44ad", "#3a1b4d"],
        cover: null,
        photos: [
          { src: null, caption: "City skyline", icon: "🏙️" },
          { src: null, caption: "Hidden cafe find", icon: "☕" },
          { src: null, caption: "Tourist photo op", icon: "📷" }
        ]
      }
    ]
  },

  {
    title: "Anniversaries & Milestones",
    items: [
      {
        id: "first-anniversary",
        title: "First Anniversary",
        tag: "Season Finale",
        date: "Year One",
        description: "Celebrating one whole year of us — and so many more to come.",
        icon: "🎉",
        gradient: ["#c0392b", "#4d1610"],
        cover: null,
        photos: [
          { src: null, caption: "Anniversary dinner", icon: "🥂" },
          { src: null, caption: "The gift reveal", icon: "🎁" },
          { src: null, caption: "Cheers to us", icon: "🥂" },
          { src: null, caption: "Cake time", icon: "🎂" }
        ]
      },
      {
        id: "birthdays",
        title: "Birthday Celebrations",
        tag: "Annual Special",
        date: "Every Year",
        description: "Cake, candles, and celebrating each other.",
        icon: "🎂",
        gradient: ["#e84393", "#5e1a3a"],
        cover: null,
        photos: [
          { src: null, caption: "Blowing out candles", icon: "🕯️" },
          { src: null, caption: "Surprise party setup", icon: "🎉" },
          { src: null, caption: "Birthday cake", icon: "🎂" }
        ]
      },
      {
        id: "holidays",
        title: "Holidays Together",
        tag: "Seasonal Special",
        date: "Every Season",
        description: "Cozy sweaters, twinkling lights, and holiday cheer with you.",
        icon: "🎄",
        gradient: ["#16a085", "#0a3d33"],
        cover: null,
        photos: [
          { src: null, caption: "Holiday lights", icon: "🎄" },
          { src: null, caption: "Matching pajamas", icon: "🧦" },
          { src: null, caption: "Gift exchange", icon: "🎁" }
        ]
      }
    ]
  },

  {
    title: "Just Because",
    items: [
      {
        id: "random-cute-moments",
        title: "Random Cute Moments",
        tag: "Daily Dose of Cute",
        date: "Anytime",
        description: "No special occasion needed — just us being us.",
        icon: "🥰",
        gradient: ["#fd79a8", "#5a2436"],
        cover: null,
        photos: [
          { src: null, caption: "Random hug", icon: "🤗" },
          { src: null, caption: "Caught smiling", icon: "😄" },
          { src: null, caption: "Just because", icon: "🥰" },
          { src: null, caption: "Goofy face", icon: "🤪" }
        ]
      },
      {
        id: "silly-selfies",
        title: "Silly Selfies",
        tag: "Bloopers Reel",
        date: "All the Time",
        description: "The faces we make when no one (else) is watching.",
        icon: "🤳",
        gradient: ["#fdcb6e", "#6e4f0f"],
        cover: null,
        photos: [
          { src: null, caption: "Goofy selfie #1", icon: "🤪" },
          { src: null, caption: "Goofy selfie #2", icon: "😝" },
          { src: null, caption: "Mirror selfie", icon: "🪞" }
        ]
      },
      {
        id: "pets-and-us",
        title: "Pets & Us",
        tag: "Family Special",
        date: "Always",
        description: "The fluffiest members of our story.",
        icon: "🐶",
        gradient: ["#00b894", "#0a4338"],
        cover: null,
        photos: [
          { src: null, caption: "Cuddle time", icon: "🐶" },
          { src: null, caption: "Photobomb", icon: "🐱" }
        ]
      }
    ]
  },

  {
    title: "Throwbacks",
    items: [
      {
        id: "old-memories",
        title: "Old Memories",
        tag: "Classic Collection",
        date: "Way Back",
        description: "Way back when — looking back at where we've been.",
        icon: "📼",
        gradient: ["#636e72", "#262a2c"],
        cover: null,
        photos: [
          { src: null, caption: "Throwback #1", icon: "📼" },
          { src: null, caption: "Throwback #2", icon: "🕰️" },
          { src: null, caption: "Look how young we were", icon: "👶" }
        ]
      },
      {
        id: "the-glow-up",
        title: "The Glow Up",
        tag: "Then & Now",
        date: "Then vs Now",
        description: "From then to now — growing together, one photo at a time.",
        icon: "🌱",
        gradient: ["#00cec9", "#0a4f4d"],
        cover: null,
        photos: [
          { src: null, caption: "Then", icon: "🌱" },
          { src: null, caption: "Now", icon: "🌳" }
        ]
      }
    ]
  }
];

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
        - photos:      list every photo/video you want to show, each with:
                          src:     "photos/beach-trip-2025/IMG_001.jpg"
                                   (or null to show a placeholder; .mov/.mp4
                                   files automatically play as video)
                          caption: a short caption / date for that photo

   4. Add the item into one of the CATEGORIES below, or create a new
      category by copying a whole { title: "...", items: [...] } block.

   That's it — refresh the page and your new memory shows up!
   ===================================================================== */

const PROFILE_NAME = "Pookie";

const CATEGORIES = [
  {
    "title": "Milestones",
    "items": [
      {
        "id": "first-month",
        "title": "Our First Month",
        "tag": "Series Premiere",
        "date": "Month One",
        "description": "The pilot episode of us — brand new, exciting, and already impossible to stop watching.",
        "icon": "🌱",
        "gradient": [
          "#16a085",
          "#0a3d33"
        ],
        "cover": "photos/First Month/IMG_6953.jpg",
        "covers": [
          "photos/First Month/IMG_6953.jpg",
          "photos/First Month/IMG_4508.jpg",
          "photos/First Month/IMG_6964.jpg",
          "photos/First Month/IMG_7137.jpg"
        ],
        "photos": [
          {
            "src": "photos/First Month/20241009_002558_E3BE2D.JPEG",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_1916.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_3027.JPG",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_3552.JPG",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_3906.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_3941.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_4508.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_6937.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_6953.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_6959.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_6964.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7033.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7049.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7128.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7131.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7137.jpg",
            "caption": "",
            "icon": "🌱"
          },
          {
            "src": "photos/First Month/IMG_7140.jpg",
            "caption": "",
            "icon": "🌱"
          }
        ]
      },
      {
        "id": "six-months",
        "title": "Six Months Strong",
        "tag": "Mid-Season Special",
        "date": "Six Months",
        "description": "Half a year in, and the chemistry only got better. Certified renewal.",
        "icon": "💞",
        "gradient": [
          "#e84393",
          "#5e1a3a"
        ],
        "cover": "photos/6 Month/IMG_8616.JPG",
        "covers": [
          "photos/6 Month/IMG_8616.JPG",
          "photos/6 Month/IMG_8621.JPG",
          "photos/6 Month/IMG_8657.JPG"
        ],
        "photos": [
          {
            "src": "photos/6 Month/IMG_8616.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8621.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8623.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8630.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8636.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8639.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8644.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8647.JPG",
            "caption": "",
            "icon": "💞"
          },
          {
            "src": "photos/6 Month/IMG_8657.JPG",
            "caption": "",
            "icon": "💞"
          }
        ]
      },
      {
        "id": "one-year",
        "title": "One Year Anniversary",
        "tag": "Season Finale",
        "date": "One Year",
        "description": "A whole year of us, in the books — already renewed for many more seasons.",
        "icon": "🎉",
        "gradient": [
          "#e50914",
          "#6e0a10"
        ],
        "cover": "photos/1 Year/IMG_3980.JPG",
        "covers": [
          "photos/1 Year/IMG_3980.JPG",
          "photos/1 Year/IMG_3974.JPG"
        ],
        "featured": true,
        "photos": [
          {
            "src": "photos/1 Year/IMG_3970.JPG",
            "caption": "",
            "icon": "🎉"
          },
          {
            "src": "photos/1 Year/IMG_3974.JPG",
            "caption": "",
            "icon": "🎉"
          },
          {
            "src": "photos/1 Year/IMG_3980.JPG",
            "caption": "",
            "icon": "🎉"
          },
          {
            "src": "photos/1 Year/IMG_3984.JPG",
            "caption": "",
            "icon": "🎉"
          },
          {
            "src": "photos/1 Year/IMG_3985.JPG",
            "caption": "",
            "icon": "🎉"
          }
        ]
      },
      {
        "id": "graduation",
        "title": "Graduation Day",
        "tag": "Big Milestone",
        "date": "Graduation",
        "description": "Caps thrown, happy tears, one huge chapter wrapped.",
        "icon": "🎓",
        "gradient": [
          "#f1c40f",
          "#7a6209"
        ],
        "cover": "photos/Graduation!!!/0B7E7967-C23E-424E-924F-2349BF5E44B7.JPG",
        "covers": [
          "photos/Graduation!!!/0B7E7967-C23E-424E-924F-2349BF5E44B7.JPG",
          "photos/Graduation!!!/DSC_0086.JPG",
          "photos/Graduation!!!/IMG_3342.JPG"
        ],
        "photos": [
          {
            "src": "photos/Graduation!!!/0B7E7967-C23E-424E-924F-2349BF5E44B7.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0086.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0176.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0199.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0221.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0237.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0243.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0279.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0289.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0291.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0305.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0349.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0352.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0403.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0421.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/DSC_0427.JPG",
            "caption": "",
            "icon": "🎓"
          },
          {
            "src": "photos/Graduation!!!/IMG_3342.JPG",
            "caption": "",
            "icon": "🎓"
          }
        ]
      }
    ]
  },
  {
    "title": "Date Nights",
    "items": [
      {
        "id": "food-dates",
        "title": "Food Dates",
        "tag": "Comfort Watch",
        "date": "Various Dates",
        "description": "Good food, better company — our favorite recurring series.",
        "icon": "🍜",
        "gradient": [
          "#d35400",
          "#5a2406"
        ],
        "cover": "photos/Food Dates/IMG_8412.jpg",
        "covers": [
          "photos/Food Dates/IMG_8412.jpg",
          "photos/Food Dates/IMG_7253.jpg",
          "photos/Food Dates/IMG_5663.jpg",
          "photos/Food Dates/IMG_7562.jpg"
        ],
        "photos": [
          {
            "src": "photos/Food Dates/IMG_0705.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_1027.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_1325.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_1465.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_1500.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_1523.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_3048.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_4026.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_4863.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_5082.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_5660.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_5663.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_6618.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7128.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7253.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7336 2.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7562.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7575.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_7623.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8412.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8552.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8592.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8616.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8638.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_8664.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_9189.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_9262.jpg",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_9771.JPG",
            "caption": "",
            "icon": "🍜"
          },
          {
            "src": "photos/Food Dates/IMG_9777.JPG",
            "caption": "",
            "icon": "🍜"
          }
        ]
      },
      {
        "id": "dressing-up",
        "title": "Dressing Up & Going Out",
        "tag": "Glow-Up Special",
        "date": "Date Nights",
        "description": "Getting fancy and stepping out — main character energy, every time.",
        "icon": "✨",
        "gradient": [
          "#8e44ad",
          "#3b1d4f"
        ],
        "cover": "photos/Dressing Up and Going Out/AA0F263E-F89A-4F0B-9571-557ED93CED5D.JPG",
        "covers": [
          "photos/Dressing Up and Going Out/AA0F263E-F89A-4F0B-9571-557ED93CED5D.JPG",
          "photos/Dressing Up and Going Out/IMG_0953.jpg",
          "photos/Dressing Up and Going Out/IMG_5292.jpg",
          "photos/Dressing Up and Going Out/IMG_4396.jpg"
        ],
        "photos": [
          {
            "src": "photos/Dressing Up and Going Out/AA0F263E-F89A-4F0B-9571-557ED93CED5D.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_0240.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_0953.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_1052.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_1254.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_1256.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_1315.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_3587.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_3814.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_3900.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4235.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4362.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4396.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4436.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4508.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4516.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4520.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_4522.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_5076.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_5292.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_5458.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_6989.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_7157.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_7233.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_7325.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_7569.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_7744.jpg",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_8339.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/IMG_8642.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/lp_image 2.JPG",
            "caption": "",
            "icon": "✨"
          },
          {
            "src": "photos/Dressing Up and Going Out/lp_image.JPG",
            "caption": "",
            "icon": "✨"
          }
        ]
      },
      {
        "id": "cooking-experts",
        "title": "Cooking Experts",
        "tag": "Cooking Show",
        "date": "In the Kitchen",
        "description": "Two amateur chefs, one kitchen, surprisingly few disasters.",
        "icon": "🍳",
        "gradient": [
          "#6f4e37",
          "#2e1f17"
        ],
        "cover": "photos/Cooking Experts/IMG_1057.jpg",
        "covers": [
          "photos/Cooking Experts/IMG_1057.jpg",
          "photos/Cooking Experts/IMG_1059.jpg"
        ],
        "photos": [
          {
            "src": "photos/Cooking Experts/IMG_0316.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_0480.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_1057.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_1059.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_1493.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_1914.jpg",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_3314.JPG",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_3642.JPG",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_3643.JPG",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_3997.JPG",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_9131.JPG",
            "caption": "",
            "icon": "🍳"
          },
          {
            "src": "photos/Cooking Experts/IMG_9179.JPG",
            "caption": "",
            "icon": "🍳"
          }
        ]
      }
    ]
  },
  {
    "title": "Holidays & Festivals",
    "items": [
      {
        "id": "holi",
        "title": "Holi",
        "tag": "Festival Special",
        "date": "Holi",
        "description": "Colors everywhere, laughs even louder — a festival to remember.",
        "icon": "🎨",
        "gradient": [
          "#ff6b6b",
          "#5b2c6f"
        ],
        "cover": "photos/Holi/IMG_8985.jpg",
        "covers": [
          "photos/Holi/IMG_8985.jpg",
          "photos/Holi/IMG_8993.jpg",
          "photos/Holi/IMG_2539.jpeg"
        ],
        "photos": [
          {
            "src": "photos/Holi/IMG_2539.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2549.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2555.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2562.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2566.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2574.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2584.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2588.JPG",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2627.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2628.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2640.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2645.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2674.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2691.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2704.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_2709.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_8039.jpeg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_8985.jpg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_8992.jpg",
            "caption": "",
            "icon": "🎨"
          },
          {
            "src": "photos/Holi/IMG_8993.jpg",
            "caption": "",
            "icon": "🎨"
          }
        ]
      },
      {
        "id": "valentines",
        "title": "Valentine's Day",
        "tag": "Holiday Special",
        "date": "Valentine's Day",
        "description": "Roses, chocolate, and way too many heart-eyed photos.",
        "icon": "💘",
        "gradient": [
          "#c0392b",
          "#4d1610"
        ],
        "cover": "photos/Valentine's/IMG_1053.jpg",
        "covers": [
          "photos/Valentine's/IMG_1053.jpg",
          "photos/Valentine's/IMG_1059.jpg"
        ],
        "photos": [
          {
            "src": "photos/Valentine's/IMG_1053.jpg",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_1059.jpg",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_4047.jpg",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7498.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7501.jpg",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7504.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7514.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7518.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7594.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7611.JPG",
            "caption": "",
            "icon": "💘"
          },
          {
            "src": "photos/Valentine's/IMG_7671.jpg",
            "caption": "",
            "icon": "💘"
          }
        ]
      }
    ]
  },
  {
    "title": "Adventures Together",
    "items": [
      {
        "id": "sports-games",
        "title": "Sports Games",
        "tag": "Live Event",
        "date": "Game Days",
        "description": "Cheering, snacks, and pretending to understand the rules together.",
        "icon": "🏈",
        "gradient": [
          "#2980b9",
          "#0e2f47"
        ],
        "cover": "photos/Sports Games/IMG_3157.JPG",
        "covers": [
          "photos/Sports Games/IMG_3157.JPG",
          "photos/Sports Games/IMG_4801.JPG"
        ],
        "photos": [
          {
            "src": "photos/Sports Games/IMG_3157.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3188.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3349.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3356.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3595.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3836.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_3868.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_4584.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_4605.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_4613.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_4801.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_4802.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_6609.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_6651.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_7050.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_7222.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_7291.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_7307.JPG",
            "caption": "",
            "icon": "🏈"
          },
          {
            "src": "photos/Sports Games/IMG_9323.JPG",
            "caption": "",
            "icon": "🏈"
          }
        ]
      },
      {
        "id": "thon-2026",
        "title": "THON 2026",
        "tag": "Charity Special",
        "date": "THON 2026",
        "description": "48 hours, zero sleep, all heart — dancing FTK together.",
        "icon": "💛",
        "gradient": [
          "#f39c12",
          "#7a4d09"
        ],
        "cover": "photos/THON 2026/IMG_0410.JPG",
        "covers": [
          "photos/THON 2026/IMG_0410.JPG",
          "photos/THON 2026/IMG_1236.jpeg",
          "photos/THON 2026/IMG_7339.jpeg"
        ],
        "photos": [
          {
            "src": "photos/THON 2026/20260220_161607.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_0188.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_0410.JPG",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1087.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1094.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1103.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1118.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1129.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1133.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1177.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1208.mov",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1236.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1246.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1248.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_1264.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_4880.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_5673.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7199.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7207.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7213.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7229.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7242.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7249.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7296.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7302.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7331.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7339.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7399.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_7403.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/IMG_9567.jpeg",
            "caption": "",
            "icon": "💛"
          },
          {
            "src": "photos/THON 2026/v12044gd0000d6d0hf7og65nfcp8sm6g.mov",
            "caption": "",
            "icon": "💛"
          }
        ]
      },
      {
        "id": "formals",
        "title": "Formals",
        "tag": "Red Carpet Special",
        "date": "Formals",
        "description": "Dressed up, cameras ready — our own little award show.",
        "icon": "🤵",
        "gradient": [
          "#2c3e50",
          "#0f1a24"
        ],
        "cover": "photos/Formals/034D07D5-C2D7-40AD-8D32-10A0B472C955.JPG",
        "covers": [
          "photos/Formals/034D07D5-C2D7-40AD-8D32-10A0B472C955.JPG",
          "photos/Formals/IMG_4628.jpg",
          "photos/Formals/IMG_8975.jpg",
          "photos/Formals/IMG_8972.jpg"
        ],
        "photos": [
          {
            "src": "photos/Formals/034D07D5-C2D7-40AD-8D32-10A0B472C955.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/100_0472.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/100_0497.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/346E678D-1827-427F-8709-17E376406B71 3.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/46D42B56-7721-4F81-9BCE-CBB4E3759962.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/4B61E174-7CD7-418B-84FA-9CCB9B8F017E.jpeg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/636B206D-1318-4C54-954B-389C0EF3924F.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/9FB6B7A6-D247-4EEC-ABF0-1A2E2A2CC774.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/F0BCFA2C-6012-4509-8EA7-DD8B817C5501.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_0691.jpeg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_4628.jpg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_4648.jpg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_7074.jpeg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_7452.JPG",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_8972.jpg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_8975.jpg",
            "caption": "",
            "icon": "🤵"
          },
          {
            "src": "photos/Formals/IMG_8983 2.jpg",
            "caption": "",
            "icon": "🤵"
          }
        ]
      },
      {
        "id": "sasa",
        "title": "SASA",
        "tag": "Special Feature",
        "date": "SASA",
        "description": "Good people, good times, captured together.",
        "icon": "🌟",
        "gradient": [
          "#27ae60",
          "#123c22"
        ],
        "cover": "photos/SASA/9985F70D-D793-4273-A588-3F42E8879316.JPG",
        "covers": [
          "photos/SASA/9985F70D-D793-4273-A588-3F42E8879316.JPG",
          "photos/SASA/IMG_0417.JPG"
        ],
        "photos": [
          {
            "src": "photos/SASA/9985F70D-D793-4273-A588-3F42E8879316.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_0417.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_0434.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_0442.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_4222.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_4231.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_5458.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_5626.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_6964.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_7260.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_7268.JPG",
            "caption": "",
            "icon": "🌟"
          },
          {
            "src": "photos/SASA/IMG_7273.JPG",
            "caption": "",
            "icon": "🌟"
          }
        ]
      }
    ]
  },
  {
    "title": "Just Us",
    "items": [
      {
        "id": "cuddles-and-kisses",
        "title": "Cuddles and Kisses",
        "tag": "Daily Dose of Cute",
        "date": "Anytime",
        "description": "No plans needed — just us, close together.",
        "icon": "🥰",
        "gradient": [
          "#fd79a8",
          "#5a2436"
        ],
        "cover": "photos/Cuddles and Kisses/IMG_8794.JPG",
        "covers": [
          "photos/Cuddles and Kisses/IMG_8794.JPG",
          "photos/Cuddles and Kisses/IMG_4296.JPG",
          "photos/Cuddles and Kisses/2024-10-23_011542.JPG"
        ],
        "photos": [
          {
            "src": "photos/Cuddles and Kisses/2024-10-23_011542.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_3026.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_3310.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_3383.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_3619.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_3941.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_4296.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_4379.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_4392.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_6746.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_7353.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_7370.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_7621.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_7645.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_8794.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_8964.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9024.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9196.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9385.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9761.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9779.JPG",
            "caption": "",
            "icon": "🥰"
          },
          {
            "src": "photos/Cuddles and Kisses/IMG_9807.JPG",
            "caption": "",
            "icon": "🥰"
          }
        ]
      },
      {
        "id": "silly-pics",
        "title": "Silly Pics",
        "tag": "Bloopers Reel",
        "date": "All the Time",
        "description": "The faces we make when the camera catches us off guard.",
        "icon": "🤪",
        "gradient": [
          "#fdcb6e",
          "#6e4f0f"
        ],
        "cover": "photos/Silly Pics/IMG_0549.JPG",
        "covers": [
          "photos/Silly Pics/IMG_0549.JPG",
          "photos/Silly Pics/IMG_8339.JPG"
        ],
        "photos": [
          {
            "src": "photos/Silly Pics/IMG_0549.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_2373.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3218.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3348.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3391.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3572.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3645.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3742.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_3851.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_4334.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_4392.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_4453.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_4628.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_7960.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_7971.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_8339.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_8584.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_9019.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/IMG_9152.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/lp_image 2.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/lp_image 3.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/lp_image 4.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/lp_image 5.JPG",
            "caption": "",
            "icon": "🤪"
          },
          {
            "src": "photos/Silly Pics/lp_image.JPG",
            "caption": "",
            "icon": "🤪"
          }
        ]
      },
      {
        "id": "facetimes",
        "title": "FaceTimes",
        "tag": "Long Distance Special",
        "date": "Whenever, Wherever",
        "description": "Miles apart, still always on screen together.",
        "icon": "📱",
        "gradient": [
          "#00b894",
          "#0a4338"
        ],
        "cover": "photos/FaceTimes/IMG_1072.jpg",
        "covers": [
          "photos/FaceTimes/IMG_1072.jpg",
          "photos/FaceTimes/lp_image 9.jpg",
          "photos/FaceTimes/lp_image 14.jpg",
          "photos/FaceTimes/lp_image 15.jpg"
        ],
        "photos": [
          {
            "src": "photos/FaceTimes/IMG_1072.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 10.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 11.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 12.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 13.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 14.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 15.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 2.JPG",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 3.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 4.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 5.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 6.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 7.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 8.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image 9.jpg",
            "caption": "",
            "icon": "📱"
          },
          {
            "src": "photos/FaceTimes/lp_image.JPG",
            "caption": "",
            "icon": "📱"
          }
        ]
      }
    ]
  }
];

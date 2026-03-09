  var products = [
    {
      name: "Cardboard Puzzle",
      category: "game",
      description: "9.5x7.5 inches, 30 pieces. Customize it with memories, kids art or whatever your heart desires.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SFS-SPUZ30puzzle_1.png"],
      basePrice: 10.00
    },

    {
      name: "Coffee Cup - 10oz",
      category: "mug",
      description: "Double-wall vacuum insulated cup with tinted sliding lid",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Coffee%20Mug%20Tumbler.png",],
      basePrice: 12.00
    },

    {
      name: "Candle Jar",
      category: "home",
      description: "10oz glass candle jar. Diameter 10 inches and height 3.7 inches. Perfect for gifting and fully customizable",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Candle%20Jar.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10CANDLECLEAR1.png"],
      basePrice: 8.00,
      variations: [
        {label: "White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Candle%20Jar.png"},
        {label: "Clear", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10CANDLECLEAR1.png"}
      ]
    },

    {
      name: "Kids Water Bottle - 12oz",
      category: "bottle",
      description: "Leak proof flip top lid and built in internal straw. Avaiable in multiple colors.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSIPPYBLUE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy%20Cover.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy%20Bottom.png"],
      basePrice: 15.99,
      variations: [
        {label: "Pink with green", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Blue with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSIPPYBLUE1.png",},
        {label: "Red with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Black with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Pink with Gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Orange with yellow", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"}
      ]
    },

    {
      name: "Stemless Wine Glass - 12oz", 
      category: "tumbler",
      description: "Stemless tumbler shape wineglass withdouble-wall vacuum insulated and clear sliding lid. Comes with a clear straw.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSTEMLESS1_b840e95b-9ec6-4372-b0e2-1229ac95c877.png"],
      basePrice: 18.30,
    },

    {
      name: "Tote Bag",
      category: "bag", 
      description: "13.5 inches x 13.5 inches x 4 inches customizable tote bag, available in multiple colors.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632229_31.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632228_2.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632230_31.png"], 
      basePrice: 10.50,
      variations: [
        { label: "Black", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632228_2.png"},
        { label: "White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632230_31.png"},
        { label: "Natural", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632229_31.png"}
      ]
    },

    {
      name: "Ceramic Coffee Mug - 15oz", 
      category: "mug",
      description: "Ceramic coffee mug perfect for gifting and fully customizable print.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15CERAMICMUG1.png"],
      basePrice: 8.00,
    },

    {
      name: "Ceramic Heat Changing Coffee Mug - 15oz",
      category: "mug",
      description: "Perfect for gifting. Changes color with hot liquid. Customizable.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ceramic%20mug.png"],
      basePrice: 9.00,
    },

    {
      name: "Glass Coffee Mug - 15oz", 
      category: "mug",
      description: "Glitter globe glass coffee mug with woodes straw lid and clear plastic straw. ",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15SUBGLASSGLITTERGLOBEMUG21_b7891d44-d6c4-40fd-8855-aabde5a38081.png"],
      basePrice: 13.90,
    },

    {
      name: "Aluminum Spray Bottle - 16oz", 
      category: "home",
      description: "Useful spray bottle withscrew-on spray head.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/16SUBSPRAY1.png"],
      basePrice: 8.50,
    },

    {
      name: "Glass Coffee Mug", 
      category: "mug",
      description: "17oz matte glass coffee mug. Custmizable and perfect for gifting.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/17SUBGLASSCOFFEEMATTE1_5a1ee9c7-f6d0-49ba-9de5-75cd392a8b1f.png"],
      basePrice: 9.00,
    },

    {
      name: "Soap Dispenser", 
      category: "home",
      description: "18oz handsoap dispenser. Design it your way for a personalized feel.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-248.png"],
      basePrice: 15.00,
    },

    {
      name: "Blanket", 
      category: "home",
      description: "Multiple layout designs, soft minky material. Capture you precious moments for a lifetime.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBBLANKETS1_24212936-9b47-4d9a-b46b-2fb9ab646052.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN016TVKnN2Eb34CBdD9t__3230388762-0-cib_1_1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN01IuHBt12Eb34QqFdtd__3230388762-0-cib_1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/blanket20measurement.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/blanket9measure.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/moonblanksetsize.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/pawsizeblanket.png"],
      basePrice: 32.00,
      variations: [
        { label: "14 Panel Moon", extra: 6, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN016TVKnN2Eb34CBdD9t__3230388762-0-cib_1_1.png"},
        { label: "15 Panel Paw", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN01IuHBt12Eb34QqFdtd__3230388762-0-cib_1.png"},
        { label: "9 Panel", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png"},
        { label: "20 Panel", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png"}
      ]
    },
    
    {
      name: "20oz Skinny Tumbler", 
      category: "tumbler",
      description: "Skinny tumblers is a variety of color options. Duo tumblers comes with 2 lids. Customizable.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGLOW1_cee74f28-51c3-4bb9-b14a-0455a7897ec7.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBDUOSK1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBSKINNYEDGEHOLOWHITE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBMETGLITWHITE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20oz%20Skinny%20Tumbler.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png"],
      basePrice:17.99 ,
      variations: [
        { label: "Duo Skinny White w/ 2 lids", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBDUOSK1.png" },
        { label: "Glow Skinny", extra:2, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGLOW1_cee74f28-51c3-4bb9-b14a-0455a7897ec7.png"},
        { label: "Holographic Skinny", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBSKINNYEDGEHOLOWHITE1.png" },
        { label: "Metallic Glitter Skinny", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBMETGLITWHITE1.png" },
        { label: "Skinny White", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20oz%20Skinny%20Tumbler.png" },
        { label: "Skinny Loving Lime", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Sweet Sunshine", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Playful Petals", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Cupid’s Crush", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Duo Skinny Ombre Sugarplum", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Mulled Wine", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Cranberry Spice", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Silent Night", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Wintersky", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Icy Wonderland", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Peppermint Cream", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png"}
      ]
    },

    {
      name: "Gradient Glass Tumbler", 
      category: "tumbler",
      description: "20oz gradient glass skinny tumbler available in multiple colors. Comes  with2 lids.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"],
      basePrice:19.99 ,
      variations: [
        { label: "Red", extra: 19.99, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"},
        { label: "Blue", extra: 19.99, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"},
        { label: "Pink", extra: 19.99, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png" }
      ]
    },

    {
      name: "Grippy Tumbler", 
      category: "tumbler",
      description: "Comes ith clear twist on lid, removable handle and metal straw available in multiple colors, styles and sizes. ",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGRIPPY1_2ef6555c-2a8c-45d5-a489-9fb67b5ee899.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPY3_f4dfa40e-98c8-4b57-ab3d-1ed5656bf07a.png"],
      basePrice: 16.99,
      variations: [
        { label: "12oz White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png"},
        { label: "20oz White", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png"},
        { label: "30oz  White", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGRIPPY1_2ef6555c-2a8c-45d5-a489-9fb67b5ee899.png"},
        { label: "30oz Holographic White", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient - Pink", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient – Purple", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient - Green", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"}
      ]
    },

    {
      name: "Snow Globe Tumbler", 
      category: "tumbler",
      description: "This 20oz tumbler is perfect for seasonal designs and comes with a sliding lid and steel straw. Available with or without handle.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SKINNYSNOWGLOBE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SNOWGLOBEWHANDLE1.png"],
      basePrice: 16.99,
      variations: [
        { label: "20oz Snow Globe", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SKINNYSNOWGLOBE1.png"},
        { label: "20oz Snow Globe with Handle", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SNOWGLOBEWHANDLE1.png"}
      ]
    },

    {
      name: "Tri Sip Tumbler", 
      category: "tumbler",
      description: "Offers three different drinking styles and comes witha clear screw-on tri-sip lid with black handle and accents. Built in flip straw and straw insert option. Comes in 2 sizes.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-081.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-061.png"],
      basePrice:26.99,
      variations: [
        { label: "20oz Tri-Sip", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-081.png"},
        { label: "30oz Tri-Sip", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-061.png"}
      ]
    },

    {
      name: "Speaker Tumbler", 
      category: "tumbler",
      description: "Tumblers with detachable bluetooth speaker. Available in multiple sizes.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSPEAKER1_157f9541-edfb-4e51-9de1-1a1e674aace8.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holographic%20speaker.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERSPEAKERWHITE1_large.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-102.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-077_56958e84-c60d-475c-b35b-b50e72abf137.png"],
      basePrice: 37.99,
      variations: [
        { label: "20oz Skinny Speaker Tumbler", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSPEAKER1_157f9541-edfb-4e51-9de1-1a1e674aace8.png"},
        { label: "30oz Grippy Speaker Tumbler", extra: 1, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png"},
        { label: "30oz Holographic Unicorn Grippy Tumbler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holographic%20speaker.png"},
        { label: "30oz Traveler Speaker Tumbler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png"},
        { label: "40oz Traveler Speaker Tumbler", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERSPEAKERWHITE1_large.png"}
      ]
    },

    {
      name: "Fatty Tumbler", 
      category: "tumbler",
      description: "Double wall vacuum insulated with tinted lid and clear straw. Diameter is 3.45 inches",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/22SUBFATTY1_3ea845bb-434b-4b8c-a997-79b35bdbb49b.png"],
      basePrice:17.99,
    },

    {
      name: "Hydro Handle Bottle", 
      category: "bottle",
      description: "Available in a variety of sizes. Personalize it your way.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Duo%20Hydro%20group.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/25SUBHYHA1_9dc7a375-5863-418a-b865-0e1b4f49ffc8.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHYHA1_d76affb2-b7ee-4d97-8e44-4d9c23ff96a9.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32SUBHYDROMETALGLITWHITE.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATE1_large.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATEHOLO.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/18oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/5oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40oz%20hydro.png"],
      basePrice: 17.99,
      variations: [
        { label: "25oz Hydro", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/25SUBHYHA1_9dc7a375-5863-418a-b865-0e1b4f49ffc8.png"},
        { label: "40oz Hydro", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHYHA1_d76affb2-b7ee-4d97-8e44-4d9c23ff96a9.png"},
        { label: "32oz Metallic Glitter Hydro", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32SUBHYDROMETALGLITWHITE.png"},
        { label: "32oz Hydro Hound", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png"},
        { label: "30oz Clipmate Hydro", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATE1_large.png"},
        { label: "30oz Holographic Clipmate Hydro", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATEHOLO.png"},
        { label: "18oz Duo Hydro - 2 Lids", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/18oz%20hydro.png"},
        { label: "25oz Duo Hydro - 2 Lids", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/5oz%20hydro.png"},
        { label: "32oz Duo Hydro - 2 Lids", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32oz%20hydro.png"},
        { label: "40oz Duo Hydro - 2 Lids", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40oz%20hydro.png"}
      ]
    },

    {
      name: "Big Swig Tumbler", 
      category: "tumbler",
      description: "Vacuum insulated, detachable handle, screw on lid, stainless steel straw.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBBIGSWIG1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHOLOBIGSWIG1.png"],
      basePrice: 26.99,
      variations: [
        { label: "40oz Big Swig", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBBIGSWIG1.png"},
        { label: "40oz Holographic Big Swig", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHOLOBIGSWIG1.png"}
      ]
    },

    {
      name: "40oz Big Swig Ombre Game Day Collection Tumbler ", 
      category: "tumbler",
      description: "Double Wall Vacuum, detachable handle with silicone accents. Free matching mini 4oz mini traveler key chain tumbler.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/black.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/blue.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/green.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/orange.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/purple.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/red.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/sand.png"],
      basePrice: 29.99,
      variations: [
        { label: "Black", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/black.png"},
        { label: "Blue", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/blue.png"},
        { label: "Green", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/green.png"},
        { label: "Orange", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/orange.png"},
        { label: "Purple", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/purple.png"},
        { label: "Red", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/red.png"},
        { label: "Sand", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/sand.png"}
      ]
    },

    {
      name: "Traveler Tumbler", 
      category: "tumbler",
      description: "Get ready for that road trip with a personalized tumbler. Multiple options available.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERWHITE.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/trio%20traveler.png"],
      basePrice:29.99 ,
      variations: [
        { label: "40oz Traveler", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERWHITE.png"},
        { label: "Green 40oz Holographic Traveler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "Pink 40oz Holographic Traveler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "White 40oz Holographic Traveler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "30oz Trio Traveler - 3 removable handles and interchangable stoppers", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/trio%20traveler.png"}
      ]
    },

    {
      name: "Slate Photo Frame", 
      category: "home",
      description: "7.8 inches x 11.8 inches photo frame with display stand included.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/c79100bd9a1c81231de8bfb99f98f395_L.png"],
      basePrice: 24.99,
    },

    {
      name: "Tabletop Wood Photo Panel", 
      category: "home",
      description: "Preserve precious moments or personalized gifts. Availale in two sizes.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"],
      basePrice: 18.99,
      variations: [
        { label: "4x6 inches", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"},
        { label: "5x7 inches", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"}
      ]
    },

    {
      name: "Wood Photo Panel", 
      category: "home",
      description: "8 inches x 10 inches. Perfect for showcasing your precious moments or personalized gifting.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15298E15618E3.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/weathered.png"],
      basePrice: 16.99,
      variations: [
        { label: "Walnut", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15298E15618E3.png"},
        { label: "Weathered", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/weathered.png"}
      ]
    },

    {
      name: "Flask", 
      category: "bottle",
      description: "7oz flask, perfect for gifting. Personalize it with custom designs.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Flask.png"],
      basePrice: 17.99,
    },

    {
      name: "Baby Onesie", 
      category: "apparel",
      description: "Personalized baby body suit to capture those precious moments. Perfect for gifting.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"],
      basePrice: 10.99,
      variations: [
        { label: "6-9 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "9-12 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "12-18 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "18-24 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"}
      ]
    },

    {
      name: "Storage Container", 
      category: "home",
      description: "Glazed ceramic sassy storage container with removable lid. Ideal for storing treats or small items. 3.5 inches tall without lid and 3.5 inchs diameter at bottom.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-440.png"],
      basePrice:17.99
    },

    {
      name: "Baby Bibb with Spill Pocket", 
      category: "apparel",
      description: "10.24 x 9.06 inches made from linen and neoprene providing durability and comfort for your little one.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/babybib.png"],
      basePrice: 8.99,
    },

    {
      name: "Custom Print White T-Shirt",
      category: "apparel",
      description: "Polyester white T-shirt ready for your custom design.Perfect for events and special occasions.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"],
      basePrice: 15.99,
      variations: [
        { label: "Small", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
        { label: "Medium", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
        { label: "Large", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
        { label: "XL", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
        { label: "XXL", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"}
      ]
    },

    {
      name: "Adult White Polyester Graphic T-Shirt",
      category: "apparel",
      description: "Premium polyester shirt with multiple design styles.",
      basePrice: 15.99,

      images:["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"],

      sizes:[
      {label:"S", extra:0},
      {label:"M", extra:0},
      {label:"L", extra:0},
      {label:"XL", extra:0},
      {label:"2XL", extra:0},
      {label:"3XL", extra:0}
      ],

      styles:[
      {label:"Logo Front", extra:0, image:"https://yoursite.com/images/shirt-vinyl.png"},
      {label:"Large Front", extra:3, image:"https://yoursite.com/images/shirt-dtf.png"},
      {label:"Large Back", extra:3, image:"https://yoursite.com/images/shirt-dtf.png"},
      {label:"Logo Front & Large Back", extra:43, image:"https://yoursite.com/images/shirt-sublimation.png"}
      ]
    }

  ];
 

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Timeline", path: "/timeline" },
    { name: "Gallery", path: "/gallery" },
];

const models = [
    { 
        name: "iPhone", releaseYear: "2007", tagline: "Apple reinvents the phone.",
        image: "/images/colours/iPhone/iPhone.jpg",
        colours: [
            { name: "Silver", src: "/images/colours/iPhone/iPhone.jpg" },
        ],
    },
    { 
        name: "iPhone 3G", releaseYear: "2008", tagline: "The first phone to beat the iPhone",
        image: "/images/full/iPhone-3G.jpg",
        colours: [
            { name: "Black", src: "/images/colours/iPhone-3G/3G-Black.jpg" },
        ],
    },
    { 
        name: "iPhone 3GS", releaseYear: "2009", tagline: "The fastest, smartest phone yet",
        image: "/images/full/iPhone-3GS.jpg",
        colours: [
            { name: "White", src: "/images/colours/iPhone-3G/3GS-White.jpg" },
            { name: "Black", src: "/images/colours/iPhone-3G/3GS-Black.jpg" },
        ]
    },
    { 
        name: "iPhone 4", releaseYear: "2010", tagline: "This changes everything. Again.",
        image: "/images/full/iPhone-4.jpg",
        colours: [
            { name: "Black", src: "/images/colours/iPhone-4/4-Black.png" },
            { name: "White", src: "/images/colours/iPhone-4/4-White.jpg" },
        ],
    },
    { 
        name: "iPhone 4s", releaseYear: "2011", tagline: "The most amazing iPhone yet",
        image: "/images/full/iPhone-4s.jpg",
        colours: [
            { name: "White", src: "/images/colours/iPhone-4/4S-White.png" },
            { name: "Black", src: "/images/colours/iPhone-4/4S-Black.png" },
        ],
    },
    { 
        name: "iPhone 5", releaseYear: "2012", tagline: "The biggest thing to happen to iPhone since iPhone",
        image: "/images/full/iPhone-5.jpg",
        colours: [
            { name: "White & Silver", src: "/images/colours/iPhone-5/35-White.png" },
            { name: "Black & Slate", src: "/images/colours/iPhone-5/5-Black.jpg" },
        ],
    },
    { 
        name: "iPhone 5s", releaseYear: "2013", tagline: "Forward thinking",
        image: "/images/full/iPhone-5s.jpg",
        colours: [
            { name: "Gold", src: "/images/colours/iPhone-5/5s-Gold.jpg" },
            { name: "Silver", src: "/images/colours/iPhone-5/5s-Silver.png" },
            { name: "Space Grey", src: "/images/colours/iPhone-5/5s-Grey.jpg" },
        ],
    },
    { 
        name: "iPhone 5c", releaseYear: "2013", tagline: "For the colourful",
        image: "/images/full/iPhone-5c.jpg",
        colours: [
            { name: "Pink", src: "/images/colours/iPhone-5/5c-Pink.jpg" },
            { name: "Blue", src: "/images/colours/iPhone-5/5c-Blue.png" },
            { name: "Yellow", src: "/images/colours/iPhone-5/5c-Yellow.jpg" },
            { name: "Green", src: "/images/colours/iPhone-5/5c-Green.jpg" },
            { name: "White", src: "/images/colours/iPhone-5/5c-White.jpg" },
        ],
    },
    { 
        name: "iPhone 6", releaseYear: "2014", tagline: "Bigger than bigger",
        image: "/images/full/iPhone-6.jpg",
        colours: [
            { name: "Gold", src: "/images/colours/iPhone-6/6Plus-Gold.jpeg" },
            { name: "Silver", src: "/images/colours/iPhone-6/6Plus-Silver.jpg" },
            { name: "Space Grey", src: "/images/colours/iPhone-6/6Plus-Grey.jpg" },
        ],
    },
    { 
        name: "iPhone 6s", releaseYear: "2015", tagline: "The only thing that's changed is everything.",
        image: "/images/full/iPhone-6s.jpg",
        colours: [
            { name: "Rose Gold", src: "/images/colours/iPhone-6/6sPlus-RoseGold.png" },
            { name: "Gold", src: "/images/colours/iPhone-6/6sPlus-Gold.png" },
            { name: "Silver", src: "/images/colours/iPhone-6/6sPlus-Silver.jpg" },
            { name: "Space Grey", src: "/images/colours/iPhone-6/6sPlus-Grey.png" },
        ],
    },
    { 
        name: "iPhone SE", releaseYear: "2016", tagline: "A big step for small.",
        image: "/images/full/iPhone-SE.jpg",
        colours: [
            { name: "Rose Gold", src: "/images/colours/iPhone-SE/SE-RoseGold.jpg" },
            { name: "Gold", src: "/images/colours/iPhone-SE/SE-Gold.jpg" },
            { name: "Silver", src: "/images/colours/iPhone-SE/SE-Silver.jpg" },
            { name: "Space Grey", src: "/images/colours/iPhone-SE/SE-Grey.jpg" },
        ],
    },
    { 
        name: "iPhone 7", releaseYear: "2016", tagline: "This is 7.",
        image: "/images/full/iPhone-7.jpg",
        colours: [
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-7/7Plus-Red.png" },
            { name: "Jet Black", src: "/images/colours/iPhone-7/7Plus-JetBlack.png" },
            { name: "Black", src: "/images/colours/iPhone-7/7Plus-Black.png" },
            { name: "Rose Gold", src: "/images/colours/iPhone-7/7Plus-RoseGold.png" },
            { name: "Gold", src: "/images/colours/iPhone-7/7Plus-Gold.jpg" },
            { name: "Silver", src: "/images/colours/iPhone-7/7Plus-Silver.jpg" },
        ],
    },
    { 
        name: "iPhone 8", releaseYear: "2017", tagline: "A new generation of iPhone.",
        image: "/images/full/iPhone-8.png",
        colours: [
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-8/8Plus-Red.png" },
            { name: "Gold", src: "/images/colours/iPhone-8/8Plus-Gold.png" },
            { name: "Silver", src: "/images/colours/iPhone-8/8Plus-Silver.png" },
            { name: "Space Grey", src: "/images/colours/iPhone-8/8Plus-Grey.png" },
        ],
    },
    { 
        name: "iPhone X", releaseYear: "2017", tagline: "Say hello to the future.",
        image: "/images/full/iPhone-X.jpg",
        colours: [
            { name: "Silver", src: "/images/colours/iPhone-X/X-Silver.jpg" },
            { name: "Space Grey", src: "/images/colours/iPhone-X/X-Grey.jpg" },
        ],
    },
    { 
        name: "iPhone XS", releaseYear: "2018", tagline: "Welcome to the big screens",
        image: "/images/full/iPhone-XS.jpg",
        colours: [
            { name: "Gold", src: "/images/colours/iPhone-X/XSMax-Gold.png" },
            { name: "Silver", src: "/images/colours/iPhone-X/XSMax-Silver.jpg" },
            { name: "Space Grey", src: "/images/colours/iPhone-X/XSMax-Grey.jpg" },
        ],
    },
    { 
        name: "iPhone XR", releaseYear: "2018", tagline: "Brilliant. In every way.",
        image: "/images/full/iPhone-XR.jpg",
        colours: [
            { name: "Blue", src: "/images/colours/iPhone-X/XR-Blue.webp" },
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-X/XR-Red.webp" },
            { name: "Yellow", src: "/images/colours/iPhone-X/XR-Yellow.webp" },
            { name: "Coral", src: "/images/colours/iPhone-X/XR-Coral.webp" },
            { name: "Black", src: "/images/colours/iPhone-X/XR-Black.webp" },
            { name: "White", src: "/images/colours/iPhone-X/XR-White.webp" },
        ],
    },
    { 
        name: "iPhone 11", releaseYear: "2019", tagline: "Just the right amount of everything.",
        image: "/images/full/iPhone-11.jpg",
        colours: [
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-11/11-Red.webp" },
            { name: "Purple", src: "/images/colours/iPhone-11/11-Purple.webp" },
            { name: "Yellow", src: "/images/colours/iPhone-11/11-Yellow.webp" },
            { name: "Green", src: "/images/colours/iPhone-11/11-Coral.webp" },
            { name: "Black", src: "/images/colours/iPhone-11/11-Black.webp" },
            { name: "White", src: "/images/colours/iPhone-11/11-White.webp" },
        ],
    },
    { 
        name: "iPhone 11 Pro", releaseYear: "2019", tagline: "And then there was Pro.",
        image: "/images/full/iPhone-11Pro.jpg",
        colours: [
            { name: "Midnight Green", src: "/images/colours/iPhone-11/11ProMax-Green.webp" },
            { name: "Gold", src: "/images/colours/iPhone-11/11ProMax-Gold.webp" },
            { name: "Silver", src: "/images/colours/iPhone-11/11ProMax-Silver.webp" },
            { name: "Space Grey", src: "/images/colours/iPhone-11/11ProMax-Grey.webp" },
        ], 
    },
    { 
        name: "iPhone SE", releaseYear: "2020", tagline: "Lots to live. Less to spend.",
        image: "/images/full/iPhone-SE2.jpg",
        colours: [
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-SE/SE2-Red.jpg" },
            { name: "White", src: "/images/colours/iPhone-SE/SE2-White.jpg" },
            { name: "Black", src: "/images/colours/iPhone-SE/SE2-Black.jpg" },
        ],
    },
    { 
        name: "iPhone 12", releaseYear: "2020", tagline: "Blast past fast.",
        image: "/images/full/iPhone-12.png",
        colours: [
            { name: "Blue", src: "/images/colours/iPhone-12/12-Blue.webp" },
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-12/12-Red.webp" },
            { name: "Purple", src: "/images/colours/iPhone-12/12-Purple.webp" },
            { name: "Green", src: "/images/colours/iPhone-12/12-Green.webp" },
            { name: "Black", src: "/images/colours/iPhone-12/12-Black.webp" },
            { name: "White", src: "/images/colours/iPhone-12/12-White.webp" },
        ],
    },
    { 
        name: "iPhone 12 Pro", releaseYear: "2020", tagline: "It's a leap year.",
        image: "/images/full/iPhone-12Pro.jpg",
        colours: [
            { name: "Pacific Blue", src: "/images/colours/iPhone-12/12ProMax-Blue.webp" },
            { name: "Graphite", src: "/images/colours/iPhone-12/12ProMax-Graphite.webp" },
            { name: "Gold", src: "/images/colours/iPhone-12/12ProMax-Gold.webp" },
            { name: "Silver", src: "/images/colours/iPhone-12/12ProMax-Silver.webp" },
        ], 
    },
    { 
        name: "iPhone 13", releaseYear: "2021", tagline: "Your new superpower.",
        image: "/images/full/iPhone-13.png",
        colours: [
            { name: "Pink", src: "/images/colours/iPhone-13/13-Pink.webp" },
            { name: "Blue", src: "/images/colours/iPhone-13/13-Blue.webp" },
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-13/13-Red.webp" },
            { name: "Midnight", src: "/images/colours/iPhone-13/13-Midnight.webp" },
            { name: "Starlight", src: "/images/colours/iPhone-13/13-Starlight.webp" },
            { name: "Green", src: "/images/colours/iPhone-13/13-Green.webp" },
        ],
    },
    { 
        name: "iPhone 13 Pro", releaseYear: "2021", tagline: "Oh. So. Pro.",
        image: "/images/full/iPhone-13Pro.png",
        colours: [
            { name: "Sierra Blue", src: "/images/colours/iPhone-13/13ProMax-Blue.webp" },
            { name: "Graphite", src: "/images/colours/iPhone-13/13ProMax-Graphite.webp" },
            { name: "Gold", src: "/images/colours/iPhone-13/13ProMax-Gold.webp" },
            { name: "Silver", src: "/images/colours/iPhone-13/13ProMax-Silver.webp" },
            { name: "Green", src: "/images/colours/iPhone-13/13ProMax-Green.webp" },
        ], 
    },
    { 
        name: "iPhone SE", releaseYear: "2022", tagline: "Love the power. Love the price.",
        image: "/images/full/iPhone-SE3.png",
        colours: [
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-SE/SE3-Red.png" },
            { name: "Starlight", src: "/images/colours/iPhone-SE/SE3-Starlight.jpg" },
            { name: "Midnight", src: "/images/colours/iPhone-SE/SE3-Midnight.jpg" },
        ],
    },
    { 
        name: "iPhone 14", releaseYear: "2022", tagline: "Big and bigger.",
        image: "/images/full/iPhone-14.png",
        colours: [
            { name: "Yellow", src: "/images/colours/iPhone-14/14-Yellow.webp" },
            { name: "Purple", src: "/images/colours/iPhone-14/14-Purple.webp" },
            { name: "Blue", src: "/images/colours/iPhone-14/14-Blue.webp" },
            { name: "PRODUCT (RED)", src: "/images/colours/iPhone-14/14-Red.webp" },
            { name: "Midnight", src: "/images/colours/iPhone-14/14-Midnight.webp" },
            { name: "Starlight", src: "/images/colours/iPhone-14/14-Starlight.webp" },
        ],
    },
    { 
        name: "iPhone 14 Pro", releaseYear: "2022", tagline: "Pro. Beyond.",
        image: "/images/full/iPhone-14Pro.png",
        colours: [
            { name: "Deep Purple", src: "/images/colours/iPhone-14/14ProMax-Purple.webp" },
            { name: "Space Black", src: "/images/colours/iPhone-14/14ProMax-Black.webp" },
            { name: "Gold", src: "/images/colours/iPhone-14/14ProMax-Gold.webp" },
            { name: "Silver", src: "/images/colours/iPhone-14/14ProMax-Silver.webp" },
        ], 
    },
    { 
        name: "iPhone 15", releaseYear: "2023", tagline: "New camera. New design. Newphoria.",
        image: "/images/full/iPhone-15.png",
        colours: [
            { name: "Pink", src: "/images/colours/iPhone-15/15-Purple.png" },
            { name: "Blue", src: "/images/colours/iPhone-15/15-Blue.png" },
            { name: "Black", src: "/images/colours/iPhone-15/15-Black.png" },
            { name: "Green", src: "/images/colours/iPhone-15/15-Green.png" },
            { name: "Yellow", src: "/images/colours/iPhone-15/15-Yellow.png" },
        ],
    },
    { 
        name: "iPhone 15 Pro", releaseYear: "2023", tagline: "Titanium. So strong. So light. So Pro.",
        image: "/images/full/iPhone-15Pro.png",
        colours: [
            { name: "Natural Titanium", src: "/images/colours/iPhone-15/15Pro-Natural.png" },
            { name: "Blue Titanium", src: "/images/colours/iPhone-15/15Pro-Blue.png" },
            { name: "Black Titanium", src: "/images/colours/iPhone-15/15Pro-Black.png" },
            { name: "White Titanium", src: "/images/colours/iPhone-15/15Pro-White.png" },
        ], 
    },
    { 
        name: "iPhone 16", releaseYear: "2024", tagline: "Hello, Apple Intelligence.",
        image: "/images/full/iPhone-16.png",
        colours: [
            { name: "Ultramarine", src: "/images/colours/iPhone-16/16-Ultramarine.png" },
            { name: "Pink", src: "/images/colours/iPhone-16/16-Pink.png" },
            { name: "Teal", src: "/images/colours/iPhone-16/16-Teal.png" },
            { name: "White", src: "/images/colours/iPhone-16/16-White.png" },
            { name: "Black", src: "/images/colours/iPhone-16/16-Black.png" },
        ],
    },
    { 
        name: "iPhone 16 Pro", releaseYear: "2024", tagline: "Hello, Apple Intelligence.",
        image: "/images/full/iPhone-16Pro.png",
        colours: [
            { name: "Desert Titanium", src: "/images/colours/iPhone-16/16Pro-Desert.png" },
            { name: "Natural Titanium", src: "/images/colours/iPhone-16/16Pro-Natural.png" },
            { name: "Black Titanium", src: "/images/colours/iPhone-16/16Pro-Black.png" },
            { name: "White Titanium", src: "/images/colours/iPhone-16/16Pro-White.png" },
        ], 
    },
    { 
        name: "iPhone 16e", releaseYear: "2025", tagline: "Everything you love. Including the price.",
        image: "/images/full/iPhone-16e.png",
        colours: [
            { name: "White", src: "/images/colours/iPhone-16/16e-White.png" },
            { name: "Black", src: "/images/colours/iPhone-16/16e-Black.png" },
        ],
    },
    { 
        name: "iPhone 17", releaseYear: "2025", tagline: "Magichromatic.",
        image: "/images/full/iPhone-17.png",
        colours: [
            { name: "Sage", src: "/images/colours/iPhone-17/17-Sage.png" },
            { name: "Mist Blue", src: "/images/colours/iPhone-17/17-MistBlue.png" },
            { name: "Lavender", src: "/images/colours/iPhone-17/17-Laevnder.png" },
            { name: "White", src: "/images/colours/iPhone-17/17-White.png" },
            { name: "Black", src: "/images/colours/iPhone-17/17-Black.png" },
        ],
    },
    { 
        name: "iPhone Air", releaseYear: "2025", tagline: "The thinnest iPhone ever. With the power of Pro inside.",
        image: "/images/full/iPhone-Air.png",
        colours: [
            { name: "Sky Blue", src: "/images/colours/iPhone-17/Air-SkyBlue.png" },
            { name: "Light Gold", src: "/images/colours/iPhone-17/Air-LightGold.png" },
            { name: "Space Black", src: "/images/colours/iPhone-17/Air-SpaceBlack.png" },
            { name: "Cloud White", src: "/images/colours/iPhone-17/Air-CloudWhite.png" },
        ], 
    },
    { 
        name: "iPhone 17 Pro", releaseYear: "2025", tagline: "The Ultimate Pro.",
        image: "/images/full/iPhone-17Pro.png",
        colours: [
            { name: "Cosmic Orange", src: "/images/colours/iPhone-17/17ProMax-CosmicOrange.png" },
            { name: "Deep Blue", src: "/images/colours/iPhone-17/17ProMax-DeepBlue.png" },
            { name: "Silver", src: "/images/colours/iPhone-17/17ProMax-Silver.png" },
        ], 
    },
    { 
        name: "iPhone 17e", releaseYear: "2026", tagline: "Feature stacked. Value packed.",
        image: "/images/full/iPhone-17e.png",
        colours: [
            { name: "Solft Pink", src: "/images/colours/iPhone-17/17e-SoftPink.jpeg" },
            { name: "White", src: "/images/colours/iPhone-17/17e-White.webp" },
            { name: "Black", src: "/images/colours/iPhone-17/17e-Black.jpg" },
        ],
    },
    { 
        name: "iPhone 18 Pro", releaseYear: "2026", tagline: "Pro further.",
        image: "/images/full/iPhone-18Pro.png",
        colours: [
            { name: "Burgundy", src: "/images/colours/iPhone-18/18Pro-Burgundy.png" },
            { name: "Glacier", src: "/images/colours/iPhone-18/18Pro-Glacier.png" },
            { name: "Black", src: "/images/colours/iPhone-18/18Pro-Black.png" },
            { name: "Silver", src: "/images/colours/iPhone-18/18Pro-Silver.png" },
        ], 
    },
    { 
        name: "iPhone Duo", releaseYear: "2026", tagline: "Hello, hello.",
        image: "/images/full/iPhone-Duo.jpg",
        colours: [
            { name: "Star White", src: "/images/colours/iPhone-Duo/Duo-White.png" },
            { name: "Night Sky", src: "/images/colours/iPhone-Duo/Duo-Blue.png" },
        ],
    },
];

const iOS = [
    { name: "iPhone OS 1", icon: "/images/icons/iOS/iOS-1.png" },
    { name: "iPhone OS 2", icon: "/images/icons/iOS/iOS-2.png" },
    { name: "iPhone OS 3", icon: "/images/icons/iOS/iOS-3.png" },
    { name: "iOS 4", icon: "/images/icons/iOS/iOS-4.png" },
    { name: "iOS 5", icon: "/images/icons/iOS/iOS-5.png" },
    { name: "iOS 6", icon: "/images/icons/iOS/iOS-6.png" },
    { name: "iOS 7", icon: "/images/icons/iOS/iOS-7.png" },
    { name: "iOS 8", icon: "/images/icons/iOS/iOS-8.png" },
    { name: "iOS 9", icon: "/images/icons/iOS/iOS-9.png" },
    { name: "iOS 10", icon: "/images/icons/iOS/iOS-10.png" },
    { name: "iOS 11", icon: "/images/icons/iOS/iOS-11.png" },
    { name: "iOS 12", icon: "/images/icons/iOS/iOS-12.png" },
    { name: "iOS 13", icon: "/images/icons/iOS/iOS-13.png" },
    { name: "iOS 14", icon: "/images/icons/iOS/iOS-14.png" },
    { name: "iOS 15", icon: "/images/icons/iOS/iOS-15.png" },
    { name: "iOS 16", icon: "/images/icons/iOS/iOS-16.png" },
    { name: "iOS 17", icon: "/images/icons/iOS/iOS-17.png" },
    { name: "iOS 18", icon: "/images/icons/iOS/iOS-18.png" },
    { name: "iOS 26", icon: "/images/icons/iOS/iOS-26.png" },
    { name: "iOS 27", icon: "/images/icons/iOS/iOS-27.png" },
];

const processors = [
    { name: "A4", icon: "/imgaes/processors/a4-chip.jpeg" },
    { name: "A5", icon: "/imgaes/processors/a5-chip.jpeg" },
    { name: "A6", icon: "/imgaes/processors/a6-chip.jpeg" },
    { name: "A7", icon: "/imgaes/processors/a7-chip.jpeg" },
    { name: "A8", icon: "/imgaes/processors/a8-chip.jpeg" },
    { name: "A9", icon: "/imgaes/processors/a9-chip.jpeg" },
    { name: "A10 Fusion", icon: "/imgaes/processors/a10-fusion-chip.jpeg" },
    { name: "A11 Bionic", icon: "/imgaes/processors/a11-bionic-chip.jpeg" },
    { name: "A12 Bionic", icon: "/imgaes/processors/a12-bionic-chip.jpeg" },
    { name: "A13 Bionic", icon: "/imgaes/processors/a13-bionic-chip.jpeg" },
    { name: "A14 Bionic", icon: "/imgaes/processors/a14-bionic-chip.jpeg" },
    { name: "A15 Bionic", icon: "/imgaes/processors/a15-bionic-chip.jpeg" },
    { name: "A16 Bionic", icon: "/imgaes/processors/a16-bionic-chip.jpeg" },
    { name: "A17 Pro", icon: "/imgaes/processors/a17-pro-chip.png" },
    { name: "A18 Pro", icon: "/imgaes/processors/a18-pro-chip.png" },
    { name: "A19 Pro", icon: "/imgaes/processors/a19-pro-chip.webp" },
    { name: "A20 Pro", icon: "/imgaes/processors/a4-chip.jpeg" },
]

export {
    navLinks, models, iOS, processors,
}
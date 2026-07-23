import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("No MONGODB_URI found in .env");
  process.exit(1);
}

const TempleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  deity: { type: String, required: true },
  heroImage: { type: String, required: true },
  overview: { type: String, required: true },
  highlights: [{ type: String }],
  facts: {
    architecture: { type: String },
    builtBy: { type: String },
    era: { type: String },
    timeTaken: { type: String },
  },
  history: { type: String, required: true },
  info: {
    timings: { type: String },
    entryFee: { type: String },
    dressCode: { type: String },
    bestTime: { type: String },
  },
  gallery: [{ type: String }],
  location: {
    address: { type: String },
    mapEmbedUrl: { type: String },
  },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

// Use existing model or create it
const Temple = mongoose.models.Temple || mongoose.model('Temple', TempleSchema);

const seedTemples = [
  {
    name: "Kedarnath Temple",
    slug: "kedarnath-temple",
    state: "Uttarakhand",
    district: "Rudraprayag",
    deity: "Lord Shiva",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg",
    overview: "Kedarnath Temple is one of the most sacred pilgrimage centres in Northern India, located on the Garhwal Himalayan range near the Mandakini river. It is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva.",
    highlights: ["Jyotirlinga", "Panch Kedar", "Char Dham Yatra", "Himalayan Architecture"],
    facts: {
      architecture: "Katyuri style, built of massive stone slabs over a rectangular platform",
      builtBy: "Adi Shankaracharya (rebuilt)",
      era: "8th Century CE",
      timeTaken: "Unknown"
    },
    history: "According to Hindu mythology, during the Mahabharata war, the Pandavas felt guilty of killing their own brothers and sought the blessings of Lord Shiva for redemption. Shiva eluded them repeatedly and while fleeing took refuge at Kedarnath in the form of a bull. When followed, he dived into the ground, leaving his hump on the surface. The remaining portions of Lord Shiva appeared at four other places and are worshipped there as his manifestations.",
    info: {
      timings: "4:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
      entryFee: "Free",
      dressCode: "Traditional Indian wear. Modest clothing strictly required.",
      bestTime: "May to June and September to October"
    },
    gallery: [
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596706935292-0b29ce11ba03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1628116515869-7bc3fb28062e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Kedarnath, Uttarakhand 246445",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13702.433434685794!2d79.0558162871582!3d30.734563800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083ee051e628b1%3A0x167ce4efaf440f1e!2sKedarnath%20Temple!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: true
  },
  {
    name: "Brihadeeswarar Temple",
    slug: "brihadeeswarar-temple",
    state: "Tamil Nadu",
    district: "Thanjavur",
    deity: "Lord Shiva",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg/1280px-Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg",
    overview: "Locally known as Thanjai Periya Kovil, this 11th-century architectural marvel stands as a testament to the Chola dynasty's immense power and artistic brilliance. It is one of the largest South Indian temples and a UNESCO World Heritage Site.",
    highlights: ["UNESCO World Heritage Site", "Great Living Chola Temples", "Dravidian Architecture", "Largest Shiva Lingam"],
    facts: {
      architecture: "Dravidian Architecture",
      builtBy: "Raja Raja Chola I",
      era: "1010 CE",
      timeTaken: "7 Years"
    },
    history: "Commissioned by Emperor Raja Raja Chola I in 1003 CE and completed in 1010 CE, this temple was built to display the emperor's vision of his power and relationship to the universal order. The temple's vimana (tower) is 216 feet high and is among the tallest of its kind in the world. The kumbam (the apex or the bulbous structure on the top) weighs around 80 tons and is carved from a single granite block. The sheer engineering required to raise this block to that height without modern machinery remains a subject of awe.",
    info: {
      timings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
      entryFee: "Free",
      dressCode: "Traditional / modest wear",
      bestTime: "October to March"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600010978917-a065363404c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613001",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.467885449557!2d79.12937551528657!3d10.782800592317134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89ce045b10b%3A0xc4ebdc8f451f2dcb!2sBrihadeeswara%20Temple!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: true
  },
  {
    name: "Meenakshi Amman Temple",
    slug: "meenakshi-amman-temple",
    state: "Tamil Nadu",
    district: "Madurai",
    deity: "Goddess Meenakshi (Parvati)",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg/1280px-An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg",
    overview: "Located in the historic city of Madurai, this historic Hindu temple is dedicated to Goddess Meenakshi and Lord Sundareswarar. Known for its towering, colorful gopurams (gateway towers) covered in intricate stucco figures, it represents the pinnacle of Dravidian temple architecture.",
    highlights: ["14 Gopurams", "Hall of Thousand Pillars", "Golden Lotus Tank", "Ancient Dravidian Architecture"],
    facts: {
      architecture: "Dravidian",
      builtBy: "King Kulasekara Pandya",
      era: "12th-18th Century",
      timeTaken: "Several centuries of expansion"
    },
    history: "The temple's origins date back to antiquity, mentioned in ancient Tamil Sangam literature. However, the current magnificent structure was primarily built between the 14th and 17th centuries. It was largely expanded by Thirumalai Nayak of the Nayak dynasty in the 17th century. The temple complex spans 14 acres and features a stunning Hall of Thousand Pillars, each intricately carved from a single piece of granite.",
    info: {
      timings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
      entryFee: "Free (Special Darshan tickets available)",
      dressCode: "Strictly traditional. No shorts or sleeveless clothing.",
      bestTime: "October to March"
    },
    gallery: [
      "https://images.unsplash.com/photo-1590494498305-6a56e1840f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1629737968393-271501725515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Madurai Main, Madurai, Tamil Nadu 625001",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1264421867165!2d78.11728361528178!3d9.91950349290616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMeenakshi%20Amman%20Temple!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: true
  },
  {
    name: "Kashi Vishwanath Temple",
    slug: "kashi-vishwanath-temple",
    state: "Uttar Pradesh",
    district: "Varanasi",
    deity: "Lord Shiva",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kashi_Vishwanath.jpg",
    overview: "Situated on the western bank of the holy river Ganga in Varanasi, the Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It stands in the oldest living city in the world and forms the spiritual heart of Hinduism.",
    highlights: ["Jyotirlinga", "Kashi Vishwanath Corridor", "Golden Spire", "Ganga Aarti proximity"],
    facts: {
      architecture: "Nagara style (reconstructed)",
      builtBy: "Ahilyabai Holkar",
      era: "1780 CE",
      timeTaken: "Continuous enhancements"
    },
    history: "The temple has been destroyed and reconstructed several times in history. The last structure was demolished by Aurangzeb, who constructed the Gyanvapi Mosque on its site. The current structure was built on an adjacent site by the Maratha ruler, Ahilyabai Holkar of Indore in 1780. Later, Maharaja Ranjit Singh donated 1000 kg of gold to plate the temple's domes, giving it the name 'Golden Temple of Varanasi'.",
    info: {
      timings: "3:00 AM - 11:00 PM",
      entryFee: "Free (Special aarti tickets available)",
      dressCode: "Traditional / Modest wear",
      bestTime: "November to February"
    },
    gallery: [
      "https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621217512140-52c786016335?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Lahori Tola, Varanasi, Uttar Pradesh 221001",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3262660205934!2d83.0076721153406!3d25.310651883845942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee2aa363%3A0xcdcb84725af10dbb!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: true
  },
  {
    name: "Sri Harmandir Sahib (Golden Temple)",
    slug: "golden-temple",
    state: "Punjab",
    district: "Amritsar",
    deity: "Guru Granth Sahib",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/1280px-The_Golden_Temple_of_Amrithsar_7.jpg",
    overview: "Sri Harmandir Sahib, commonly known as the Golden Temple, is the preeminent spiritual site of Sikhism. Built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577, it stands as a symbol of human brotherhood and equality.",
    highlights: ["Sikhism's Holiest Shrine", "Gold-plated architecture", "Langar (Free Kitchen)", "Amrit Sarovar"],
    facts: {
      architecture: "Indo-Islamic and Rajput styles",
      builtBy: "Guru Arjan Dev",
      era: "1581 CE",
      timeTaken: "Completed in 1589"
    },
    history: "In 1581, Guru Arjan Dev initiated the construction of the Gurdwara. During its founding, he invited a Sufi saint, Mian Mir, to lay its foundation stone, emphasizing the inclusive nature of the Sikh faith. The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution. In the early 19th century, Maharaja Ranjit Singh secured the Punjab region and covered the upper sanctum with gold, which gives it its distinctive appearance and its English name.",
    info: {
      timings: "Open 24 hours",
      entryFee: "Free",
      dressCode: "Head must be covered (scarves available). No shoes. Modest clothing.",
      bestTime: "October to March"
    },
    gallery: [
      "https://images.unsplash.com/photo-1622359551403-1ec94fb664cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589136159678-75b2b2b1ff1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Golden Temple Rd, Atta Mandi, Katra Ahluwalia, Amritsar, Punjab 143006",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.006323871239!2d74.87373801543884!3d31.61998028133379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sSri%20Harmandir%20Sahib!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: true
  },
  {
    name: "Somnath Temple",
    slug: "somnath-temple",
    state: "Gujarat",
    district: "Prabhas Patan",
    deity: "Lord Shiva",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/1280px-Somanath_mandir_%28cropped%29.jpg",
    overview: "The Somnath temple located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat, is believed to be the first among the twelve jyotirlinga shrines of Shiva. It is an important pilgrimage and tourist spot of Gujarat.",
    highlights: ["First Jyotirlinga", "Chalukya Architecture", "Coastal Location", "Arrow Pillar (Baan Stambh)"],
    facts: {
      architecture: "Kailash Mahameru Prasad Style (Chalukya)",
      builtBy: "Sardar Vallabhbhai Patel (Reconstruction)",
      era: "1951 CE (Current structure)",
      timeTaken: "Rebuilt multiple times"
    },
    history: "Known as 'The Shrine Eternal', Somnath has been destroyed and rebuilt several times by Islamic invaders and Hindu kings respectively. The ancient history of the temple is traced back to antiquity. Legend says it was built in gold by the moon god Soma, in silver by the sun god Ravi, in wood by Krishna, and in stone by the Solanki Rajputs. The current magnificent structure was rebuilt in 1951 under the orders of Sardar Vallabhbhai Patel.",
    info: {
      timings: "6:00 AM - 9:30 PM",
      entryFee: "Free",
      dressCode: "Traditional / Modest wear required.",
      bestTime: "September to March"
    },
    gallery: [
      "https://images.unsplash.com/photo-1678174523824-2c492edb39d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    location: {
      address: "Somnath Mandir Rd, Somnath, Gujarat 362268",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2642571285093!2d70.40092171528655!3d20.89069508608298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd3230623354c5%3A0xc3b83c50bf351c3a!2sShree%20Somnath%20Jyotirlinga%20Temple!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
    },
    featured: false
  }
];

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI as string);
    console.log("Connected!");
    
    console.log("Clearing old temples...");
    await Temple.deleteMany({});
    
    console.log("Inserting new detailed temples...");
    await Temple.insertMany(seedTemples);
    
    console.log("Successfully seeded database with beautiful temples!");
    process.exit(0);
  } catch (e) {
    console.error("Failed to seed:", e);
    process.exit(1);
  }
}

seed();

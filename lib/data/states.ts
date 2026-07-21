export interface StateData {
  id: string; // matches TopoJSON hc-key
  slug: string;
  name: string;
  templeCount: number;
  featuredTemple?: string;
  highlights?: string[];
  comingSoon?: boolean;
}

export const statesData: Record<string, StateData> = {
  // --- 28 States ---
  'in-ap': { id: 'in-ap', slug: 'andhra-pradesh', name: 'Andhra Pradesh', templeCount: 154, featuredTemple: 'Tirupati Balaji Temple', highlights: ['Dravidian Architecture', 'Rich Pilgrimage History', 'Coastal Shrines'] },
  'in-ar': { id: 'in-ar', slug: 'arunachal-pradesh', name: 'Arunachal Pradesh', templeCount: 0, comingSoon: true },
  'in-as': { id: 'in-as', slug: 'assam', name: 'Assam', templeCount: 32, featuredTemple: 'Kamakhya Temple', highlights: ['Shakti Peethas', 'Ahom Architecture', 'Tantric Traditions'] },
  'in-br': { id: 'in-br', slug: 'bihar', name: 'Bihar', templeCount: 45, featuredTemple: 'Mahabodhi Temple', highlights: ['Ancient History', 'Buddhist Sites', 'Sacred Rivers'] },
  'in-cg': { id: 'in-cg', slug: 'chhattisgarh', name: 'Chhattisgarh', templeCount: 0, comingSoon: true },
  'in-ga': { id: 'in-ga', slug: 'goa', name: 'Goa', templeCount: 20, featuredTemple: 'Mangueshi Temple', highlights: ['Konkan Heritage', 'Unique Architecture'] },
  'in-gj': { id: 'in-gj', slug: 'gujarat', name: 'Gujarat', templeCount: 182, featuredTemple: 'Somnath Temple', highlights: ['Jyotirlingas', 'Maru-Gurjara Architecture', 'Coastal Temples'] },
  'in-hr': { id: 'in-hr', slug: 'haryana', name: 'Haryana', templeCount: 0, comingSoon: true },
  'in-hp': { id: 'in-hp', slug: 'himachal-pradesh', name: 'Himachal Pradesh', templeCount: 88, featuredTemple: 'Baijnath Temple', highlights: ['Himalayan Shrines', 'Dev Bhoomi', 'Wood Architecture'] },
  'in-jh': { id: 'in-jh', slug: 'jharkhand', name: 'Jharkhand', templeCount: 25, featuredTemple: 'Baidyanath Jyotirlinga', highlights: ['Sacred Groves', 'Jyotirlingas'] },
  'in-ka': { id: 'in-ka', slug: 'karnataka', name: 'Karnataka', templeCount: 310, featuredTemple: 'Virupaksha Temple', highlights: ['Hoysala Architecture', 'Vijayanagara Ruins', 'Cave Temples'] },
  'in-kl': { id: 'in-kl', slug: 'kerala', name: 'Kerala', templeCount: 165, featuredTemple: 'Padmanabhaswamy Temple', highlights: ['Kerala Style Architecture', 'Sacred Festivals', 'Forest Shrines'] },
  'in-mp': { id: 'in-mp', slug: 'madhya-pradesh', name: 'Madhya Pradesh', templeCount: 142, featuredTemple: 'Mahakaleshwar Temple', highlights: ['Jyotirlingas', 'Khajuraho Group', 'Ancient Stupas'] },
  'in-mh': { id: 'in-mh', slug: 'maharashtra', name: 'Maharashtra', templeCount: 215, featuredTemple: 'Trimbakeshwar Temple', highlights: ['Jyotirlingas', 'Ashtavinayak', 'Cave Temples'] },
  'in-mn': { id: 'in-mn', slug: 'manipur', name: 'Manipur', templeCount: 0, comingSoon: true },
  'in-ml': { id: 'in-ml', slug: 'meghalaya', name: 'Meghalaya', templeCount: 0, comingSoon: true },
  'in-mz': { id: 'in-mz', slug: 'mizoram', name: 'Mizoram', templeCount: 0, comingSoon: true },
  'in-nl': { id: 'in-nl', slug: 'nagaland', name: 'Nagaland', templeCount: 0, comingSoon: true },
  'in-od': { id: 'in-od', slug: 'odisha', name: 'Odisha', templeCount: 178, featuredTemple: 'Jagannath Temple', highlights: ['Kalinga Architecture', 'Rath Yatra', 'Sun Temple'] },
  'in-pb': { id: 'in-pb', slug: 'punjab', name: 'Punjab', templeCount: 0, comingSoon: true },
  'in-rj': { id: 'in-rj', slug: 'rajasthan', name: 'Rajasthan', templeCount: 134, featuredTemple: 'Dilwara Temples', highlights: ['Marble Architecture', 'Desert Shrines', 'Brahma Temple'] },
  'in-sk': { id: 'in-sk', slug: 'sikkim', name: 'Sikkim', templeCount: 0, comingSoon: true },
  'in-tn': { id: 'in-tn', slug: 'tamil-nadu', name: 'Tamil Nadu', templeCount: 238, featuredTemple: 'Meenakshi Amman Temple', highlights: ['Dravidian Architecture', 'Chola Heritage', 'UNESCO Sites'] },
  'in-ts': { id: 'in-ts', slug: 'telangana', name: 'Telangana', templeCount: 120, featuredTemple: 'Ramappa Temple', highlights: ['Kakatiya Architecture', 'UNESCO Sites', 'Cave Temples'] },
  'in-tr': { id: 'in-tr', slug: 'tripura', name: 'Tripura', templeCount: 15, featuredTemple: 'Tripura Sundari Temple', highlights: ['Shakti Peethas'] },
  'in-up': { id: 'in-up', slug: 'uttar-pradesh', name: 'Uttar Pradesh', templeCount: 345, featuredTemple: 'Kashi Vishwanath Temple', highlights: ['Sacred Rivers', 'Jyotirlingas', 'Mathura Vrindavan'] },
  'in-uk': { id: 'in-uk', slug: 'uttarakhand', name: 'Uttarakhand', templeCount: 156, featuredTemple: 'Kedarnath Temple', highlights: ['Char Dham', 'Himalayan Shrines', 'Dev Bhoomi'] },
  'in-wb': { id: 'in-wb', slug: 'west-bengal', name: 'West Bengal', templeCount: 110, featuredTemple: 'Dakshineswar Kali Temple', highlights: ['Terracotta Temples', 'Shakti Peethas', 'Ganga Ghats'] },

  // --- 8 Union Territories ---
  'in-an': { id: 'in-an', slug: 'andaman-nicobar', name: 'Andaman & Nicobar', templeCount: 0, comingSoon: true },
  'in-ch': { id: 'in-ch', slug: 'chandigarh', name: 'Chandigarh', templeCount: 0, comingSoon: true },
  'in-dh': { id: 'in-dh', slug: 'dadra-nagar-haveli-daman-diu', name: 'Dadra & Nagar Haveli and Daman & Diu', templeCount: 0, comingSoon: true },
  'in-dl': { id: 'in-dl', slug: 'delhi', name: 'Delhi', templeCount: 42, featuredTemple: 'Akshardham Temple', highlights: ['Modern Marvels', 'Historical Sites'] },
  'in-jk': { id: 'in-jk', slug: 'jammu-kashmir', name: 'Jammu & Kashmir', templeCount: 65, featuredTemple: 'Vaishno Devi Temple', highlights: ['Himalayan Shrines', 'Cave Temples', 'Shiva Temples'] },
  'in-la': { id: 'in-la', slug: 'ladakh', name: 'Ladakh', templeCount: 0, comingSoon: true },
  'in-ld': { id: 'in-ld', slug: 'lakshadweep', name: 'Lakshadweep', templeCount: 0, comingSoon: true },
  'in-py': { id: 'in-py', slug: 'puducherry', name: 'Puducherry', templeCount: 12, featuredTemple: 'Manakula Vinayagar Temple', highlights: ['French Colonial Influence', 'Ganesha Temples'] },
};

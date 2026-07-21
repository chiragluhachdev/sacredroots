export type CategoryId = 
  | 'jyotirlingas' 
  | 'shakti-peethas' 
  | 'vaishnav-temples' 
  | 'shiva-temples' 
  | 'ganesha-temples' 
  | 'devi-temples' 
  | 'sun-temples' 
  | 'murugan-temples';

export interface Category {
  id: CategoryId;
  slug: string;
  title: string;
  description: string;
  icon: CategoryId; // Maps to the specific SVG icon name
  count: number;
  featuredImage?: string;
}

export const categories: Category[] = [
  {
    id: 'jyotirlingas',
    slug: 'jyotirlingas',
    title: 'Jyotirlingas',
    description: 'Explore the 12 sacred abodes of Lord Shiva.',
    icon: 'jyotirlingas',
    count: 12,
  },
  {
    id: 'shakti-peethas',
    slug: 'shakti-peethas',
    title: 'Shakti Peethas',
    description: 'Discover the divine places associated with Goddess Shakti.',
    icon: 'shakti-peethas',
    count: 51,
  },
  {
    id: 'vaishnav-temples',
    slug: 'vaishnav-temples',
    title: 'Vaishnav Temples',
    description: 'Temples dedicated to Lord Vishnu and his avatars.',
    icon: 'vaishnav-temples',
    count: 108,
  },
  {
    id: 'shiva-temples',
    slug: 'shiva-temples',
    title: 'Shiva Temples',
    description: 'Ancient temples dedicated to Lord Shiva.',
    icon: 'shiva-temples',
    count: 240,
  },
  {
    id: 'ganesha-temples',
    slug: 'ganesha-temples',
    title: 'Ganesha Temples',
    description: 'Temples dedicated to Lord Ganesha.',
    icon: 'ganesha-temples',
    count: 48,
  },
  {
    id: 'devi-temples',
    slug: 'devi-temples',
    title: 'Devi Temples',
    description: 'Sacred shrines dedicated to various forms of the Goddess.',
    icon: 'devi-temples',
    count: 85,
  },
  {
    id: 'sun-temples',
    slug: 'sun-temples',
    title: 'Sun Temples',
    description: 'Temples dedicated to Lord Surya, the Sun God.',
    icon: 'sun-temples',
    count: 6,
  },
  {
    id: 'murugan-temples',
    slug: 'murugan-temples',
    title: 'Murugan Temples',
    description: 'Sacred abodes of Lord Murugan.',
    icon: 'murugan-temples',
    count: 32,
  }
];

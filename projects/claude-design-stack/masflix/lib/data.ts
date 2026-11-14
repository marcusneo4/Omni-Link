export interface Memory {
  id: string
  title: string
  description: string
  year: number
  date: string
  location: string
  thumbnail: string
  media: string
  mediaType: 'photo' | 'video'
  categoryIds: string[]
  isFeatured?: boolean
  duration?: string
  gradientClass: string
}

export interface Category {
  id: string
  name: string
  type: 'theme' | 'year'
}

export const GRADIENTS = [
  'from-[#1a0505] via-[#3d0a0a] to-[#1a0505]',
  'from-[#050518] via-[#0a0a3d] to-[#05050d]',
  'from-[#051a0d] via-[#0a3d1a] to-[#051a0d]',
  'from-[#12050a] via-[#3d0a2e] to-[#12050a]',
  'from-[#1a1205] via-[#3d2e0a] to-[#1a1205]',
  'from-[#05151a] via-[#0a2e3d] to-[#05151a]',
  'from-[#150518] via-[#2e0a3d] to-[#150518]',
  'from-[#181205] via-[#3d2a0a] to-[#181205]',
  'from-[#050a18] via-[#0a1a3d] to-[#050a18]',
  'from-[#18050d] via-[#3d0a1a] to-[#18050d]',
]

export const categories: Category[] = [
  { id: '2025', name: '2025', type: 'year' },
  { id: '2024', name: '2024', type: 'year' },
  { id: '2023', name: '2023', type: 'year' },
  { id: 'trips', name: 'Our Trips', type: 'theme' },
  { id: 'birthdays', name: 'Birthdays & Milestones', type: 'theme' },
  { id: 'dates', name: 'Date Nights', type: 'theme' },
  { id: 'random', name: 'Random Moments', type: 'theme' },
]

export const memories: Memory[] = [
  {
    id: 'm1',
    title: 'Lost in the Old Town',
    description: 'We wandered for three hours with no plan and somehow ended up at the best laksa stall in the city. You ate two bowls. I pretended I didn\'t want any and then ate most of yours.',
    year: 2025,
    date: '14 Mar 2025',
    location: 'Penang',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2025', 'trips'],
    isFeatured: true,
    gradientClass: GRADIENTS[0],
  },
  {
    id: 'm2',
    title: 'Sunrise at 5am',
    description: 'You woke me up saying "trust me" and refused to explain. Forty minutes later we were watching the whole sky turn pink from the reservoir and I completely forgave you.',
    year: 2025,
    date: '1 Jan 2025',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2025', 'random'],
    gradientClass: GRADIENTS[1],
  },
  {
    id: 'm3',
    title: 'Anniversary Dinner',
    description: 'The restaurant lost our reservation. We ended up eating chicken rice from the kopitiam downstairs in our fancy clothes. It was somehow perfect.',
    year: 2025,
    date: '8 Feb 2025',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'video',
    duration: '1:47',
    categoryIds: ['2025', 'dates', 'birthdays'],
    gradientClass: GRADIENTS[2],
  },
  {
    id: 'm4',
    title: 'Bali Rice Terraces',
    description: 'We woke up at 4am for the golden hour shot and arrived to find forty other tourists with the exact same idea. Still one of my favourite days with you.',
    year: 2024,
    date: '22 Jul 2024',
    location: 'Bali',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2024', 'trips'],
    gradientClass: GRADIENTS[3],
  },
  {
    id: 'm5',
    title: 'Your 23rd Birthday',
    description: 'You said you didn\'t want a fuss. I organised a fuss anyway. You cried happy tears and then ate the entire cake yourself.',
    year: 2024,
    date: '15 Sep 2024',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'video',
    duration: '3:22',
    categoryIds: ['2024', 'birthdays'],
    gradientClass: GRADIENTS[4],
  },
  {
    id: 'm6',
    title: 'Night Market Chaos',
    description: 'Got separated for ten minutes and I panicked completely. Found you at the mochi stall. You had already bought me one.',
    year: 2024,
    date: '5 Oct 2024',
    location: 'Bangkok',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2024', 'trips', 'random'],
    gradientClass: GRADIENTS[5],
  },
  {
    id: 'm7',
    title: 'The Rainy Afternoon',
    description: 'Stuck inside because of the downpour. Watched three movies in a row and you fell asleep during all three. I didn\'t move in case I woke you.',
    year: 2024,
    date: '18 Nov 2024',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2024', 'random'],
    gradientClass: GRADIENTS[6],
  },
  {
    id: 'm8',
    title: 'First Real Road Trip',
    description: 'Six hours, one very confident wrong turn, and a playlist you absolutely dominated. By the end I knew every word to your top 10 songs.',
    year: 2023,
    date: '12 Dec 2023',
    location: 'Malaysia',
    thumbnail: '',
    media: '',
    mediaType: 'video',
    duration: '4:10',
    categoryIds: ['2023', 'trips'],
    gradientClass: GRADIENTS[7],
  },
  {
    id: 'm9',
    title: 'Rooftop Date Night',
    description: 'You wore the red dress. I completely forgot what I had planned to say at dinner. Everything I ordered tasted incredible somehow.',
    year: 2025,
    date: '29 Mar 2025',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2025', 'dates'],
    gradientClass: GRADIENTS[8],
  },
  {
    id: 'm10',
    title: 'Museum Afternoon',
    description: 'You read every single plaque out loud to me. I love that about you. We were the last ones out.',
    year: 2024,
    date: '7 Mar 2024',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2024', 'dates', 'random'],
    gradientClass: GRADIENTS[9],
  },
  {
    id: 'm11',
    title: 'Street Food Tour',
    description: 'Your rule was: if the queue is longer than ten people, it\'s worth trying. We ate at seven different stalls and walked home in a food coma.',
    year: 2025,
    date: '20 Apr 2025',
    location: 'Penang',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2025', 'trips'],
    gradientClass: GRADIENTS[0],
  },
  {
    id: 'm12',
    title: 'Late Night Drive',
    description: 'No destination, just windows down and your hand on the gearshift. We talked about everything. Ended up at the beach at 2am.',
    year: 2023,
    date: '28 Aug 2023',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'video',
    duration: '2:03',
    categoryIds: ['2023', 'random', 'dates'],
    gradientClass: GRADIENTS[1],
  },
  {
    id: 'm13',
    title: 'Cooking Disaster',
    description: 'Your mum\'s recipe looked simple. It was not simple. We ordered delivery at 10pm and ate it sitting on the kitchen floor laughing.',
    year: 2024,
    date: '1 Feb 2024',
    location: 'Home',
    thumbnail: '',
    media: '',
    mediaType: 'video',
    duration: '0:58',
    categoryIds: ['2024', 'random'],
    gradientClass: GRADIENTS[2],
  },
  {
    id: 'm14',
    title: 'Kyoto Garden Walk',
    description: 'Everything was impossibly quiet. You didn\'t need to say anything and neither did I. I think this is my favourite photo of you.',
    year: 2023,
    date: '19 Apr 2023',
    location: 'Kyoto',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2023', 'trips'],
    gradientClass: GRADIENTS[3],
  },
  {
    id: 'm15',
    title: 'Christmas Eve',
    description: 'Your family\'s Christmas dinner. You translated every joke for me in real time and held my hand under the table when I got nervous.',
    year: 2023,
    date: '24 Dec 2023',
    location: 'Singapore',
    thumbnail: '',
    media: '',
    mediaType: 'photo',
    categoryIds: ['2023', 'birthdays'],
    gradientClass: GRADIENTS[4],
  },
]

export function getFeaturedMemory(): Memory {
  return memories.find(m => m.isFeatured) ?? memories[0]
}

export function getMemoriesByCategory(categoryId: string): Memory[] {
  return memories.filter(m => m.categoryIds.includes(categoryId))
}

export function getMemoryById(id: string): Memory | undefined {
  return memories.find(m => m.id === id)
}

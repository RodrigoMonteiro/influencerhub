export interface User {
  id: number;
  name: string;
  email: string;
  subscribers: number;
  category: Category;
  platform: Platform;
  [key: string]: any | undefined;
}

export enum Platform {
  Youtube = 'Youtube',
  Facebook = 'Faacebook',
  Instagram = 'Instagram',
  Tiktok = 'Tiktok',
  Twitter = 'Twitter',
  Twitch = 'Twitch',
}

export enum Category {
  Review = 'Review',
  Vlog = 'Vlog',
  Gaming = 'Gaming',
  Tutorial = 'Tutorial',
  Comedy = 'Comedy',
  Beauty = 'Beauty',
  Fashion = 'Fashion',
  Food = 'Food',
  Travel = 'Travel',
  Technology = 'Technology',
  Music = 'Music',
  Sports = 'Sports',
  Fitness = 'Fitness',
  Education = 'Education',
  Lifestyle = 'Lifestyle',
}



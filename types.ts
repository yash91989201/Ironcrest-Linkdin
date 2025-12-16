export enum Tab {
  HOME = 'Home',
  ABOUT = 'About',
  POSTS = 'Posts',
  JOBS = 'Jobs',
  PEOPLE = 'People'
}

export interface Post {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
  image?: string;
}

export interface CompanyDetails {
  name: string;
  tagline: string;
  industry: string;
  location: string;
  followers: number;
  employees: string;
  description: string;
}

export interface SimilarCompany {
  name: string;
  industry: string;
  logo: string;
  followers: number;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  postedAgo: string;
  companyName: string;
  companyLogo: string;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  image: string;
}
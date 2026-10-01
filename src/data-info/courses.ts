import { Avatar } from "@/components/ui/AvatarGroup";

export const FEATURED = "Featured";


export const courseCategoryRows = [
  [FEATURED, "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];


export type Course = {
  slug: string;
  title: string;
  image: string;
  author: string;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  students: Avatar[];
  moreStudents: string;
  categories: string[];
};

 const enrolled: Avatar[] = [
  { src: "/course-avatar/pic-1.png", alt: "" },
  { src: "/course-avatar/pic-2.png", alt: "" },
  { src: "/course-avatar/pic-3.png", alt: "" },
  { src: "/course-avatar/pic-4.png", alt: "" },
 
];

const shared = {
  author: "purepearl studio",
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  price: 25,
  students: enrolled,
  moreStudents: "26+",
};

export const courses: Course[] = [
  {
    ...shared,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/courses/learn-figma.jpg",
    categories: ["UI/UX Design", "Graphic Design"],
  },
  {
    ...shared,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/courses/digital-asset.jpg",
    categories: ["Digital Illustration", "Graphic Design"],
  },
  {
    ...shared,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/courses/big-data.jpg",
    categories: ["Data Science"],
  },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/courses/productivity.jpg",
    categories: ["Productivity"],
  },
  {
    ...shared,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/courses/money-management.jpg",
    categories: ["Freelance & Entrepreneurship"],
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/courses/startup.jpg",
    categories: ["Freelance & Entrepreneurship", "Marketing"],
  },
];

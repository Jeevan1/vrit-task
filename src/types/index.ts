export type Testimonial = {
  id: number;
  name: string;
  image: string;
  text?: string;
  animation?: string;
  video?: string;
  content?: {
    role: string;
    quote: string;
  };
};

export type TaskTwo = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  slides: {
    id: number;
    title: string;
    image: string;
  }[];
};

export type TaskThree = {
  id: number;
  title: string;
  description: string;
  count: string;
  images: string[];
};

type PostType = {
  id: string;
  title: string;
  body: string;
  time: Date;
  media: ImageData[];
  topics: string[];
  likes: number;
};

export type { PostType };

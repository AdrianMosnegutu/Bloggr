type PostData = {
  id: string;
  title: string;
  body: string;
  time: Date;
  media: ImageData[];
  topics: string[];
  likes: number;
};

type PostSortKey = "likes" | "time";

export type { PostData, PostSortKey };

"use client";

import PostList from "@/components/post/PostList";
import Sidebar from "@/components/sidebar/Sidebar";
import mockPosts from "@/mock/mock-posts.json";
import { PostType } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>(
    mockPosts as unknown as PostType[],
  );

  return (
    <main className="relative top-8 flex justify-center gap-4">
      <PostList
        posts={posts.map((post) => ({
          ...post,
          time: new Date(post.time),
        }))}
      />
      <Sidebar />
    </main>
  );
}

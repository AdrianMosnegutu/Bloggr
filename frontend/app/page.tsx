"use client";

import CreatePostDialog from "@/components/post-manipulation/CreatePostDialog";
import PostList from "@/components/post/PostList";
import Sidebar from "@/components/sidebar/Sidebar";
import mockPosts from "@/mock/mock-posts.json";
import { PostType } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>(
    mockPosts as unknown as PostType[],
  );

  const [creatingPost, setCreatingPost] = useState<boolean>(false);

  function handleCreatePost(post: PostType) {
    setPosts((prev) => [post, ...prev]);
    setCreatingPost(false);
  }

  return (
    <main className="relative top-8 flex justify-center gap-4">
      <PostList
        posts={posts.map((post) => ({
          ...post,
          time: new Date(post.time),
        }))}
      />
      <Sidebar setCreatingPost={setCreatingPost} />
      {creatingPost && <CreatePostDialog handleCreatePost={handleCreatePost} />}
    </main>
  );
}

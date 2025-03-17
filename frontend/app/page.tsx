"use client";

import CreatePostDialog from "@/components/post-manipulation/CreatePostDialog";
import PostList from "@/components/post/PostList";
import Sidebar from "@/components/sidebar/Sidebar";
import { PostData } from "@/utils/types";
import { useState } from "react";
import PostsContext from "@/context/PostsContext";
import EditPostDialog from "@/components/post-manipulation/EditPostDialog";
import mockPosts from "@/utils/mockPosts";

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>(mockPosts);

  const [creatingPost, setCreatingPost] = useState<boolean>(false);
  const [editedPost, setEditedPost] = useState<PostData | null>(null);

  return (
    <main className="relative top-20 p-8 flex justify-center gap-4">
      <PostsContext.Provider
        value={{ posts, setPosts, setCreatingPost, setEditedPost }}
      >
        <PostList posts={posts} />
        <Sidebar />
        {creatingPost && <CreatePostDialog />}
        {editedPost && <EditPostDialog {...editedPost} />}
      </PostsContext.Provider>
    </main>
  );
}

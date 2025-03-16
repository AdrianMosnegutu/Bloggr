"use client";

import CreatePostDialog from "@/components/post-manipulation/CreatePostDialog";
import PostList from "@/components/post/PostList";
import Sidebar from "@/components/sidebar/Sidebar";
import { PostType } from "@/utils/types";
import { useState } from "react";
import mockPosts from "@/mock/mock-posts.json";
import PostsContext from "@/context/PostsContext";
import EditPostDialog from "@/components/post-manipulation/EditPostDialog";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>(
    mockPosts as unknown as PostType[],
  );

  const [creatingPost, setCreatingPost] = useState<boolean>(false);
  const [editedPost, setEditedPost] = useState<PostType | null>(null);

  function handleCancelCreatingPost() {
    document.body.style.overflow = "auto";
    setCreatingPost(false);
  }

  function handleCreatePost(post: PostType) {
    setPosts((prev) => [post, ...prev]);
    setCreatingPost(false);
  }

  function handleEditPost() {
    setEditedPost(null);
  }

  return (
    <main className="relative top-8 flex justify-center gap-4">
      <PostsContext.Provider value={{ posts, setPosts, setEditedPost }}>
        <PostList
          posts={posts.map((post) => ({
            ...post,
            time: new Date(post.time),
          }))}
        />
        <Sidebar setCreatingPost={setCreatingPost} />

        {creatingPost && (
          <CreatePostDialog
            handleCreatePost={handleCreatePost}
            handleCancelCreatingPost={handleCancelCreatingPost}
          />
        )}

        {editedPost && (
          <EditPostDialog post={editedPost} handleEditPost={handleEditPost} />
        )}
      </PostsContext.Provider>
    </main>
  );
}

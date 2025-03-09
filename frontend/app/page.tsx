import PostList from "@/components/post/PostList";
import Sidebar from "@/components/sidebar/Sidebar";
import mockPosts from "@/mock/mock-posts.json";

export default function Home() {
  return (
    <main className="flex gap-4 p-44 pt-8 pb-0">
      <PostList
        posts={mockPosts.map((post) => ({
          ...post,
          time: new Date(post.time),
        }))}
      />
      <Sidebar />
    </main>
  );
}

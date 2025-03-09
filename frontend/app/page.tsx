import Post from "@/components/post/Post";

export default function Home() {
  return (
    <main className="p-44">
      <div>
        <Post
          title="Lorem Ipsum"
          body="Lorem ipsum odor amet, consectetuer adipiscing elit. Erat dictum justo eget sapien metus vel. Risus molestie placerat ut euismod magna donec mauris. Varius sociosqu nulla orci tellus lobortis placerat; neque hendrerit facilisi? Nec enim enim lacus parturient euismod. Duis et dictum volutpat risus congue ad nam hendrerit. Euismod fames conubia id; suspendisse aptent potenti vehicula quisque? Mollis vitae senectus tempor vehicula fames volutpat neque arcu fusce.\n\nPosuere suspendisse nullam ante est nam risus. Suspendisse fusce sociosqu porta pulvinar vitae dui. Dictumst condimentum inceptos tortor cras platea dictum maecenas potenti. Mus cursus ligula integer mus ullamcorper. Pharetra finibus vehicula litora magnis mattis sed turpis. Aliquet malesuada curabitur urna platea interdum sem tempor. Tincidunt mattis proin lobortis fusce cras cubilia. Cras nullam turpis dapibus orci inceptos potenti dis dui."
          time={new Date(2025, 2, 7, 20, 25)}
          media={[]}
          topics={["topic1", "topic2", "topic3"]}
          likes={12314}
        />
      </div>
    </main>
  );
}

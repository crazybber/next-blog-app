import Link from "next/link";

export default function PostList({
  posts,
}: {
  posts: {
    id: string;
    title: string;
  }[];
}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

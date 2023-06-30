import { Metadata } from 'next';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: "Next.js",
};
export default function Page() {
  return (
    <>
      <h1>Hello Pages!</h1>
      <Link href='/dashboard'>Dashboard</Link>
    </>
  );
}

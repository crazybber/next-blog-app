'use client'
import { Metadata } from 'next'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

// export const metadata: Metadata = {
//   title: "Next index",
// };
export default function Page() {

  const router = useRouter()

  return (
    <>
      <h1>Hello Pages!</h1>
      <button type='button' onClick={() => {
        router.push('/dashboard')
      }}>
        Go to Dashboard
      </button>
      <br />
      <Link href='/dashboard'>Dashboard</Link>
    </>
  );
}

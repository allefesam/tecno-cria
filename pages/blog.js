import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}

export default function Blog({ allPostsData }) {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-2xl text-blue-400 hover:underline">{title}</Link>
            <br />
            <small className="text-gray-400">{date}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}
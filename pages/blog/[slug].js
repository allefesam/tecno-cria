import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory)
  const paths = filenames.map(name => ({ params: { slug: name.replace(/\.md$/, '') }}))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      title: data.title,
      date: data.date,
      contentHtml,
    },
  }
}

export default function Post({ title, date, contentHtml }) {
  return (
    <main className="p-10 prose prose-invert max-w-3xl">
      <h1>{title}</h1>
      <p><small>{date}</small></p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}
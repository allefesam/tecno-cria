import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/sobre" className="hover:underline">Sobre</Link>
      <Link href="/blog" className="hover:underline">Blog</Link>
      <Link href="/projetos" className="hover:underline">Projetos</Link>
      <Link href="/contato" className="hover:underline">Contato</Link>
    </nav>
  )
}

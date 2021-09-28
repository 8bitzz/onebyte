import Head from 'next/head'
import Gallery from '../components/gallery/Gallery'

export default function Home() {
  return (
    <div className="min-h-screen w-full px-6 sm:px-10 md:px-20">
      <Head>
        <title>Onebyte Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-4">
        <Gallery/>
      </div>
    </div>
  )
}

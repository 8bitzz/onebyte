import Head from 'next/head'

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Onebyte Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row justify-start items-center">
        <h1>Blogs</h1>
      </main>
    </div>
  )
}

export default Blogs

import { useRouter } from 'next/router'
import Head from 'next/head'

import type { NextPageWithLayout } from '@/pages/_app'

const Page404: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>

      <h1>it&rsquo;s 404</h1>

      <button onClick={() => router.back()}>back to app</button>
    </>
  )
}

Page404.layout = 'error'

export default Page404

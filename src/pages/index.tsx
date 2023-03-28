import Head from 'next/head'

import { useAppSelector } from '@/hooks/useAppSelector'

import type { NextPageWithLayout } from '@/pages/_app'

const PageHome: NextPageWithLayout = () => {
  const state = useAppSelector((state) => state)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>hello from home</h1>

      <pre>state {JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default PageHome

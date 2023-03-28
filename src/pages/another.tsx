import Head from 'next/head'

import { useAppSelector } from '@/hooks/useAppSelector'

import type { NextPageWithLayout } from '@/pages/_app'

const PageAnother: NextPageWithLayout = () => {
  const state = useAppSelector((state) => state)

  return (
    <>
      <Head>
        <title>Another</title>
      </Head>

      <h1>hello from another</h1>

      <pre>state {JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default PageAnother

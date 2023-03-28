import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'

import 'normalize.css/normalize.css'

import store from '../store'

import LayoutApp from '@/layouts/Layout.App'
import LayoutAuth from '@/layouts/Layout.Auth'
import LayoutError from '@/layouts/Layout.Error'
import LayoutGlobal from '@/layouts/Layout.Global'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: 'error' | 'auth'
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ReduxProvider store={store}>
      <LayoutApp>
        {(() => {
          switch (Component.layout) {
            case 'auth':
              return (
                <LayoutAuth>
                  <Component {...pageProps} />
                </LayoutAuth>
              )
            case 'error':
              return (
                <LayoutError>
                  <Component {...pageProps} />
                </LayoutError>
              )

            default:
              return (
                <LayoutGlobal>
                  <Component {...pageProps} />
                </LayoutGlobal>
              )
          }
        })()}
      </LayoutApp>
    </ReduxProvider>
  )
}

export default App

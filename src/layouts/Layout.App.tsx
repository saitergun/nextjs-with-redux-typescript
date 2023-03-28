import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'

import startApp from '@/store/app/actionCreators/startApp'
import signOut from '@/store/auth/actionCreators/signOut'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

import Navigate from '@/components/Navigate'
import SplashScreen from '@/components/SplashScreen'

type Props = {
  children: React.ReactNode
}

const LayoutApp: React.FC<Props> = ({ children }) => {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const router = useRouter()

  useLayoutEffect(() => {
    dispatch(startApp())
  }, [dispatch])

  // redirect to sign in if not signed in
  if (!state.app.loading && router.pathname !== '/sign-in' && !state.auth.me) {
    return (
      <Navigate path={`/sign-in?next=${router.pathname}`}>
        <SplashScreen text="redirecting to sign in..." />
      </Navigate>
    )
  }

  // redirect to home if signed in
  if (!state.app.loading && router.pathname === '/sign-in' && state.auth.me) {
    return (
      <Navigate path="/">
        <SplashScreen text="redirecting to home..." />
      </Navigate>
    )
  }

  if (state.app.loading) {
    return <SplashScreen />
  }

  return <>{children}</>
}

export default LayoutApp

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import signOut from '@/store/auth/actionCreators/signOut'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'

type Props = {
  children: React.ReactNode
}

const LayoutGlobal: React.FC<Props> = ({ children }) => {
  const [signingOut, setSigninOut] = useState(false)

  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const router = useRouter()

  const handleSignOut = async () => {
    setSigninOut(true)

    await dispatch(signOut())

    router.replace('/sign-in')
  }

  return (
    <div style={{ padding: 16 }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <nav
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/another">Another</Link>
          <Link href="/asdjkl">404</Link>
        </nav>

        {state.auth.me && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>Signed in as {state.auth.me?.last_name}</span>

            <button
              disabled={signingOut}
              onClick={handleSignOut}
            >
              sign out
            </button>
          </div>
        )}
      </header>

      <main>{children}</main>
    </div>
  )
}

export default LayoutGlobal

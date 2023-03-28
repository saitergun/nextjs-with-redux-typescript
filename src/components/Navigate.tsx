import { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import type { Url } from 'next/dist/shared/lib/router/router'

type Props = {
  children: React.ReactNode
  path: Url
}

const Navigate: React.FC<Props> = ({ children, path }) => {
  const router = useRouter()

  useLayoutEffect(() => {
    router.push(path)
  }, [router, path])

  return <>{children}</>
}

export default Navigate

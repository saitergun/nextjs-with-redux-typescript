import { useCallback, useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { faker } from '@faker-js/faker'

import { SignInForm } from '@/@types/forms'

import { useAppDispatch } from '@/hooks/useAppDispatch'

import signIn from '@/store/auth/actionCreators/signIn'

const INITIAL_FORM_DATA: SignInForm = {
  first_name: '',
  last_name: '',
  email: '',
}

const PageSignIn = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [formSubmitting, setFormSubmitting] = useState(false)

  const dispatch = useAppDispatch()

  const router = useRouter()

  const handleSubmitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      setFormSubmitting(true)

      await dispatch(signIn(formData))

      router.push(`${router.query.next}` ?? '/')
    },
    [dispatch, router, formData],
  )

  useLayoutEffect(() => {
    const first_name = faker.name.firstName()
    const last_name = faker.name.lastName()
    const email = faker.internet.email(first_name, last_name)

    setFormData({
      first_name,
      last_name,
      email,
    })
  }, [])

  useLayoutEffect(() => {
    const email = faker.internet.email(formData.first_name, formData.last_name)

    setFormData((prev) => ({ ...prev, email }))
  }, [formData.first_name, formData.last_name])

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>

      <h1>hello from sign-in</h1>

      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            placeholder="first name"
            value={formData.first_name}
            onChange={(e) => setFormData({ ...formData, first_name: e.currentTarget.value })}
          />
        </div>

        <div>
          <input
            placeholder="last name"
            value={formData.last_name}
            onChange={(e) => setFormData({ ...formData, last_name: e.currentTarget.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={formSubmitting}
          >
            {formSubmitting ? 'submitting' : 'submit'}
          </button>
        </div>
      </form>
    </>
  )
}

PageSignIn.layout = 'auth'

export default PageSignIn

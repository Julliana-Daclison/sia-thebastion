import { getCsrfToken } from "next-auth/react"


export default function SignIn({ csrfToken }) {

  const formSubmit = async event => {

    if ( true ) {
      event.preventDefault();
    }
    await fetch("/api/auth/callback/credentials", {
      method: "POST"
    })
  }

  return (
    <form method="post" action="/api/auth/callback/credentials" onSubmit={ formSubmit }>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
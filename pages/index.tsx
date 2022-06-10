import { NextPage } from "next"
import { useSession, signIn, signOut } from "next-auth/react"
import { HomePage } from "../page-components/hompage"


const Home: NextPage = () =>{

  return (
    <HomePage />
  )
}


export default Home;


// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user?.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//       {/* { session } */}
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }
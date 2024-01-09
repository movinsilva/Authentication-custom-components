import {  SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {

  return (
    <>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <SignOutButton />
    </SignedIn>
    </>
  )
}

export default App

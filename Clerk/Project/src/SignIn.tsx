import { SignOutButton, SignedIn, SignedOut, UserProfile } from '@clerk/clerk-react';
import * as React from 'react';

export interface ISignInProps {
}

export default class SignIn extends React.PureComponent<ISignInProps> {
  public render() {
    return (
      <div>
        Welcome to the sigin page

        <SignedIn >
            Please sign in.
        </SignedIn>
        <SignedOut>
            You have been signed in.
            <UserProfile />
        </SignedOut>
      </div>
    );
  }
}

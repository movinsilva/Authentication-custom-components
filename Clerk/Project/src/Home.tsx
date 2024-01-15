import * as React from 'react';
import { SignIn, SignOutButton, SignedIn, SignedOut, UserProfile } from '@clerk/clerk-react'
import { dark, neobrutalism } from '@clerk/themes';



export interface IHomeProps {
}

export default class Home extends React.PureComponent<IHomeProps> {
    public render() {
        return (
            <div style={{padding: "3rem"}}>
                <SignedOut>
                    <SignIn 
                        appearance={{
                            baseTheme: neobrutalism
                        }}/>
                </SignedOut>
                <SignedIn>
                    <UserProfile />
                    <SignOutButton />
                </SignedIn>
            </div>
        );
    }
}

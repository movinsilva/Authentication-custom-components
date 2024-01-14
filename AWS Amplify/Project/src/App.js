import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your cool email ):',
    },
  },
  confirmVerifyUser: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};


function App({ signOut, user }) {
  return (
    // <>
    //   <h1>Hello {user.username}</h1>
    //   <button onClick={signOut}>Sign out</button>
    // </>

    <Authenticator
    formFields={formFields}
      variation='modal' 
      loginMechanisms={['email']} 
      socialProviders={['amazon', 'apple', 'facebook', 'google']} >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default (App);



/**
 * When running command, error will come with execution policy
 * Run this in powershell with administrator
 *      Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
 *      Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser
 * Can verify using,
 *      Get-ExecutionPolicy -List
 */
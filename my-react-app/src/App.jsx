import React, { useState } from 'react';
import { account, ID } from './appwrite';

import './App.css'

const App = () => { 
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  } 
 
  return (
    <div>
      <p className='resultant'>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>

      <form>
        <div className='form'>
        <input type="email" placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="NAME" value={name} onChange={e => setName(e.target.value)} />

        <div class="button">
        <button type="button" onClick={() => login(email, password)} className="go left">
          LOGIN
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }} className='go left'
        >
        REGISTER
        </button>
        </div>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          LOGOUT
        </button>
        </div>
      </form>
    </div>
  );
};

export default App;

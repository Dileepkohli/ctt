import './App.css';
import { useState } from 'react';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { Account } from './Components/Account';
import Home from './Components/Home';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const signUpDone = () => {
    setIsSignUp(false);
    setIsSignIn(true);
  };

  const signInDone = () => {
    setIsSignUp(false);
    setIsSignIn(false);
  };
  const signUpHandler = () => {
    setIsSignUp(true);
    setIsSignIn(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Account>
          {isSignUp ? <SignUp signUpDone={signUpDone} /> : isSignIn ? <SignIn signInDone={signInDone} signUpHandler={ signUpHandler}/> : <Home/>}
        </Account>
      </header>
    </div>
  );
}

export default App;

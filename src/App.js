import './App.css';
import { useState } from 'react';
import SignUp from './Components/SignUp';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const signUpHandler = () => {
    setIsSignUp(true);
  };
  const signUpDone = () => {
    setIsSignUp(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <SignUp signUpDone={signUpDone}/>
      </header>
    </div>
  );
}

export default App;

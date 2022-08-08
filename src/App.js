import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from './components/firebase'
import { useState } from "react";

function App() {

const auth = getAuth(app);

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signUp = () => {

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Successfully created Account")
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Sign in Successful")
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

  return (
    <div className="main">
      <h1>Login Page</h1>
      <div className="App">
      <input type={"email"} className="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/><br />
      <input type={"password"} className="email" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/><br />
      <br></br>
      <button className="button" onClick={signUp}>Create Account</button>
      <button className="button" onClick={signIn}>Sign in</button>
      </div>
    </div>
  );
}

export default App;

import React, { useContext, useState } from 'react'
import './styles.css'
import { AuthContext } from '../../context/auth';

const LoginPage = () => {

  const { authenticated, login } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email,password) //integração contex/api
  }

  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <p>{String(authenticated)}</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="password">password</label>
          <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="actions"><button type='submit' >Entar</button></div>
      </form>
    </div>
  )
}

export default LoginPage
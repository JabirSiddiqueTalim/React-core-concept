import React, { useState } from 'react';


const ControlledField = () => {
  const [password,setPassword]=useState('');
  const [error,setError]=useState('')
  const handleSubmit =(e)=>
  {
    e.preventDefault()
    console.log(e.target.password.value);
    console.log(e.target.email.value)
    if(password.length<6)
      {
        setError('Password length less then 6')
      }else
      {
        setError('')
      }

  }
  const handlePassword =(e)=>
  {
    console.log(e.target.value)
    setPassword(e.target.value);
    

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder='Enter your email' required />
        <br />
        <input type="password" name="password" id="" placeholder='Enter your password' onChange={handlePassword} defaultValue={password}  />
        <br />
        <input type="submit" />


      </form>
      <p style={{color:'blue',backgroundColor:'purple'}}><small>{error}</small></p>

    </div>
  );
};


export default ControlledField;
import React, { useState } from 'react';


const ControlledField = () => {
  const [password,setpassword]=useState('jst');
  const handleSubmit =(e)=>
  {
    e.preventDefault()
    console.log(e.target.password.value);
    console.log(e.target.email.value)

  }
  const handlePassword =(e)=>
  {
    console.log(e.target.value)

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder='Enter your email' required />
        <br />
        <input type="password" name="password" id="" placeholder='Enter your password' onChange={handlePassword}   />
        <br />
        <input type="submit" />


      </form>

    </div>
  );
};

export default ControlledField;
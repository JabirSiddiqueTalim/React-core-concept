import React from 'react';
import useInputField from '../../Hooks/Hooks';

const HooksField = () => {
  const [name ,nameOnChange]=useInputField('')
  const [email,emailOnChange]=useInputField('')
  const handleOnSubmit=(e)=>
  {
    e.preventDefault();
    console.log("submitted",name);
    console.log("Email-->",email);
    
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input defaultValue={name} onChange={nameOnChange} type="text" name="" id="" />
        <br />
        <input defaultValue={email} onChange={emailOnChange} type="email" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
};

export default HooksField;
import React, { useRef } from 'react';

const UncontrolledField = () => {
  const emailRef=useRef('');
  const passwordRef=useRef('')
  const handleClick=(e)=>
  {
    e.preventDefault()
    console.log(emailRef.current.value);
    const password=passwordRef.current.value;
    console.log(password);
  }
  return (
    <div>
      <form onClick={handleClick}>
        <input ref={emailRef} type="email" name="" id="" />
        <br />
        <input ref={passwordRef} type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>

      
    </div>
  );
};

export default UncontrolledField;
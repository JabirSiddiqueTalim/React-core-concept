import React from 'react';

const Formactive = () => {
  
  const handleClick=(actives)=>
  {
    //  actives.preventDefault()
    console.log(actives.get('email'));
    

  }
  return (
    <div>
      <form action={handleClick}>
        <input type="Email" placeholder='Email'name='email' required />
        <br />
        <input type="password" name="password" placeholder='Password' required />
        <br />
        <input type="submit" value="Submit" />

      </form>

      
    </div>
  );
};

export default Formactive;
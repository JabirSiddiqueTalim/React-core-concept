import React from 'react';

const Form = () => {
  const handleSubmit=(e)=>
  {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.email.value)
   

  }
  return (
    <div>
      <h2>This is form</h2>
      <form onSubmit={handleSubmit}>
           <input type="text" placeholder='Your Name ' name='name'/>
           <br />
           <input type="email" placeholder='Your Email' name='email' />
           <br />
          <input type="submit" />
      </form>
      
    </div>
  );
};

export default Form;
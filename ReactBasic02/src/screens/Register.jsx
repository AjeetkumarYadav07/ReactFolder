import React, { useState } from 'react'


const Register = () => {

  const [value , setValue] = useState("");
  const [password , setPassword] = useState("");
function chngValue (e) {
    setValue(e.target.value);
}
function passwordValue (e) {
  setPassword(e.target.value);
}

console.log(` inpput wali value ye hai : ${value}`);
console.log(`password ye hai : ${password}`);
  return (
    <>
     <div>Register</div>
      
      <form action="">
     
       <input type="email" value={value} onChange={chngValue} /> <button>Submit</button>  <br />
       <input type="password" value={password}  onChange={passwordValue}         /> <button>Submit</button>  <br />

      </form>
    </>
  )
}

export default Register;
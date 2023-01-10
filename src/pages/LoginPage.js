import React,{useState} from 'react'

function LoginPage() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("")
    function handleEmail(event){
        setName(event.target.value);
    }
function handlePassword (event){

    setPassword(event.target.value)
}
  return (
    <>
    <input type="email" placeholder="email" value={name} onChange={handleEmail}/>
    <input type="password" placeholder="password"  value={password} onChange= {handlePassword}/>

    </>
  )
}

export default LoginPage;
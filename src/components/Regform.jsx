import React, { useState } from 'react'


const RegForm = () => {
const [name, setName] = useState('')
const [nameError, setNameError] = useState(false)
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState(false)
const [message, setMessage] = useState('')
const [messageError, setMessageError] = useState(false)
const [errorMessageNew, setErrorMessageNew] =useState(false)



const handleChange = (e) => {
  switch (e.target.name){
   case 'name':
    setName(e.target.value)
    setNameError(validateLenght(e.target.value))
    break;
    case 'email':
      setEmail(e.target.value)
      setEmailError(validateLenght(e.target.value))
      break
      case 'message':
        setMessage(e.target.value)
        setMessageError(validateLenght(e.target.value))
        break
  }
}
const validateLenght = (value) => {
  if (value < 1)
  return true
return false
}



const handleSubmit = async (e) => {
  e.preventDefault()
  setErrorMessageNew('')

  const user ={name,email,message}
  const json = JSON.stringify(user)
  const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
    method:'post',
    headers: {
      'content-type': 'application/json'
    },
    body : json
  })
  clearForm()
  switch(result.status){
    case 200:
      alert('Your message has been sent')
      break;
      case 400: 
      setErrorMessageNew('You havent put in all the details')
      break;
  }
}
const clearForm = ()=> {
  setName('')
  setEmail('')
  setMessage('')

}



  return (
    
   <form onSubmit ={handleSubmit} noValidate >
        <p className='errorMessageNew'>{errorMessageNew}</p>
    <div class="mb-3">     
    <input type="text"  placeholder="Name*" name="name" value={name} onChange={(e) => handleChange(e)}/>
    <label className={`${nameError? 'error':''}`}>{`${nameError ?'Name Is requeired' : ''}`} </label>
   
    </div>
<div class="mb-3">
    <input type="text" placeholder="Email*" name="email"value={email} onChange={(e) => handleChange(e)} />
    <label className={`${emailError? 'error':''}`}>{`${emailError ?'Email Is requeired' : ''}`} </label>
 
</div>
<div class="mb-3" >
    <input type="text" id="message" placeholder="Your Message*" name="message" value={message} onChange={(e) => handleChange(e)} />
    <label className={`${messageError? 'error':''}`}>{`${messageError ?'Message Is requeired' : ''}`} </label>
    
</div>
<button className='btn-new-message' type="submit"> Send Message </button>
    


    </form>
  )
}

export default RegForm
import React from 'react'
import RegForm from './RegForm'




const MessageForm = () => {
  return (
    <section className="message-form">
    <div className="container">
        <article className="message">
        <h1>Leave us a message for any information.</h1>
       </article>
        <div className="message-connect">
          <RegForm/>
       </div>
    </div>

</section>
  )
}

export default MessageForm
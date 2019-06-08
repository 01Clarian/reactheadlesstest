import React from 'react'

const Contact = () => {

return(

<div>
<h1>Serverless Contact Form</h1>
<form action="https://9mblweouh3.execute-api.us-east-1.amazonaws.com/prod/contact" method="POST">
    <div>
        <input type="text" name="name" placeholder="Example Name" />
    </div>
    <div>
        <input type="text" name="email" placeholder="example@example.com" />
    </div>
    <div>
        <textarea name="message">Example Message</textarea>
    </div>
    <div>
        <input type="submit" value="Send" />
    </div>
</form>
</div>
)
}

export default Contact 


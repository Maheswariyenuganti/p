import React from 'react'
import "./Contact.css"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0768c459-cba8-4249-a451-0170c308850c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <div className='contact-container'>
      <form className='contact-left' action="" onSubmit={onSubmit}>

<div className='contact-left-title'>
<h2>Contact :</h2>
<hr></hr>

</div>
<input type='text' name='name' placeholder='Enter Your Name' className='contact-inputs' required/>
<input type='email' name='email' placeholder='Enter Your Email' className='contact-inputs' required/>
<textarea name='message' placeholder='Enter Your Message' className='contact-inputs' required>

</textarea>
<button type='submit'>
Submit
</button>
      </form>
      {/* <div className='contact-right'>
Image
      </div> */}
    </div>
  )
}

export default Contact

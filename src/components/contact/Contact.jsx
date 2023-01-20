import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nazs83g",
        "template_u69ehti",
        formRef.current,
        "user_MUTav6SLtTdcsWWf5d5YO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Talk</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 (514)-974-2519
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              rakshithraj.gp11@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Montreal, Quebec
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Wanna get in touch?</b> and talk about the project
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="Message" name="message" />
            <button disabled={done}>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

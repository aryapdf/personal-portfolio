import "./ContactUs-style.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifyib3b", "template_o3xvc2p", form.current, {
        publicKey: "q_g1Gdvg-wwunbYEA",
      })
      .then(
        (result) => {
          console.log(result.text)
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="user_subject"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <button className="btn btn-secondary" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

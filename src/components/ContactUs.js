import "./ContactUs-style.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { motion as m } from "framer-motion";

const ContactUs = () => {
  const form = useRef();

  //email function for form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ifyib3b", "template_o3xvc2p", form.current, {
        publicKey: "q_g1Gdvg-wwunbYEA",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
          toast.success("Message Sent!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          document.getElementById("contactForm").reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Something wrong!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <m.div
      className="form"
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <form ref={form} onSubmit={sendEmail} id="contactForm">
        <label>Your Name</label>
        <input type="text" name="user_name" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required></input>
        <label>Subject</label>
        <input type="text" name="user_subject" required></input>
        <label>Message</label>
        <textarea
          required
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <button className="btn btn-secondary" type="submit" value="Send">
          Submit
        </button>
      </form>
      <ToastContainer />
    </m.div>
  );
};

export default ContactUs;

import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <form className="form">
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
        />

        <textarea
          className="form__input form__textarea"
          placeholder={"GeeksforGeeks is a online portal"}
          name="welcomeMessage"
          rows={3}
          cols={40}
        ></textarea>
        <input
          type="submit"
          className="form__submit"
          value={"Subscribe"}
          data-wait="Please wait..."
        />
      </form>
    </section>
  );
}

export default Contact;

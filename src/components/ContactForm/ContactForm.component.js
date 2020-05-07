import React, { useState, useEffect } from "react";

import Typography from "../../components/Typography/Typography.component";
import Button from "../../components/Button/Button.component";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const initialForm = {
    name: {
      label: "Name:",
      value: "",
      placeholder: "Enter your name...",
    },
    email: {
      label: "Email:",
      value: "",
      placeholder: "Enter your email...",
    },
    message: {
      label: "Message:",
      value: "",
      placeholder: "Enter your message...",
    },
  };
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {}, [formData]);

  const handleChange = (e) => {
    const input = e.target.getAttribute("name");
    setFormData({
      ...formData,
      [input]: {
        ...formData[input],
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    };
    console.log("submit", formValues);
  };

  const { name, email, message } = formData;
  return (
    <div className={styles["contact-form"]}>
      <form>
        <Typography element="label" htmlFor="name">
          {name.label}
        </Typography>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={name.placeholder}
          value={name.value}
          onChange={(e) => handleChange(e)}
        />

        <Typography element="label" htmlFor="email">
          {email.label}
        </Typography>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={email.placeholder}
          value={email.value}
          onChange={(e) => handleChange(e)}
        />

        <Typography element="label" htmlFor="message">
          {message.label}
        </Typography>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder={message.placeholder}
          value={message.value}
          onChange={(e) => handleChange(e)}
        />

        <Button type="submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};

export default ContactForm;

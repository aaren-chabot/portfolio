import React, { useState } from 'react';
import axios from 'axios';

import Typography from '../../components/Typography/Typography.component';
import Button from '../../components/Button/Button.component';

import styles from './ContactForm.module.scss';
import api from '../../constants';
import { formStates, initFormData, messages } from './ContactForm.Context';

const ContactForm = () => {
    const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    const input = e.target.getAttribute('name');
    let errorType;

    // Handle Errors
    if(!e.target.validity.valid) {
      errorType = 'invalid';
    } else if(e.target.value.trim().length === 0) {
      errorType = 'length';
    } else {
      errorType = '';
    }

    setFormData({
      ...formData,
      [input]: {
        ...formData[input],
        value: e.target.value.trim(),
        errorType
      }
    });
    console.log('data', formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      state: formStates.loading
    });
    const formValues = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value
    };

    axios
      .post(api.FORMSPREE, formValues)
      .then(() => {
        setFormData({
          ...initFormData,
          state: formStates.sent
        });
      })
      .catch((err) => {
        setFormData({
          ...formData,
          state: formStates.error
        });
        console.log('Message not sent', err);
      });
  };

  const { name, email, message, buttonText } = formData;
  return (
    <div className={styles['contact-form']}>
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

        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

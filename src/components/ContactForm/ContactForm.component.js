import React, { useState } from 'react';
import axios from 'axios';

import Typography from '../../components/Typography/Typography.component';
import Button from '../../components/Button/Button.component';

import styles from './ContactForm.module.scss';
import { formStates, initFormData, messages } from './ContactForm.Context';

const checkFormValid = (obj, ...fields) => {
  return !fields.filter((field) => {
    return obj[field].state !== 'valid';
  }, []).length;
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    const input = e.target.getAttribute('name');
    let inputState;

    // Handle Errors
    if (!e.target.validity.valid) {
      inputState = 'invalid';
    } else if (e.target.value.trim().length === 0) {
      inputState = 'length';
    } else {
      inputState = 'valid';
    }

    if (checkFormValid(formData, 'name', 'email', 'message')) {
      setFormData({
        ...formData,
        state: formStates.valid,
        [input]: {
          ...formData[input],
          value: e.target.value.trim(),
          state: inputState
        }
      });
    } else {
      setFormData({
        ...formData,
        state: formStates.initial,
        [input]: {
          ...formData[input],
          value: e.target.value.trim(),
          state: inputState
        }
      });
    }
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
      .post(process.env.REACT_APP_FORMSPREE, formValues)
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

  const { name, email, message, buttonText, state } = formData;
  return (
    <div className={styles['contact-form']}>
      <form>
        <Typography element="label" htmlFor="name">
          {name.label}
        </Typography>
        {messages.name[name.state] && (
          <Typography warning="error" className="warning_error">
            {messages.name[name.state]}
          </Typography>
        )}
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
        {messages.email[email.state] && (
          <Typography warning="error" className="warning_error">
            {messages.email[email.state]}
          </Typography>
        )}
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
        {messages.message[message.state] && (
          <Typography warning="error" className="warning_error">
            {messages.message[message.state]}
          </Typography>
        )}
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder={message.placeholder}
          value={message.value}
          onChange={(e) => handleChange(e)}
        />

        {messages.form[state] && (
          <Typography align="center">{messages.form[state]}</Typography>
        )}
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          isDisabled={state !== 'valid'}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

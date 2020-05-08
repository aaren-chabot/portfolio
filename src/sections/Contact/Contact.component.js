import React from 'react';

import Typography from '../../components/Typography/Typography.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import Spacer from '../../components/Spacer/Spacer.component';

import styles from './Contact.module.scss';
import img from '../../assets/contact-image.png';

const Contact = () => {
  const { contact, title, left, right } = styles;
  return (
    <div className={`contact ${contact}`}>
      <Typography className={title} element="h2">
        Contact Me
      </Typography>
      <div className={left}>
        <Typography pSize="lg">Let's discuss your next project!</Typography>
        <Typography>
          Feel free to contact me through this form. Don’t like forms? Email me
          at chabot.aaren@gmail.com. I look forward to hearing from you.
        </Typography>
        <Spacer size="md"></Spacer>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={right}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

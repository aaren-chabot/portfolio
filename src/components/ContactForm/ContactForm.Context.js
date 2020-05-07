export const formStates = {
  initial: 'initial',
  loading: 'loading',
  sent: 'sent',
  error: 'error'
};

export const initFormData = {
    state: formStates.initial,
    buttonText: 'Send',
    name: {
      value: '',
      label: 'Name:',
      placeholder: 'Enter your name...',
      errorType: ''
    },
    email: {
      value: '',
      label: 'Email:',
      placeholder: 'Enter your email...',
      errorType: ''
    },
    message: {
      value: '',
      label: 'Message:',
      placeholder: 'Enter your message...',
      errorType: ''
    }
  };

  export const messages = {
    form: {
      sending: 'Sending...',
      sent: 'Thank you for reaching out. I will respond withing 48 hours.',
      error: 'There was an error. Please try again later',
      initial: ''
    },
    name: {
      length: 'You must enter your name to submit.'
    },
    email: {
      invalid: 'Please enter a valid e-mail.',
      length: 'Please enter your e-mail.'
    },
    message: {
      length: 'Please provide a reason for reaching out.'
    }
  };

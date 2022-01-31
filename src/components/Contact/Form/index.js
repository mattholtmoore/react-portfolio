import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'
import '../Form/styles.css';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('*Email or Name is invalid. Please fill out all inputs. Thanks!');
      return;
    } else {
      setErrorMessage('');
    }

    alert(`Hey, ${name}! So nice to meet you.`);
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container-fluid p-3">
      <p>Let's Connect!</p>
      <form className="form p-3">
        <h4
          className="text-light mt-4">Name:
        </h4>
        <input
          className="fs-5 border border-info p-2"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="What's your name?"
        />
        <h4 className="text-light mt-4">Email:</h4>
        <input
          className="fs-5 border border-info p-2"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="What's your email?"
        />
        <h4 className="text-light mt-4">Message:</h4>
        <input
          className="fs-5 border border-info p-2"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Send me a message!"
        />
        <button
          className="btn btn-info btn-lg mt-5 fw-bold "
          type="button"
          onClick={handleFormSubmit}
          onChange={handleInputChange}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-danger fs-5">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

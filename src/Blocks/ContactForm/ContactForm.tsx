import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../Components/Spinner/Spinner';
import Button from '../../Components/Buttons/Button';

export function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setSending] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formData.name !== '' && formData.email !== '' && formData.subject !== '' && formData.message !== '') setButtonDisabled(false);
  }, [formData, isButtonDisabled])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    value.length < 1 && setButtonDisabled(true);
  };

  const sendForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
      setError(true);
      return;
    }

    setSending(true);

    try {
      await axios.post('https://formspree.io/f/mgebwvrj', formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSending(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setError(false);
      }, 2000);
    } catch (error) {
      setError(true);
      console.error(error);
      setSending(false);
    }
  };

  return (
    <div>
      <h2 className='visually-hidden'>Contact form</h2>
      <div className="contact_wrapper">

        {!isSuccess && (
          <div className="contact_form-wrapper">
            {isSending ? (
              <div style={{display: 'flex', justifyContent: 'center', padding: '60px 0'}}>
                <Spinner size={'40'} color={'#000c24'} />
              </div>
            ) : (
              <form className="contact_form" action="https://formspree.io/f/mgebwvrj" method="POST">
                <label className={`contact_item ${isError && 'contact_item--error'}`} htmlFor="name">
                  <input
                    className={`contact_field ${isError && formData.name.length < 2 && 'contact_field--error'}`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    minLength={2}
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label className={`contact_item ${isError && 'contact_item--error'}`} htmlFor="email">
                  <input
                    className={`contact_field ${isError && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) && 'contact_field--error'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    minLength={5}
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="contact_item contact_item--wide" htmlFor="subject">
                  <input
                    className="contact_field"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="contact_item contact_item--wide" htmlFor="message">
                  <textarea
                    className="contact_field contact_field--message"
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </label>
                <button className="button" type="submit" disabled={isButtonDisabled} onClick={sendForm}>
                  Send message!
                </button>
                {/* <Button/> */}
                {/* <Button label='Send message!' onClick={() => sendForm}/> */}
                <p className={`contact_error-message ${isError && (formData.name.length < 2 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) && 'contact_error-message--opened'}`}>Please fill in the required fields.</p>
              </form>
            )}
          </div>
        )}
        {isSuccess && (
          <p className="contact_success-message">Successfully sent!</p>
        )}
      </div>
    </div>
  );
}

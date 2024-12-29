import React, { useState } from 'react';
import * as styles from '../styles/contactForm.module.css';
// import PopUp from './popupBox';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true); // Set loading state to display visual feedback

    // try {
    //   const response = await fetch('https://detrace.systems/pilot/website/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' }, // Set content type
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setPopupMessage('Your message has been sent successfully!'); // Success message
    //   } else {
    //     const errorData = await response.json();
    //     setPopupMessage(errorData.message || 'An error occurred. Please try again later.');
    //   }
    // } catch (err) {
    //   setPopupMessage('An error occurred. Please try again later.');
    // } finally {
    //   setIsLoading(false); // Reset loading state after request completes
    // }

  //   setShowPopup(true);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <div>
      <form>
        <div className={styles.form}>
          <div className={styles.columnForm}>
            <div>
              <label htmlFor="name">Name:</label>
            </div>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.columnForm}>
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.columnForm}>
            <div>
              <label htmlFor="message">Message:</label>
            </div>
            <div>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : <b>SUBMIT</b>}
          </button>
        </div>
      </form>
      {/* {showPopup && <PopUp message={popupMessage} onClose={handleClosePopup} />} */}
    </div>
  );
}

export default ContactForm;

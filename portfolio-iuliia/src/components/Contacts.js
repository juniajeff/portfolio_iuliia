import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
      }
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form action="https://formspree.io/f/manyyley" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      )}

      <div className="contact-info">
        <h3>Find me online</h3>
        <ul>
          <li>
            <a href="https://github.com/juniajeff" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub: juniajeff
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iuliia-korennova/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn: Iuliia Korennova
            </a>
          </li>
          <li>
            <a href="https://medium.com/@juniajeff" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i> Medium: Junia Jeff
            </a>
          </li>
          <li>Email: juniajeff@gmail.com</li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;

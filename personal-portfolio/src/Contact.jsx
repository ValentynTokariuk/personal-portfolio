import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p>Or reach out directly: <a href="mailto:example@example.com">example@example.com</a></p>
      <p>Connect on: 
        <a href="https://github.com/yourusername" target="_blank">GitHub</a> | 
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
      </p>
    </section>

  );
};

export default Contact;

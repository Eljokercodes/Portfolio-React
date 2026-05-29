import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './contacts.css';

const contactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: 'Email',
    info: 'abdelrhman2245.mahmoud@gmail.com',
    link: 'mailto:abdelrhman2245.mahmoud@gmail.com'
  },
  {
    id: 2,
    icon: <RiMessengerFill />,
    title: 'Messenger',
    info: 'abdelrhman2245.mahmoud@gmail.com',
    link: '#'
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: 'WhatsApp',
    info: '#',
    link: '#'
  }
];

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_259vn7t',
      'template_x8bxyut',
      form.current,
      'JBoChTvPjcz1EyqFs'
    )
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">

        <div className="contact-options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact-option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" rows="10" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

      </div>
      
    </section>
  );
}

export default Contacts;
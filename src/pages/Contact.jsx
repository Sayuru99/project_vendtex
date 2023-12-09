import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactUsForm';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto mt-12 p-8">
      <h1 className="text-4xl font-bold mb-6" data-aos="fade-up">Contact Us</h1>

      <ContactForm />

      <div className="flex flex-col md:flex-row" data-aos="fade-up">
        <div className="md:w-1/2 pr-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823076.7583533955!2d42.8374085283829!3d36.30882471650936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722c322eee95f%3A0x9ad17e6b21d0bcb5!2sJustice%20Tower!5e0!3m2!1sen!2slk!4v1702046601285!5m2!1sen!2slk"
              width="450"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <p className="text-lg mb-4">
              Unit 1507F, Justice Tower, Mosul Rd, Erbil (44001), Iraq
            </p>
          </div>

          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p className="text-lg mb-2">
              Phone: <a href="tel:+9647505999111">+964 750 599 9111</a>
            </p>
            <p className="text-lg mb-2">
              Phone: <a href="tel:+9647510100250">+964 751 010 0250</a>
            </p>
            <p className="text-lg mb-2">
              Email: <a href="mailto:info@tex-iq.com">info@tex-iq.com</a>
            </p>
          </div>

          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Business Inquiries</h2>
            <p className="text-lg mb-2">
              For business inquiries, please contact our sales team at{' '}
              <a href="mailto:sales@tex-iq.com">sales@tex-iq.com</a>
            </p>
          </div>

          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Customer Support</h2>
            <p className="text-lg mb-2">
              For customer support, reach out to our support team at{' '}
              <a href="mailto:support@tex-iq.com">support@tex-iq.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

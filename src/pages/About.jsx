import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutTexIraq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto mt-12 p-8">
      <h1 className="text-4xl font-bold mb-6" data-aos="fade-up">ABOUT VENDTEX IRAQ</h1>

      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="text-lg mb-4">
          A Technology Company established in 2022 by two visionary Business Experts, who are committed to leveraging Technology utilization in the region and contributing to the development of the Iraqi society, TEx embarked on its journey in Erbil City, Iraq. From its humble beginnings, the company rapidly expanded its operations, establishing
        </p>
      </div>

      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg mb-2">
            <strong>ConsulTEx:</strong> Strategic business development consultancy and outsourcing services.
          </li>
          <li className="text-lg mb-2">
            <strong>VendTEx:</strong> Vending machine distribution, operation, and support for small businesses.
          </li>
          <li className="text-lg mb-2">
            <strong>SofTEx:</strong> Innovative Software development and digital solutions for diverse business needs.
          </li>
          <li className="text-lg mb-2">
            <strong>TradTEx:</strong> Specializing in general trading and customers special needs.
          </li>
        </ul>
      </div>

      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At TEx, we understand the importance of accessibility and flexibility in fostering strong partnerships. We pride ourselves on being more than just service providers; we are your dedicated collaborators, ready to adapt and align with your unique requirements. Our team of experts is not confined by office hours or locations; we are wherever you need us to be.
        </p>
      </div>

      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
          To foster the optimal development of the local market, we aspire to achieve unparalleled excellence in all the diverse divisions in which we operate. By maximizing the potential of our expertise and technologies, we aim to create perfect outcomes that contribute to the growth and prosperity of the communities and businesses we serve.
        </p>
      </div>
    </div>
  );
};

export default AboutTexIraq;

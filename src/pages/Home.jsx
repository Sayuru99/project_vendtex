import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MachineList from "../components/machineList";
import LeftHeadingRightImage from "../components/featureCard";

const carouselItems = [
  {
    image:
      "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/header4.webp",
    text: "Uniqueness makes the difference",
  },
  {
    image:
      "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/slider-3.webp",
    text: "The art of simplicity",
  },
  {
    image:
      "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/header1.webp",
    text: "A matter of taste",
  },
  {
    image:
      "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/header2.webp",
    text: "The excellence of things that simply work.",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const heroTextStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '5xl',
    color: 'white',
  };


  return (
    <>
      <div>
        <div className="relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="relative h-screen">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                <p  className="text-5xl"
                    style={heroTextStyle}
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="800"
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="container mx-auto mt-8 p-4 pl-16 pr-16">
          <p
            className="tracking-wide text-5xl font-medium text-gray-900 dark:text-black font-poppins"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500"
            style={{ fontFamily: "Poppins" }}
          >
            Welcome to <b>VendTEx</b>, where convenience meets innovation. Our
            sleek vending machines redefine daily moments. From refreshing
            drinks to tasty snacks, VendText brings the future of vending to
            you.
          </p>
        </div>
        <div className="container mx-auto mt-8 p-4">
          <p
            className="tracking-wide text-2xl font-medium text-gray-900 dark:text-black p-4"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            Discover perfection with our premium vending solutions. The sleek
            Harmony Series and compact SwiftServe cater to your needs.
            Experience convenience with VendText.
          </p>
        </div>
        <div className="container mx-auto mt-8 p-4">
          <div
            className="text-center pb-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-black pb-8"
              data-aos="fade-down"
            >
              Discover Our Vending Machines
            </h2>
            <p className="text-lg" data-aos="fade-down">
              Explore a range of modern and innovative vending solutions.
            </p>
          </div>

          <MachineList />
        </div>
        <LeftHeadingRightImage
          heading="Simply
  exquisite"
          smallText="Intelligent, innovative, friendly & attractive automation solutions."
          imageUrl=" https://www.rheavendors.com/en/wp-content/uploads/2022/11/Rhea-Vendors-Home-Discover-Evolution-3-200x225.jpg"
        />

        <div className="container mx-auto mt-8 p-4">
          <div
            className="text-center pb-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-black pb-8"
              data-aos="fade-down"
            >
              Our Vending Machine Features
            </h2>
            <div className="flex flex-wrap justify-center">
              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <h3 className="text-xl font-bold mb-2">Harmony Series</h3>
                <p className="text-lg">
                  The Harmony Series offers a perfect blend of modern design and
                  advanced technology. Enjoy a seamless vending experience with
                  a wide range of products.
                </p>
              </div>
              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <h3 className="text-xl font-bold mb-2">SwiftServe</h3>
                <p className="text-lg">
                  SwiftServe is designed for efficiency and convenience. Compact
                  yet powerful, it delivers a quick and easy solution for your
                  vending needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 p-4">
          <div
            className="text-center pb-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h2
              className="text-3xl font-bold text-gray-900 dark:text-black pb-8"
              data-aos="fade-down"
            >
              Explore Our Vending Solutions
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                <source
                  src="https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/video/en-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

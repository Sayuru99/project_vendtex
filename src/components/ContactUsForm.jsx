const ContactForm = () => {
  const handleClick = () => {
    const subject = encodeURIComponent('Inquiry from vendtex website');
    const email = encodeURIComponent('info@vendtex.com');
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  return (
    <div className="container mx-auto mt-12 p-8">

      <form className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded-md"
            placeholder="John Snow"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border rounded-md"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleClick}
        >
          Send
        </button>
      </form>

      <p className="text-gray-600 text-sm">
        By clicking "Send," your default email application will open with a pre-filled subject and
        recipient email address.
      </p>
    </div>
  );
};

export default ContactForm;

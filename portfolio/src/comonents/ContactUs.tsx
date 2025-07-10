const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          Have a project in mind, need a developer for your team, or just want
          to asked any Question? I’d love to hear from you!
        </p>

        <div className="flex flex-col gap-4 items-center ">
          <a
            href="mailto:maviasajjadabbasi@gmail.com?subject=contact"
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition"
          >
            📧email me at: maviasajjadabbasi@gmail.com
          </a>

          <a
            href="https://wa.me/923131519954"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-green-600 transition"
          >
            💬 Message on WhatsApp
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import React from 'react';

const Contact = () => {
  const handleSubmit = () => {
    // Form submission logic
    window.location.href = "mailto:aleaxmuiruri@gmail.com?subject=Contact Us&body=Name: [NAME]%0D%0ALast Name: [LAST NAME]%0D%0ACompany: [COMPANY]%0D%0APhone: [PHONE]%0D%0AEmail: [EMAIL]%0D%0ALinks to Music: [LINKS TO MUSIC]%0D%0ATell Us About Your Project: [TELL US]%0D%0A";
  };

  return (
    <div id="contact" className="container mx-auto mt-8 flex">
         <div className="">
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a project in mind? Fill out the form below and one of our team members will get back to you.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                 <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
          <input type="text" id="name" name="name" required className="" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company*</label>
          <input type="text" id="company" name="company" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone*</label>
          <input type="tel" id="phone" name="phone" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
          <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="linksToMusic" className="block text-gray-700 text-sm font-bold mb-2">Links to Music (New or Previously Released)</label>
          <input type="text" id="linksToMusic" name="linksToMusic" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="tellUs" className="block text-gray-700 text-sm font-bold mb-2">Tell Us a Bit About Your Project. Let's Talk*</label>
          <textarea id="tellUs" name="tellUs" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Your Message</button>
        </div>
      </form>
              </div>
            </div>
          </div>
        </section>
      {/* <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
          <input type="text" id="name" name="name" required className="" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company*</label>
          <input type="text" id="company" name="company" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone*</label>
          <input type="tel" id="phone" name="phone" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
          <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="linksToMusic" className="block text-gray-700 text-sm font-bold mb-2">Links to Music (New or Previously Released)</label>
          <input type="text" id="linksToMusic" name="linksToMusic" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="tellUs" className="block text-gray-700 text-sm font-bold mb-2">Tell Us a Bit About Your Project. Let's Talk*</label>
          <textarea id="tellUs" name="tellUs" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Your Message</button>
        </div>
      </form> */}
      </div>
      <div className="w-1/2 pl-4">
        {/* Content for the other half of the page */}
      </div>
    </div>
  );
};

export default Contact;

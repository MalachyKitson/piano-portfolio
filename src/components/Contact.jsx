import React, { useState, } from 'react';
import heroImage from '../assets/DSC06998.webp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  const email = import.meta.env.VITE_CONTACT_EMAIL || "Email Not Available";

  const handleEmailClick = (e) => {
    if (!import.meta.env.VITE_CONTACT_EMAIL) {
      e.preventDefault();
      console.error("Email address not configured");
      alert("Email address is not configured. Please try again later.");
    }
  };

  return (
<div className="flex flex-col min-h-screen bg-[var(--bgColour)] text-[var(--textColour)] pt-20">
        <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 p-12 max-w-screen-lg mx-auto">
                {/* Image Wrapper */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="aspect-square w-full max-w-[500px]">
                      <img
                        src={heroImage}
                        alt="Portrait"
                        loading="lazy"
                        className="w-full h-full object-cover border-4 border-[var(--textColour)]"
                      />
                    </div>
                  </div>

                  {/* Form Wrapper */}
                  <div className="w-full h-full md:w-1/2 flex justify-center">
                    <div className="md:aspect-square w-full max-w-[500px] flex sm:items-center items-left sm:justify-center justify-start">
                      <div className="w-full px-4 max-w-sm">
                        <p className="text-md md:text-sm text-[var(--keyColour)] font-bold mb-4 uppercase">
                          CONTACT ME. CONTACT ME. CONTACT ME.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                              <label htmlFor="firstName" className="block text-sm uppercase mb-2">
                                First Name
                              </label>
                              <input
                                name="firstName"
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border border-[var(--textColour)] text-[var(--textColour)] rounded-md focus:outline-none focus:border-[var(--keyColour)] py-2 px-3 transition-colors duration-200"
                              />
                            </div>
                            <div className="w-full">
                              <label htmlFor="lastName" className="block text-sm uppercase mb-2">
                                Last Name
                              </label>
                              <input
                                name="lastName"
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border border-[var(--textColour)] text-[var(--textColour)] rounded-md focus:outline-none focus:border-[var(--keyColour)] py-2 px-3 transition-colors duration-200"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm uppercase mb-2">
                              Email
                            </label>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-transparent border border-[var(--textColour)] text-[var(--textColour)] rounded-md focus:outline-none focus:border-[var(--keyColour)] py-2 px-3 transition-colors duration-200"
                            />
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm uppercase mb-2">
                              Write a Message
                            </label>
                            <textarea
                              name="message"
                              id="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows="4"
                              className="w-full bg-transparent border border-[var(--textColour)] text-[var(--textColour)] rounded-md focus:outline-none focus:border-[var(--keyColour)] py-2 px-3 transition-colors duration-200"
                            />
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="px-6 py-2 border border-[var(--textColour)] uppercase text-sm rounded-md focus:outline-none hover:border-[var(--keyColour)] hover:bg-[var(--keyColour)] focus:border-[var(--textColour)] py-2 px-3 transition-colors duration-200"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
                      {/* Footer Text */}
                      <div className="mt-auto bg-[var(--bgColour)] text-center border-[var(--textColour)] w-full pb-8 md:pb-30">


  <a
    onClick={handleEmailClick}
    href={`mailto:${email}`}
    className="relative font-light text-sm cursor-pointer"
  >
    <span>email: {email}</span>
  </a>
</div>

    </div>
  );
}

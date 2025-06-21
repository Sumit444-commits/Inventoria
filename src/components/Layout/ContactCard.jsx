import React from 'react'
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

const ContactCard = ({phone,address,email}) => {
    const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
   <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-md rounded-lg p-8">
        {/* Contact Form */}
        <form action={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <Input
              type="text"
              name="username"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              name="email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Subject
            </label>
            <Input
              type="text"
              name="subject"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <TextArea
              rows="5"
              name="message"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Message"
              required
            ></TextArea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have a question about
              features, trials, pricing, or anything else — our team is ready to
              answer all your questions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <p className="text-blue-900">{email}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">Phone</h3>
            <p className="text-blue-900">{phone}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">Address</h3>
            <p className="text-blue-900">
              {address}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ContactCard
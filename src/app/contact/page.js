'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  Label,
  TextInput,
  Textarea
} from 'flowbite-react';

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessageSent(true);
      alert("✅ Message sent successfully!");
    }, 500);
    e.target.reset();
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-12 pb-16 bg-gradient-to-b from-sky-200 to-white">
      <h1 className="text-3xl md:text-4xl font-bold text-sky-600 mb-10 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* ✅ Sky-blue Form Card */}
        <Card className="max-w-md w-full mx-auto shadow-lg rounded-lg bg-sky-100">
          <h2 className="text-xl font-bold text-sky-700 text-center mb-2">
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="Name" className="text-sky-800" />
              <TextInput id="name" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="email" value="Email" className="text-sky-800" />
              <TextInput id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="message" value="Message" className="text-sky-800" />
              <Textarea id="message" placeholder="Type your message..." rows={4} required />
            </div>
            <Button
              type="submit"
              size="xs" // ✅ smaller button
              className="bg-black hover:bg-sky-700 w-fit mx-auto px-4 py-1"
            >
              Send
            </Button>

            {messageSent && (
              <p className="text-green-600 font-semibold text-center mt-2">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </Card>

        {/* ✅ Address + Map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Address</h2>
            <p>Kaythri Clone Office</p>
            <p>123 Business Road, Solapur, Maharashtra</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: contact@kaythriclone.com</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.744413935846!2d75.9211796752049!3d17.65991899644622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbbdf64e1ab3%3A0x5e41c1e68db06f29!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690970166947!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

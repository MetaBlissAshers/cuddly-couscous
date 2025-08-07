"use client";

import { useState } from "react";

export default function UploadPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a network request for realism
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-100">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-velvet-plum via-purple-500 to-soft-rose"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-soft-rose/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-velvet-plum/10 rounded-full blur-3xl"></div>

        {!submitted ? (
          <div className="relative z-10 animate-fade-in">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-gradient-to-br from-velvet-plum to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6 transform transition-transform hover:scale-105 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-cream-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3.75m-3-3.75-3 3.75M19.5 3h.008v.008h-.008V3ZM4.5 3h.008v.008h-.008V3ZM12 3v13.5m9.228 1.838a7.5 7.5 0 0 0 .348-11.455 7.45 7.45 0 0 0-11.586-2.583 7.503 7.503 0 0 0-7.79 5.86c.004.606.082 1.206.233 1.785a7.5 7.5 0 0 0 9.213 6.398Z" />
                </svg>
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-midnight-blue tracking-tight">
                Become an Uploader
              </h2>
              <p className="mt-2 text-sm text-slate-gray">
                Join our exclusive community of content creators and share your high-quality videos with the world.
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-velvet-plum focus:border-transparent transition-all duration-300 sm:text-sm"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-midnight-blue hover:bg-velvet-plum focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-velvet-plum transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-soft-rose group-hover:text-white transition-colors duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </span>
                  Apply Now
                </button>
              </div>
              
              <div className="text-xs text-center text-gray-400 mt-4">
                Valid business email required for verification.
              </div>
            </form>
          </div>
        ) : (
          <div className="relative z-10 text-center animate-fade-in space-y-6 py-8">
            <div className="mx-auto h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-midnight-blue">
              Thank You for Your Interest
            </h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left rounded-r-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    We currently do not accept new uploaders. When we do, we will inform you at <span className="font-semibold">{email}</span>.
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-slate-gray hover:text-velvet-plum underline transition-colors"
            >
              Back to form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

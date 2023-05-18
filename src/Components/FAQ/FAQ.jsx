import React from "react";

const FAQ = () => {
  return (
    <>
      <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <h1 className="mb-8 text-xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 gap-0 text-sm md:grid-cols-2 md:gap-5">
          <div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq7"
                aria-expanded="false"
              >
                <svg
                  className="{ 'rotate-90': open }"
                  class="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                How to get a discount in my packages?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq7"
              >
                We often provide you with offers. Please turn on your notifications to get notified about the weekly offers.
              </div>
            </div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq8"
                aria-expanded="false"
              >
                <svg
                  className="{ 'rotate-90': open }"
                  class="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                I can't find the information that I'm looking for on the website.What should I do?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq8"
              >
                First, read the Faq's below to see if your question is answered.If you are unable to find what your looking for, email us at info@justgo.com. 
              </div>
            </div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq9"
                aria-expanded="false"
              >
                <svg
                  classNameName="{ 'rotate-90': open }"
                  className="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                How can I view in my language?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq9"
              >
                We invite you to view the website from the market with whose language you are most familiar.Please keep in mind that some information on these site has been fitted just for the markets listed above in main navigation.
              </div>
            </div>
          </div>
          <div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq10"
                aria-expanded="false"
              >
                <svg
                  classNameName="{ 'rotate-90': open }"
                  className="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                Can i cancel my booking?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq10"
              >
                If your booking is non-refundable youncannot cancel. If your booking is partially refundale, check your confirmation email for the cancellation costs. 
              </div>
            </div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq11"
                aria-expanded="false"
              >
                <svg
                  classNameName="{ 'rotate-90': open }"
                  className="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                When will I receive my booking confirmation?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq11"
              >
                For activities with instant confirmation, you will receive the mail within 5 minutes.For activities without instant confirmation, you will receive the mail within 24-48 hours.
              </div>
            </div>
            <div x-data="collapse()" className="px-4 mb-4 bg-gray-100 rounded">
              <button
                x-spread="trigger"
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                role="button"
                aria-controls="faq12"
                aria-expanded="false"
              >
                <svg
                  classNameName="{ 'rotate-90': open }"
                  className="flex-none w-4 h-4 mr-2 transition transform"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                Why JustGo?
              </button>
              <div
                x-spread="collapse"
                x-cloak
                className="pb-5 ml-6 text-gray-700"
                id="faq12"
              >
                Established in 2022, JustGo has since positioned itself as one of the leading companies, providing great offers and a seamless online booking experience to many of its customers.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

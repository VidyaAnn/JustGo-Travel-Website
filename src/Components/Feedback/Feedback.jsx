import React from "react";

const Feedback = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <img
              class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p class="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Discover Enchanting Destinations
              </h1>

              <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “ From sun-kissed beaches to towering mountain ranges, ancient historical sites to vibrant modern cities, our travel experts have carefully curated a selection of breathtaking destinations that will captivate your imagination. Whether you're seeking relaxation, adventure, or cultural immersion, we have the perfect destination for you.. ”
              </p>

              {/* <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Marketing Manager at Stech
              </p> */}
              <button className="btn mt-4 bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-4 w-48"> Book now</button>

              
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Feedback;

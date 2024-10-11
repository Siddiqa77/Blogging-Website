import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section className=" text-gray-100 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-[35] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[90px]">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-100">
              Thank you for visiting Blogging Tech! We’re always excited to
              connect with our readers, fellow tech enthusiasts, and
              collaborators. Whether you have a question, feedback, or just want
              to say hello, we’d love to hear from you.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-100 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] h-32 text-gray-100 outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <Link href="">
                  <button className="flex mx-auto text-black font-bold bg-white border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 hover:text-gray-100 rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    Send Message
                  </button>
                </Link>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-[#017ee0] text-lg">Example@gmail.com</a>
                <p className="leading-normal my-5">Follow Me</p>

                {/* svg */}

                <nav className="list-none mb-4 inline-flex gap-2 justify-center">
                  <li>
                    <a
                      href="https://github.com/"
                      className=" text-gray-100  hover:text-2xl  hover:text-gray-900"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="www.linkedin.com/in/siddiqa-badar-49a5692b5"
                      className="text-gray-100  hover:text-2xl  hover:text-gray-900"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="www.linkedin.com/in/siddiqa-badar-49a5692b5"
                      className="text-gray-100  hover:text-2xl  hover:text-gray-900"
                    >
                      {" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/siddiqa04"
                      className="text-gray-100  hover:text-2xl  hover:text-gray-900"
                    ></a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

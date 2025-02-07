import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_hcolugm",
        "template_p0wvapy",
        {
          from_name: form.name,
          to_name: "Salekin",
          from_email: form.email,
          to_email: "abir045@gmail.com",
          message: form.message,
        },
        "8hN5PSLDpnA2_QvIu"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you , I will get back to you as soon as possible");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Something Went Wrong");
      };
  };

  return (
    <div className="xl:mt-12 lg:flex-row  flex  flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact. </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col"
        >
          {/* name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-noe border-none font-medium"
            />
            {/* email */}

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-noe border-none font-medium"
              />
            </label>

            {/* message */}

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-noe border-none font-medium"
              />
            </label>
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-2"
            type="submit"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="card bg-black-100   shadow-xl">
          <div className="card-body">
            <p className={styles.sectionHeadText}>Get in touch</p>
            <p className="text-white mt-4 flex gap-2">
              <span>
                <FaLocationDot />
              </span>{" "}
              Dhaka, Bangladesh
            </p>
            <p className="text-white mt-2 flex gap-2 ">
              <span>
                <MdEmail />{" "}
              </span>{" "}
              abir045@gmail.com
            </p>
            <p className="text-white mt-2 flex gap-2">
              {" "}
              <span>
                <FaPhone />
              </span>{" "}
              +8801300663239
            </p>
            <p className="text-white mt-2 flex gap-2">
              {" "}
              <span>
                <FaWhatsapp />
              </span>{" "}
              +8801300663239
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

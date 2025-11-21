// src/scenes/contactUs/index.tsx
import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Ready to start your fitness journey? Get in touch with us today to learn more about our memberships, 
            schedule a tour of our facilities, or ask any questions you may have. Our team is here to help you 
            achieve your fitness goals and become the best version of yourself.
          </p>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/your-email@example.com" // Replace with your actual email
              method="POST"
            >
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="YOUR NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Maximum length is 100 characters."}
                </p>
              )}

              <input
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="YOUR EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Please enter a valid email address."}
                </p>
              )}

              <textarea
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="YOUR MESSAGE"
                rows={4}
                cols={50}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Maximum length is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
              >
                GET STARTED
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <div className="bg-primary-100 p-8 rounded-lg">
                <h4 className="font-bold text-lg mb-4">CONTACT INFORMATION</h4>
                <p className="my-2">📍 123 Fitness Street, Gym City, GC 12345</p>
                <p className="my-2">📞 (555) 123-4567</p>
                <p className="my-2">✉️ info@evogym.com</p>
                <p className="my-2">🕒 Mon-Fri: 5:00 AM - 11:00 PM</p>
                <p className="my-2">🕒 Sat-Sun: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
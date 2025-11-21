// src/scenes/ourClasses/index.tsx
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with our comprehensive weight training programs. Perfect for all fitness levels, from beginners to advanced lifters.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, balance, and mental clarity through our guided yoga sessions. Suitable for all experience levels in a peaceful environment.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core with targeted exercises that improve posture, stability, and overall athletic performance. Transform your midsection with focused training.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Combine fitness with excitement in our outdoor adventure classes. Experience functional training in dynamic environments that challenge both body and mind.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "High-energy group workouts that combine cardio and strength training for maximum results. Perfect for those looking to improve overall fitness and endurance.",
    image: image5,
  },
  {
    name: "Personal Training",
    description:
      "One-on-one sessions with certified trainers who create customized workout plans tailored to your specific goals, fitness level, and schedule.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Discover our diverse range of fitness classes designed to meet every 
              fitness level and goal. From high-intensity workouts to mindful movement 
              practices, our expert instructors will guide you through each session 
              to ensure proper form, maximize results, and keep you motivated throughout 
              your fitness journey.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
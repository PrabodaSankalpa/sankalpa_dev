"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const Testimonial = () => {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Testimonials</SectionHeading>
      <p className="mb-3">
        Hear what some of{" "}
        <Link href="https://www.fiverr.com/star_studio_lk" target="_blank">
          <span className="font-bold underline">My Fiverr</span>
        </Link>{" "}
        clients had to say about their experience
      </p>

      <div className="flex flex-col items-center">
        <TestimonialCard
          imageURL="https://flagsapi.com/US/flat/64.png"
          name="Mahmoud "
          testimonialDescription="'Thank you for your hard work and professionalism. I asked for help on my chrome extension, and he gave me more than I asked for. Very smart and talented developer, and he taught me how to do it as well.'"
        />
        <TestimonialCard
          imageURL="https://flagsapi.com/IN/flat/64.png"
          name="Rohit"
          testimonialDescription="'If you are looking for a developer, he is a go-to choice for that. I'm glad i found him on fiverr, will work with him again.'"
        />
        <TestimonialCard
          imageURL="https://flagsapi.com/ID/flat/64.png"
          name="Afritan"
          testimonialDescription="'Quite good at solving problems, hopefully we can work together again next time'"
        />
      </div>
    </motion.section>
  );
};

const TestimonialCard = ({
  imageURL,
  name,
  testimonialDescription,
}: {
  imageURL: string;
  name: string;
  testimonialDescription: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mx-2 my-2 sm:mx-4 sm:my-4 sm:w-full">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col justify-between h-full">
          <p className="text-lg font-medium mb-4">{testimonialDescription}</p>
          <div className="flex flex-col items-center justify-center">
            <img
              src={imageURL}
              alt={name}
              className="w-10 h-10 rounded-full mb-2"
            />
            <p className="text-sm font-medium text-center">
              {name}
              <br />
              <span className="font-thin">Fiverr Client</span>
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonial;

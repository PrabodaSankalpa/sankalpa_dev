"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm <span className="font-bold">Praboda Sankalpa</span>, a 3rd
        year{" "}
        <span className="font-bold">
          Bachelor of Information and Communication Technology undergraduate{" "}
        </span>
        with a passion for{" "}
        <span className="font-bold">Full-Stack web development</span>. I'm
        fueled by the challenge of crafting beautiful and functional web
        experiences. For the past couple of years, I've been freelancing on
        Fiverr, a platform that connects businesses and individuals with skilled
        freelancers like myself. My skillset spans the front-end and back-end,
        with expertise in{" "}
        <span className="font-bold">
          React, Next.js, Node.js, and a strong foundation in Javascript,
          Typescript, Python, PHP, and SQL/NoSQL databases
        </span>
        . Comfortable navigating the world of{" "}
        <span className="font-bold">Linux</span>, I'm also intrigued by the
        potential of <span className="font-bold">cloud technologies</span>.
        Welcome to my portfolio, where you'll find a glimpse into my work and
        what I'm capable of!
      </p>
    </motion.section>
  );
}

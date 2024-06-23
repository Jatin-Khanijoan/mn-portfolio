"use client"
import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { motion, useInView } from "framer-motion";

const workData = [
  {
    title: "GDSC Techfest Mumbai 2024",
    role: "Event Organizer",
    content:
      "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.",
    button: "Know more",
  },
  {
    title: "GDSC Techfest Mumbai 2024",
    role: "Event Organizer",
    content:
      "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.",
    button: "Know more",
  },
  {
    title: "GDSC Techfest Mumbai 2024",
    role: "Event Organizer",
    content:
      "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.",
    button: "Know more",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="lg:mt-8" id="work">
      <div className="min-h-screen">
        <h1 className="text-5xl font-bold accentColor mt-20 mb-4 md:mb-6">
          - work
        </h1>
        <ul ref={ref}>
          {workData.map((item, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="mb-6"
            >
              <Card
                title={item.title}
                role={item.role}
                content={item.content}
                button={item.button}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;

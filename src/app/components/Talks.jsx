"use client";

import React, { useRef } from 'react';
import TalksCard from './TalksCard';
import { motion, useInView } from 'framer-motion';

const talksData = [
    {
        title: "API 101: API Fundamentals",
        venue: "Vidyalankar Institute of Technology", 
        content: "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.", 
        speaker: "Manas Nanivadekar", 
        date: "March 24, 2024 - 11:00 AM",
    },
    {
        title: "API 101: API Fundamentals",
        venue: "Vidyalankar Institute of Technology", 
        content: "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.", 
        speaker: "Manas Nanivadekar", 
        date: "March 24, 2024 - 11:00 AM",
    },
    {
        title: "API 101: API Fundamentals",
        venue: "Vidyalankar Institute of Technology", 
        content: "As the organizer, I led a talented team to successfully execute this large-scale event. With incredible support from sponsors, mentors, and team members, we created a memorable and impactful experience for all attendees.", 
        speaker: "Manas Nanivadekar", 
        date: "March 24, 2024 - 11:00 AM",
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Talks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="talks">
            <div className="mt-20">
                <h2 className="text-3xl md:text-5xl font-bold accentColor mt-4 mb-4 md:mb-3">
                    - Talks
                </h2>
                <div 
                    ref={ref} 
                    className="text-white flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 py-6"
                >
                    {talksData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                            className="mb-6"
                        >
                            <TalksCard
                                title={item.title}
                                venue={item.venue}
                                content={item.content}
                                speaker={item.speaker}
                                date={item.date}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Talks;

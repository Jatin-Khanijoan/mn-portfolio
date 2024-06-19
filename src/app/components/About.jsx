"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Services (EC2, S3, RDS, etc)</li>
        <li>Infrastructure as Code (Terraform)</li>
        <li>Programming Languages (Go, Rust, Python, JavaScript)</li>
        <li>Shell Scripting (Bash, Powershell)</li>
        <li> CI/CD (AWS CodePipeline, AWS CodeBuild, Jenkins)</li>
        <li>Presentation Skills</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IIT Madras, Tamil Nadu</li>
        <li>A. P. Shah Institute of Technology, Thane</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Certified Solution Architect - Associate</li>
        <li>FullStack Development using React - HongKong University</li>
        <li>Blockchain - INSEAD</li>
        <li>Project Management - University of California Irvine</li>
        <li>Data to Insights - Google Cloud</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold accentColor mb-4">- about</h2>
          <p className="text-base lg:text-lg">
            Experience Cloud Developer with 5 years of experience in creating
            and deploying scalable and secure cloud applications. 
            ● Experience in AWS and GCP 
            ● Specialized in serverless 
            ● Capable of handling client interactions 
            ● Expert in DevOps
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

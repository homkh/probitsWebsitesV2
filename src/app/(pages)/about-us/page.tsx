"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bgEllips from "@/../../public/assets/images/bgEllips.svg";
import teamImages from "@/../../public/assets/images/teamProbits.png";
import NumberTicker from "@/components/magicui/number-ticker";
import linkidinIcon from "@/../../public/assets/icon/whiteLinkidin.png";
import xIcon from "@/../../public/assets/icon/whiteXicon.png";
import behanceIcon from "@/../../public/assets/icon/whiteBehance.png";
import whiteQuotsIcon from "@/../../public/assets/icon/whiteQuote.svg";
import testingImaes from "@/../../public/assets/images/TestingImage1.jpeg";
import speedIcon from "@/../../public/assets/icon/speedIcon.svg";

import { ChevronLeft, ChevronRight, Images, MoveRight } from "lucide-react";

import WhatPeopleSayCard from "@/components/ui/card/WhatPeopleSayCard";
import { Timeline } from "@/components/ui/timeline";
import SpinningCarousel from "@/components/ui/carousel/spinningCarousel";
import CaseStudyCarousel from "@/components/ui/CaseStudyCarousel";

import { teamMembersDetails } from "./data";
import { cardData } from "./data";

let businessData = [
  { value: 10, label: "Years in Business" },
  { value: 30, plush: "+", label: "Talented Folks" },
  { value: 80, plush: "+", label: "Clients" },
];

let socialIcon = [
  { icon: linkidinIcon, alt: "linkindIcon" },
  { icon: xIcon, alt: "xIcon" },
  { icon: behanceIcon, alt: "behanceIcon" },
];

const AboutUsPage = () => {
  type TimelineEntry = {
    title: string;
    content: React.ReactNode;
  };

  // data for the ourStory timeline Section
  const timelineData: TimelineEntry[] = [
    {
      title: "2020",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={40}
              width={40}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3">
              Foundation & Stability
            </h4>
            <p className="text-base text-[#F5F5F7]/70 font-gotham font-normal">
              Strengthen core offerings and establish a solid customer base.
              Build a scalable IT infrastructure.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="flex items-start justify-end gap-6 mr-7">
          <div className="text-right">
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3">
              Growth & Innovation
            </h4>
            <p className="text-base text-[#F5F5F7]/70 font-gotham font-normal">
              Double the customer base. Achieve a 15% reduction in operational
              costs through automation. Launch a new AI-driven product.
            </p>
          </div>
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={60}
              width={60}
            />
          </span>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={35}
              width={35}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3">
              Scaling & Diversification
            </h4>
            <p className="text-base text-[#F5F5F7]/70 font-gotham font-normal">
              Scale operations and diversify revenue streams. Strengthen global
              presence.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex items-start justify-end gap-6 mr-7">
          <div className="text-right">
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3">
              Leadership & Market Positioning
            </h4>
            <p className="text-base text-[#F5F5F7]/70 font-gotham font-normal">
              Establish the company as a market leader in key areas. Drive
              thought leadership and innovation.
            </p>
          </div>
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-[6px]">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={50}
              width={50}
            />
          </span>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-[6px]">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={55}
              width={55}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3">
              Sustainability & Long-Term Vision
            </h4>
            <p className="text-base text-[#F5F5F7]/70 font-gotham font-normal">
              Ensure sustainable growth and prepare for long-term opportunities.
              Focus on corporate culture and long-term innovation.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center gap-[80px] lg:justify-between pt-24 xl:pt-40 pb-10 mx-auto text-slate-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={bgEllips}
          alt="Background Ellipse"
          className="object-cover cursor-pointer"
          fill
        />
      </div>

      <section className="relative w-full">
        <div className="relative w-full px-14 z-20 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h6 className="text-secondary font-gotham font-normal text-xl pb-4 hover:underline hover:text-blue-500 hover:font-medium transition-all ease-in-out duration-300">
              ABOUT PROBITS
            </h6>
            <h1 className="font-gotham font-bold text-[58px] pb-4 leading-[1.2] text-primary">
              We&apos;re bringing{" "}
              <span className="block">technology Superpower</span>
              <span className="block">to everyone.</span>
            </h1>
          </motion.div>
        </div>

        <div className="relative w-full h-[500px] mx-auto -mt-28 z-10">
          <Image
            src={teamImages}
            alt="Probits Team"
            className="object-cover"
            fill
            priority
            quality={100}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/30  to-[#020202]/100 z-10" />
        </div>
      </section>

      {/* By the number section */}
      <section className="h-auto w-full mx-auto flex items-center justify-around">
        <div>
          <h6 className="text-primary font-gotham text-4xl font-bold ">
            By the Numbers
          </h6>
        </div>

        <div className="flex gap-4 flex-wrap">
          {businessData.map((data, index) => (
            <div
              key={index}
              className="flex items-center flex-wrap justify-center space-x-2 py-10 px-8 rounded-lg border border-gray-700/80 bg-slate-800 bg-opacity-30 backdrop-blur-md shadow-xl"
            >
              <div className="space-x-1">
                <NumberTicker
                  value={data.value || 0}
                  direction="up"
                  className="text-primary font-gotham text-6xl font-semibold tracking-tighter dark:text-white whitespace-pre-wrap"
                />
                <span className="text-primary font-gotham text-6xl font-medium">
                  {data.plush || ""}
                </span>
              </div>
              <span className="text-[#EBF1FE] font-gotham text-base font-normal opacity-80">
                {data.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-ellips-bg bg-center bg-cover bg-no-repeat w-full flex flex-1 flex-col items-center justify-center gap-20">
        {/* our teams memeber section */}
        <section className="flex flex-col justify-center gap-8 items-center h-auto w-full">
          <h1 className="font-gotham font-bold text-4xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Our Passionate Team
          </h1>
          <div className="flex flex-wrap w-full gap-4 items-center justify-center">
            {teamMembersDetails.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800 bg-opacity-30 backdrop-blur-md rounded-lg p-0 border border-gray-600/85 shadow-xl outline-[#7474804D]/30 overflow-hidden flex flex-col justify-between min-w-[280px] max-w-[320px]"
              >
                <div>
                  <Image
                    src={member.image}
                    className="object-cover w-full h-auto"
                    alt={`${member.name}'s photo`}
                  />
                </div>
                <div className="flex flex-col justify-between items-center py-5 text-center">
                  <div className="mb-4">
                    <h6 className="font-gotham text-primary text-2xl font-semibold">
                      {member.name}
                    </h6>
                    <p className="font-gotham text-[#8B8B8B] font-normal text-base opacity-90">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <span>
                        <Image
                          src={socialIcon?.[0]?.icon}
                          className="object-contain"
                          alt={socialIcon?.[0]?.alt || "LinkedIn Icon"}
                          height={16}
                          width={16}
                        />
                      </span>
                    </a>

                    <a
                      href={member.socialLinks.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <span>
                        <Image
                          src={socialIcon?.[1]?.icon}
                          className="object-contain"
                          alt={socialIcon?.[1]?.alt || "X Icon"}
                          height={16}
                          width={16}
                        />
                      </span>
                    </a>

                    <a
                      href={member.socialLinks.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <span>
                        <Image
                          src={socialIcon?.[2]?.icon}
                          className="object-contain"
                          alt={socialIcon?.[2]?.alt || "Behance Icon"}
                          height={16}
                          width={16}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full h-auto mx-auto">
          <Timeline data={timelineData} />
        </section>
      </div>

      {/* transform the world with your idea section */}
      <section className="w-full py-16 flex flex-col items-center justify-center gap-10">
        <h1 className="font-gotham font-bold text-4xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
          Transform The World With Your Idea.
        </h1>
        <CaseStudyCarousel cardData={cardData} />
      </section>

      {/* transform the world with your ides section */}
      <section className="w-full flex flex-1 justify-center items-center flex-col gap-10 mx-auto">
        <h1 className="font-gotham font-bold text-4xl text-[#F5F5F7] hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
          Transform The World With Your Idea.
        </h1>
        <SpinningCarousel />
      </section>

      {/* what peopel say about section */}
      <section className="flex flex-col flex-1 gap-24 items-center justify-center">
        <h1 className="font-gotham text-primary text-4xl font-bold hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
          What people have to say about us
        </h1>
        <WhatPeopleSayCard
          bgColor="bg-gray-800"
          textColor="text-primary"
          quoteIcon={whiteQuotsIcon}
        />
      </section>
    </div>
  );
};

export default AboutUsPage;

"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PackagesCard from "@/components/ui/card/PackagesCard";
import PackagesCard1 from "@/components/ui/card/PackagesCard1";
import PackagesCard2 from "@/components/ui/card/PackagesCard2";
import { ServicesCard } from "@/components/ui/card/ServicesCard";
import WhatPeopleSaySlider from "@/components/ui/slider/WhatPeopleSaySlider";
import { motion } from "framer-motion";

import earth from "@/../public/assets/images/earth.png";
import mvertorImage from "@/../../public/assets/images/mVectorImage.png";
import circleBg from "@/../../public/assets/images/circleBg.png";
import probitsImages from "@/../../public/assets/images/probits.png";

import { brandImages, servicesData } from "./data";

import FeatureCard from "@/components/ui/card/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import TestimonialSlider from "@/components/ui/ClientFeedbackCarousel";
import TextReveal from "@/components/magicui/text-reveal";

const HomePage: React.FC = () => {
  const router = useRouter();
  const handelContactUsBtn = () => {
    router.push("/contact-us");
  };
  //   className: "center",
  //   dots: true,
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      {/* Header Section */}
      <section className="w-full h-auto flex items-center sm:gap-2 lg:justify-between pt-24 2xl:pt-28 px-5 max-w-screen-xl mx-auto text-slate-50">
        <div className="h-auto w-full flex flex-col gap-5 items-start">
          <motion.div
            className="text-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-primary text-[48px] md:text-[3.625rem] font-bold font-gotham leading-tight">
              <span className="block">Building Mobile</span>
              <span className="block">Application for Your</span>
              <span className="block">Enterprise</span>
            </h1>

            <p className="text-primary text-xl font-gotham font-normal opacity-80">
              Your idea, our mastery – together, let&apos;s create wonders.
            </p>
          </motion.div>
          <button
            className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium font-gotham border-none outline-none bg-gradient-to-t from-[#3571F0]/100 to-[#2650AA]/100 text-white hover:bg-primary hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </button>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={earth}
            layout="responsive"
            width={500}
            height={500}
            alt="earth Images"
          />
        </div>
      </section>

      {/* Our Packages Section */}
      <section className="w-full h-auto flex flex-col items-center justify-center 2xl:mt-10 px-4 max-w-screen-xl mx-auto gap-11">
        <h1 className="text-primary text-[58px] font-bold font-gotham hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
          Our Packages
        </h1>

        <div className="flex flex-1 flex-col items-center justify-center gap-7">
          <div className="flex gap-10">
            <PackagesCard
              title="Mobile Development Solutions"
              price={20}
              crossIcon="/assets/icon/crossIcon.svg"
              circleIcon="/assets/icon/circle.svg"
            />
            <PackagesCard1 />
          </div>
          <div>
            <PackagesCard2 />
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="flex items-center justify-center h-auto py-24 max-w-[600px] mx-auto ">
        <div className="flex items-center justify-center bg-black dark:bg-white">
          <TextReveal text="We aim to upscale your business growth without end to end counselling and IT services. We deliver top level scalable technology solutions to bring your idea to life." />
        </div>
      </section>

      {/* Brand Images Section */}
      <section className="w-full py-10 flex flex-col items-center justify-center gap-4 2xl:gap-10 mx-auto 2xl:max-w-screen-2xl md:max-w-screen-xl">
        <h6 className="font-medium font-gotham text-[#DBDBE1] text-xl">
          {`Trusted by Thousand top Brands`.toUpperCase()}
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center w-full">
          {brandImages.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={item.icon}
                alt={item.alt}
                layout="responsive"
                width={100}
                height={100}
                className="object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
      {/* what peopele say section */}
      <section className="flex flex-1  flex-col items-center justify-center gap-10 py-20">
        <h1 className="font-bold text-[48px] text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 text-center">
          What People Have to Say
        </h1>
        <div className="w-full max-w-[80%] mx-auto">
          <WhatPeopleSaySlider />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full mx-auto px-14 2xl:px-24 flex flex-col gap-12 items-start justify-center ">
        <div className="space-y-4">
          <h1 className="font-gotham text-primary text-[48px] font-bold">
            Navigate the Digital Frontier with
          </h1>
          <h1 className="font-gotham text-primary text-[48px] font-bold">
            Our Engineering Excellence
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-6 2xl:gap-10">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              header={service.header}
              description={service.description}
            />
          ))}
          <div className="relative flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-lg border-[1px] border-[#4F4E6C] bg-[#3571F0] md:shadow-xl animate-slide-in-right cursor-pointer">
            <Image
              src={mvertorImage}
              alt="Vector Images"
              className="object-contain"
            />
            <button
              type="button"
              className="absolute cursor-pointer px-5 py-2.5 rounded-lg text-sm tracking-wider font-semibold font-gotham border-2 border-primary outline-none bg-white text-[#0E0D35] hover:bg-primary hover:text-black transition duration-300 ease-in-out transform hover:scale-105 z-20"
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <div className="bg-ellips-bg bg-center bg-cover bg-no-repeat w-full h-auto object-contain -z-0 overflow-x-hidden relative">
        {/* Featured Projects Section */}
        <section className="relative w-full h-auto mx-auto flex flex-col items-center gap-5 overflow-hidden">
          <div className="absolute inset-0 z-0 top-0 left-0">
            <Image
              src={circleBg}
              alt="circle background"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="relative flex flex-col items-center justify-center py-20 z-10 bg-card-bg1 bg-right bg-no-repeat bg-contain w-full">
            <h1 className="font-gotham font-bold text-[48px] text-white hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 pb-10">
              Our Featured Projects
            </h1>
            <div className="flex flex-1 items-center w-full h-auto">
              <FeatureCard />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-20 w-full">
          <div className="flex flex-col items-center pb-10">
            <h1 className="font-gotham font-bold text-[48px] text-white text-center hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
              Frequently Asked Questions
            </h1>
          </div>
          <FAQAccordion />
        </section>
      </div>

      {/* Video Section */}
      <section className="relative flex items-center justify-center my-20 rounded-lg">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="/assets/video/teamWorks.mp4"
          thumbnailSrc={probitsImages}
          thumbnailAlt="Light mode Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc={probitsImages}
          thumbnailAlt="Dark mode Video"
        />
      </section>

      {/* Feedback Section */}
      <section className="w-full h-auto flex justify-center flex-col pb-16">
        <section className="flex flex-col gap-10 items-center">
          <h1 className="font-gotham text-center text-[48px] font-bold text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Let’s Hear What Our Clients Say
          </h1>
          <TestimonialSlider />
        </section>
      </section>
    </>
  );
};

export default HomePage;

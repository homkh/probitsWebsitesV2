"use client";
import React, { useState } from "react";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import bgEllips from "@/../../public/assets/images/bgEllips.svg";
import { MoveRight, ArrowRight } from "lucide-react";

import TransParentBtn from "@/components/ui/button/TransParentBtn";
import { OurPartnerCard } from "@/components/ui/OurPartnerCard";
import WhatPeopleSayCard from "@/components/ui/card/WhatPeopleSayCard";
import SubmitModals from "@/components/ui/modals/submitModals";

import { whatYouWantBuild, btnData } from "./data";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectDescription: string;
  lookingTo: string;
  serviceNeeded: string;
}

const ContactUs: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState(false);
  const [lookingTo, setLookingTo] = useState<string[]>([]);
  const [serviceNeeded, setServiceNeeded] = useState<string[]>([]);

  const { register, handleSubmit, control, setValue, reset, watch, getValues } =
    useForm<FormData>();

  

  const onSubmit = async (data: FormData) => {
    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      !data.projectDescription ||
      !lookingTo.length ||
      !serviceNeeded.length
      || !data.phoneNumber
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isValidPhoneNumber(data.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        to_name: data.fullName,
        from_name: data.email,
        phone_number: data.phoneNumber,
        message: data.projectDescription,
        looking_to: lookingTo,
        service_needed: serviceNeeded,
      };

      const response = await emailjs.send(
        "service_lge297m",
        "template_aueyjlh",
        templateParams,
        "85qWudw5A631S2eMi",
      );

      if (response.status === 200) {
        setIsOpen(true);
        setLookingTo([]);
        setServiceNeeded([])
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const closeModals = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (
    type: "lookingTo" | "serviceNeeded",
    value: string,
    removeValue: boolean,
  ) => {
    type === "lookingTo"
      ? setLookingTo((prev) => {
          return !removeValue
            ? [...prev, value]
            : prev.filter((item) => item !== value);
        })
      : setServiceNeeded((prev) => {
          return !removeValue
            ? [...prev, value]
            : prev.filter((item) => item !== value);
        });
  };
  return (
    <div className="w-full h-auto flex flex-col items-center gap-[80px] lg:justify-between pt-24 xl:pt-40 pb-10 mx-auto text-slate-50 relative m-0">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={bgEllips}
          alt="Background Ellipse"
          className="object-cover"
        />
      </div>

      <div className="bg-center bg-cover bg-no-repeat w-full flex flex-1 flex-col items-center justify-center gap-20 px-14 xl:px-20">
        <section className="relative z-10 flex md:flex-row flex-col flex-1 md:items-start items-center justify-center gap-10">
          <section className="w-1/2">
            <motion.div
              className="text-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h6 className="text-[#3571F0] font-gotham font-normal text-xl pb-4 transition-all duration-300 ease-in-out hover:underline hover:text-blue-500 hover:font-medium">
                Contact Us
              </h6>
              <h1 className="font-gotham font-bold text-[58px] pb-4">
                Tell us about what you want to build.
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 space-y-2">
              {whatYouWantBuild.map((item, index) => (
                <div className="flex items-center space-x-1" key={index}>
                  <ArrowRight size={18} color="#3571F0" />
                  <div className="font-gotham font-normal text-[#F5F5F7] text-lg">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-1/2 h-auto flex flex-col gap-3 items-start justify-start">
            <h1 className="font-gotham font-bold text-[#F5F5F7] text-4xl">
              Let&apos;s get started!
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 items-center"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="font-gotham font-medium text-sm"
                  htmlFor="lookingTo"
                >
                  I am looking to
                </label>
                <div className="flex gap-2 flex-wrap">
                  {btnData.lookingFor.map((text) => (
                    <TransParentBtn
                      key={text}
                      text={text}
                      activeValue={lookingTo}
                      type='lookingTo'
                      handleButtonClick={handleButtonClick}
                    />
                  ))}
                </div>
                <p>{lookingTo}</p>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-gotham font-medium text-sm"
                  htmlFor="serviceNeeded"
                >
                  Service I need
                </label>
                <div className="flex gap-2 flex-wrap">
                  {btnData.servicesNeeded.map((text) => (
                    <TransParentBtn
                    handleButtonClick={handleButtonClick}
                      key={text}
                      text={text}
                      type="serviceNeeded"
                      activeValue={serviceNeeded}

                    />
                  ))}
                </div>
                <p>{serviceNeeded}</p>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="fullName">Full Name</label>
                <input
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="py-2 pl-3.5 border rounded-lg outline-none bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phoneNumber">Mobile Number</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="NP"
                      style={{
                        borderRadius: 8,
                        padding: 9,
                        color: "black",
                        backgroundColor: "rgb(15 23 42)",
                        border: "1px solid rgba(97, 97, 102, 0.6)",
                      }}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Business Email"
                  className="py-2 pl-3.5 rounded-lg outline-none border bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="projectDescription">Project Description</label>
                <textarea
                  {...register("projectDescription")}
                  placeholder="Project Description"
                  className="py-2 pl-3.5 h-32 rounded-lg outline-none border bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className={`bg-[#3571F0]/70 text-white font-medium py-2 px-4 flex gap-2 rounded-lg transition duration-300 ease-in-out hover:bg-indigo-700 ${
                    isSending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSending}
                >
                  {isSending ? "Submitting..." : "Submit"}
                  <MoveRight />
                </button>
              </div>
            </form>
            {isOpen && (
              <SubmitModals
                onClose={closeModals}
                message="Your form has been submitted successfully!"
              />
            )}
          </section>
        </section>
      </div>
      <section>
        <WhatPeopleSayCard bgColor="bg-gray-100" textColor="text-gray-700" />
      </section>
      <section className="w-full flex flex-col items-center gap-4 px-14 xl:px-16 ">
        <h2 className="font-gotham font-bold text-white text-3xl lg:text-4xl hover:underline hover:text-indigo-500 transition-all duration-200 ease-in-out">
          Our Partners
        </h2>
        <OurPartnerCard />
      </section>
    </div>
  );
};

export default ContactUs;

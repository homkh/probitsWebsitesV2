"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();

  function handleButtonClick() {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-800">404</h1>
        <p className="text-2xl md:text-3xl text-primary mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <button
          type="button"
          className="inline-block px-6 py-3 cursor-pointer text-white bg-blue-500 hover:bg-blue-600 font-semibold text-lg rounded-full transition duration-300"
          onClick={handleButtonClick}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { richTextReducer } from "@/../utils/utils";
import { SocialDetails } from "./data";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

interface BlogsProps {
  params: {
    id: number | string;
  };
}

interface BlogData {
  attributes: {
    category: string;
    title: string;
    author_name: string;
    author_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    content: any;
    createdAt: string;
  };
}

// Base URL
const strapiBackendUrl = process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL;

const BlogId: FC<BlogsProps> = ({ params }) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentAboveImage, setContentAboveImage] = useState<string>("");
  const [contentBelowImage, setContentBelowImage] = useState<string>("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const result = await fetch(
          `${strapiBackendUrl}/api/blogs/${params.id}?populate=*`,
        );

        if (!result.ok) {
          throw new Error(`Failed to fetch blog data: ${result.statusText}`);
        }

        const data = await result.json();

        if (data?.data) {
          setBlogData(data.data);

          // Split content above and below the image
          const richText = await richTextReducer(data.data.attributes.content);

          const contentSplit = richText.split(/<\/p>/);
          setContentAboveImage(contentSplit[0] + "</p>");
          setContentBelowImage(contentSplit.slice(1).join("</p>"));
        } else {
          setBlogData(null);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (strapiBackendUrl) {
      fetchBlogData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <motion.div
        className="w-full h-screen flex items-center justify-center text-4xl text-center font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Loading blogs data, please wait...
      </motion.div>
    );
  }

  if (!blogData) {
    return (
      <motion.div
        className="w-full h-screen flex items-center justify-center text-red-600 text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 150,
          damping: 8,
        }}
      >
        <span className="italic">&quot; Sorry, no blog found. </span>
        <span className="text-[#0B2F9F]">
          Why not explore our other posts instead? &quot;
        </span>
      </motion.div>
    );
  }

  const { category, title, author_name, image, createdAt, author_image } =
    blogData.attributes;
  const imageUrl = image?.data?.attributes?.url;
  const authorImgUrl = author_image?.data?.attributes?.url;
  const wordsPerMinute = 150;

  // Calculate reading time
  const totalWordCount = blogData.attributes.content.reduce(
    (count: number, block: any) =>
      count +
      block.children.reduce((childCount: number, child: any) => {
        const text = child.text || "";
        return childCount + text.split(/\s+/).length;
      }, 0),
    0,
  );

  const readingTime = Math.ceil(totalWordCount / wordsPerMinute);

  return (
    <div className="py-28 md:py-36 relative top-0 left-0 mx-auto">
      <section className="max-w-4xl mx-auto px-6">
        <section className="flex flex-col gap-3 pt-6">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-medium border border-white outline-none bg-transparent hover:bg-blue-700 text-white transition-all duration-300">
              {category}
            </div>
          </div>
          <h1 className="text-[3.625rem] font-bold text-primary">{title}</h1>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center justify-start space-x-1.5">
              {authorImgUrl && (
                <Image
                  src={authorImgUrl}
                  alt="Author profile"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                />
              )}
              <p className="text-sm font-medium text-[#DBDBE1]">
                {author_name || "Unknown Author"}
              </p>
            </div>

            <div className="flex items-center space-x-3 justify-start">
              <span className="w-1.5 h-1.5 bg-[#D9D9D980]/50 rounded-full" />
              <p className="text-sm font-normal text-[#DBDBE1]">
                {readingTime || "N/A"} min read
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-[#D9D9D980]/50 rounded-full" />
              <p className="text-sm font-normal text-[#DBDBE1]">
                {new Date(createdAt).toLocaleDateString() || "Unknown Date"}
              </p>
            </div>
          </div>

          {/* Content above image */}
          <div
            className="text-[20px] font-normal text-left text-[#F5F5F7] flex-1 font-gotham"
            dangerouslySetInnerHTML={{ __html: contentAboveImage }}
          />
        </section>
      </section>

      {/* Image section */}
      {imageUrl && (
        <section className="mx-auto flex items-center justify-center">
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={1040}
            height={480}
            className="rounded-xl shadow-2xl object-contain outline-none cursor-default"
          />
        </section>
      )}

      {/* Social media section */}
      <section className="max-w-4xl mx-auto pt-9 md:flex flex-col md:flex-row gap-10 px-4">
        <div className="flex flex-row md:flex-col gap-3 pb-4 md:pb-0">
          {SocialDetails.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.hoverData}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                height={40}
                width={40}
                className="object-contain rounded-full"
              />
            </a>
          ))}
        </div>

        {/* Blog content below the image */}
        <div className="bg-blogs-bg w-full h-full bg-center bg-contain bg-no-repeat flex-1">
          <div
            className="text-base text-[#F5F5F7] font-normal font-gotham"
            dangerouslySetInnerHTML={{ __html: contentBelowImage }}
          />
        </div>
      </section>

      <Tooltip
        id="my-tooltip"
        place="right"
        className="border border-[#C6C5DD] rounded-3xl"
      />
    </div>
  );
};

export default BlogId;

"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BlogsCard from "@/components/ui/card/BlogsCard";
import Pagination from "@/components/Pagination";
import blogSample from "../../../../public/assets/images/blogSample.jpg";
import bgEllipse from "@/../../public/assets/images/blogsBgEllipse.png";

interface BlogAttributes {
  title: string;
  category: string;
  content: string;
  author_name: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

const strapiBackendUrl = process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL;

const BlogPage: FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${strapiBackendUrl}/api/blogs?populate=*`);
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleTitleClick = (id: number) => {
    router.push(`/blogs/${id}`);
  };

  const totalPages: number = 10;

  return (
    <div className="py-20 sm:py-40 px-4 sm:px-14 lg:px-16 mx-auto text-slate-5 flex flex-col relative w-full">
      <section className="mb-12">
        <motion.div
          className="text-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="font-gotham text-[#3571F0] text-lg sm:text-xl font-normal transition-all duration-300 ease-in-out hover:underline hover:text-blue-500 hover:font-medium hover:scale-110">
            Our Blogs
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 font-gotham">
            <span className="block md:leading-[60px]">
              Stories, insights, and advice
            </span>
            <span className="block md:leading-[60px]">
              that will transform how you
            </span>
            <span className="block md:leading-[60px]">build for the web.</span>
          </h1>
        </motion.div>
      </section>

      {loading && (
        <p className="text-center text-lg font-medium">Loading blogs...</p>
      )}

      {error && (
        <p className="text-center text-lg text-red-500">Error: {error}</p>
      )}

      {!loading && !error && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:gap-4 2xl:gap-6 gap-5">
          {blogs.map((blog) => {
            const imageUrl = blog.attributes.image?.data?.attributes?.url;
            return (
              <BlogsCard
                key={blog.id}
                image={imageUrl || blogSample.src}
                category={blog.attributes.category}
                title={blog.attributes.title}
                onClick={() => handleTitleClick(blog.id)}
              />
            );
          })}
        </section>
      )}

      <div className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover">
        <Image
          src={bgEllipse}
          alt="bgEllipse"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BlogPage;

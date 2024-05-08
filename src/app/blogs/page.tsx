"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogPage = () => {
  //   const res = await fetch("http://localhost:5000/blogs", {
  //     cache: "no-store",
  //   });
  //   const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Discover the transformative impact of augmented reality on various
          industries from gaming.
        </i>
      </p>

      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

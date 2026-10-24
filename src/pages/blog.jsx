


import React, { useState } from "react";
import SEO from "../components/SEO";
import blogs from "../data/blogs";
import CategoryFilter from "../components/CategoryFilter";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) => blog.category === activeCategory
        );

  const blogsPerPage = 1;

  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const startIndex = (currentPage - 1) * blogsPerPage;

  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <>
      <SEO
        title="Blog"
        description="Explore web development tutorials, React guides, WordPress tips, and practical programming articles by Shanaj Bithee."
        path="/blog"
      />

      <section className="container py-5">
        <h1 className="mb-4">Our Blog</h1>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1);
          }}
        />

        <div className="row g-4">
          {currentBlogs.map((blog) => (
            <div
              className="col-md-6 col-lg-4"
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p>No blog posts found in this category.</p>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  );
}

export default Blog;

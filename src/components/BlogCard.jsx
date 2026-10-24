
import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card h-100 shadow-sm border-0 blog-card">
      <img
        src={blog.image}
        className="card-img-top"
        alt={blog.title}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary align-self-start mb-3">
          {blog.category}
        </span>

        <h5 className="card-title">{blog.title}</h5>

        <p className="card-text text-secondary">
          {blog.description}
        </p>

        <div className="mt-auto">
          <small className="text-muted d-block mb-3">
            {blog.date}
          </small>

          <Link
            to={`/blog/${blog.slug}`}
            className="btn btn-outline-primary"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

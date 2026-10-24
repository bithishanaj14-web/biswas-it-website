import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";

import blogs from "../data/blogs";

function BlogDetails() {
  const { slug } = useParams();

  // URL থেকে নির্দিষ্ট Blog খুঁজে বের করা
  const blog = blogs.find((item) => item.slug === slug);

  // Blog না পেলে
  if (!blog) {
    
    return (
      <div className="container py-5 text-center">
        <h2>Blog Not Found!</h2>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to Blogs
        </Link>
      </div>
    );
  }

  // Reading Time হিসাব
  const content = blog.content || blog.description || "";
  const wordCount = content.trim()
    ? content.trim().split(/\s+/).length
    : 0;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // একই Category-র Related Posts
  const relatedPosts = blogs
    .filter(
      (item) =>
        item.category === blog.category &&
        item.slug !== blog.slug
    )
    .slice(0, 3);

  return (
    <div className="container py-5">
      {/* Blog Details */}
      <article>
        <Link to="/blog" className="btn btn-outline-secondary mb-4">
          &larr; Back to Blogs
        </Link>

        <h1 className="fw-bold mb-3">{blog.title}</h1>

        <div className="text-muted mb-4">
          <span>{blog.category}</span>
          {" | "}
          <span>{blog.date}</span>
          {" | "}
          <span>{readingTime} min read</span>
        </div>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="img-fluid rounded mb-4 w-100"
          />
        )}

        <p className="lead">{blog.description}</p>

          <p className="lead">{blog.description}</p>

        <div className="blog-content">
          <ReactMarkdown>
            {blog.content || "No content available."}
          </ReactMarkdown>
        </div>

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-5 pt-4 border-top">
          <h2 className="fw-bold mb-4">Related Posts</h2>

          <div className="row g-4">
            {relatedPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <div className="card h-100">
                  {post.image && (
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      {post.title}
                    </h5>

                    <p className="card-text">
                      {post.description}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetails;

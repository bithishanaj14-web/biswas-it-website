
import React from "react";

const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "Website Maintenance",
  "SEO Optimization",
];

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter d-flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`btn ${
            activeCategory === category
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// ProductList components are displays products
const ProductList = ({ products, addToCart, removeFromCart, isInCart }) => {
  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="d-flex justify-content-center my-2">
        {Array.from({ length: rating }, (_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              {/* Product Image */}
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                {/* Sale Badge */}
                {product.sale && (
                  <div className="badge bg-dark text-white position-absolute top-0 end-0">
                    Sale
                  </div>
                )}
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.sale ? (
                    <>
                      <span className="text-muted text-decoration-line-through">
                        ${product.originalPrice}
                      </span>{" "}
                      ${product.price}
                    </>
                  ) : (
                    `$${product.price}`
                  )}
                </p>
                {/* Star Ratings */}
                {product.rating && renderStars(product.rating)}
              </div>
              <div className="card-footer text-center">
                {isInCart(product.id) ? (
                  <button
                    className="btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header from "../header";
import Footer from "../footer";

function ProductPage() {
  const [selImage, setSelImage] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const images = [1, 2, 3, 4];
  const imageProps = {
    smallImage: {
      alt: "Product 1",
      isFluidWidth: true,
      src: `/img/single-product/${selImage}.jpg`,
    },
    largeImage: {
      src: `/img/single-product/${selImage}.jpg`,
      width: 1114,
      height: 1514.166,
    },
    enlargedImagePosition: "over",
  };
  return (
    <>
      <Header />
      <div className="page-top-info">
        <div className="container">
          <h4>Category Page</h4>
          <div className="site-pagination">
            <a href="/none">Home</a> /<a href="/none">Shop</a>
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="./category.html"> &lt;&lt; Back to Category</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <ReactImageMagnify {...imageProps} />
              </div>
              <div
                className="product-thumbs"
                tabIndex="1"
                style={{ overflow: "auto", outline: "none" }}
              >
                <div className="product-thumbs-track">
                  {images.map((image) => (
                    <div
                      key={image}
                      className={`pt ${selImage === image ? "active" : ""}`}
                      onClick={() => setSelImage(image)}
                    >
                      <img
                        src={`img/single-product/thumb-${image}.jpg`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">White peplum top</h2>
              <h3 className="p-price">&#8377;39.90</h3>
              <h4 className="p-stock">
                Available: <span>In Stock</span>
              </h4>
              <div className="p-rating">
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o fa-fade"></i>
              </div>
              <div className="p-review">
                <a href="/none">3 reviews</a>|
                <a href="/none">Add your review</a>
              </div>
              <div className="fw-size-choose">
                <p>Size</p>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xs-size" />
                  <label htmlFor="xs-size">32</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="s-size" />
                  <label htmlFor="s-size">34</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="m-size" checked="" />
                  <label htmlFor="m-size">36</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="l-size" />
                  <label htmlFor="l-size">38</label>
                </div>
                <div className="sc-item disable">
                  <input type="radio" name="sc" id="xl-size" disabled />
                  <label htmlFor="xl-size">40</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xxl-size" />
                  <label htmlFor="xxl-size">42</label>
                </div>
              </div>
              <div className="quantity">
                <p>Quantity</p>
                <div className="pro-qty">
                  <span
                    className="dec qtybtn"
                    onClick={() =>
                      quantity > 1 ? setQuantity(quantity - 1) : null
                    }
                  >
                    -
                  </span>
                  <input type="text" value={quantity} disabled />
                  <span
                    className="inc qtybtn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
              <button href="/none" className="site-btn mr-3">
                Add To Cart
              </button>
              <button href="/none" className="site-btn">
                SHOP NOW
              </button>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      information
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                      <p>
                        Approx length 66cm/26" (Based on a UK size 8 sample)
                      </p>
                      <p>Mixed fibres</p>
                      <p>
                        The Model wears a UK size 8/ EU size 36/ US size 4 and
                        her height is 5'8"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingTwo">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      care details{" "}
                    </button>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <img src="./img/cards.png" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingThree">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      shipping & Returns
                    </button>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <h4>7 Days Returns</h4>
                      <p>
                        Cash on Delivery Available
                        <br />
                        Home Delivery <span>3 - 4 days</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-sharing">
                <a href="/none">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="/none">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="/none">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/none">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/none">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product-section">
        <div className="container">
          <div className="section-title">
            <h2>RELATED PRODUCTS</h2>
          </div>
          <OwlCarousel
            loop
            autoplay
            margin={30}
            autoplayTimeout={3500}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4,
              },
            }}
          >
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/1.jpg" alt="" />
                <div className="pi-links">
                  <a href="/none" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="/none" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <div className="tag-new">New</div>
                <img src="./img/product/2.jpg" alt="" />
                <div className="pi-links">
                  <a href="/none" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="/none" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/3.jpg" alt="" />
                <div className="pi-links">
                  <a href="/none" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="/none" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/4.jpg" alt="" />
                <div className="pi-links">
                  <a href="/none" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="/none" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/6.jpg" alt="" />
                <div className="pi-links">
                  <a href="/none" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="/none" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default ProductPage;

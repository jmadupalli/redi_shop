import React from "react";
import Header from "../header";
import Footer from "../footer";
import Product from "../product";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const products = [
  {
    productId: 1,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/1.jpg",
  },
  {
    productId: 2,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/2.jpg",
  },
  {
    productId: 3,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/3.jpg",
  },
  {
    productId: 4,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/4.jpg",
  },
  {
    productId: 5,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/5.jpg",
  },
  {
    productId: 6,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/6.jpg",
  },
  {
    productId: 7,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/7.jpg",
  },
  {
    productId: 8,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/8.jpg",
  },
  {
    productId: 9,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/9.jpg",
  },
  {
    productId: 10,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/10.jpg",
  },
  {
    productId: 11,
    productName: "Flamboyant Pink Top",
    price: 35.0,
    imageURL: "./img/product/11.jpg",
  },
  {
    productId: 12,
    productName: "Black and White Stripes Dress",
    price: 35.0,
    imageURL: "./img/product/12.jpg",
  },
];

function HomePage() {
  return (
    <>
      <Header />
      <section>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true}
          interval={5000}
          className="slider-container"
        >
          <div className="hs-item set-bg" data-src="img/bg.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <a href="/none" className="site-btn sb-line">
                    DISCOVER
                  </a>
                  <a href="/none" className="site-btn sb-white">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
          <div data-src="img/bg-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <a href="/none" className="site-btn sb-line">
                    DISCOVER
                  </a>
                  <a href="/none" className="site-btn sb-white">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      </section>

      <section className="features-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="img/icons/1.png" alt="#" />
                </div>
                <h2>Fast Secure Payments</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="img/icons/2.png" alt="#" />
                </div>
                <h2>Premium Products</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="img/icons/3.png" alt="#" />
                </div>
                <h2>Free & Fast Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
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
              300: {
                items: 2,
              },
              768: {
                items: 3,
              },
              992: {
                items: 4,
              },
            }}
          >
            {products.map((item) => {
              return (
                <Product
                  key={item.productId}
                  productId={item.productId}
                  productName={item.productName}
                  price={item.price}
                  imageURL={item.imageURL}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </section>
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>BROWSE TOP SELLING PRODUCTS</h2>
          </div>
          <ul className="product-filter-menu">
            <li>
              <a href="/none">TOPS</a>
            </li>
            <li>
              <a href="/none">JUMPSUITS</a>
            </li>
            <li>
              <a href="/none">LINGERIE</a>
            </li>
            <li>
              <a href="/none">JEANS</a>
            </li>
            <li>
              <a href="/none">DRESSES</a>
            </li>
            <li>
              <a href="/none">COATS</a>
            </li>
            <li>
              <a href="/none">JUMPERS</a>
            </li>
            <li>
              <a href="/none">LEGGINGS</a>
            </li>
          </ul>
          <div className="row">
            {products.map((item) => {
              return (
                <div key={item.productId} className="col-lg-3 col-md-4 col-6">
                  <Product
                    productId={item.productId}
                    productName={item.productName}
                    price={item.price}
                    imageURL={item.imageURL}
                  />
                </div>
              );
            })}
          </div>
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div
            className="banner set-bg"
            style={{ backgroundImage: "url(img/banner-bg.jpg)" }}
          >
            <div className="tag-new">NEW</div>
            <span>New Arrivals</span>
            <h2>STRIPED SHIRTS</h2>
            <a href="/none" className="site-btn">
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default HomePage;

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const slidesBanner = [
  {
    img: "/images/hero-slider-img-1.webp",
    title: "Leading the Way in App Development Innovation",
    description:
      "We build Android & iOS Mobile Apps that cater to all your business needs and take it to the next level.",
  },
  {
    img: "/images/hero-slider-img-2.webp",
    title: "Custom Software Solutions for Your Business",
    description:
      "Our expert developers craft powerful software solutions to streamline your workflow and boost productivity.",
  },
  {
    img: "/images/hero-slider-img-3.webp",
    title: "Innovative Web Development Services",
    description:
      "From startups to enterprises, we create web applications that engage, convert, and drive success.",
  },
];
const testimonials = [
  {
    img: "/images/testimonial-img-1.webp",
    name: "Jesenia Liseth Tovar",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
  {
    img: "/images/testimonial-img-2.png",
    name: "Michael Johnson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
  {
    img: "/images/testimonial-img-3.png",
    name: "Emily Carter",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
  {
    img: "/images/testimonial-img-4.png",
    name: "David Martinez",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
  {
    img: "/images/testimonial-img-5.png",
    name: "Sophia Williams",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
  {
    img: "/images/testimonial-img-6.png",
    name: "Liam Anderson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veritatis quisquam inventore, a deleniti perspiciatis eveniet obcaecati provident doloremque maxime quia illum nisi tempora? Laboriosam deserunt tenetur dolorum id. Dolorum! Eaque sint voluptates.",
  },
];
const industries = [
  {
    img: "/images/industry-icon-1.webp",
    title: "Medical & Pharma Services",
    description:
      "Providing top-tier medical and pharmaceutical services with cutting-edge solutions and pharmaceutical services with cutting-edge solutions",
  },
  {
    img: "/images/industry-icon-2.webp",
    title: "Finance & Banking",
    description:
      "Offering financial security and banking services tailored for modern needs and pharmaceutical services with cutting-edge solutions",
  },
  {
    img: "/images/industry-icon-3.webp",
    title: "Retail & E-commerce",
    description:
      "Enhancing online shopping experiences with seamless and secure platforms and pharmaceutical services with cutting-edge solutions",
  },
  {
    img: "/images/industry-icon-4.webp",
    title: "Education & E-Learning",
    description:
      "Empowering students with digital learning solutions and academic tools and pharmaceutical services with cutting-edge solutions",
  },
  {
    img: "/images/industry-icon-5.webp",
    title: "Technology & IT Services",
    description:
      "Providing innovative IT solutions for businesses and startups worldwide and pharmaceutical services with cutting-edge solutions",
  },
  {
    img: "/images/industry-icon-6.webp",
    title: "Real Estate & Construction",
    description:
      "Modernizing real estate with tech-driven solutions for buyers and sellers and pharmaceutical services with cutting-edge solutions",
  },
];
const productsData = [
  {
    category: "All",
    products: [
      "/images/product-img-1.webp",
      "/images/product-img-1.webp",
      "/images/product-img-1.webp",
      "/images/product-img-1.webp",
      "/images/product-img-1.webp",
      "/images/product-img-1.webp",
    ],
  },
  {
    category: "Health Supreme",
    products: [
      "/images/products/HealthSupreme/Health-Supreme01.png",
      "/images/products/HealthSupreme/Health-Supreme02.png",
      "/images/products/HealthSupreme/Health-Supreme03.png",
      "/images/products/HealthSupreme/Health-Supreme04.png",
    ],
  },
  {
    category: "CRM 365",
    products: [
      "/images/products/365CRM/CRM01.png",
      "/images/products/365CRM/CRM02.png",
      "/images/products/365CRM/CRM03.png",
    ],
  },
  {
    category: "OSDA",
    products: [
      "/images/products/OSDA/OSDA01.png",
      "/images/products/OSDA/OSDA02.png",
      "/images/products/OSDA/OSDA03.png",
      "/images/products/OSDA/OSDA04.png",
    ],
  },
  {
    category: "Marketplace E-commerce Platform",
    products: [
      "/images/products/MarketplaceE-CommercePlatform/Marketplace-E-Commerce-Platform.png",
      "/images/products/MarketplaceE-CommercePlatform/Marketplace-E-Commerce-Platform01.png",
      "/images/products/MarketplaceE-CommercePlatform/Marketplace-E-Commerce-Platform02.png",
      "/images/products/MarketplaceE-CommercePlatform/Marketplace-E-Commerce-Platform03.png",
    ],
  },
  {
    category: "Sports Training App",
    products: [
      "/images/products/Sports-Training-App/Sports-Training-App01.png",
      "/images/products/Sports-Training-App/Sports-Training-App02.png",
      "/images/products/Sports-Training-App/Sports-Training-App03.png",
      "/images/products/Sports-Training-App/Sports-Training-App04.png",
    ],
  },
  {
    category: "Fitness",
    products: [
      "/images/products/Fitness/Fitness01.png",
      "/images/products/Fitness/Fitness02.png",
      "/images/products/Fitness/Fitness03.png",
    ],
  },
];
const Home = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  var testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveTestimonialIndex(newIndex),
  };

  // Banner Slider
  const bannerSliderRef = useRef(null);
  const nextBanner = useCallback(
    () => bannerSliderRef.current?.slickNext(),
    []
  );
  const previousBanner = useCallback(
    () => bannerSliderRef.current?.slickPrev(),
    []
  );

  // Testimonial Slider
  const testimonialSliderRef = useRef(null);

  const currentProducts =
    productsData.find((tab) => tab.category === activeTab)?.products || [];

  return (
    <div className="landing-page">
      <div className="container">
        <section className="banner-sec">
          <Slider ref={bannerSliderRef} {...sliderSettings}>
            {slidesBanner?.map((data, index) => (
              <div className="bannerSecWrap" key={index}>
                <div className="left">
                  <img src={data?.img} alt="hero-slider" />
                </div>
                <div className="right">
                  <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                  <button className="btn-comp">Get A FREE QUOTE</button>
                </div>
              </div>
            ))}
          </Slider>
          <div className="category-btn-prev-next">
            <GrFormPreviousLink
              onClick={previousBanner}
              className="category-prev"
              size={45}
              cursor={"pointer"}
            />
            <GrFormNextLink
              onClick={nextBanner}
              className="category-next"
              size={45}
              cursor={"pointer"}
            />
          </div>
        </section>
        <section className="sec-2">
          <div className="container">
            <div className="left">
              <h1>
                <span>Appicoders</span> - #1 Mobile App & Web Development
                Company in USA
              </h1>
            </div>
            <div className="right">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt molestiae tempore laboriosam cupiditate nulla,
                reiciendis nobis quasi nemo? Aut, esse a? Veniam ad modi
                repudiandae alias aperiam distinctio voluptates perferendis! Ex
                tempore eum, eos facere mollitia delectus, laborum, suscipit qui
                repellat maiores doloremque omnis? Beatae obcaecati rem esse ut
                consequatur, officia quibusdam eum architecto libero velit.
              </p>
              <button className="btn-comp">Read More</button>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="box">
            <div className="left">
              <h6>Client Testimonial</h6>
              <h1>What our clients are Saying.</h1>
            </div>
            <div className="right">
              {/* <div className="box-review">
                <div className="top">
                  <img src="/images/testimonial-img-1.webp" alt="testimonial" />
                  <h6>Jesenia Liseth Tovar</h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias veritatis quisquam inventore, a deleniti perspiciatis
                  eveniet obcaecati provident doloremque maxime quia illum nisi
                  tempora? Laboriosam deserunt tenetur dolorum id. Dolorum!
                  Eaque sint voluptates.
                </p>
              </div> */}
              <Slider ref={testimonialSliderRef} {...testimonialSliderSettings}>
                {testimonials?.map((data, index) => (
                  <div className="box-review" key={index}>
                    <div className="top">
                      <img src={data.img} alt="testimonial" />
                      <h6>{data.name}</h6>
                    </div>
                    <p>{data.review}</p>
                  </div>
                ))}
              </Slider>

              <div className="custom-nav">
                {testimonials.map((_, index) => (
                  <div
                    className={`line-nav ${
                      index === activeTestimonialIndex ? "active" : ""
                    }`}
                    onClick={() =>
                      testimonialSliderRef.current?.slickGoTo(index)
                    }
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="sec-4">
          <h1>Industries</h1>
          <div className="container">
            {industries.map((industry, index) => (
              <div className="box" key={index}>
                <div className="left">
                  <img src={industry.img} alt="industry-icon" width={50} />
                </div>
                <div className="right">
                  <h2>{industry.title}</h2>
                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="sec-5">
          <h1>Products</h1>
          <div className="tab-container">
            {productsData.map((tab, index) => (
              <p
                key={index}
                className={tab.category === activeTab ? "active" : ""}
                onClick={() => setActiveTab(tab.category)}
              >
                {tab.category}
              </p>
            ))}
          </div>
          <div className="tab-data">
            <div className="container">
              {currentProducts.map((imgSrc, index) => (
                <div className="box" key={index}>
                  <img src={imgSrc} alt="product" width={300} height={200} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="sec-6">
          <h1>Awards and Recognization</h1>
          <div className="container">
            <div className="box">
              <img src="/images/awards-img-1.webp" alt="awards" width={150} />
            </div>
            <div className="box">
              <img src="/images/awards-img-2.webp" alt="awards" width={150} />
            </div>
            <div className="box">
              <img src="/images/awards-img-3.webp" alt="awards" width={150} />
            </div>
            <div className="box">
              <img src="/images/awards-img-4.webp" alt="awards" width={150} />
            </div>
          </div>
        </section>
        <section className="sec-contact">
          <div className="container">
            <div className="left">
              <div className="content">
                <h4>LET's TALK</h4>
                <h1>Got an idea? Let's get in touch!</h1>
                <p>
                  Have queries? Not sure of Your App Strategy? Discuss with us
                  and we'll guide you the way forward.
                </p>
              </div>
              <form>
                <input type="text" name="" placeholder="Your Name" />
                <input type="email" name="" placeholder="Email Address" />
                <textarea name="" id="" placeholder="Message" />
                <button className="btn-comp">Let's get in touch</button>
              </form>
            </div>
            <div className="right">
              <div className="top">
                <img src="/images/contact-img.webp" alt="contact-img" />
              </div>
              <div className="bottom">
                <p>
                  Please submit your inquiry and out App Development Strategist
                  will contact your shortly
                </p>
                <div className="contact-detail">
                  <FaPhoneAlt color="#ffffff" size={40} />
                  <a href="tel:+18008268018">+1-(800) 826 8018</a>
                  <a href="mailto:info@appicoders.com">info@appicoders.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

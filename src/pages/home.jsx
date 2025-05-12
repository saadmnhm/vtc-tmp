import { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    
    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div>
            <div className="page-wrapper">
            {/* <div className="preloader"></div> */}

            <header className="main-header header-style-one">
                <div className="header-top">
                    <div className="auto-container clearfix">
                        <div className="top-left clearfix">
                            <div className="text"><span className="icon flaticon-call-answer"></span> Need help? Call Us Now : <a href="tel:1800-456-7890" className="number">1234 567 8910</a></div>
                            
                        </div>
                        <div className="top-right clearfix">
                            <ul className="info-list">
                            
                                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                        
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-upper">
                    <div className="inner-container">
                        <div className="auto-container clearfix">
                            <div className="logo-outer">
                                <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="MyLogistics - Transportaion Html Responsive Template" title="MyLogistics - Transportaion Html Responsive Template"/></a></div>
                            </div>

                            <div className="nav-outer clearfix">
                                <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="navbar-header">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon flaticon-menu-1"></span>
                                        </button>
                                    </div>
                                    
                                    <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown"><a href="#">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Home page 01</a></li>
                                                    <li><a href="index-2.html">Home page 02</a></li>
                                                    <li><a href="index-3.html">Home page 03</a></li>
                                                    <li><a href="index-4.html">Home page 04</a></li>
                                                    <li><a href="index-5.html">Home page 05 (New)</a></li>
                                                
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">About us</a>
                                                <ul>
                                                    <li><a href="about.html">Company Profile</a></li>
                                                    <li><a href="team.html">Our Team</a></li>
                                                    <li><a href="testimonials.html">Testimonials</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Our Services</a>
                                                <ul>
                                                    <li><a href="services-dark.html">Services Style1 Dark</a></li>
                                                    <li><a href="services-light.html">Services Style2 Light</a></li>
                                                    <li><a href="service-details.html">Services Details 1</a></li>
                                                    <li><a href="service-details2.html">Services Details 2</a></li>
                                                
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Projects</a>
                                                <ul>
                                                    <li><a href="projects-classic.html">Projects</a></li>
                                                    <li><a href="projects-fullwidth.html">Project Full Screen</a></li>
                                                    <li><a href="projects-masonry.html">Project Masonry</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-2.html">blog Style 2</a></li>
                                                    <li><a href="blog-detail.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="testimonials.html">Testimonials</a></li>
                                                    <li><a href="faq.html">Faq's</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="shop.html">Shop</a>
                                                <ul>
                                                    <li><a href="shop.html">Main shop page</a></li>
                                                    <li><a href="product-detail.html">Product Detail Page</a></li>
                                                    <li><a href="cart-page.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                
                                <div className="outer-box clearfix">
                                    <div className="search-box-btn"><span className="icon flaticon-magnifying-glass-1"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-cancel"></span></div>
                    
                    <nav className="menu-box">
                        <div className="nav-logo"><a href="index.html"><img src="assets/images/logo.png" alt="MyLogistics - Transportaion Html Responsive Template" title="MyLogistics - Transportaion Html Responsive Template"/></a></div>
                        <ul className="navigation clearfix"></ul>
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>

            <section className="main-slider">
                <div className="slider-box">
                    <div className="slide">
                        <div className="image-layer slider2" ></div>
                        <div className="auto-container">
                            <div className="content">
                                <h2>Moving every customer <br/> with care.</h2>
                                <div className="text">We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.</div>
                                <div className="btns-box">
                                    <a href="#" className="theme-btn btn-style-one"><span className="txt">Know more</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        <section className="welcome-section">
                <div className="auto-container">
                    
                    <div className="title-box">
                        <h2>We provide the best suggestions for <span className="color"> Logistics and Transposition</span> in town<br/> Go beyond logistics, make the world go round and revolutionize business.</h2>
                    </div>
                    
                    <div className="row clearfix">
                        
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h2>Welcome to the MyLogistics And Transportation</h2>
                                <h4><span className="color">25+ Years of Experience in logistics services</span></h4>
                                <div className="text">Mylogistics is a Leading Provider of Quality Packers And Movers in world. With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.<br/>We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.We offer a wide range of Moving And Packing, logistics, transportation Upholestery Services in all over the world.</div>

                            </div>
                        </div>
                        
                        <div className="video-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                
                                <div className="video-box">
                                    <img src="assets/images/resource/video-img-2.jpg" alt="logistics" />
                                    <a href="#" className="lightbox-image overlay-box"></a>
                                </div>
                                
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4">
                                <ul className="list-style-three">
                                    <li>4 years material warranty.</li>
                                    <li>1000+ projects has been completed.</li>
                                    <li>499+ professinals are available.</li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-style-three">
                                    <li>15+ awards.</li>
                                    <li>Available on 10+ countries. </li>
                                    <li>Borderless logistics.</li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-style-three">
                                    <li>A world-class port.</li>
                                    <li>Endless possibilities.</li>
                                    <li>Happiness delivered.</li>
                                </ul>
                            </div>
                                

                    </div>
                    </div>
            </section>

            

            <section className="featured-section backimg2" >
                <div className="auto-container">
                    <div className="title-box">
                        <h2>How we <span className="color">work</span>, our working <span className="color">process</span> </h2>
                    </div>
                    
                    <div className="row clearfix">
                        
                        <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        <span className="icon flaticon-discussion-1"></span>
                                    </div>
                                    <div className="feature-number">01</div>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="#">Materials handling</a></h3>
                                    <div className="text">Our manpower is a fair blend of experience, knowledge to imagination. They have impeccable skill-sets to project management ability.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        <span className="icon flaticon-apartment-1"></span>
                                    </div>
                                    <div className="feature-number">02</div>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="#">Packaging & unitisation</a></h3>
                                    <div className="text">Our manpower is a fair blend of experience, knowledge to imagination. They have impeccable skill-sets to project management ability.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        <span className="icon flaticon-sketch"></span>
                                    </div>
                                    <div className="feature-number">03</div>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="#">Inventory</a></h3>
                                    <div className="text">Our manpower is a fair blend of experience, knowledge to imagination. They have impeccable skill-sets to project management ability.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="750ms" data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        <span className="icon flaticon-delivery-truck"></span>
                                    </div>
                                    <div className="feature-number">04</div>
                                </div>
                                <div className="lower-content">
                                    <h3><a href="#">Transport</a></h3>
                                    <div className="text">Our manpower is a fair blend of experience, knowledge to imagination. They have impeccable skill-sets to project management ability.</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            
            <section className="services-section-two">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Our Excellent <span className="color">Services</span></h2>
                        <div className="text">We provides our clients excellent, trustworthy and safe logistics services, having all you need to insure your freight without depending where the destination is or how big is the shipment. </div>
                    </div>
                    
                    <div className="row clearfix">
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-hotel"></span>
                                    </div>
                                    <h3><a href="services-dark.html"> Machinery Transport</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>  

                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-desk-1"></span>
                                    </div>
                                    <h3><a href="services-dark.html">Commercial Relocation</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-house-1"></span>
                                    </div>
                                    <h3><a href="services-dark.html">Residential Relocation</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        

                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-delivery-truck"></span>
                                    </div>
                                    <h3><a href="services-dark.html">Transportation</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-houses"></span>
                                    </div>
                                    <h3><a href="services-dark.html">Warehousing Services</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-apartment-1"></span>
                                    </div>
                                    <h3><a href="services-dark.html">Multimodal Transportation</a></h3>
                                    <div className="text">Lorem Ipsum is  simply my text of the printing and Ipsum is the Ipsum is simply.</div>
                                    <a href="services-dark.html" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
            </section>
            
            <section className="project-section">
                <div className="auto-container">
                    <div className="title-box">
                        <h2  className="white">Our Latest <span className="color">Projects</span></h2>
                    </div>
                </div>
                
                <div className="outer-container">
                    
                    <div className="sortable-masonry">
                        
                        <div className="filters clearfix">
                            
                            <ul className="filter-tabs filter-btns text-center clearfix">
                                <li className="active filter" data-role="button" data-filter=".all">All Projects</li>
                                <li className="filter" data-role="button" data-filter=".residential">Warehouse</li>
                                <li className="filter" data-role="button" data-filter=".commercial">Commercial</li>
                                <li className="filter" data-role="button" data-filter=".hospital">Transportaion</li>
                                <li className="filter" data-role="button" data-filter=".office">Multimodel</li>
                            </ul>
                            
                        </div>
                        
                        <div className="items-container row clearfix">
                        
                            <div className="gallery-item large-block masonry-item all hospital commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/1.jpg" alt="Warehouse" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Warehouse</a></h3>
                                                    <a href="assets/images/gallery/1.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item small-block masonry-item all hospital commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/2.jpg" alt="Commercial" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Transportation</a></h3>
                                                    <a href="assets/images/gallery/2.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item small-block masonry-item all residential office commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/3.jpg" alt="Transportaion" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Packaging</a></h3>
                                                    <a href="assets/images/gallery/3.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item small-block masonry-item all commercial">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/4.jpg" alt="Multimodel" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Cargo</a></h3>
                                                    <a href="assets/images/gallery/4.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item large-block masonry-item all hospital office residential">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/7.jpg" alt="shipping"/>
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Logistics</a></h3>
                                                    <a href="assets/images/gallery/7.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item small-block masonry-item all residential">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/5.jpg" alt="cargo" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Packaging</a></h3>
                                                    <a href="assets/images/gallery/5.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                            <div className="gallery-item small-block masonry-item all hospital office">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/gallery/6.jpg" alt="Multimodel" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <h3><a href="projects-fullwidth.html">Warehouse</a></h3>
                                                    <a href="assets/images/gallery/6.jpg" data-fancybox="gallery-1" data-caption="" className="link"><span className="icon flaticon-magnifying-glass-1"></span></a>
                                                    <a href="projects-fullwidth.html" className="link"><span className="icon flaticon-unlink"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                
                    <div className="more-projects">
                        <a href="projects-classic.html" className="projects">View All Projects</a>
                    </div>
                
                </div>
            </section>
            
            
            

            
            
            

            <section className="testimonial-section">
                <div className="auto-container">
                    <div className="sec-title-two centered">
                        <h2>What our <span className="color">client say</span></h2>
                        <div className="title-text">Just Look What Our Clients Say.</div>
                    </div>
                    
                    <div className="testimonial-carousel owl-carousel owl-theme">
                        
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="content">
                                    <div className="image-outer">
                                        <div className="image">
                                            <img src="assets/images/resource/author-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <h3>Pranil</h3>
                                    <div className="title">Awosome</div>
                                    <div className="text">“Working with on a daily basis is a pleasure, based on their efficiency when it comes to transporting both our finished and returned goods in a timely and secure manner.”</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="content">
                                    <div className="image-outer">
                                        <div className="image">
                                            <img src="assets/images/resource/author-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <h3>Pranil</h3>
                                    <div className="title">Nice</div>
                                    <div className="text">“Since we started working with, we've seen our supply chain improve considerably. It is vital that our components and generators arrive safely to our customers,they have delivered on their promises.”</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="content">
                                    <div className="image-outer">
                                        <div className="image">
                                            <img src="assets/images/resource/author-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <h3>Pranil</h3>
                                    <div className="title">Awosome</div>
                                    <div className="text">“As always, once again came through for us when the shipment had to be there. I know I can always count on you and I can go home and let you handle it. That is priceless. Thanks again.”</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="content">
                                    <div className="image-outer">
                                        <div className="image">
                                            <img src="assets/images/resource/author-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <h3>Pranil</h3>
                                    <div className="title">Nice</div>
                                    <div className="text">“My team and I appreciate the way that you are always on the ball and willing to go out of your way to help get us our material in time to prevent our lines from going down. Nice Job!”</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2 className="white">Media / <span className="color">News</span></h2>
                    </div>
                    
                    <div className="row clearfix">
                        
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-1.jpg" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Kane Starc</span></li>
                                        <li>Logistics</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">How logistics service works.?</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="250ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-2.jpg" alt="" /></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Steve Gates</span></li>
                                        <li>Warehouse</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">How to do inventary for warehouse.</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-3.jpg" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li>By <span>Jason Root</span></li>
                                        <li>Transportation</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">how transportation work ?</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more <span className="icon flaticon-right-arrow-1"></span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            
            <section className="call-to-action-section backimg1" >
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-8">
                        <h2>Let us move you with honesty and greatness.</h2>
                    </div>
                    <div className="col-lg-4">
                        <a href="contact.html" className="theme-btn btn-style-two"><span className="txt">contact us</span></a>
                    </div>
                    </div>
                </div>
            </section>
            <footer className="main-footer">
                <div className="auto-container">
                    <div className="widgets-section">
                        <div className="row clearfix">
                            
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                
                                    <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                        <div className="footer-widget logo-widget">
                                            <div className="logo">
                                                <a href="index.html"><img src="assets/images/footer-logo.png" alt=""/></a>
                                            </div>
                                            <div className="text">With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.</div>
                                            <ul className="social-icons">
                                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <h2>Our Services</h2>
                                            <div className="widget-content">
                                                <ul className="list">
                                                    <li><a href="#">Warehousing</a></li>
                                                    <li><a href="#">Machinery Transport</a></li>
                                                    <li><a href="#">Transportation</a></li>
                                                    <li><a href="#">Multimodal Transportation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                <div className="row clearfix">
                                
                                    <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                        <div className="footer-widget contact-widget">
                                            <h2>Contact Details</h2>
                                            <div className="widget-content">
                                            
                                                <ul> 
                                                    <li><span className="icon flaticon-phone-call"></span><a href="tel:1234567891">(1234) 567 8910</a></li>
                                                    <li><span className="icon flaticon-map"></span> 000, Mumbai, India</li>
                                                    <li><span className="icon flaticon-email"></span><a href="mailto:youremail@example.com"> youremail@example.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                        <div className="footer-widget newsletter-widget">
                                            <h2>Quick Inquiry</h2>
                                            <div className="newsletter-form">
                                                <form method="post" action="contact-footer.php">
                                                    <div className="form-group">
                                                        <input type="text" name="name" defaultValue="" placeholder="Your Name" required=""/>
                                                        <input type="email" name="email" defaultValue="" placeholder="Your Email" required=""/>
                                                        <input type="text" name="message" defaultValue="" placeholder="Message" required=""/>
                                                        <button type="submit" className="theme-btn btn-style-one"><span className="txt">Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="footer-bottom clearfix">
                        <div className="pull-left">
                            <div className="copyright"><a href="#">© Yoursite 2021 All Right Reserved.</a></div>
                        </div>
                        <div className="pull-right">
                            <a href="#">Terms & Conditions |</a>
                            <a href="#">Privacy Policy |</a>
                            <a href="#">Disclaimer</a>
                        </div>
                    </div>
                    
                </div>
            </footer>
            
        </div>  
        {/* <!--End pagewrapper--> */}

        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div>

        <div id="search-popup" className="search-popup">
            <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
            <div className="popup-inner">
                <div className="overlay-layer"></div>
                <div className="search-form">
                    <form method="post" action="#">
                        <div className="form-group">
                            <fieldset>
                                <input type="search" className="form-control" name="search-input" defaultValue="" placeholder="Search Here" required=""/>
                                <input type="submit" defaultValue="Search Now!" className="theme-btn"/>
                            </fieldset>
                        </div>
                    </form>
            
                
                </div>
                
            </div>
        </div>
        </div>
    );
}
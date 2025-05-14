import useAnimationObserver from '../useAnimationObserver';
import useScrollToTop from '../scroltop';
import { useState, useEffect } from 'react';



export default function Home() {

    useAnimationObserver();
    const { showScrollTop, scrollToTop } = useScrollToTop();


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

            <section className="main-slider animation-element slide-left">
                <div className="slider-box">
                    <div className="slide">
                        <div className="image-layer slider2"></div>
                        <div className="auto-container">
                            <div className="content">
                                <h2>Morocco VTC <br/> Euro Truck Simulator</h2>
                                <div className="text">First Moroccan Virtual Trucking Company on TruckerMP. Experience virtual logistics excellence with our professional team of drivers across Europe and North Africa.</div>
                                <div className="btns-box">
                                    <a href="#" className="theme-btn btn-style-one"><span className="txt">Join Our Fleet</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        
            <section className="story-section animation-element slide-right">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h2>Welcome to <span className="color">Morocco VTC</span> for <span className="color">Euro Truck Simulator</span></h2>
                                <div className="bold-text">Professional virtual trucking services across Europe and North Africa in ETS2. Join our convoys and experience the Moroccan style of trucking excellence.</div>
                                <div className="text">
                                    <p>Morocco VTC is the First Moroccan Virtual Trucking Company in TruckerMP for Euro Truck Simulator 2. With our experience of over 5+ Years in the community, our company is highly skilled and equipped with the best drivers to match all professional trucking standards.</p>
                                    <p>We're constantly delivering the best virtual logistics services with our carefully planned routes, professional drivers, and meticulously maintained virtual fleet. We offer regular convoys across Europe and North Africa, with special routes showcasing Morocco's beautiful landscapes in ETS2.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="image-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/about.jpg" alt="Morocco VTC"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>5+ years in TruckerMP community</li>
                                <li>1000+ virtual deliveries completed</li>
                                <li>300+ registered drivers available</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>Weekly organized convoys</li>
                                <li>Operations in 10+ European countries</li>
                                <li>Specialized Morocco routes</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>Custom truck skins</li>
                                <li>Professional driving standards</li>
                                <li>Active Discord community</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="welcome-section animation-element slide-left">
                <div className="auto-container">
                    <div className="title-box">
                        <h2>Professional virtual trucking services across <span className="color">Europe and North Africa</span> in ETS2<br/> Join our convoys and experience the Moroccan style of trucking excellence.</h2>
                    </div>
                    
                    <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h2>Experience Euro Truck Simulator with Morocco VTC</h2>
                                <h4><span className="color">5+ Years of Experience in TruckerMP</span></h4>
                                <div className="text">Morocco VTC is the premier Moroccan virtual trucking company in TruckerMP. Founded over 5 years ago, we've built a reputation for professionalism, organization, and community spirit across the Euro Truck Simulator 2 multiplayer platform.<br/>We take pride in our Moroccan heritage while embracing international routes, specialized convoys, and creating a welcoming environment for drivers of all experience levels. Our custom truck skins, professional driving standards, and active community make us the VTC of choice for serious virtual truckers.</div>
                            </div>
                        </div>
                        
                        <div className="video-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="video-box">
                                    <img src="assets/images/resource/video-img-2.jpg" alt="Morocco VTC" />
                                    <a href="#" className="lightbox-image overlay-box"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>Weekly convoy events</li>
                                <li>1000+ completed routes</li>
                                <li>Active Discord server</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>Driver training program</li>
                                <li>Custom truck skin design</li>
                                <li>Community events and giveaways</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-style-three">
                                <li>TruckerMP verified company</li>
                                <li>Special Morocco map focus</li>
                                <li>Multilingual support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section animation-element slide-right">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>JOIN OUR CONVOY</h2>
                        <div className="text">Interested in becoming part of Morocco VTC? Contact us to learn about our recruitment process, upcoming convoys, or just to chat with our community. We welcome drivers of all experience levels.</div>
                    </div>
                    
                    <div className="row clearfix">
                        <div className="info-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <ul className="contact-info-list">
                                    <li>
                                        <strong>
                                        Join our Discord server to connect with our drivers, participate in events, and learn more about becoming a member of Morocco VTC. We're always looking for passionate virtual truckers!
                                        </strong>
                                    </li>
                                </ul>
                                <ul className="contact-info-list">
                                    <li>
                                        <span className="icon flaticon-map"></span><strong> TruckerMP HQ: </strong><a href="#">Morocco VTC, European Server</a>
                                    </li>
                                    <li>
                                        <span className="icon flaticon-phone-call"></span><strong> Discord: </strong><a href="#">Morocco VTC Official</a>
                                    </li>
                                    <li>
                                        <span className="icon flaticon-email"></span><strong> Email: </strong><a href="mailto:contact@moroccoVTC.com">contact@moroccoVTC.com</a>
                                    </li>
                                </ul>
                                <ul className="info-list">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-discord"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="contact-form">
                                    <form method="post" action="#" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your Name *" required />
                                            </div>
                                            
                                            <div className="col-md-6 col-sm-12 form-group">
                                                <input type="text" name="discord" placeholder="Discord ID (e.g. username#1234) *" required />
                                            </div>
                                            
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input type="url" name="steam_profile" placeholder="Steam Profile URL *" required />
                                            </div>
                                            
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email Address *" required />
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <select name="experience" className="custom-select-box">
                                                    <option value="">Driving Experience</option>
                                                    <option value="beginner">Beginner (0-6 months)</option>
                                                    <option value="intermediate">Intermediate (6 months-2 years)</option>
                                                    <option value="experienced">Experienced (2+ years)</option>
                                                    <option value="professional">Professional (5+ years)</option>
                                                </select>
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <label className="option-label">Preferred Routes:</label>
                                                <div className="checkbox-row">
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="routes[]" value="western_europe" />
                                                        Western Europe
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="routes[]" value="eastern_europe" />
                                                        Eastern Europe
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="routes[]" value="northern_europe" />
                                                        Northern Europe
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="routes[]" value="mediterranean" />
                                                        Mediterranean
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="routes[]" value="morocco_routes" />
                                                        Morocco Special Routes
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <label className="option-label">Availability for Convoy Events:</label>
                                                <div className="radio-row">
                                                    <label className="radio-label">
                                                        <input type="radio" name="availability" value="weekdays" />
                                                        Weekdays
                                                    </label>
                                                    <label className="radio-label">
                                                        <input type="radio" name="availability" value="weekends" />
                                                        Weekends
                                                    </label>
                                                    <label className="radio-label">
                                                        <input type="radio" name="availability" value="both" />
                                                        Both
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Tell us about yourself and why you want to join Morocco VTC..."></textarea>
                                            </div>
                                            
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <button type="submit" className="theme-btn btn-style-one"><span className="txt">Submit Application</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        
            <section className="featured-section backimg2 animation-element slide-left">
                <div className="auto-container">
                    <div className="title-box">
                        <h2>How our <span className="color">VTC</span> operates in <span className="color">TruckerMP</span></h2>
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
                                    <h3><a href="#">Driver Recruitment</a></h3>
                                    <div className="text">We carefully select new drivers who demonstrate professional driving skills, good communication, and a passion for virtual trucking in ETS2.</div>
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
                                    <h3><a href="#">Training & Integration</a></h3>
                                    <div className="text">New drivers receive comprehensive training on convoy procedures, communication protocols, and our custom Morocco VTC truck skin application.</div>
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
                                    <h3><a href="#">Convoy Planning</a></h3>
                                    <div className="text">Our logistics team plans weekly convoys with carefully selected routes, cargo types, and rest stops to create the most realistic and enjoyable trucking experience.</div>
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
                                    <h3><a href="#">Convoy Execution</a></h3>
                                    <div className="text">Our convoy operations include lead drivers, tail drivers, and radio communication to ensure smooth, enjoyable, and realistic virtual trucking experiences.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        
            <section className="services-section-two animation-element slide-right">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Our VTC <span className="color">Services</span></h2>
                        <div className="text">Morocco VTC provides a range of services for virtual trucking enthusiasts, from organized convoys to custom truck skins, all designed to enhance your Euro Truck Simulator 2 multiplayer experience.</div>
                    </div>
                    
                    <div className="row clearfix">
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-hotel"></span>
                                    </div>
                                    <h3><a href="#">Weekly Convoys</a></h3>
                                    <div className="text">Professionally organized weekly convoy events with carefully planned routes, rest stops, and themed cargo selections.</div>
                                </div>
                            </div>
                        </div>  

                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-desk-1"></span>
                                    </div>
                                    <h3><a href="#">Driver Training</a></h3>
                                    <div className="text">Comprehensive training programs for new and experienced drivers to improve convoy skills, communication, and TruckerMP protocols.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-house-1"></span>
                                    </div>
                                    <h3><a href="#">Custom Truck Skins</a></h3>
                                    <div className="text">Professionally designed Moroccan-themed truck skins exclusively for our members with personalized driver name and identification.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-delivery-truck"></span>
                                    </div>
                                    <h3><a href="#">Special Events</a></h3>
                                    <div className="text">Seasonal events, charity convoys, and collaboration events with other VTCs to build community and showcase our driving skills.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-houses"></span>
                                    </div>
                                    <h3><a href="#">Discord Community</a></h3>
                                    <div className="text">Active Discord server with dedicated channels for convoy planning, driver support, game modifications, and social interaction.</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-apartment-1"></span>
                                    </div>
                                    <h3><a href="#">Multilingual Support</a></h3>
                                    <div className="text">Support in multiple languages including Arabic, French, English, and Spanish to accommodate our diverse international membership.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        
            <section class="story-section animation-element slide-left">
                <div class="auto-container">
                    <div class="row clearfix">
                        
                        <div class="content-column col-lg-8 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <h2>Welcome to the <span class="color">MyLogistics</span> And <span class="color">Transportation</span></h2>
                                <div class="bold-text">We provide the best suggestions for Logistics and Transposition in town Go beyond logistics, make the world go round and revolutionize business.</div>
                                <div class="text">
                                    <p>Mylogistics is a Leading Provider of Quality Packers And Movers in world. With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.</p>
                                    <p>We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.We offer a wide range of Moving And Packing, logistics, transportation Upholestery Services in all over the world.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="image-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="image">
                                    <img src="assets/images/resource/about.jpg" alt="Transportation"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                        <div class="row clearfix">
                        <div class="col-lg-4">
                                <ul class="list-style-three">
                                    <li>4 years material warranty.</li>
                                    <li>1000+ projects has been completed.</li>
                                    <li>499+ professinals are available.</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <ul class="list-style-three">
                                    <li>15+ awards.</li>
                                    <li>Available on 10+ countries. </li>
                                    <li>Borderless logistics.</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <ul class="list-style-three">
                                    <li>A world-class port.</li>
                                    <li>Endless possibilities.</li>
                                    <li>Happiness delivered.</li>
                                </ul>
                            </div>
                                

                    </div>
                </div>
            </section>

            <section className="interior-section style-three animation-element slide-right">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="image-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image">
                                        <img src="assets/images/resource/about2.jpg" alt="Morocco VTC"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h2>Why Choose <span className="color">Morocco VTC</span> for <span className="color">Euro Truck Simulator 2</span></h2>
                                    <div className="text">Morocco VTC is the first and premier Moroccan virtual trucking company on TruckerMP. With over 5 years of experience, we've built a reputation for professionalism, organization, and creating an inclusive community. Our unique blend of Moroccan heritage and international routes offers drivers a distinctive and enjoyable virtual trucking experience.
                                            We pride ourselves on our well-organized convoys, custom truck skins, and active Discord community where drivers from all backgrounds come together to share their passion for Euro Truck Simulator 2.</div>
                                    <div className="row clearfix">
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-answer"></span>
                                                </div>
                                                <h3>Professional Team</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-award-1"></span>
                                                </div>
                                                <h3>TruckerMP Verified</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="block-inner">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-call"></span>
                                                </div>
                                                <h3>Discord Support</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-section style-two animation-element slide-left">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row clearfix">
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="2500" data-stop="5">5</span>+ Years
                                        </div>
                                        <h4 className="counter-title">TruckerMP Experience</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box alternate counted">
                                            <span className="count-text" data-speed="3000" data-stop="1000">1000</span>+
                                        </div>
                                        <h4 className="counter-title">Convoys Completed</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="3000" data-stop="300">300</span>+
                                        </div>
                                        <h4 className="counter-title">Active Drivers</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '900ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="2500" data-stop="2">2</span> Weekly
                                        </div>
                                        <h4 className="counter-title">Convoy Events</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        
            <section className="call-to-action-section backimg1 animation-element slide-left">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8">
                            <h2>Join Morocco VTC and experience virtual trucking excellence.</h2>
                        </div>
                        <div className="col-lg-4">
                            <a href="contact.html" className="theme-btn btn-style-two"><span className="txt" style={{color: 'black'}}>Apply Now</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="main-footer animation-element slide-right">
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
                                            <div className="text">Morocco VTC is the premier Moroccan virtual trucking company on TruckerMP for Euro Truck Simulator 2. With over 5 years of experience, we've built a reputation for professionalism and community spirit.</div>
                                            <ul className="social-icons">
                                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-discord"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                        <div className="footer-widget links-widget">
                                            <h2>Our Services</h2>
                                            <div className="widget-content">
                                                <ul className="list">
                                                    <li><a href="#">Weekly Convoys</a></li>
                                                    <li><a href="#">Driver Training</a></li>
                                                    <li><a href="#">Discord Community</a></li>
                                                    <li><a href="#">Custom Truck Skins</a></li>
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
                                                    <li><span className="icon flaticon-map"></span> TruckerMP, European Server</li>
                                                    <li><span className="icon flaticon-email"></span><a href="mailto:contact@moroccoVTC.com"> contact@moroccoVTC.com</a></li>
                                                    <li><span className="icon fab fa-discord"></span><a href="#"> Morocco VTC Discord</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom clearfix">
                        <div className="pull-left">
                            <div className="copyright"><a href="#">© Morocco VTC 2025 - All Rights Reserved</a></div>
                        </div>
                        <div className="pull-right">
                            <a href="#">Terms & Conditions |</a>
                            <a href="#">Privacy Policy |</a>
                            <a href="#">Rules</a>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>  
        <div  className="scroll-to-top scroll-to-target" onClick={scrollToTop} style={{ display: showScrollTop ? 'block' : 'none', cursor: 'pointer' }}>
            <span className="fa fa-angle-up"></span>
        </div>
       
        </div>
    );
}
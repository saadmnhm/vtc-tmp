import useAnimationObserver from '../useAnimationObserver';



export default function Home() {

  useAnimationObserver();

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
            
            <section className="story-section animation-element slide-right">
                <div className="auto-container">
                    <div className="row clearfix">
                        
                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h2>Welcome to the <span className="color">MyLogistics</span> And <span className="color">Transportation</span></h2>
                                <div className="bold-text">We provide the best suggestions for Logistics and Transposition in town Go beyond logistics, make the world go round and revolutionize business.</div>
                                <div className="text">
                                    <p>Mylogistics is a Leading Provider of Quality Packers And Movers in world. With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.</p>
                                    <p>We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.We offer a wide range of Moving And Packing, logistics, transportation Upholestery Services in all over the world.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="image-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/about.jpg" alt="Transportation"/>
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

            <section className="welcome-section  animation-element slide-left">
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

            <section class="contact-form-section animation-element slide-right">
                <div class="auto-container">
                    <div class="sec-title">
                        <h2>HAPPY TO HELP YOU</h2>
                        <div class="text">You can give us a call, drop us an email or book a one-to-one appointment, we are here to help you and detangle your journey. We are looking forward to hearing from you.</div>
                    </div>
                    
                    <div class="row clearfix">
                        

                        <div class="info-column col-lg-5 col-md-12 col-sm-12">
                            <div class="inner-column">
                                

                                <ul class="contact-info-list">
                                    <li>
                                    <strong>
                                    You can give us a call, drop us an email or book a one-to-one appointment, we are here to help you and detangle your journey. We are looking forward to hearing from you.
                                    </strong></li>
                                </ul>
                                <ul class="contact-info-list">
                                    <li>
                                        <span class="icon flaticon-map"></span><strong> Address : </strong><a href="#">123, A-Wing, Mumbai India - 123456.</a></li>
                                    <li>
                                        <span class="icon flaticon-phone-call"></span><strong> Phone : </strong><a href="tel:12345678910">1234 567 8910</a></li>
                                    <li><span class="icon flaticon-email"></span><strong> Email : </strong><a href="mailto:demo@example.com">demo@example.com</a></li>
                                </ul>
                            <ul class="info-list">
                            
                                                <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                                                <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fab fa-google-plus-g"></span></a></li>
                                        
                            </ul>
                                
                            </div>
                        </div>
                        <div class="form-column col-lg-7 col-md-12 col-sm-12">
                            <div class="inner-column">
                                
                                <div class="contact-form">
                                        
                                    <form method="post" action="contact.php" id="contact-form" novalidate="novalidate">
                                        <div class="row clearfix">
                                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="name" placeholder="Name" required=""/>
                                            </div>
                                            
                                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="email" placeholder="Email" required=""/>
                                            </div>
                                            
                                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="subject" placeholder="Subject" required=""/>
                                            </div>

                                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="phone" placeholder="Phone" required=""/>
                                            </div>
                                            
                                            <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>
                                            
                                            <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="txt">Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
            </section>
            
            <section className="featured-section backimg2 animation-element slide-left" >
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
            
            <section className="services-section-two animation-element slide-right">
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

            <section class="interior-section style-three animation-element slide-right">
                <div class="auto-container">
                    <div class="inner-container">
                        <div class="row clearfix">
                            
                            <div class="image-column col-lg-4 col-md-12 col-sm-12">
                                <div class="inner-column">
                                    <div class="image">
                                        <img src="assets/images/resource/about2.jpg" alt="cargoservice"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-column col-lg-8 col-md-12 col-sm-12">
                                <div class="inner-column">
                                    <h2>Why Choose Us for <span class="color">Logistics</span> &amp; <span class="color">Transportation</span></h2>
                                    <div class="text">Mylogistics is a Leading Provider of Quality Packers And Movers in world. With our Experience of over 25+ Years in the Industry, the company is highly skilled and is equipped with the best of facilities to match all High Quality Moving Standards.
                                            We constantly delivering the best is taken care of with the help of our Products Durability, Products Comfort and Products Attractiveness.We offer a wide range of Moving And Packing, logistics, transportation Upholestery Services in all over the world.</div>
                                    <div class="row clearfix">
                                    
                                        <div class="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div class="block-inner">
                                                <div class="icon-box">
                                                    <span class="icon flaticon-answer"></span>
                                                </div>
                                                <h3>Professional Team</h3>
                                            </div>
                                        </div>
                                        
                                        <div class="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div class="block-inner">
                                                <div class="icon-box">
                                                    <span class="icon flaticon-award-1"></span>
                                                </div>
                                                <h3>Assure Quality</h3>
                                            </div>
                                        </div>
                                        
                                        <div class="interior-block col-lg-4 col-md-4 col-sm-12">
                                            <div class="block-inner">
                                                <div class="icon-box">
                                                    <span class="icon flaticon-call"></span>
                                                </div>
                                                <h3>24/7 Support</h3>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section class="counter-section style-two animation-element slide-left">
                    <div class="auto-container">
                    
                    <div className="fact-counter">
                        <div className="row clearfix">
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="2500" data-stop="25">25</span> Year's
                                        </div>
                                        <h4 className="counter-title">Material Warranty</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box alternate counted">
                                            <span className="count-text" data-speed="3000" data-stop="2200">2200</span>+
                                        </div>
                                        <h4 className="counter-title">Order Completed</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="3000" data-stop="300">300</span>+
                                        </div>
                                        <h4 className="counter-title">Team Members</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft animated" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '900ms', animationName: 'fadeInLeft'}}>
                                    <div className="content">
                                        <div className="count-outer count-box counted">
                                            <span className="count-text" data-speed="2500" data-stop="20">20</span> Days
                                        </div>
                                        <h4 className="counter-title">Delivery</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
            </section>



            <section className="news-section animation-element slide-right">
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
            
            <section className="call-to-action-section backimg1 animation-element slide-left" >
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
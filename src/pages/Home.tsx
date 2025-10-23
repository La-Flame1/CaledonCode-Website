import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1 className="logo">
  <span className="left-bracket">&lt;</span>
  <span className="right-bracket">&gt;</span>
  CaledonCode
</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#tiers">Tiers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */} 
      <section className="hero">
        <div className="floating-brackets">
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
          <span className="bracket">&lt;&gt;</span>
        
        </div>
        <h1>A HUB FOR INNOVATION</h1>
        <p>Empower your digital presence with <span className="logo-inline">
    <span className="left-bracket">&lt;</span>
    <span className="right-bracket">&gt;</span>
    CaledonCode
  </span>.</p>
        <button className="hero-button">Contact Us</button>
      </section>

      {/* Pricing Plans */}
      <section id="tiers" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Choose the perfect plan for your business needs</p>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">Startup</h3>
              <p className="card-price">R499 /mo</p>
              <ul className="feature-list">
                <li>Website design and setup</li>
                <li>Basic SEO integration</li>
                <li>Custom brand kit</li>
                <li>Foundational digital presence</li>
                <li>Mobile responsive design</li>
              </ul>
              <button className="card-button">Get Started</button>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Elevate</h3>
              <p className="card-price">R999 /mo</p>
              <ul className="feature-list">
                <li>Interactive and responsive web design</li>
                <li>Dynamic banner creation</li>
                <li>Enhanced content SEO</li>
                <li>Conversion-centric UX design</li>
                <li>E-commerce functionality</li>
                <li>3-month premium support</li>
              </ul>
              <button className="card-button">Get Started</button>
            </div>

            <div className="pricing-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Excel</h3>
              <p className="card-price">R1999 /mo</p>
              <ul className="feature-list">
                <li>Advanced SEO integration</li>
                <li>Full site functionality</li>
                <li>Strategic content SEO</li>
                <li>Priority updates and maintenance</li>
                <li>Custom web applications</li>
                <li>6-month priority support</li>
              </ul>
              <button className="card-button">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">We specialize in creating digital experiences that drive results</p>
          
          <div className="expertise-grid">
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3 className="skill-title">UI/UX Design</h3>
              <p>Intuitive and elegant design approach for seamless experiences that users love and engage with.</p>
              <div className="skill-features">
                <span>User Research</span>
                <span>Wireframing</span>
                <span>Prototyping</span>
              </div>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3 className="skill-title">Web Development</h3>
              <p>Scalable, responsive websites built with modern frameworks and best practices for optimal performance.</p>
              <div className="skill-features">
                <span>React & Next.js</span>
                <span>Responsive Design</span>
                <span>API Integration</span>
              </div>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3 className="skill-title">Brand Identity</h3>
              <p>Unique and impactful branding assets that make your business stand out in the digital landscape.</p>
              <div className="skill-features">
                <span>Logo Design</span>
                <span>Brand Guidelines</span>
                <span>Visual Identity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real testimonials emphasizing professionalism, creativity, and satisfaction</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <img src="female2.png" alt="Client Avatar" className="testimonial-avatar"/>
              <h3 className="client-name">Alex Mokoena</h3>
              <p className="client-company">Founder, BrightWave Digital</p>
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"The team at CaledonCode transformed our online presence completely. Our website engagement doubled within just 3 weeks of launch!"</p>
            </div>

            <div className="testimonial-card">
              <img src="female1.png" alt="Client Avatar" className="testimonial-avatar"/>
              <h3 className="client-name">Sarah Paddignton</h3>
              <p className="client-company">CEO, TechInnovate Solutions</p>
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"Outstanding service and incredible attention to detail. Our conversion rate increased by 45% after the redesign. Highly recommended!"</p>
            </div>

            <div className="testimonial-card">
              <img src="male1.png" alt="Client Avatar" className="testimonial-avatar"/>
              <h3 className="client-name">Collon Thompson</h3>
              <p className="client-company">Marketing Director, GrowthLab</p>
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"Professional, creative, and delivered beyond expectations. The collaboration was seamless and the results speak for themselves."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="contact-section">
         <div className="contact-circles-bg">
    <div className="contact-circle"></div>
    <div className="contact-circle"></div>
    <div className="contact-circle"></div>
    <div className="contact-circle"></div>
    <div className="contact-circle"></div>
  </div>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Let's collaborate and bring your vision to life</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@caledoncode.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Caledon, South Africa</span>
              </div>
              <div className="contact-hours">
                <p>Available Monday - Friday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input"/>
              <input type="email" placeholder="Your Email" className="form-input"/>
              <textarea placeholder="Your Message" className="form-input form-textarea"></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>

            
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-motto">
              <h3 className="motto">Web.Code.Design.Deliver</h3>
              <p className="motto-subtitle">Crafting digital excellence from concept to deployment</p>
            </div>
            
            <div className="footer-info">
              <div className="footer-contact">
                <span className="email">hello@caledoncode.com</span>
                <span className="location">Caledon, South Africa</span>
              </div>
              
              <div className="footer-social">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 CaledonCode. All rights reserved.</p>

          </div>
        </div>
      </footer>

    </div>


  );
  
}

export default App;
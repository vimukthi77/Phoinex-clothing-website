import '../Styles/Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Platform</h1>
        <p>Your one-stop destination for amazing content</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Easy to Use</h2>
          <p>Our platform is designed with simplicity in mind, making it accessible for everyone.</p>
        </div>

        <div className="feature-card">
          <h2>Fast & Reliable</h2>
          <p>Experience lightning-fast performance with our optimized infrastructure.</p>
        </div>

        <div className="feature-card">
          <h2>Secure</h2>
          <p>Your data security is our top priority. Rest assured your information is safe with us.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>Join thousands of satisfied users and start your journey with us.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  )
}

export default Home

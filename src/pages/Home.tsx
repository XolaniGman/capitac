import { Link } from "react-router-dom";
import "./home.css";

const LogoFallback = () => (
  <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="64" height="44" rx="6" fill="var(--brand-dark)" />
    <circle cx="22" cy="22" r="12" fill="var(--brand-primary)" />
    <circle cx="40" cy="22" r="12" fill="var(--brand-accent)" />
  </svg>
);

const Home = () => {
  return (
    <div className="home-root">
      <header className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-left">
            <div className="brand-row">
              <div className="logo-wrap">
                <img
                  src="/capitec-logo.png"
                  alt="Capitec logo"
                  className="home-logo-img"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="home-logo-fallback"><LogoFallback /></div>
              </div>
              <div className="home-text">
                <p className="kicker">Welcome to</p>
                <h1 className="home-title">Capitec SpendSight</h1>
                <p className="home-sub">Effortless, secure spending insights that help you save smarter every month.</p>
              </div>
            </div>

            <div className="hero-cta">
              <Link to="/" className="btn primary">Get Started — It's Free</Link>
              <a href="#features" className="btn ghost">See Features</a>
            </div>

            <div className="partner-logos" aria-hidden>
              <div className="partner-pill">Trusted by banks</div>
              <div className="partner-logos-row">
                <div className="partner">Bank A</div>
                <div className="partner">Bank B</div>
                <div className="partner">Bank C</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="mock-phone">
              <div className="mock-screen">
                <img
                  src="/home-dashboard-preview.png"
                  alt="Capitec dashboard preview"
                  className="mock-preview"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { /* fallback to svg if png not present */ (e.target as HTMLImageElement).src = '/image.png'; }}
                />
                <div className="mock-charts" aria-hidden>Dashboard preview</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section id="features" className="home-features">
          <h2 className="section-title">Why Choose SpendSight</h2>
          <p className="lead" style={{ marginBottom: '1rem', color: 'rgba(34,49,35,0.7)' }}>Simple, secure financial intelligence built for everyday banking customers — actionable insights, clear budgets, and beautiful visual reports.</p>
          <div className="features-grid">
            <div className="feature-card">
              <svg className="feature-svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 11h4v7H3zM10 6h4v12h-4zM17 2h4v16h-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Clear Budgets</h3>
              <p>Set budgets per category and see real-time progress so you never overspend by surprise.</p>
            </div>

            <div className="feature-card">
              <svg className="feature-svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Real-time Alerts</h3>
              <p>Instant notifications for unusual activity or when you’re nearing a budget limit.</p>
            </div>

            <div className="feature-card">
              <svg className="feature-svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2" fill="currentColor" />
              </svg>
              <h3>Personalized Tips</h3>
              <p>Practical advice based on your spending patterns — small changes, big impact.</p>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a href="/" className="btn primary" style={{ fontWeight: 700 }}>Try the Dashboard</a>
            <a href="#" className="btn ghost" style={{ marginLeft: '0.75rem' }}>Learn More</a>
          </div>
        </section>

        <section className="home-testimonial">
          <div className="testimonial-card">
            <blockquote>
              “SpendSight helped our customers reduce unnecessary spend by 18% in the first month. Clean, clear and actionable.”
            </blockquote>
            <div className="testimonial-author">— Product Lead, Example Bank</div>
          </div>
        </section>

        <section className="home-gallery">
          <h2 className="section-title">Screenshots</h2>
          <p className="lead" style={{ color: 'rgba(34,49,35,0.6)', marginBottom: '0.75rem' }}>Explore key screens from the SpendSight dashboard.</p>
          <div className="gallery-grid">
            <figure className="gallery-item">
              <img src="/home-dashboard-preview.png" alt="Dashboard preview" onError={(e) => { (e.target as HTMLImageElement).src = '/home-dashboard-preview.svg'; }} />
              <figcaption>Dashboard preview</figcaption>
            </figure>

            <figure className="gallery-item">
              <div className="screenshot">Charts preview</div>
              <figcaption>Charts preview</figcaption>
            </figure>

            <figure className="gallery-item">
              <div className="screenshot">Transactions preview</div>
              <figcaption>Transactions preview</figcaption>
            </figure>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Home;

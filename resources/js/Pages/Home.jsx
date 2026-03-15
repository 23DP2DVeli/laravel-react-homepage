import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import "../../css/Home.css";

const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Action / Thriller",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi / Drama",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "Dune",
    year: 2021,
    genre: "Sci-Fi / Adventure",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/d5NXSklpcvweasK4ELHMnKR0Ckx.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action / Crime",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 5,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama / History",
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 6,
    title: "The Godfather",
    year: 1972,
    genre: "Crime / Drama",
    rating: 9.2,
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHnDmni5.jpg",
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    genre: "Thriller / Drama",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi / Noir",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
];

const features = [
  { icon: "⌕", title: "Smart Search", desc: "Filter by title, genre, year, or rating." },
  { icon: "✦", title: "Personalized Picks", desc: "Recommendations shaped by your taste." },
  { icon: "▣", title: "Multi-Device", desc: "Sync seamlessly across all your screens." },
  { icon: "▶", title: "Rich Details", desc: "Trailers, cast, reviews — everything." },
  { icon: "◈", title: "Save Favorites", desc: "Build your watchlist and get notified." },
  { icon: "⚡", title: "Lightning Fast", desc: "Instant searches, buttery smooth UI." },
];

function MovieCard({ movie, index }) {
  return (
    <article className="movie-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="card-image-wrap">
        <img src={movie.image} alt={movie.title} className="card-image" />
        <div className="card-overlay" />
        <span className="card-rating">★ {movie.rating}</span>
      </div>
      <div className="card-body">
        <p className="card-genre">{movie.genre} · {movie.year}</p>
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-actions">
          <button className="btn-view">View</button>
          <button className="btn-save">Save</button>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const { user, loading, logout } = useAuth();

  if (loading)
    return (
      <div className="loader-wrap">
        <div className="loader-ring" />
      </div>
    );

  return (
    <div style={{ minHeight: "100vh" }}>
      <header className="nav">
        <a href="/" className="nav-logo">
          <div className="nav-logo-dot" />
          <span className="nav-logo-text">MovieClub</span>
        </a>
        <div className="nav-actions">
          {user ? (
            <>
              <span className="nav-user">{user.name}</span>
              <button onClick={logout} className="btn-danger">Logout</button>
            </>
          ) : (
            <>
              <a href="/login" className="btn-ghost">Sign In</a>
              <a href="/register" className="btn-primary">Get Started</a>
            </>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Your cinema companion</p>
            <h1 className="hero-h1">
              FIND YOUR<br />NEXT <em>GREAT</em><br />WATCH
            </h1>
            <p className="hero-sub">
              Thousands of movies, curated collections, and recommendations built around your taste.
            </p>
            <div className="hero-ctas">
              {user ? (
                <button className="hero-btn-main">Browse Movies</button>
              ) : (
                <>
                  <a href="/register" className="hero-btn-main">Start Exploring</a>
                  <a href="/login" className="hero-btn-sec">Sign In</a>
                </>
              )}
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-val">10K+</div>
                <div className="stat-label">Movies</div>
              </div>
              <div>
                <div className="stat-val">50K+</div>
                <div className="stat-label">Users</div>
              </div>
              <div>
                <div className="stat-val">4.8★</div>
                <div className="stat-label">Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-big-card">
              <img src={featuredMovies[0].image} alt={featuredMovies[0].title} />
              <div className="hero-card-label">
                <h4>{featuredMovies[0].title}</h4>
                <p>{featuredMovies[0].genre}</p>
              </div>
              <span className="hero-badge">★ {featuredMovies[0].rating}</span>
            </div>
            <div className="hero-film-strip">
              {featuredMovies.slice(1, 4).map((m) => (
                <div key={m.id} className="film-thumb">
                  <img src={m.image} alt={m.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <p className="section-eyebrow">Featured content</p>
            <h2 className="section-h2">TRENDING THIS WEEK</h2>
            <p className="section-sub">The hottest titles and most-watched films in our collection.</p>
          </div>
          <div className="movies-grid">
            {featuredMovies.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} index={i} />
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-head">
            <p className="section-eyebrow">Why choose us</p>
            <h2 className="section-h2">BUILT FOR MOVIE LOVERS</h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-cell">
                <div className="feature-icon">{f.icon}</div>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-line" />
        <h2 className="cta-h2">JOIN THE CLUB</h2>
        <p className="cta-sub">
          Join thousands of movie enthusiasts and discover your next favorite film today.
        </p>
        <div className="cta-btns">
          {user ? (
            <button className="hero-btn-main">Browse Movies</button>
          ) : (
            <>
              <a href="/register" className="hero-btn-main">Get Started Free</a>
              <a href="/login" className="hero-btn-sec">Sign In</a>
            </>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <div className="footer-dot" />
          MovieClub
        </div>
        <p className="footer-copy">© 2025 MovieClub. All rights reserved.</p>
      </footer>
    </div>
  );
}

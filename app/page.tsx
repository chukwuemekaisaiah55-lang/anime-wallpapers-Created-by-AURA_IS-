'use client';

import { useMemo, useState } from 'react';

type Category = 'All' | 'Phone' | 'PC';

type Wallpaper = {
  id: number;
  title: string;
  category: Exclude<Category, 'All'>;
  tags: string[];
  image: string;
  description: string;
};

const raw = 'https://raw.githubusercontent.com/chukwuemekaisaiah55-lang/anime-wallpapers/main';

const wallpapers: Wallpaper[] = [
  {
    id: 1,
    title: 'Midnight Eyes',
    category: 'Phone',
    tags: ['dark', 'portrait', 'anime'],
    image: `${raw}/1096908053030418805.jpeg`,
    description: 'Moody portrait wallpaper with a deep cinematic mood.',
  },
  {
    id: 2,
    title: 'Death Note Vibe',
    category: 'Phone',
    tags: ['minimal', 'mystery', 'dark'],
    image: `${raw}/death%20note.jpeg`,
    description: 'A sharp, dark wallpaper for a sleek phone display.',
  },
  {
    id: 3,
    title: 'Silent Flame',
    category: 'Phone',
    tags: ['anime', 'vibes', 'portrait'],
    image: `${raw}/_%20(1).jpeg`,
    description: 'A dramatic anime portrait built for vertical screens.',
  },
  {
    id: 4,
    title: 'Shadow Mood',
    category: 'Phone',
    tags: ['shadow', 'dark', 'phone'],
    image: `${raw}/_%20(3).jpeg`,
    description: 'Stylish dark mobile wallpaper with a clean black aesthetic.',
  },
  {
    id: 5,
    title: 'Blue Nebula',
    category: 'PC',
    tags: ['space', 'blue', 'galaxy'],
    image: `${raw}/wallify-blue-nebula.jpg`,
    description: 'Wide-screen cosmic wallpaper with glowing blue nebula tones.',
  },
  {
    id: 6,
    title: 'Light Yagami',
    category: 'PC',
    tags: ['neon', 'anime', 'wide'],
    image: `${raw}/Light%20Yagami%20Wallpaper%204k.jpeg`,
    description: 'A high-resolution anime wallpaper built for desktop screens.',
  },
  {
    id: 7,
    title: 'Solo Leveling',
    category: 'PC',
    tags: ['dark', 'aesthetic', 'gaming'],
    image: `${raw}/Solo%20Leveling_%20Dark%20Aesthetic%20Anime%20Wallpaper.jpeg`,
    description: 'A bold desktop wallpaper with a dark fantasy aesthetic.',
  },
  {
    id: 8,
    title: 'Zenitsu Storm',
    category: 'PC',
    tags: ['anime', 'storm', 'dramatic'],
    image: `${raw}/Zenetsu.jpeg`,
    description: 'A dramatic anime scene with strong motion and lighting.',
  },
  {
    id: 9,
    title: 'Laptop Guard',
    category: 'PC',
    tags: ['dark', 'meme', 'desktop'],
    image: `${raw}/laptop.jpeg`,
    description: 'A minimalist desktop wallpaper with a bold black theme.',
  },
];

export default function Home() {
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');

  const visibleWallpapers = useMemo(() => {
    return wallpapers.filter((wallpaper) => {
      const matchesCategory = category === 'All' || wallpaper.category === category;
      const search = query.trim().toLowerCase();
      const matchesQuery =
        search.length === 0 ||
        wallpaper.title.toLowerCase().includes(search) ||
        wallpaper.tags.some((tag) => tag.toLowerCase().includes(search));

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="page-shell">
      <div className="content-wrap">
        <header className="topbar">
          <div className="brand-wrap">
            <span className="brand-mark">S</span>
            <span className="brand-name">SoraWall</span>
          </div>

          <nav className="nav">
            <a href="#discover">Discover</a>
            <a href="#phone">Phone</a>
            <a href="#pc">PC</a>
            <a href="#download">Download</a>
          </nav>

          <button className="primary-btn">Upload</button>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Anime wallpapers</p>
            <h1>Find a wallpaper for every screen.</h1>
            <p className="subtext">
              Browse cinematic anime wallpapers for phones and PCs. Download your favorites in a few clicks.
            </p>

            <div className="search-row">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search wallpapers..."
                aria-label="Search wallpapers"
              />
              <button className="primary-btn">Explore</button>
            </div>

            <div className="stats">
              <div>
                <strong>9</strong>
                <span>Wallpapers</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Phone</span>
              </div>
              <div>
                <strong>5</strong>
                <span>PC</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="feature-card">
              <img src={`${raw}/wallify-blue-nebula.jpg`} alt="Featured anime wallpaper" />
            </div>
          </div>
        </section>

        <section id="discover" className="gallery-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Browse</p>
              <h2>Trending wallpapers</h2>
            </div>

            <div className="filter-row">
              {(['All', 'Phone', 'PC'] as const).map((item) => (
                <button
                  key={item}
                  className={category === item ? 'filter-btn active' : 'filter-btn'}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid">
            {visibleWallpapers.length > 0 ? (
              visibleWallpapers.map((wallpaper) => (
                <article key={wallpaper.id} className="wallpaper-card">
                  <div className="image-wrap">
                    <img src={wallpaper.image} alt={wallpaper.title} />
                  </div>

                  <div className="card-body">
                    <div className="meta-row">
                      <span className="tag">{wallpaper.category}</span>
                      <span className="tag subtle">{wallpaper.tags[0]}</span>
                    </div>

                    <h3>{wallpaper.title}</h3>
                    <p>{wallpaper.description}</p>

                    <div className="card-actions">
                      <a className="secondary-btn" href={wallpaper.image} download target="_blank" rel="noreferrer">
                        Download
                      </a>
                      <button className="ghost-btn">Preview</button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>No wallpapers match your search.</h3>
                <p>Try another keyword or switch the category filter.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

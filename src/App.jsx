import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shareMessage, setShareMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);

  // Custom SVG Icons
  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );

  const MapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const ShareIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
    </svg>
  );

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="7" cy="6" r="1" fill="#FFF0C4"/>
    <circle cx="7" cy="12" r="1" fill="#FFF0C4"/>
    <circle cx="7" cy="18" r="1" fill="#FFF0C4"/>
  </svg>
);

  const SateIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <rect x="45" y="10" width="10" height="80" rx="5" fill="currentColor" opacity="0.8"/>
      <ellipse cx="50" cy="20" rx="8" ry="6" fill="currentColor"/>
      <ellipse cx="50" cy="35" rx="9" ry="7" fill="currentColor"/>
      <ellipse cx="50" cy="50" rx="8" ry="6" fill="currentColor"/>
      <ellipse cx="50" cy="65" rx="9" ry="7" fill="currentColor"/>
      <ellipse cx="50" cy="80" rx="8" ry="6" fill="currentColor"/>
    </svg>
  );

  const FlameIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M50 10 C30 20, 20 40, 30 60 C35 70, 45 75, 50 85 C55 75, 65 70, 70 60 C80 40, 70 20, 50 10 Z" />
    </svg>
  );

  const GrillIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <rect x="10" y="40" width="80" height="20" rx="10" fill="currentColor" opacity="0.6"/>
      <rect x="20" y="30" width="4" height="40" fill="currentColor"/>
      <rect x="30" y="30" width="4" height="40" fill="currentColor"/>
      <rect x="40" y="30" width="4" height="40" fill="currentColor"/>
      <rect x="50" y="30" width="4" height="40" fill="currentColor"/>
      <rect x="60" y="30" width="4" height="40" fill="currentColor"/>
      <rect x="70" y="30" width="4" height="40" fill="currentColor"/>
    </svg>
  );

  const MeatIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <ellipse cx="50" cy="50" rx="30" ry="20" fill="currentColor"/>
      <ellipse cx="40" cy="45" rx="10" ry="5" fill="#8C1007" opacity="0.7"/>
      <ellipse cx="60" cy="55" rx="8" ry="4" fill="#8C1007" opacity="0.7"/>
    </svg>
  );

  const PepperIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M50,10 C60,30 70,40 70,60 C70,80 60,90 50,90 C40,90 30,80 30,60 C30,40 40,30 50,10 Z" />
      <path d="M50,30 L50,70" stroke="#8C1007" strokeWidth="3" opacity="0.7"/>
    </svg>
  );

  const RiceIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <ellipse cx="50" cy="70" rx="40" ry="20" fill="currentColor" opacity="0.8"/>
      <circle cx="40" cy="60" r="5" fill="#FFF0C4" opacity="0.6"/>
      <circle cx="55" cy="55" r="4" fill="#FFF0C4" opacity="0.6"/>
      <circle cx="65" cy="65" r="3" fill="#FFF0C4" opacity="0.6"/>
      <circle cx="45" cy="75" r="4" fill="#FFF0C4" opacity="0.6"/>
      <circle cx="60" cy="80" r="3" fill="#FFF0C4" opacity="0.6"/>
    </svg>
  );

  const SkewerIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <rect x="48" y="10" width="4" height="80" rx="2" fill="currentColor"/>
      <circle cx="50" cy="25" r="6" fill="currentColor"/>
      <circle cx="50" cy="45" r="7" fill="currentColor"/>
      <circle cx="50" cy="65" r="6" fill="currentColor"/>
      <circle cx="50" cy="85" r="5" fill="currentColor"/>
    </svg>
  );

  const BowlIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M10 65 Q20 85 50 85 Q80 85 90 65 L90 55 Q80 75 50 75 Q20 75 10 55 Z" fill="currentColor"/>
      <ellipse cx="50" cy="65" rx="40" ry="10" fill="currentColor" opacity="0.7"/>
    </svg>
  );

  // Initialize floating icons with more variety
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const icons = [
      { component: SateIcon, id: 1, delay: 0, size: 32, animation: 'float' },
      { component: FlameIcon, id: 2, delay: 0.5, size: 28, animation: 'floatComplex' },
      { component: GrillIcon, id: 3, delay: 1, size: 36, animation: 'floatLeft' },
      { component: MeatIcon, id: 4, delay: 1.5, size: 24, animation: 'floatRight' },
      { component: PepperIcon, id: 5, delay: 2, size: 32, animation: 'floatBounce' },
      { component: RiceIcon, id: 6, delay: 2.5, size: 28, animation: 'floatSpin' },
      { component: SateIcon, id: 7, delay: 3, size: 30, animation: 'float' },
      { component: FlameIcon, id: 8, delay: 3.5, size: 26, animation: 'floatComplex' },
      { component: GrillIcon, id: 9, delay: 4, size: 34, animation: 'floatLeft' },
      { component: MeatIcon, id: 10, delay: 4.5, size: 22, animation: 'floatRight' },
      { component: PepperIcon, id: 11, delay: 5, size: 30, animation: 'floatBounce' },
      { component: RiceIcon, id: 12, delay: 5.5, size: 26, animation: 'floatSpin' },
      { component: SkewerIcon, id: 13, delay: 6, size: 24, animation: 'float' },
      { component: BowlIcon, id: 14, delay: 6.5, size: 32, animation: 'floatComplex' },
    ];
    
    setFloatingIcons(icons);

    return () => clearTimeout(timer);
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    const title = 'Sate Merah Merakyat';
    const text = 'Kunjungi halaman Linktree Sate Merah Merakyat! Sate terenak di Jogja!';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setShareMessage('✅ Link berhasil dibagikan!');
      } catch (error) {
        if (error.name !== 'AbortError') {
          try {
            await navigator.clipboard.writeText(url);
            setShareMessage('📋 Link berhasil disalin ke clipboard!');
          } catch (err) {
            setShareMessage('❌ Gagal membagikan link');
          }
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShareMessage('📋 Link berhasil disalin ke clipboard!');
      } catch (err) {
        setShareMessage('❌ Gagal menyalin link');
      }
    }

    setTimeout(() => setShareMessage(''), 4000);
  };

  const FloatingIcon = ({ component: IconComponent, delay, id, size, animation }) => {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${4 + Math.random() * 3}s`,
      animationName: animation
    };

    return (
      <div
        key={id}
        className="floating-icon"
        style={style}
      >
        <IconComponent size={size} />
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Floating background icons */}
      <div className="floating-icons-container">
        {floatingIcons.map((item) => (
          <FloatingIcon 
            key={item.id} 
            component={item.component} 
            delay={item.delay} 
            id={item.id}
            size={item.size}
            animation={item.animation}
          />
        ))}
      </div>

      {/* Animated food shapes */}
      <div className="food-shapes">
        <div className="food-shape shape-1"></div>
        <div className="food-shape shape-2"></div>
        <div className="food-shape shape-3"></div>
        <div className="food-shape shape-4"></div>
        <div className="food-shape shape-5"></div>
      </div>

      {/* Decorative dots */}
      <div className="decorative-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
      </div>

      {/* Main content */}
      <div className={`main-content ${isLoaded ? 'loaded' : ''}`}>
        
        {/* Logo and Header */}
        <div className="header-section">
          {/* Logo */}
          <div className="logo-container">
            <img 
              src="/logo-sate.png"
              alt="Logo Sate Merah Merakyat"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback">
              <SateIcon size={40} />
            </div>
          </div>
          
          {/* Main title */}
          <h1 className="main-title">
            Sate Merah Merakyat
          </h1>
          
          {/* Subtitle */}
          <p className="subtitle">
            ✨ Sate Rempah Terenak & Termurah di Jogja ✨
          </p>
        </div>

        {/* Links container */}
        <div className="links-container">
          
          {/* Menu button */}
          <a 
            href="https://drive.google.com/file/d/1Ac3B9rzCrj_GA50E-ZReVzRPo1QaGnoa/view?usp=drivesdk "
            target="_blank"
            rel="noopener noreferrer"
            className="link-button menu-btn"
          >
            <div className="button-content">
              <div className="button-shine"></div>
              <MenuIcon />
              <span>Lihat Menu</span>
            </div>
          </a>

          {/* Phone button */}
          <a 
            href="http://wa.me/6287848247230"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button phone-btn"
          >
            <div className="button-content">
              <div className="button-shine"></div>
              <PhoneIcon />
              <span>Hubungi via WhatsApp</span>
            </div>
          </a>

          {/* Maps button */}
          <a 
            href="https://maps.app.goo.gl/r4ETzaW2Lx3ogYX79"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button maps-btn"
          >
            <div className="button-content">
              <div className="button-shine"></div>
              <MapIcon />
              <span>Lihat Lokasi di Maps</span>
            </div>
          </a>

          {/* Share button */}
          <button 
            onClick={handleShare}
            className="link-button share-btn"
          >
            <div className="button-content">
              <div className="button-shine"></div>
              <ShareIcon />
              <span>Bagikan Link</span>
            </div>
          </button>
        </div>

        {/* Share message */}
        {shareMessage && (
          <div className="share-message">
            <p>{shareMessage}</p>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p>🍴 Dibuat dengan ❤️ untuk pelanggan terbaik</p>
        </div>
      </div>
    </div>
  );
}

export default App;

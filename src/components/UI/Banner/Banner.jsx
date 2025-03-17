import './banner.css';

function Banner() {
  return (
    <div className="banner-container" id="home">
      <div className="banner-intro-text">
        <p>Hello there! I am</p>
        <span className="banner-intro-name">Kunal Sharma.</span>
        <p className="banner-intro-subtext">
  A passionate Fullstack Developer 🌌 <br />
  UI/UX Designer 🎨 <br />
  Software Engineer 💻
</p>

      </div>
      <div className="banner-dev-image"></div>
    </div>
  );
}

export default Banner;

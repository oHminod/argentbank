const HeroBanner = ({
  heroData,
}: {
  heroData: { title: string; subtitles: string[]; text: string };
}) => {
  const { title, subtitles, text } = heroData;
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p key={"sub" + index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">{text}</p>
      </section>
    </div>
  );
};

export default HeroBanner;

const FeatureItem = ({
  featureData,
}: {
  featureData: { image: string; title: string; description: string };
}) => {
  const { image, title, description } = featureData;
  return (
    <div className="feature-item">
      <img src={image} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;

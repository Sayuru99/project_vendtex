
const LeftHeadingRightImage = ({ heading, smallText, imageUrl }) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="card-back rounded-lg" style={{ backgroundColor: "#EDE7D7", height: "256px", padding: "10px 20px", display: "flex", alignItems: "center" }}>
        <div className="flex flex-col mr-8">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-sm text-gray-600">{smallText}</p>
        </div>
      </div>
      <div>
        <img src={imageUrl} alt="Image" className="w-64 h-64 object-cover" />
      </div>
    </div>
  );
};

export default LeftHeadingRightImage;

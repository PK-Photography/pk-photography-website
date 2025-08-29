const DeliveryOptions = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8  md:text-left">
        <div>
          <h3 className="font-medium mb-2">High-Quality Printed Album</h3>
          <p className="text-sm text-gray-600">
            The refined, high-resolution images are delivered via your choice of
            methods
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Google Drive Link</h3>
          <p className="text-sm text-gray-600">
            A pendrive, or even as high-quality printed Album—
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Online Gallery</h3>
          <p className="text-sm text-gray-600">
            An Online Personalised Gallery
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Pendrive</h3>
          <p className="text-sm text-gray-600">
            Ensuring a delivery process that is both convenient and personalized
            to your needs.
          </p>
        </div>
      </div>

      <a
        href="/portfolioPrep.pdf"
        download="portfolio.pdf"
        style={{ textDecoration: "none" }}
      >
        <button className="bg-black text-white text-xs py-4 px-6 rounded-[10px] transition-transform transform hover:scale-105">
          <strong>DOWNLOAD YOUR PREP CHECKLIST</strong>
        </button>
      </a>
    </div>
  );
};

export default DeliveryOptions;
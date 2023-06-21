function fetchLandingPageData(businessId) {
  // In this example, we assume you have a predefined list of landing page data
  const landingPageData = [
    {
      businessId: "business1",
      title: "Landing Page 1",
      description: "This is Landing Page 1",
    },
    {
      businessId: "business2",
      title: "Landing Page 2",
      description: "This is Landing Page 2",
    },
    // Add more landing page data objects as needed
  ];

  // Find the landing page data based on the provided businessId
  const landingPage = landingPageData.find(
    page => page.businessId === businessId
  );

  return landingPage || null;
}

module.exports = {
  fetchLandingPageData,
};

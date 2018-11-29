__PAGE_DATA__ = {
  map: {
    boundaries: {

    }
  },
  points_of_interest: {
    landmarks: [
      {
        name: 'Bayanihan Community Center',
        latitude: '37.780864', 
        longitude: '-122.409176',
        metadata: {
          website: 'https://www.bayanihancc.org/',
          address: '1010 Mission St, San Francisco, CA 94103'
        }
      }
    ],
    businesses: [
      {
        name: 'Mestiza',
        latitude: '37.779811',
        longitude: '-122.397709',
        metadata: {
          website: 'https://www.mestizasf.com/',
          address: '595 Bryant Street SF, CA 94107'
        }
      }
    ],
    events: [
    ]
  }
};

if (typeof window !== "undefined") {
  window.__PAGE_DATA__ = __PAGE_DATA__;
}
// todo: create fn to loop until window is declared then set page data as global variable


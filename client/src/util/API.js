import axios from 'axios';

/* PRODUCT
{
      sku: 4156007,
      score: null,
      productId: null,
      name: 'Insignia™ - 200W 2.0-Ch. Stereo Receiver - Black',
      source: null,
      type: 'HardGood',
      startDate: '2014-06-22',
      new: false,
      active: true,
      lowPriceGuarantee: true,
      activeUpdateDate: '2019-01-24T02:02:05',
      regularPrice: 149.99,
      salePrice: 119.99,
      clearance: false,
      onSale: true,
      planPrice: null,
      priceWithPlan: [],
      contracts: [],
      priceRestriction: null,
      priceUpdateDate: '2020-01-20T00:00:55',
      digital: false,
      preowned: false,
      carriers: [],
      planFeatures: [],
      devices: [],
      carrierPlans: [],
      technologyCode: null,
      carrierModelNumber: null,
      earlyTerminationFees: [],
      monthlyRecurringCharge: '',
      monthlyRecurringChargeGrandTotal: '',
      activationCharge: '',
      minutePrice: '',
      planCategory: null,
      planType: null,
      familyIndividualCode: null,
      validFrom: null,
      validUntil: null,
      carrierPlan: null,
      outletCenter: null,
      secondaryMarket: null,
      frequentlyPurchasedWith: [],
      accessories: [],
      relatedProducts: [],
      requiredParts: [],
      techSupportPlans: [],
      crossSell: [],
      salesRankShortTerm: null,
      salesRankMediumTerm: null,
      salesRankLongTerm: null,
      bestSellingRank: null,
      url: 'https://api.bestbuy.com/click/-/4156007/pdp',
      spin360Url: null,
      mobileUrl: 'https://api.bestbuy.com/click/-/4156007/pdp',
      affiliateUrl: null,
      addToCartUrl: 'https://api.bestbuy.com/click/-/4156007/cart',
      affiliateAddToCartUrl: null,
      linkShareAffiliateUrl: '',
      linkShareAffiliateAddToCartUrl: '',
      upc: '600603164026',
      productTemplate: 'Receivers',
      categoryPath: [Array],
      alternateCategories: [],
      lists: [],
      customerReviewCount: 2046,
      customerReviewAverage: 4.5,
      customerTopRated: false,
      format: null,
      freeShipping: false,
      freeShippingEligible: true,
      inStoreAvailability: true,
      inStoreAvailabilityText: 'Store Pickup:',
      inStoreAvailabilityUpdateDate: '2019-01-24T02:02:05',
      itemUpdateDate: '2020-02-07T01:47:51',
      onlineAvailability: true,
      onlineAvailabilityText: 'Shipping: Usually ships in 1 business day',
      onlineAvailabilityUpdateDate: '2019-01-24T02:02:05',
      releaseDate: null,
      shippingCost: '',
      shipping: [Array],
      shippingLevelsOfService: [],
      specialOrder: false,
      shortDescription: 'Only at Best Buy\n' +
        'Supports up to 4 speakers with A/B switching; compatible with Apple&#174; iPhone&#174; and iPad&#174; and most Bluetooth-enabled devices',
      class: 'HOME COMPONENTS',
      classId: 10,
      subclass: 'RECEIVERS',
      subclassId: 1,
      department: 'AUDIO',
      departmentId: 1,
      protectionPlanTerm: 'INS',
      protectionPlanType: null,
      protectionPlanLowPrice: '',
      protectionPlanHighPrice: '',
      buybackPlans: [],
      protectionPlans: [],
      protectionPlanDetails: [],
      productFamilies: [],
      productVariations: [],
      aspectRatio: null,
      screenFormat: null,
      lengthInMinutes: null,
      mpaaRating: null,
      plot: null,
      studio: null,
      theatricalReleaseDate: null,
      description: null,
      manufacturer: 'Insignia™',
      modelNumber: 'NS-STR514',
      images: [Array],
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_sa.jpg',
      largeFrontImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_sd.jpg',
      mediumImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007fp.gif',
      thumbnailImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_s.gif',
      largeImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_sb.jpg',
      alternateViewsImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007cv11d.jpg',
      angleImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_rd.jpg',
      backViewImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007_bd.jpg',
      energyGuideImage: null,
      leftViewImage: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4156/4156007ld.jpg',
      accessoriesImage: null,
      remoteControlImage: null,
      rightViewImage: null,
      topViewImage: null,
      albumTitle: '200W 2.0-Ch. Stereo Receiver',
      artistName: null,
      artistId: null,
      originalReleaseDate: null,
      parentalAdvisory: null,
      mediaCount: null,
      monoStereo: null,
      studioLive: null,
      condition: 'New',
      inStorePickup: true,
      friendsAndFamilyPickup: true,
      homeDelivery: false,
      quantityLimit: 5,
      fulfilledBy: null,
      members: [],
      bundledIn: [],
      albumLabel: null,
      genre: null,
      color: 'Black',
      depth: '14.9 inches',
      dollarSavings: 30,
      percentSavings: '20.0',
      tradeInValue: '',
      height: '5.6 inches',
      orderable: 'Available',
      weight: '17 pounds',
      shippingWeight: 20.95,
      width: '17.38 inches',
      warrantyLabor: '1 year limited',
      warrantyParts: '1 year limited',
      softwareAge: null,
      softwareGrade: null,
      platform: null,
      numberOfPlayers: null,
      softwareNumberOfPlayers: null,
      esrbRating: null,
      longDescription: 'Only at Best Buy This powerful Insignia&#8482; NS-STR514 2.0-channel stereo receiver features compatibility with Apple&#174; iPhone&#174; and iPad&#174; and most Bluetooth-enabled devices for easy wireless music streaming. The A/B switch 
supports up to 4 speakers.',
      includedItemList: [Array],
      marketplace: null,
      listingId: null,
      sellerId: null,
      shippingRestrictions: null,
      proposition65WarningMessage: null,
      proposition65WarningType: '01',
      collection: 'Only at Best Buy',
      energyStarQualified: false,
      hdmiInputs: 0,
      hdmiOutputs: 0,
      headphoneJacks: false,
      multiroomCapability: true,
      stationPresetsAm: 30,
      stationPresetsFm: 30,
      totalHarmonicDistortion: '1 percent',
      totalSystemPowerWatts: 200,
      wattsPerChannelRms: 100,
      wifiBuiltIn: false
    }
 *
 */

const API = {
    getProducts: function(q) {
        return axios.get("/api/products?q="+q);
    },
    getProductsById: function(sku) {
        return axios.get("/api/products/"+sku);
    },
    getProductsByCategory: function() {
        return axios.get("/api/products/category");
    },
    createAccount: function(email,password) {
        return axios.post("/api/users/signup", { email: email, password: password} );
    },
    loginAccount: function(email,password) {
        return axios.post("/api/users/login", { email: email, password: password} );
    }
};

export default API;
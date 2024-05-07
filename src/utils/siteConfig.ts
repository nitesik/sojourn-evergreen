export const siteConfig = {
  getHeaders: () => {
    const list = [
      {
        name: "Why Choose Us?",
        href: "/#about",
      },
      {
        name: "Visa",
        href: "/#visa",
      },
      {
        name: "Contact Us",
        href: "/#contact",
      },
      {
        name: "Packages",
        href: "/packages",
      },
    ];

    return list;
  },

  context: `
  Bhutan Sustainable Development Fee (SDF) 50% Discount.                                                                                             
                                                                                                                                                                          Press Release on Introduction of Incentives for the Tourism Sector                                                                August 25, 2023

The Royal Government of Bhutan is pleased to announce additional incentives and policy measures to boost the tourism sector. This is in view of the important role of the tourism sector in generating employment; earning foreign exchange; realizing the potential for spillover benefits for ancillary industries; and in boosting overall economic growth.

The incentives and measures shall consist of the following:

A fifty percent discount shall be granted on the prevailing SDF of USD 200 for US Dollar paying tourists visiting Bhutan. The effective SDF with the discount shall be USD 100 per person per day for US Dollar paying tourists.
In addition, a fifty percent discount on the SDF shall be granted on the rates applied to children aged between 6 to 12 years for US Dollar paying children visiting as tourists.
The 24-hour SDF waiver for tourists staying in the border towns shall continue.
The above incentives will come into effect from 1 September 2023 and shall remain effective for four years till 31 August 2027.

The Royal Government shall conduct periodic assessments of the domestic and international tourism scenarios and may discontinue the above incentives to uphold and promote the High-Value Low Volume Tourism Policy of Bhutan after 31 August 2027.`,

  getFAQs: () => {
    const list = [
      {
        question: `1. Where is Bhutan?`,
        answer: `Bhutan is a small, landlocked nation located in the eastern Himalayas between India and China. Its landscape ranges from subtropical plains and forests in the South to subalpine forests and snowy mountains in the North. Bhutan is a predominantly Buddhist country and is known as the last stronghold of Mahayana Buddhism.`,
      },
      {
        question: `2. Do I need a visa to enter Bhutan? `,
        answer: `All International tourists wishing to enter Bhutan require a visa which must be pre-arranged through a license Bhutanese Tour Operator. Visa clearance must be obtained through your tour operator prior to travel. 
        
        For Indian passport (or VIC) holders, Bangladeshi nationals and persons from the Maldives may obtain a visa on entry. Nationals of Switzerland and Thailand holding diplomatic and official passports shall be eligible for a visa on arrival at the port of entry. 
        
        Visitors from India will need a permit to visit Bhutan. This applies to anyone holding an Indian passport, or an Indian voter ID card. For Indian nationals aged under 18 years, a passport or a birth certificate will suffice, and they must be accompanied by legal guardians.`,
      },
      {
        question: `3. What are the documents required to process the visa?`,
        answer: `A passport copy is required. The passport must be valid for six months from the intended date of departure from the Kingdom; 
          
          Travel insurance valid for the duration of the trip; and A recent passport size photograph.`,
      },
      {
        question: `4. What are the documents required to process the permit (for Indian guests)?`,
        answer: `Visitors from India can use a passport or voter ID card. Children under 18 years of age can use a birth certificate or passport, and must be accompanied by a legal guardian. Passport size photograph is also required.

        Travel insurance is required and should be valid for the whole duration of the trip.`,
      },
      {
        question: `5. How can I extend a visa or permit while in Bhutan?`,
        answer: `The visa or permit extension can be processed by the Department of Immigration before the expiry of the visa or permit, whichever is applicable. The applicable SDF and visa or permit extension fees shall be paid to the Department of Immigration.`,
      },
      {
        question: `6. How does one make SDF payment for visa or permit extension while in Bhutan?`,
        answer: `Visitors can extend their stay via the online visa application portal, using the same log-in details that were used to process the original visa. The SDF payment can also be made via the same portal.`,
      },
      {
        question: `7. How do I get to Bhutan?`,
        answer: `Visitors can travel to Bhutan by taking flights from Bangladesh (Dhaka), India (Delhi, Kolkata, Guwahati, Bagdogra), Nepal (Kathmandu), Singapore (Changi) and Thailand (Bangkok).  

        For now, there are two airlines that fly into Bhutan – namely, Drukair and Bhutan Airlines.
        
        Private jets can fly into Bhutan after getting the relevant approvals from the competent authorities.
        
        All visitors can also enter via land from Phuentsholing. Indian guests can enter Bhutan via other land entry points (Gelephu, Samdrup Jongkhar and Samtse).
        
        All travel arrangements to Bhutan must be made through a local tour operator. A list of tour companies operating in Bhutan is available on this website. Your selected tour operator will make all the necessary arrangements.`,
      },
      {
        question: `8. Do visitors need a guide?`,
        answer: `A guide is strongly recommended for all visitors to Bhutan. This is to ensure that all visitors have a good experience while visiting our country, and see the best that Bhutan has to offer. Guides also help look after the safety and security of the visitors, as there are wild animals in the countryside, and the altitude and landscape can sometimes pose unique challenges. While the guides do not have to accompany visitors for all experiences (such as restaurants and shopping), it is recommended that guides accompany visitors for experiences such as visiting temples and local places of interest, and it is mandatory to have a guide for all trekking activities and for any journeys that extend beyond Thimphu and Paro. For any visitors who enter Bhutan via the land borders, guides are mandatory when the visitors leave the border towns. 

        If visitors follow the itineraries or journeys set by hotels, they will not need a guide as they will already have a guide who will be arranged by the hotel.`,
      },
    ];

    return list;
  },
};

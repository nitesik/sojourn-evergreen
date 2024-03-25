export const siteConfig = {
  getHeaders: () => {
    const list = [
      {
        name: "About",
      },
      {
        name: "Destination",
      },
      {
        name: "Exclusive Tour",
      },
      {
        name: "Reviews",
      },
    ];

    return list;
  },

  getFAQs: () => {
    const list = [
      {
        question: "How do I place an order?",
        answer: "How do I place an order?",
      },
      {
        question: "What payment methods do you accept?",
        answer: "How do I place an order?",
      },
      {
        question: "What is your cancellation policy?",
        answer: "How do I place an order?",
      },
      {
        question: "How do I contact customer support",
        answer: "How do I place an order?",
      },
      {
        question: "What is your privacy policy?",
        answer: "How do I place an order?",
      },
    ];

    return list;
  },
};

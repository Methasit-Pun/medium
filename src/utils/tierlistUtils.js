export const generateTierlist = (items) => {
    // Example: Randomly assign tiers for demo purposes
    const tiers = ["S", "A", "B", "C", "D"];
    return items.map((item) => ({
      ...item,
      tier: tiers[Math.floor(Math.random() * tiers.length)],
    }));
  };
  
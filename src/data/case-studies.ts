export const CASE_STUDIES = [
  {
    id: "fintech-startup",
    title: "ScalePay App Launch",
    client: "ScalePay Inc.",
    category: "Fintech",
    duration: "6 Months",
    image: "/portfolio_1.png",
    challenge: "A well-funded fintech startup needed to acquire 10k users in their first 3 months post-launch, but faced extreme CAC (Customer Acquisition Cost) in a saturated market.",
    strategy: "We bypassed traditional ad platforms and engineered a viral referral loop combined with high-impact influencer seeding. We positioned them not as a utility, but as a status symbol for early adopters.",
    execution: [
      "Engineered an invite-only waitlist mechanism.",
      "Partnered with 12 micro-influencers in the finance niche.",
      "Designed a disruptive, neon-heavy visual identity that stood out from traditional 'blue' bank apps."
    ],
    results: [
      { label: "User Acquisition", before: 1200, after: 45000, suffix: "+" },
      { label: "CAC Reduction", before: 45, after: 12, prefix: "₹" },
      { label: "Organic Reach", before: 0, after: 2.1, suffix: "M" }
    ]
  },
  {
    id: "ecommerce-brand",
    title: "Lumina Gear Global",
    client: "Lumina Outdoors",
    category: "E-Commerce",
    duration: "12 Months",
    image: "/portfolio_2.png",
    challenge: "Stagnant revenue growth and low returning customer rate. Their ROAS (Return on Ad Spend) was dropping below profitability.",
    strategy: "Shifted focus from acquisition to retention. Implemented a robust email/SMS funnel and restructured their ad creatives to focus on user-generated content (UGC) rather than polished studio shots.",
    execution: [
      "Deployed a 6-part post-purchase email sequence.",
      "Sourced and edited 50+ pieces of raw UGC.",
      "Restructured Meta Ads account using machine-learning optimized broad targeting."
    ],
    results: [
      { label: "Monthly Revenue", before: 40, after: 180, prefix: "₹", suffix: "k" },
      { label: "ROAS", before: 1.2, after: 4.8, suffix: "x" },
      { label: "Retention Rate", before: 12, after: 34, suffix: "%" }
    ]
  },
  {
    id: "personal-brand",
    title: "Dr. Elena Rivers",
    client: "Dr. Elena Rivers",
    category: "Personal Brand",
    duration: "4 Months",
    image: "/portfolio_3.png",
    challenge: "A leading industry expert with zero digital presence wanted to launch a high-ticket consulting offer.",
    strategy: "Built a high-authority LinkedIn and YouTube content engine. Positioned her as the definitive thought leader in her niche before pitching any services.",
    execution: [
      "Ghostwrote 3x weekly LinkedIn thought leadership posts.",
      "Produced 2 long-form YouTube videos per month.",
      "Designed a premium, high-converting landing page for consulting applications."
    ],
    results: [
      { label: "LinkedIn Impressions", before: 500, after: 250000, suffix: "/mo" },
      { label: "Inbound Leads", before: 0, after: 45, suffix: "/mo" },
      { label: "Consulting Revenue", before: 0, after: 60, prefix: "₹", suffix: "k" }
    ]
  },
  {
    id: "local-business",
    title: "Apex Fitness Studio",
    client: "Apex Fitness",
    category: "Local Business",
    duration: "3 Months",
    image: "/portfolio_4.png",
    challenge: "A premium boutique gym struggling to fill classes post-launch despite a prime location.",
    strategy: "Hyper-local paid ads paired with a '7-Day Transformation' challenge to lower the barrier to entry and capture lead data.",
    execution: [
      "Launched geo-fenced Instagram and Google Ads.",
      "Created a high-urgency landing page for the challenge.",
      "Implemented automated SMS follow-ups for lead nurturing."
    ],
    results: [
      { label: "Active Members", before: 45, after: 310, suffix: "" },
      { label: "Class Fill Rate", before: 30, after: 95, suffix: "%" },
      { label: "Cost Per Lead", before: 55, after: 14, prefix: "₹" }
    ]
  }
];

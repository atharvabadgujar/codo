const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&h=300&q=70`

export const nav = [
  { label: 'Why CoDo', href: '#why' },
  { label: 'Product', href: '#product' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const whyNow = [
  { title: 'Richer retail data', body: 'POS, ERP, CRM and loyalty systems generate increasingly detailed customer, product and transaction data.' },
  { title: 'AI is changing what is possible', body: 'AI can move retailers beyond retrospective reporting towards decision support with explainable recommendations.' },
  { title: 'More complex decisions', body: 'Demand shifts, inventory exposure, changing customer behaviour and external signals make decisions harder to manage through disconnected tools.' },
]

export const internalData = ['POS / ERP', 'CRM & loyalty', 'Inventory & supply', 'Product master', 'Sales & transactions']
export const externalSignals = ['Weather & season', 'Holidays & events', 'Social listening', 'Supplier signals', 'Neighbourhood & geo']

export type ImpactTone = 'good' | 'bad'

export const decisions = [
  {
    label: 'Customer decision',
    title: 'Re-engage 1,260 high-value customers before they’re lost',
    signals: [
      'Engagement and frequency scores have declined',
      'No transaction in last 75+ days',
      '62% of lookalike customers have churned in the last 90 days',
      'Top 20% of customers are of higher CLV',
    ],
    rec: 'Launch a personalised re-engagement campaign and offer a ₹200 coupon code, valid for 10 days on their preferred product category (e.g. men’s t-shirts).',
    impact: { value: '₹8.4 Lacs', note: 'Expected business impact', chip: '1,260 customers at risk', tone: 'bad' as ImpactTone },
  },
  {
    label: 'Product ageing decision',
    title: 'Clear ageing inventory across 18 products',
    signals: [
      '18 products have not sold as expected and have aged beyond 150 days',
      'Continued holding increases carrying cost and risk of obsolescence',
      'Similar products are moving faster in other categories with targeted markdown',
      'These products are moving 2.3× slower than category average',
    ],
    rec: 'Run a targeted clearance campaign across 18 products with 20% discount.',
    impact: { value: '₹11.2 Lacs', note: 'Inventory value blocked · 152 days ageing', chip: '18 products to clear', tone: 'bad' as ImpactTone },
  },
  {
    label: 'Product reorder decision',
    title: 'Reorder 15 fast-moving products expected to stock out this week',
    signals: [
      '15 products are projected to stock out within 7 days based on current sales velocity',
      'Demand has increased 22% in the last 4 weeks',
      'Current stock cover is below the safe threshold',
      'Supplier lead time ranges from 4–6 days',
    ],
    rec: 'Create a reorder for 4,280 units across 15 products in 4 outlets, prioritising items with the earliest stock-out date.',
    impact: { value: '₹18.6 Lacs', note: 'Expected business impact', chip: '4 outlets · 15 products', tone: 'good' as ImpactTone },
  },
]

export const capabilities = [
  { title: 'CoDo Recommends', body: 'Prioritized, explainable recommendations with business impact.' },
  { title: 'CoDo Business Signals', body: 'Early signals that surface patterns, trends, risks and opportunities.' },
  { title: 'AskCoDo', body: 'Ask questions in plain language and get instant, actionable insights.' },
  { title: 'CoDo Memory', body: 'Remembers your business context, so insights get smarter over time.' },
]

type ImpactStat = { value: string; label: string; body: string; unit?: string }

export const impact: ImpactStat[] = [
  { value: '+8–15%', label: 'Sales growth', body: 'Identify demand and revenue opportunities.' },
  { value: '−10–25%', label: 'Lesser stockouts', body: 'Anticipate demand and replenish proactively.' },
  { value: '+5–20%', label: 'Marketing ROI', body: 'Target the right customers with relevant offers.' },
  { value: '−15–30%', label: 'Inventory holding costs', body: 'Reduce excess and ageing inventory.' },
  { value: '2,125+', label: 'Customers reactivated', body: 'From an at-risk and lost customer pool of 15,000 customers.' },
  { value: '40–60', unit: 'hours/pm', label: 'Decision productivity', body: 'Across cross-functional teams, including senior management, on a monthly basis.' },
]

export const useCases = [
  { title: 'Customers', body: 'Increase loyalty and lifetime value.' },
  { title: 'Products', body: 'Assortment, pricing and promotions.' },
  { title: 'Inventory', body: 'Right stock, right place.' },
  { title: 'Marketing', body: 'Targeted, high-ROI campaigns.' },
  { title: 'Operations', body: 'Smoother, more efficient stores.' },
]

export const retailCategories = [
  'Apparel & Fashion',
  'Jewellery',
  'Supermarkets',
  'Grocery & Food Stores',
  'Food & Beverage',
  'Consumer Electronics',
  'Footwear',
  'Department Stores',
  'Beauty & Personal Care',
]

export const testimonial = {
  quote: 'As a business, we have so many blind spots that CoDo can help us uncover and bring to our notice for a decision and action.',
  who: 'Director of a 25-outlet Fashion/Apparel regional retailer clocking Rs. 1000 cr topline',
  img: u('photo-1573496359142-b8d87734a5a2'),
}

export const team = [
  {
    name: 'Tushar Rele',
    role: 'Founder & CEO',
    img: '',
    linkedin: 'https://www.linkedin.com/in/tusharrele/',
    bio: 'Having built Blue Ocktopus, a retail loyalty and analytics platform, he is now building CoDo to help retailers move from understanding data to making smarter business decisions. Tushar brings over two decades of experience across product, marketing, business development and strategic alliances in the BFSI domain.',
  },
  {
    name: 'Sudipta Samanta',
    role: 'Co-founder & CTO',
    img: '',
    linkedin: 'https://www.linkedin.com/in/susamanta/',
    bio: 'Sudipta leads CoDo’s technology vision and product engineering, building the foundation for an AI-powered retail decision intelligence platform. His prior experience in technology and engineering brings a focus on scalable systems, technical execution and translating complex requirements into practical solutions.',
  },
  {
    name: 'Sanjay Badhe',
    role: 'Mentor',
    img: '',
    linkedin: 'https://www.linkedin.com/in/sanjay-badhe-219a707/',
    bio: 'Sanjay brings experience as a retail and marketing consultant, with a background in marketing, branding and retail strategy. As a mentor to CoDo, he helps shape the product’s strategic direction, strengthen its understanding of retailer needs, and explore partnerships that can accelerate adoption and deliver meaningful business value.',
  },
]

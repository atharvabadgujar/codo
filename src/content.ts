const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&h=300&q=70`

export const nav = [
  { label: 'Why CoDo', href: '#why' },
  { label: 'Product', href: '#product' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Founder & Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const INVESTOR_MAILTO = 'mailto:hello@codo.ai?subject=Investor%20Deck%20Request'

export const whyNow = [
  { icon: 'database', title: 'Richer retail data', tone: 'teal', body: 'POS, ERP, CRM and loyalty systems are generating increasingly detailed customer, product and transaction data.' },
  { icon: 'globe', title: 'AI is changing what’s possible', tone: 'indigo', body: 'AI can move retailers beyond retrospective reporting towards decision support with explainable recommendations.' },
  { icon: 'trend', title: 'More complex decisions', tone: 'orange', body: 'Demand shifts, inventory exposure, changing customer behaviour and external signals make decisions harder to manage through disconnected tools.' },
] as const

export const internalData = [
  { icon: 'database', label: 'POS / ERP' },
  { icon: 'users', label: 'CRM & Loyalty' },
  { icon: 'boxes', label: 'Inventory & Supply' },
  { icon: 'tag', label: 'Product Master' },
  { icon: 'receipt', label: 'Sales & Transactions' },
]
export const externalSignals = [
  { icon: 'cloud', label: 'Weather & Season' },
  { icon: 'calendar', label: 'Holidays & Events' },
  { icon: 'message', label: 'Social Listening' },
  { icon: 'truck', label: 'Supplier Signals' },
  { icon: 'pin', label: 'Neighbourhood & Geo' },
]

export const decisions = [
  {
    key: 'customer', tone: 'teal', icon: 'users', label: 'Customer Decision',
    title: 'Re-engage high-value customers at risk',
    signals: ['Purchase behaviour declining', 'Longer time since last purchase', 'Similar customers showing drop'],
    rec: 'Launch a personalised offer to high-value customers likely to churn in next 30 days.',
    badge: 'At Risk', badgeTone: 'red', exampleTitle: 'High-value customer', exampleSub: 'Likely to churn', chart: 'line',
  },
  {
    key: 'ageing', tone: 'indigo', icon: 'boxes', label: 'Product Ageing Decision',
    title: 'Identify and clear ageing stock early',
    signals: ['Slow moving SKUs', 'Ageing inventory by region', 'Declining sales trend'],
    rec: 'Run targeted promotions on ageing stock to clear inventory and free up space.',
    badge: 'At Risk', badgeTone: 'red', exampleTitle: 'Sneakers - Grey', exampleSub: 'Ageing: 120 days', chart: 'bars-violet',
  },
  {
    key: 'reorder', tone: 'orange', icon: 'cart', label: 'Product Reorder Decision',
    title: 'Replenish the right products, in the right regions',
    signals: ['Historical sales & trends', 'Weather and seasonal forecast', 'Regional demand signals'],
    rec: 'Increase stock of lightweight jackets in West & South regions.',
    badge: 'Reorder', badgeTone: 'green', exampleTitle: 'Lightweight Jacket', exampleSub: 'Category: Outer Wear', chart: 'bars-teal',
  },
] as const

export const capabilities = [
  { icon: 'bulb', tone: 'orange', title: 'CoDo Recommends', body: 'Prioritized, explainable recommendations with business impact.' },
  { icon: 'bars', tone: 'indigo', title: 'CoDo Business Signals', body: 'Early signals that spot patterns, trends, risks and opportunities.' },
  { icon: 'chat', tone: 'violet', title: 'AskCoDo', body: 'Ask questions in plain language and get instant, actionable insights.' },
  { icon: 'book', tone: 'teal', title: 'CoDo Memory', body: 'Remembers your business context, so insights get smarter over time.' },
] as const

export const impact = [
  { value: '+8–15%', label: 'Increase in sales (typical)', tone: 'teal' },
  { value: '−10–25%', label: 'Reduction in stock-outs (typical)', tone: 'indigo' },
  { value: '+5–12%', label: 'Improvement in marketing ROI (typical)', tone: 'violet' },
  { value: '−15–30%', label: 'Lower inventory holding costs (typical)', tone: 'orange' },
] as const

export const useCases = [
  { icon: 'users', title: 'Customers', sub: 'Increase loyalty & lifetime value' },
  { icon: 'tag', title: 'Products', sub: 'Assortment, pricing & promotions' },
  { icon: 'boxes', title: 'Inventory', sub: 'Right stock, right place' },
  { icon: 'megaphone', title: 'Marketing', sub: 'Targeted, high-ROI campaigns' },
  { icon: 'cog', title: 'Operations', sub: 'Smoother, more efficient stores' },
]

export const testimonial = {
  quote: 'As a business, we have so many blindspots that CoDo can help us uncover and get that to our notice for a decision and action.',
  who: 'Business Head',
  note: '(Illustrative feedback)',
  img: u('photo-1573496359142-b8d87734a5a2'),
}

export const team = [
  { name: 'Tushar Rele', role: 'Founder & CEO', img: u('photo-1560250097-0b93528c311a'), linkedin: 'https://www.linkedin.com/',
    bio: 'Built and scaled Blue Octopus, serving 250+ retail brands. Deep experience in retail loyalty, analytics and enterprise SaaS.' },
  { name: 'Susamanta Dash', role: 'Co-founder', img: u('photo-1472099645785-5658abf4ff4e'), linkedin: 'https://www.linkedin.com/',
    bio: 'Product, technology and AI leader with deep experience in building scalable data and AI products.' },
  { name: 'Sanjay Badhe', role: 'Strategic Advisor', img: u('photo-1507003211169-0a1dd7228f2d'), linkedin: 'https://www.linkedin.com/',
    bio: 'Experienced retail and consumer goods leader, advisor and investor. Brings deep industry expertise and guidance on go-to-market and scale.' },
]

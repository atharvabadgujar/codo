const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&h=300&q=70`

export const nav = [
  { label: 'Why CoDo', href: '#why' },
  { label: 'Product', href: '#product' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const INVESTOR_MAILTO = 'mailto:hello@codo.ai?subject=Investor%20Deck%20Request'

export const whyNow = [
  { title: 'Richer retail data', body: 'POS, ERP, CRM and loyalty systems generate increasingly detailed customer, product and transaction data.' },
  { title: 'AI is changing what is possible', body: 'AI can move retailers beyond retrospective reporting towards decision support with explainable recommendations.' },
  { title: 'More complex decisions', body: 'Demand shifts, inventory exposure, changing customer behaviour and external signals make decisions harder to manage through disconnected tools.' },
]

export const internalData = ['POS / ERP', 'CRM & loyalty', 'Inventory & supply', 'Product master', 'Sales & transactions']
export const externalSignals = ['Weather & season', 'Holidays & events', 'Social listening', 'Supplier signals', 'Neighbourhood & geo']

export const decisions = [
  {
    label: 'Customer decision',
    title: 'Re-engage high-value customers at risk',
    signals: ['Purchase behaviour declining', 'Longer time since last purchase', 'Similar customers showing a drop'],
    rec: 'Launch a personalised offer to high-value customers likely to churn in the next 30 days.',
    example: { name: 'High-value customer', detail: 'Likely to churn', status: 'At risk', bad: true },
  },
  {
    label: 'Product ageing decision',
    title: 'Identify and clear ageing stock early',
    signals: ['Slow-moving SKUs', 'Ageing inventory by region', 'Declining sales trend'],
    rec: 'Run targeted promotions on ageing stock to clear inventory and free up space.',
    example: { name: 'Sneakers, grey', detail: 'Ageing: 120 days', status: 'At risk', bad: true },
  },
  {
    label: 'Product reorder decision',
    title: 'Replenish the right products, in the right regions',
    signals: ['Historical sales and trends', 'Weather and seasonal forecast', 'Regional demand signals'],
    rec: 'Increase stock of lightweight jackets in West and South regions.',
    example: { name: 'Lightweight jacket', detail: 'Category: outerwear', status: 'Reorder', bad: false },
  },
]

export const capabilities = [
  { title: 'CoDo Recommends', body: 'Prioritized, explainable recommendations with business impact.' },
  { title: 'CoDo Business Signals', body: 'Early signals that surface patterns, trends, risks and opportunities.' },
  { title: 'AskCoDo', body: 'Ask questions in plain language and get instant, actionable insights.' },
  { title: 'CoDo Memory', body: 'Remembers your business context, so insights get smarter over time.' },
]

export const impact = [
  { value: '+8–15%', label: 'Increase in sales' },
  { value: '−10–25%', label: 'Reduction in stock-outs' },
  { value: '+5–12%', label: 'Improvement in marketing ROI' },
  { value: '−15–30%', label: 'Lower inventory holding costs' },
]

export const useCases = [
  { title: 'Customers', body: 'Increase loyalty and lifetime value.' },
  { title: 'Products', body: 'Assortment, pricing and promotions.' },
  { title: 'Inventory', body: 'Right stock, right place.' },
  { title: 'Marketing', body: 'Targeted, high-ROI campaigns.' },
  { title: 'Operations', body: 'Smoother, more efficient stores.' },
]

export const testimonial = {
  quote: 'As a business, we have so many blind spots that CoDo can help us uncover and bring to our notice for a decision and action.',
  who: 'Business Head',
  note: 'Illustrative feedback',
  img: u('photo-1573496359142-b8d87734a5a2'),
}

export const team = [
  { name: 'Tushar Rele', role: 'Founder & CEO', img: u('photo-1560250097-0b93528c311a'), linkedin: 'https://www.linkedin.com/',
    bio: 'Built and scaled Blue Octopus, serving 250+ retail brands. Deep experience in retail loyalty, analytics and enterprise SaaS.' },
  { name: 'Susamanta Dash', role: 'Co-founder', img: u('photo-1472099645785-5658abf4ff4e'), linkedin: 'https://www.linkedin.com/',
    bio: 'Product, technology and AI leader with deep experience building scalable data and AI products.' },
  { name: 'Sanjay Badhe', role: 'Strategic advisor', img: u('photo-1507003211169-0a1dd7228f2d'), linkedin: 'https://www.linkedin.com/',
    bio: 'Experienced retail and consumer goods leader, advisor and investor. Brings deep industry expertise and guidance on go-to-market and scale.' },
]

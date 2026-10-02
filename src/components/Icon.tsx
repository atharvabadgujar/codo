import {
  Database, Globe, TrendingUp, Users, Boxes, Tag, Receipt, Cloud, CalendarDays, MessageSquare, Truck, MapPin,
  ShoppingCart, Lightbulb, BarChart3, MessageCircle, BookOpen, Megaphone, Settings, type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  database: Database, globe: Globe, trend: TrendingUp, users: Users, boxes: Boxes, tag: Tag, receipt: Receipt,
  cloud: Cloud, calendar: CalendarDays, message: MessageSquare, truck: Truck, pin: MapPin, cart: ShoppingCart,
  bulb: Lightbulb, bars: BarChart3, chat: MessageCircle, book: BookOpen, megaphone: Megaphone, cog: Settings,
}

export function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const C = map[name] ?? Database
  return <C className={className} aria-hidden="true" />
}

export const tones = {
  teal: { card: 'bg-teal-50 border-teal-100', chip: 'bg-teal-100 text-teal-600', text: 'text-teal-600' },
  indigo: { card: 'bg-indigo-50 border-indigo-100', chip: 'bg-indigo-100 text-indigo-600', text: 'text-indigo-600' },
  violet: { card: 'bg-violet-50 border-violet-100', chip: 'bg-violet-100 text-violet-600', text: 'text-violet-600' },
  orange: { card: 'bg-orange-50 border-orange-100', chip: 'bg-orange-100 text-orange-600', text: 'text-orange-500' },
} as const

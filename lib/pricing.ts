export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description?: string;
  features: string[];
  isFeatured?: boolean;
  badge?: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₦150,000 – ₦250,000",
    features: [
      "Up to 3 Pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Google Maps Integration",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "₦300,000 – ₦600,000",
    isFeatured: true,
    badge: "Most Popular",
    features: [
      "Up to 7 Pages",
      "Blog System",
      "Analytics Setup",
      "Social Media Integration",
      "1 Month Support",
      "Everything in Starter",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₦700,000 – ₦1,500,000",
    features: [
      "Custom Design",
      "Booking System or E-Commerce",
      "Advanced SEO",
      "Performance Optimization",
      "Premium UI/UX",
      "3 Months Support",
      "Everything in Business",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    price: "₦30,000 – ₦80,000 / Month",
    features: [
      "Content Updates",
      "Security Monitoring",
      "Backups",
      "Performance Checks",
      "Priority Support",
    ],
  },
];

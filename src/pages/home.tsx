/* Generated from SiteSpec */
import SimpleCentered from "@/sections/SimpleCentered";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";
import WithTestimonial from "@/sections/WithTestimonial";

export default function home(){
  return (<main>
    <SimpleCentered {...{
  headline: "Welcome to Public Netlify Test",
  subhead: "Your journey to seamless web experiences starts here.",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Get Started",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/learn-more"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Explore Our Features",
  subtitle: "Unlock the full potential of our platform",
  items: [
    {
      title: "User-Friendly Interface",
      body: "Navigate effortlessly with our intuitive design, making your experience smooth and enjoyable.",
      icon: "🖥️"
    },
    {
      title: "Robust Security",
      body: "Your data is safe with us. We implement top-notch security measures to protect your information.",
      icon: "🔒"
    },
    {
      title: "24/7 Customer Support",
      body: "Our dedicated support team is here to assist you anytime, ensuring you never feel alone.",
      icon: "📞"
    },
    {
      title: "Seamless Integrations",
      body: "Connect with your favorite tools effortlessly, enhancing your workflow and productivity.",
      icon: "🔗"
    }
  ]
}} />
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Find the perfect fit for your needs",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic-plan",
      href: "/plans/basic",
      price: {
        monthly: "$10",
        annually: "$100"
      },
      description: "Ideal for individuals starting out.",
      features: [
        "1 User",
        "Basic Support",
        "Access to Core Features"
      ],
      mostPopular: false
    },
    {
      name: "Pro",
      id: "pro-plan",
      href: "/plans/pro",
      price: {
        monthly: "$30",
        annually: "$300"
      },
      description: "Perfect for small teams and growing businesses.",
      features: [
        "Up to 5 Users",
        "Priority Support",
        "Advanced Features"
      ],
      mostPopular: true
    },
    {
      name: "Enterprise",
      id: "enterprise-plan",
      href: "/plans/enterprise",
      price: {
        monthly: "$100",
        annually: "$1000"
      },
      description: "Custom solutions for large organizations.",
      features: [
        "Unlimited Users",
        "Dedicated Support",
        "Custom Integrations"
      ],
      mostPopular: false
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "What Our Users Say",
  subhead: "Real feedback from real users",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Share Your Experience",
    href: "/share"
  }
}} />
  </main>);
}

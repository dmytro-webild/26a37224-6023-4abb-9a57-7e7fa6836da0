"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Globe, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Metrics",
          id: "metrics",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ELITE SOCIAL"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Architects of Digital Influence"
      description="We blend data-driven strategy with premium creative content to scale your brand in the social era."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/a-sophisticated-high-end-social-media-ag-1774704971001-ecebe098.png"
      imageAlt="Agency Hero Background"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Defining Your Voice"
      description={[
        "In a digital landscape crowded with noise, we cut through with precision.",
        "Our team of strategists, copywriters, and designers create compelling visual identities that don't just get seen—they get felt.",
        "We treat every brand as a unique entity, crafting bespoke social ecosystems that drive measurable, long-term growth.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Social Strategy",
          author: "The Foundation",
          description: "Deep-dive brand research combined with market insights to build your roadmap.",
          tags: [
            "strategy",
            "planning",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/professional-portrait-of-a-creative-soci-1774704971369-1cf46424.png",
        },
        {
          id: "f2",
          title: "Creative Production",
          author: "Visual Impact",
          description: "High-fidelity content creation—from motion graphics to studio-grade editorial.",
          tags: [
            "content",
            "creative",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/professional-portrait-of-a-creative-soci-1774704971369-1cf46424.png",
        },
        {
          id: "f3",
          title: "Performance Analytics",
          author: "Data Driven",
          description: "Real-time monitoring and adaptive optimization for maximum ROI on spend.",
          tags: [
            "analytics",
            "roi",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/professional-portrait-of-a-creative-soci-1774704971369-1cf46424.png",
        },
      ]}
      title="Bespoke Social Solutions"
      description="Comprehensive creative services tailored for high-growth brands."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "200M+",
          title: "Reach Delivered",
          description: "Monthly audience impact",
          icon: Zap,
        },
        {
          id: "m2",
          value: "4.8x",
          title: "Average ROAS",
          description: "Campaign efficiency gain",
          icon: TrendingUp,
        },
        {
          id: "m3",
          value: "150+",
          title: "Brands Scaled",
          description: "Across five continents",
          icon: Globe,
        },
      ]}
      title="Measurable Excellence"
      description="Results that speak for themselves."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alexandra V.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/close-up-headshot-of-a-professional-ceo--1774704979082-3bdc2452.png",
        },
        {
          id: "2",
          name: "Marcus J.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/close-up-headshot-of-a-marketing-directo-1774704970636-3ead6b0a.png",
        },
        {
          id: "3",
          name: "Sarah L.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/close-up-headshot-of-a-tech-startup-foun-1774704971193-b4009214.png",
        },
        {
          id: "4",
          name: "James P.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/close-up-headshot-of-a-creative-manager--1774704971095-4ae170ff.png",
        },
        {
          id: "5",
          name: "David K.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZmOgDqZ2woM6lP5WKEEhKjIcu/close-up-headshot-of-a-professional-ceo--1774704979082-3bdc2452.png",
        },
      ]}
      cardTitle="Client Voices"
      cardTag="Trust"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to redefine your digital presence? Let's build something iconic."
      buttons={[
        {
          text: "Inquire Now",
          href: "mailto:hello@elitesocial.agency",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Agency",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      brandName="ELITE SOCIAL"
      copyrightText="© 2025 ELITE SOCIAL. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

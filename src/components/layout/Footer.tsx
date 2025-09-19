'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    // Newsletter signup logic
    console.log('Newsletter signup initiated');
  };

  const footerSections = [
    {
      title: 'Invoice Management',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Invoice Templates', href: '/templates' },
        { name: 'Payment Processing', href: '/payments' },
        { name: 'API Integration', href: '/api' },
        { name: 'Developer Docs', href: '/docs' },
      ],
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'About InvoiceFlow', href: '#about' },
        { name: 'Success Stories', href: '/case-studies' },
        { name: 'Enterprise Plans', href: '/enterprise' },
        { name: 'Partner Program', href: '/partners' },
        { name: 'Accounting Firms', href: '/accounting' },
        { name: 'Contact Sales', href: '#contact' },
      ],
    },
    {
      title: 'Support & Learning',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Invoice Best Practices', href: '/guides' },
        { name: 'Video Tutorials', href: '/tutorials' },
        { name: 'Webinar Series', href: '/webinars' },
        { name: 'User Community', href: '/community' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance & Security',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Data Security', href: '/security' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Tax Compliance', href: '/tax-compliance' },
        { name: 'SOC 2 Certification', href: '/certifications' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/invoiceflow' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/invoiceflow' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/invoiceflow' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/invoiceflow' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/invoiceflow' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="#home" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">IF</span>
                </div>
                <span className="font-bold text-xl">InvoiceFlow</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamline your billing process with professional invoice management. Trusted by
                over 50,000 businesses worldwide for faster payments and better cash flow.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@invoiceflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Finance Plaza, Suite 200</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Invoice Tips & Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get billing best practices and product updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 InvoiceFlow. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" /> for better business
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

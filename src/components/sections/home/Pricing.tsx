'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Receipt, TrendingUp, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Solo',
      description: 'Perfect for freelancers and independent contractors',
      price: 'Free',
      period: '',
      badge: null,
      icon: Receipt,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management',
        'Email support',
      ],
      cta: 'Start Invoicing Free',
      popular: false,
      onClick: handleStarterPlan,
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses and small teams',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      icon: TrendingUp,
      features: [
        'Unlimited invoices & estimates',
        'Professional templates',
        'Automated payment reminders',
        'Expense tracking',
        'Financial reporting',
        'Multi-currency support',
        'Bank reconciliation',
        'Priority support',
      ],
      cta: 'Start 30-Day Trial',
      popular: true,
      onClick: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'Advanced features for established businesses',
      price: '$49',
      period: '/month',
      badge: 'Advanced',
      icon: Shield,
      features: [
        'Everything in Business',
        'Advanced financial analytics',
        'Custom invoice branding',
        'API access & integrations',
        'Multi-user collaboration',
        'Advanced tax reporting',
        'Dedicated account manager',
        'Phone & chat support',
      ],
      cta: 'Upgrade to Enterprise',
      popular: false,
      onClick: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              InvoiceFlow Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Start free and scale as you grow. All plans include secure payment processing, automatic
            tax calculations, and real-time financial insights.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <div className="size-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <plan.icon className="size-6 text-primary" />
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.onClick}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Business' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need custom accounting solutions?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing and accounting packages for businesses with unique
            requirements. Get personalized features, dedicated support, and custom integrations.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

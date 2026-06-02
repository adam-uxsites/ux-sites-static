import { useState, useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { getConsent, GTAG_ID } from "@/lib/analytics";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Mail, Phone, Clock, ArrowRight, Send, MessageSquare, Shield, Building2, Wrench, Briefcase, Sparkles, Coffee, ShoppingBag, Heart } from "lucide-react";

const services = [
  { value: "hosting", label: "Managed WordPress Hosting (£50/mo)" },
  { value: "care-plan", label: "WordPress Care Plan (£250/mo)" },
  { value: "care-plan-pro", label: "WordPress Care Plan Pro (£500/mo)" },
  { value: "new", label: "New Website" },
  { value: "refresh", label: "Website Refresh / Redesign" },
  { value: "improve", label: "Existing Website Improvements" },
  { value: "seo", label: "SEO & Performance" },
  { value: "custom", label: "Custom Development" },
  { value: "other", label: "Something Else" },
];

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Select the service you need"),
  message: z.string().min(10, "Tell us a bit more about your project"),
  _gotcha: z.string().optional(),
});

export default function Contact() {
  const [, setLocation] = useLocation();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      _gotcha: "",
    },
  });

  useEffect(() => {
    if (getConsent() !== "accepted") return;
    if (typeof window.gtag !== "function") return;
    window.gtag("config", GTAG_ID);
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xvzybzjj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setLocation("/thank-you");
        return;
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Could not reach the form service. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <SEO
        title="Start Your Project | UX Sites"
        description="Tell us about your website project. We'll respond within 24 hours with a tailored plan and clear pricing  -  no obligation, no hard sell."
        url="https://uxsites.co.uk/contact"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Start Your Project | UX Sites",
            description: "Get in touch with UX Sites to discuss managed WordPress hosting, web design, or website support for your business.",
            url: "https://uxsites.co.uk/contact",
            inLanguage: "en-GB",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://uxsites.co.uk/" },
              { "@type": "ListItem", position: 2, name: "Start Your Project", item: "https://uxsites.co.uk/contact" },
            ],
          },
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground mb-8"
              >
                <MessageSquare size={14} className="text-primary" />
                Free consultation  -  no obligation
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              >
                Start Your Project
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6"
              >
                Tell us what you need and we'll put together a clear plan with transparent pricing. No hard sell  -  just honest advice from someone who's been building websites for over a decade.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 text-sm"
              >
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Clock size={15} className="text-primary" />
                  Response within 24 hours
                </span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Shield size={15} className="text-primary" />
                  No commitment required
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-5 gap-10">
              {/* Left column  -  contact info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 space-y-6"
              >
                <div className="card-base p-7">
                  <h2 className="font-bold text-lg mb-5">Contact Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[15px] font-medium">Email</div>
                        <a href="mailto:enquiries@uxsites.co.uk" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                          enquiries@uxsites.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[15px] font-medium">Phone</div>
                        <a href="tel:07356298100" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                          07356 298100
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[15px] font-medium">Response Time</div>
                        <div className="text-[15px] text-muted-foreground">
                          We aim to respond to all enquiries within 24 hours, usually sooner.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-base p-7">
                  <h2 className="font-bold text-lg mb-4">What Happens Next?</h2>
                  <div className="space-y-5">
                    {[
                      { step: "1", title: "You send the form", desc: "Tell us about your project and what you need." },
                      { step: "2", title: "We review and reply", desc: "Within 24 hours, we'll respond with a thoughtful assessment and clear options." },
                      { step: "3", title: "Chat if you'd like", desc: "A phone or video call to clarify anything and agree on next steps  -  no pressure." },
                      { step: "4", title: "You decide", desc: "A clear proposal with fixed pricing. Say yes when you're ready, or walk away  -  no hard feelings." },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {s.step}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{s.title}</div>
                          <div className="text-sm text-muted-foreground mt-0.5">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-base p-7">
                  <h2 className="font-bold text-lg mb-4">Industries We Serve</h2>
                  <div className="space-y-3">
                    {[
                      { icon: Wrench, label: "Trades & Construction", href: "/websites-for-builders" },
                      { icon: Briefcase, label: "Professional Services", href: "/websites-for-lawyers" },
                      { icon: Sparkles, label: "Beauty & Personal Care", href: "/websites-for-hairdressers" },
                      { icon: Coffee, label: "Food & Drink", href: "/websites-for-restaurants" },
                      { icon: ShoppingBag, label: "Retail & Home", href: "/websites-for-retail-shops" },
                      { icon: Heart, label: "Community & Education", href: "/websites-for-schools" },
                      { icon: Building2, label: "Business & Tech", href: "/websites-for-developers" },
                    ].map((ind, i) => {
                      const Icon = ind.icon;
                      return (
                        <a
                          key={i}
                          href={ind.href}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/[0.03] hover:border-primary/20 border border-transparent transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon size={15} className="text-primary" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">{ind.label}</span>
                          <ArrowRight size={12} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Right column  -  form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="md:col-span-3"
              >
                <div className="card-base p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                        <div>
                          <h2 className="font-bold text-lg mb-2">Your Details</h2>
                          <p className="text-sm text-muted-foreground">How should we get back to you?</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="you@example.com" type="email" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Optional  -  for a quick call" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Company / Business Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Optional" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-6 border-t border-border">
                          <h2 className="font-bold text-lg mb-2">Your Project</h2>
                          <p className="text-sm text-muted-foreground">What are you looking for?</p>
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="mb-1.5 block">Service Required</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-black/25 h-11 md:text-base">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map(s => (
                                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="mb-1.5 block">Project Details</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your business, what you're trying to achieve, and any specific requirements you have..."
                                  className="bg-black/25 min-h-[180px] resize-y md:text-base"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Honeypot — hidden from humans, catches bots */}
                        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                          <FormField
                            control={form.control}
                            name="_gotcha"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input tabIndex={-1} autoComplete="off" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        {submitError && (
                          <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                            <AlertCircle size={16} className="shrink-0 mt-0.5" />
                            <span>{submitError}</span>
                          </div>
                        )}

                        <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-bold gap-2">
                          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                          {isSubmitting ? "Sending..." : "Send Enquiry"}
                        </Button>

                        <p className="text-sm text-center text-muted-foreground">
                          By submitting this form you agree to our{" "}
                          <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a>.
                          We'll never share your data with third parties.
                        </p>
                      </form>
                    </Form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Direct contact options */}
        <section className="section-padding bg-card border-y border-border">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">Prefer to Call or Email?</h2>
              <p className="subhead-section">
                Not ready to fill out a form? Reach out directly and we'll take it from there.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-base p-7 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <a href="mailto:enquiries@uxsites.co.uk" className="text-muted-foreground hover:text-foreground transition-colors">
                  enquiries@uxsites.co.uk
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-base p-7 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <a href="tel:07356298100" className="text-muted-foreground hover:text-foreground transition-colors">
                  07356 298100
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon  -  Fri, 9am  -  5pm
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
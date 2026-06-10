import { useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { EmailLink } from "@/components/ui/EmailLink";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Mail, Phone, Clock, Send, BarChart3 } from "lucide-react";

const reviewReasons = [
  { value: "data-wrong", label: "My analytics data doesn't look right" },
  { value: "channels", label: "I can't see which marketing channels drive results" },
  { value: "conversions", label: "Conversions aren't being tracked properly" },
  { value: "direct-traffic", label: "Too much 'direct' or 'not set' traffic in reports" },
  { value: "not-confident", label: "I'm not confident my GA4 was set up correctly" },
  { value: "google-ads", label: "Google Ads shows clicks but no conversions" },
  { value: "fresh-eyes", label: "Just want a fresh pair of eyes on it" },
];

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  website: z.string().min(1, "Enter your website URL"),
  phone: z.string().optional(),
  reasons: z.array(z.string()).min(1, "Select at least one reason"),
  _gotcha: z.string().optional(),
});

export default function FreeGA4Review() {
  const [, setLocation] = useLocation();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      phone: "",
      reasons: [],
      _gotcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xvzybzjj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, service: "Free GA4 Review" }),
      });
      if (res.ok) {
        setLocation("/thank-you/");
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
        title="Free GA4 Review | UX Sites"
        description="Request a free review of your Google Analytics 4 setup. We'll audit your tracking and tell you what's working, what isn't, and what needs fixing."
        url="https://uxsites.co.uk/free-ga4-review/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Free GA4 Review | UX Sites",
            description: "Request a free review of your Google Analytics 4 setup from UX Sites.",
            url: "https://uxsites.co.uk/free-ga4-review/",
            inLanguage: "en-GB",
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
                <BarChart3 size={14} className="text-primary" />
                Free  -  no obligation, no hard sell
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              >
                Free GA4 Review
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6"
              >
                Not sure if your Google Analytics 4 is set up right? Send us your details and we'll take a look at your tracking configuration. We'll tell you what's working, what isn't, and what needs fixing  -  no charge, no obligation.
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
                  <BarChart3 size={15} className="text-primary" />
                  Honest assessment, no upselling
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-5 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="md:col-span-3 md:order-2"
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
                            name="website"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Website URL</FormLabel>
                                <FormControl>
                                  <Input placeholder="https://yourwebsite.com" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="mb-1.5 block">Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Optional" className="bg-black/25 h-11 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-6 border-t border-border">
                          <h2 className="font-bold text-lg mb-2">Why You're Requesting a Review</h2>
                          <p className="text-sm text-muted-foreground">What's not working or what would you like to understand better?</p>
                        </div>

                        <FormField
                          control={form.control}
                          name="reasons"
                          render={() => (
                            <FormItem>
                              <div className="space-y-3">
                                {reviewReasons.map((reason) => (
                                  <FormField
                                    key={reason.value}
                                    control={form.control}
                                    name="reasons"
                                    render={({ field }) => (
                                      <FormItem className="flex items-start gap-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(reason.value)}
                                            onCheckedChange={(checked) => {
                                              const current = field.value || [];
                                              if (checked) {
                                                field.onChange([...current, reason.value]);
                                              } else {
                                                field.onChange(current.filter((v: string) => v !== reason.value));
                                              }
                                            }}
                                            className="mt-0.5"
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal leading-relaxed cursor-pointer">
                                          {reason.label}
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <BarChart3 size={16} />}
                          {isSubmitting ? "Sending..." : "Get My Free GA4 Review"}
                        </Button>

                        <p className="text-sm text-center text-muted-foreground">
                          By submitting this form you agree to our{" "}
                          <a href="/privacy-policy/" className="text-primary hover:underline">privacy policy</a>.
                          We'll never share your data with third parties.
                        </p>
                      </form>
                    </Form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 space-y-6 md:order-1"
              >
                <div className="card-base p-7 border-green-500/20 bg-green-500/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <BarChart3 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-green-700 dark:text-green-400 mb-1">What we'll need from you</h3>
                      <p className="text-sm text-muted-foreground">To complete the review, we'll need <strong>read-only access</strong> to your GA4 property (and Google Tag Manager if you use it). We'll guide you through granting this after you submit.</p>
                    </div>
                  </div>
                </div>

                <div className="card-base p-7">
                  <h2 className="font-bold text-lg mb-4">What We'll Review</h2>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "GA4 Property Setup", desc: "Is your property configured correctly with the right data streams and settings?" },
                      { step: "2", title: "Event & Conversion Tracking", desc: "Are key actions being tracked properly? Forms, clicks, phone calls, and more." },
                      { step: "3", title: "Google Tag Manager Audit", desc: "If you use GTM, we'll check that tags, triggers, and variables are structured correctly." },
                      { step: "4", title: "Data Accuracy Check", desc: "We'll look for double-counting, missing events, and suspicious data patterns." },
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
                  <h2 className="font-bold text-lg mb-4">After Your Review</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    You'll receive a clear, honest report covering:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">?</span>
                      What's working well in your current setup
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">?</span>
                      What needs fixing or improving
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">?</span>
                      What it would cost to put things right
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">?</span>
                      No pressure to proceed  -  honest advice either way
                    </li>
                  </ul>
                </div>

                <div className="card-base p-7">
                  <h2 className="font-bold text-lg mb-5">Contact Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[15px] font-medium">Email</div>
                        <EmailLink email="enquiries@uxsites.co.uk" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors" />
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
              </motion.div>
            </div>
          </div>
        </section>

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
                <EmailLink email="enquiries@uxsites.co.uk" className="text-muted-foreground hover:text-foreground transition-colors" />
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

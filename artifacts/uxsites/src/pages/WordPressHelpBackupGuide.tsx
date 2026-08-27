import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Database, Server, Cloud, HardDrive, ShieldCheck, RefreshCw, Clock, CheckCircle, RotateCcw } from "lucide-react";

const whyBackupsMatter = [
  {
    icon: ShieldCheck,
    title: "Protection Against Hacks",
    desc: "WordPress sites get hacked every day, usually through outdated plugins or weak passwords. A fresh backup is your guaranteed recovery route when the worst happens."
  },
  {
    icon: RefreshCw,
    title: "Safety Net for Updates",
    desc: "A plugin or theme update can take your site down or wipe customisations. With a recent backup you roll back in minutes instead of paying for emergency fixes."
  },
  {
    icon: Clock,
    title: "Human Error Is Normal",
    desc: "Deleted pages, overwritten content and botched migrations happen to everyone. Without a backup, that work is gone forever."
  },
];

const whatToBackUp = [
  {
    icon: Database,
    title: "Your Database",
    items: ["All posts, pages and comments", "User accounts and their roles", "Plugin configuration and options", "Form submissions and custom data"]
  },
  {
    icon: HardDrive,
    title: "Your Files",
    items: ["Themes, including child themes and tweaks", "Plugins you've installed", "Uploads -  images, videos and documents", "Config files like wp-config.php and .htaccess"]
  },
];

const backupMethods = [
  {
    icon: Database,
    step: "1",
    title: "Back Up With a Plugin",
    desc: "WordPress backup plugins give you full control  -  you can schedule automatic backups of both files and database, and choose exactly where the copies are stored.",
    items: ["UpdraftPlus, BackWPup and BackupBuddy are popular options", "Schedule automatic backups so you never rely on remembering", "Include both the database and your wp-content files", "Send copies to cloud storage as well as your server"]
  },
  {
    icon: Server,
    step: "2",
    title: "Enable Host-Level Backups",
    desc: "Most hosting providers include automatic backups as part of your plan. Managed WordPress hosts usually back up daily and offer easy one-click restore.",
    items: ["Check what your hosting plan actually includes", "Managed hosts often include daily backups with 30-day retention", "Confirm you can restore from the control panel yourself", "Don't rely on host backups alone  -  they share your infrastructure"]
  },
  {
    icon: Cloud,
    step: "3",
    title: "Store Copies Off-Site",
    desc: "A backup stored on your web server isn't safe. If the server fails, your backup fails with it  -  so always keep a copy in separate cloud storage.",
    items: ["Google Drive, Dropbox, Amazon S3 and OneDrive all work well", "Store backups somewhere independent of your hosting provider", "Keep several restore points going back at least 30 days", "Verify files actually downloaded  -  failed transfers are common"]
  },
  {
    icon: HardDrive,
    step: "4",
    title: "Test a Restore",
    desc: "A backup you can't restore is worthless. Test restores on a staging environment so you know the process works long before you need it in a crisis.",
    items: ["Restore to a staging site or subdirectory, not your live site", "Confirm files, the database and your media return correctly", "Check the site loads and you can log in as normal", "Time the restore so you know what to expect in an emergency"]
  },
];

const backupFrequency = [
  {
    icon: Clock,
    title: "Daily",
    desc: "Essential for e-commerce, membership sites and any site where lost data costs money. Most managed hosts back up every night automatically."
  },
  {
    icon: Clock,
    title: "Weekly",
    desc: "Suitable for brochure sites that change rarely. A fresh weekly backup plus a quarterly test restore keeps you safe without the overhead."
  },
  {
    icon: Clock,
    title: "Before Every Update",
    desc: "Take a manual backup before updating WordPress, plugins or themes, and before any developer works on the site. Rollback becomes instant."
  },
];

const backupFaqs = [
  {
    question: "How often should I back up my WordPress site?",
    answer: "At minimum, back up weekly if your site barely changes. For e-commerce, membership or blog sites that add content daily, back up every night. Always take a fresh manual backup before updates, theme changes or major edits -  and test a restore regularly so you know it works."
  },
  {
    question: "Do I need a backup plugin if my host already backs up my site?",
    answer: "Yes, it's worth having both. Host-level backups live on the same infrastructure as your site, so a hardware failure, account compromise or data-centre problem can take both out. A plugin sending copies to separate cloud storage is independent insurance."
  },
  {
    question: "Where should I store my WordPress backups?",
    answer: "In off-site cloud storage that's separate from your web host -  Google Drive, Dropbox, Amazon S3 or similar. Never rely on a backup stored on the same server as your website, because a server failure destroys both at once."
  },
  {
    question: "How do I know my backup actually works?",
    answer: "By testing a restore. Restore a copy to a staging environment, check your pages, database and media all load correctly, and make sure you can log in. Test at least quarterly and time it -  that's your realistic recovery time in an emergency."
  },
  {
    question: "Could I lose my WordPress data without a backup?",
    answer: "Yes -  without backups you can lose everything: posts, pages, images, users, settings and form data. With a tested, off-site backup you can usually be back online within hours of a hack, a failed update or human error."
  },
];

export default function WordPressHelpBackupGuide() {
  return (
    <>
      <SEO
        title="WordPress Backup Guide | How to Back Up a WordPress Site"
        description="How to back up a WordPress website -  plugins, hosting backups, off-site storage and how to test a restore. A practical guide from UX Sites."
        url="https://uxsites.co.uk/wordpress-help/wordpress-backup-guide/"
        schema={[
          serviceSchema({
            name: "How to Back Up a WordPress Site",
            description: "A practical guide to backing up a WordPress website -  using backup plugins, host-level backups, off-site storage, and testing restores so the site can always be recovered.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-backup-guide/",
            category: "WordPress Maintenance Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "How to Back Up a WordPress Site", url: "https://uxsites.co.uk/wordpress-help/wordpress-backup-guide/" },
          ]),
          faqSchema(backupFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Protect your WordPress site"
          headline="How to Back Up a WordPress Site"
          subheadline="A website backup is your safety net. Learn how to back up WordPress with plugins, host-level backups, off-site storage, and restores you can actually trust."
          primaryCta={{ text: "Our Maintenance Service", href: "/wordpress-maintenance/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Backups", "10 min read", "Step-by-step", "Beginner friendly"]}
        />

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why WordPress Backups Matter</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A backup is the difference between a minor interruption and a business disaster. These are the reasons every WordPress site owner should take them seriously.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyBackupsMatter.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-background border border-border rounded-2xl text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Need to Back Up</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A complete WordPress site is two things: the database and the files. A partial backup only protects half your website.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whatToBackUp.map((group, i) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-4">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Back Up Your WordPress Site</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these four steps in order. By the end you'll have automatic, off-site backups you know you can restore.
              </p>
            </div>
            <div className="space-y-10">
              {backupMethods.map((measure, i) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 bg-background border border-border rounded-2xl"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary shrink-0 flex items-center justify-center">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-muted-foreground">Step {measure.step}</span>
                          <h3 className="text-lg font-bold">{measure.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{measure.desc}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {measure.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle size={12} className="text-primary shrink-0 mt-0.5" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Often Should You Back Up?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The right frequency depends on how often your site changes and how much downtime would cost you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {backupFrequency.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-background border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <RotateCcw size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Backups, Handled For You</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Daily automated backups, off-site storage and tested restores are included in our maintenance plans and managed hosting -  so you never have to think about it again.
                  </p>
                </div>
              </div>
              <Link
                href="/wordpress-maintenance/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                See How Our Maintenance Plan Covers Backups
              </Link>
              <span className="mx-2 text-muted-foreground">·</span>
              <Link href="/managed-wordpress-hosting/" className="text-primary text-sm font-bold hover:underline">
                Managed hosting with built-in backup & restore
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Backups  -  Common Questions"
          faqs={backupFaqs}
        />

        <CTABanner
          title="Let us look after your WordPress backups"
          description="Daily automated backups, off-site storage and tested restores are included in our maintenance plans and managed hosting -  so you never lose your site again."
          buttonText="View Maintenance Plans"
          buttonHref="/wordpress-maintenance/"
          secondaryButtonText="Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting/"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site safe with a complete maintenance routine.",
              href: "/wordpress-help/wordpress-maintenance/",
              tag: "Guide"
            },
            {
              title: "What to Do If a WordPress Update Breaks Your Site",
              description: "Emergency recovery guide for broken sites.",
              href: "/wordpress-help/wordpress-update-issues/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Updates, security, and daily backups handled for you.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting with automated backups and one-click restore.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
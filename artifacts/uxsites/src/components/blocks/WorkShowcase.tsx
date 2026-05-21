import { motion } from "framer-motion";
import { ExternalLink, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PORTFOLIO, FEATURED_PORTFOLIO, type PortfolioItem } from "@/data/portfolio";

const SERVICE_STYLES: Record<string, string> = {
  "New Build": "bg-primary/10 text-primary border-primary/20",
  "Redesign": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Managed Hosting": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Hosting + Support": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function BrowserCard({ item, index }: { item: PortfolioItem; index: number }) {
  const accent = item.accentColor ?? "#40ED88";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-[#111] rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
          <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground truncate">{item.domain}</span>
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Screenshot or stylised placeholder */}
      {item.screenshot ? (
        <div className="aspect-[16/9] overflow-hidden bg-[#111]">
          <img
            src={item.screenshot}
            alt={`${item.name} website`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/9] flex items-center justify-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accent}18 0%, ${accent}06 60%, transparent 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${accent}40 1px, transparent 1px), linear-gradient(90deg, ${accent}40 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 w-3/4 space-y-3 px-4">
            <div className="h-2.5 rounded-full w-2/3" style={{ background: `${accent}30` }} />
            <div className="h-2 rounded-full w-full" style={{ background: `${accent}18` }} />
            <div className="h-2 rounded-full w-5/6" style={{ background: `${accent}18` }} />
            <div className="h-8 rounded-lg w-1/3 mt-4" style={{ background: `${accent}40` }} />
          </div>
          <div
            className="absolute bottom-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
            style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
          >
            {item.name.charAt(0)}
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-foreground leading-tight">{item.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{item.industry}</p>
          </div>
          <span
            className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${SERVICE_STYLES[item.service] ?? SERVICE_STYLES["New Build"]}`}
          >
            {item.service}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mt-auto"
          >
            Visit site <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CTACard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="flex flex-col bg-card border border-dashed border-primary/30 rounded-2xl overflow-hidden hover:border-primary/60 transition-all duration-300 group"
    >
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/30" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/30" />
          <span className="w-3 h-3 rounded-full bg-green-500/30" />
        </div>
        <div className="flex-1 bg-[#111] rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
          <Globe className="w-3 h-3 text-muted-foreground/40 shrink-0" />
          <span className="text-xs text-muted-foreground/40">yourbusiness.co.uk</span>
        </div>
      </div>

      {/* Placeholder area */}
      <div className="aspect-[16/9] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#40ED8840 1px, transparent 1px), linear-gradient(90deg, #40ED8840 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
            <span className="text-primary text-xl font-bold">?</span>
          </div>
          <p className="text-sm text-muted-foreground">Your project here</p>
        </div>
      </div>

      {/* CTA body */}
      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-foreground leading-tight">Work with us</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Your industry</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We're always taking on new projects. Get in touch to discuss your website or hosting requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          Start a conversation <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}

interface WorkShowcaseProps {
  limit?: number;
  showAll?: boolean;
}

export function WorkShowcase({ limit = 3, showAll = false }: WorkShowcaseProps) {
  const items = showAll ? PORTFOLIO : FEATURED_PORTFOLIO.slice(0, limit);
  const showCtaCard = items.length < 3;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Recent projects & hosting clients</h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              A selection of websites we've built, redesigned, or brought onto our managed hosting platform.
            </p>
          </div>
          {!showAll && PORTFOLIO.length > limit && (
            <Link
              href="/work"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all work →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <BrowserCard key={item.id} item={item} index={i} />
          ))}
          {showCtaCard && <CTACard index={items.length} />}
        </div>

        {!showAll && PORTFOLIO.length > limit && (
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all text-sm font-medium"
            >
              See all projects & clients
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

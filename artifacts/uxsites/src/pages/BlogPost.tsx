import React from "react";
import { useParams, Link } from "wouter";
import { SEO } from "@/components/seo/SEO";
import { articleSchema, breadcrumbSchema, personSchema } from "@/lib/schemas";
import { CTABanner } from "@/components/blocks/CTABanner";
import { getPostBySlug, BLOG_POSTS, CATEGORY_COLORS } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./not-found";

function toIsoDate(dateStr: string): string {
  const months: Record<string, string> = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12",
  };
  const [day, month, year] = dateStr.split(" ");
  const mm = months[month] ?? "01";
  const dd = day.padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function renderContent(markdown: string) {
  const lines = markdown.trim().split("\n");
  const elements: React.ReactElement[] = [];
  let i = 0;
  let keyCounter = 0;

  const key = () => `el-${keyCounter++}`;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key()} className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-foreground">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key()} className="font-bold text-foreground mb-3">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key()} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
          {listItems.map((item, idx) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx} className="leading-relaxed">
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part
                )}
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(c => c.trim() !== "").map(c => c.trim());
      const rows = tableLines.slice(2).map(row =>
        row.split("|").filter(c => c.trim() !== "").map(c => c.trim())
      );
      elements.push(
        <div key={key()} className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {headers.map((h, idx) => (
                  <th key={idx} className="text-left py-3 px-4 font-bold text-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-border/50">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-3 px-4 text-muted-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      elements.push(
        <p key={key()} className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
            }
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
              return (
                <Link key={j} href={linkMatch[2]} className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
                  {linkMatch[1]}
                </Link>
              );
            }
            return part;
          })}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug);

  if (!post) return <NotFound />;

  const currentIndex = BLOG_POSTS.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <>
      <SEO
        title={`${post.title} | UX Sites`}
        description={post.excerpt}
        url={`https://uxsites.co.uk/blog/${post.slug}/`}
        schema={[
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            url: `https://uxsites.co.uk/blog/${post.slug}/`,
            datePublished: toIsoDate(post.date),
            category: post.category,
            image: `https://uxsites.co.uk${post.image}`,
          }),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Blog", url: "https://uxsites.co.uk/blog/" },
            { name: post.title, url: `https://uxsites.co.uk/blog/${post.slug}/` },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                href="/blog/"
                data-testid="back-to-blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
              >
                <ArrowLeft size={15} />
                Back to blog
              </Link>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                <span
                  className="px-2.5 py-0.5 rounded-md text-sm font-semibold"
                  style={{
                    backgroundColor: `${CATEGORY_COLORS[post.category] || "#40ED88"}20`,
                    color: CATEGORY_COLORS[post.category] || "#40ED88",
                    border: `1px solid ${CATEGORY_COLORS[post.category] || "#40ED88"}60`,
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  <span className="text-muted-foreground/60 mr-0.5">Published</span>
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 rounded-2xl overflow-hidden border border-border flex items-center justify-center p-8 md:p-12"
              style={{
                background: `linear-gradient(135deg, ${CATEGORY_COLORS[post.category] || "#40ED88"}44 0%, ${CATEGORY_COLORS[post.category] || "#40ED88"}18 50%, transparent 100%)`,
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center leading-snug drop-shadow-sm">
                {post.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {renderContent(post.content)}
            </motion.div>

            {(prevPost || nextPost) && (
              <nav className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-6">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}/`}
                    data-testid="prev-post"
                    className="group flex flex-col gap-2 p-5 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
                  >
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ArrowLeft size={13} /> Previous
                    </span>
                    <span className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}/`}
                    data-testid="next-post"
                    className="group flex flex-col gap-2 p-5 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors text-right"
                  >
                    <span className="flex items-center gap-1 text-sm text-muted-foreground justify-end">
                      Next <ArrowRight size={13} />
                    </span>
                    <span className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </span>
                  </Link>
                ) : <div />}
              </nav>
            )}
          </div>
        </section>

        <CTABanner
          title="Need help with your website?"
          description="Whether it's hosting, a new build, or a quick question  -  get in touch and we'll give you a straight answer."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}

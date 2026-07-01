import { useState, useCallback, useRef, useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Check, Copy, Download, Linkedin, Twitter, Facebook, BarChart3, Share2 } from "lucide-react";
import { Link } from "wouter";

interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
  strength: string;
  tip: string;
}

interface Tier {
  id: string;
  name: string;
  min: number;
  max: number;
  badge: string;
  description: string;
  summary: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How often do you check your website analytics?",
    options: [
      { label: "Daily. Numbers are life.", value: 3 },
      { label: "Weekly. It is in my routine.", value: 2 },
      { label: "Monthly. Usually when someone asks me.", value: 1 },
      { label: "Once a year, maybe?", value: 0 },
    ],
    strength: "You check your analytics regularly - great habit for staying on top of your data.",
    tip: "Try checking your analytics at least weekly to spot trends and opportunities early.",
  },
  {
    id: 2,
    text: "How well do you know your monthly website traffic?",
    options: [
      { label: "Down to the last visitor. Yes, I have a spreadsheet.", value: 3 },
      { label: "I check it regularly and track trends", value: 2 },
      { label: "I could log in and find out", value: 1 },
      { label: "I have absolutely no idea", value: 0 },
    ],
    strength: "You have a solid handle on your traffic numbers - essential for measuring growth.",
    tip: "Set up a monthly traffic report so you can track trends over time.",
  },
  {
    id: 3,
    text: "How confident are you that your traffic numbers are real people?",
    options: [
      { label: "I actively filter bot and spam traffic", value: 3 },
      { label: "I know bots exist but I am not convinced I have filtered them properly", value: 2 },
      { label: "Wait... some of them are bots?", value: 1 },
      { label: "I assumed every visit was a potential customer", value: 0 },
    ],
    strength: "You actively filter out bot traffic - your data is cleaner and more reliable.",
    tip: "Look into bot filtering in your analytics setup to get a clearer picture of real visitors.",
  },
  {
    id: 4,
    text: "Do you know how many conversions your website generates?",
    options: [
      { label: "Full conversion tracking is my pride and joy", value: 3 },
      { label: "I track some conversions but not everything", value: 2 },
      { label: "I count enquiries as they ping into my inbox", value: 1 },
      { label: "No conversion tracking at all", value: 0 },
    ],
    strength: "You track conversions closely - you know exactly what your website is delivering.",
    tip: "Set up conversion tracking to measure what matters most for your business.",
  },
  {
    id: 5,
    text: "Do you know which pages on your site perform best?",
    options: [
      { label: "Yes, I review page performance like my fantasy football team", value: 3 },
      { label: "I have a general idea which ones pull their weight", value: 2 },
      { label: "I could find out if I logged into analytics", value: 1 },
      { label: "I assume it is the homepage. Probably.", value: 0 },
    ],
    strength: "You know your top-performing pages - this helps you double down on what works.",
    tip: "Identify your top pages and optimise them further for even better performance.",
  },
  {
    id: 6,
    text: "Do you know how far users scroll on your pages?",
    options: [
      { label: "Yes, I watch those scroll depth reports like a hawk", value: 3 },
      { label: "I have a rough sense from the page layout", value: 2 },
      { label: "Not far enough", value: 1 },
      { label: "24.38%", value: 0 },
    ],
    strength: "You track scroll depth - valuable insight into how users engage with your content.",
    tip: "Set up scroll depth tracking to understand if users are seeing your key content.",
  },
  {
    id: 7,
    text: "Do you know where people drop off in your forms?",
    options: [
      { label: "Yes, I track form abandonment closely", value: 3 },
      { label: "I know they do, but not why", value: 2 },
      { label: "I assume if they start, they finish. Optimism!", value: 1 },
      { label: "None of the spammers abandon my forms", value: 0 },
    ],
    strength: "You track form abandonment - this is gold for fixing conversion leaks.",
    tip: "Analyse where users drop off in your forms and simplify those friction points.",
  },
  {
    id: 8,
    text: "Do you know what people actually click on your site?",
    options: [
      { label: "Yes, heatmaps are my guilty pleasure", value: 3 },
      { label: "I check click reports occasionally", value: 2 },
      { label: "I have a pretty good guess", value: 1 },
      { label: "I assume they click the giant button", value: 0 },
    ],
    strength: "You use heatmaps or click tracking - knowing what users click helps refine your layout.",
    tip: "Heatmaps and click tracking can reveal what users actually care about on your pages.",
  },
  {
    id: 9,
    text: "How do you handle changes to your website?",
    options: [
      { label: "A/B test everything. Science!", value: 3 },
      { label: "Make changes and monitor the aftermath", value: 2 },
      { label: "Make changes and cross my fingers", value: 1 },
      { label: "If it isnt broke, I am not touching it", value: 0 },
    ],
    strength: "You A/B test changes - data-driven decisions beat gut feelings every time.",
    tip: "Try A/B testing your changes instead of guessing what will work best.",
  },
  {
    id: 10,
    text: "Do you know which marketing channels actually work?",
    options: [
      { label: "I track source and medium against conversions", value: 3 },
      { label: "I know roughly where people come from", value: 2 },
      { label: "I just look at the big number at the top", value: 1 },
      { label: "Is a billboard still a channel?", value: 0 },
    ],
    strength: "You track channel performance against conversions - this maximises your marketing ROI.",
    tip: "Set up channel tracking to see which marketing channels drive your best traffic.",
  },
  {
    id: 11,
    text: "Do you track phone calls from your website?",
    options: [
      { label: "Yes, with a dedicated call tracking setup", value: 3 },
      { label: "I track click-to-call button clicks", value: 2 },
      { label: "I have a number on the site and hope it rings", value: 1 },
      { label: "If the phone rings, that is all the reporting I need", value: 0 },
    ],
    strength: "You have call tracking in place - you know exactly how many phone leads come from your site.",
    tip: "Consider call tracking to understand how many phone leads your website generates.",
  },
  {
    id: 13,
    text: "Do you track what users do across multiple visits?",
    options: [
      { label: "Yes, I use cross-session tracking", value: 3 },
      { label: "I glance at returning vs new visitor stats", value: 2 },
      { label: "I know some people come back, but that is about it", value: 1 },
      { label: "I assume everyone leaves and never returns", value: 0 },
    ],
    strength: "You track behaviour across sessions - this reveals the full customer journey.",
    tip: "Look into cross-session tracking to understand how users behave over time.",
  },
  {
    id: 14,
    text: "Do you get automated analytics reports?",
    options: [
      { label: "Yes, they arrive in my inbox like clockwork", value: 3 },
      { label: "I have a dashboard but I have to wander over to it", value: 2 },
      { label: "You can automate reports?", value: 1 },
      { label: "You can get reports?", value: 0 },
    ],
    strength: "Automated reports keep you informed without manual effort - smart setup.",
    tip: "Set up automated reports so your data comes to you instead of the other way around.",
  },
  {
    id: 15,
    text: "Do you treat different types of visitors differently?",
    options: [
      { label: "Yes, I segment and analyse like a Data Scientist", value: 3 },
      { label: "I have glanced at segments once or twice", value: 2 },
      { label: "All visitors are equal in the eyes of my website", value: 1 },
      { label: "I assume every visitor is the same person... Me", value: 0 },
    ],
    strength: "You segment your audience - personalised experiences drive better results.",
    tip: "Start segmenting your visitors to tailor content and offers to different groups.",
  },
];

const TIERS: Tier[] = [
  {
    id: "wandering",
    name: "Wandering in the Dark",
    min: 0,
    max: 8,
    badge: "??",
    description: "Your website is definitely doing... something. Whether it is generating leads, attracting customers, or secretly becoming famous in another country is anyone's guess. You mostly rely on instinct, hope, and the occasional \"we have been a bit busier this week.\"\n\nYour superpower: Optimism.\nYour kryptonite: Opening Google Analytics.\nAchievement unlocked: Every analytics expert started here.",
    summary: "Your superpower: Optimism. Your kryptonite: Opening Google Analytics.",
  },
  {
    id: "curious",
    name: "The Curious Beginner",
    min: 9,
    max: 16,
    badge: "!",
    description: "You have peeked behind the curtain. You know where to find your analytics, you check them every now and then, and you are starting to ask the right questions. Unfortunately, your website still knows more about itself than you do.\n\nYour superpower: Curiosity.\nYour kryptonite: \"I will set up conversion tracking tomorrow.\"\nAchievement unlocked: Asking the right questions.",
    summary: "Your superpower: Curiosity. Your kryptonite: \"I will set up conversion tracking tomorrow.\"",
  },
  {
    id: "observer",
    name: "The Informed Observer",
    min: 17,
    max: 25,
    badge: "!!",
    description: "You are no longer guessing. You know your traffic, your best-performing pages, and have a pretty good feel for what is happening. Now it is time to discover why users behave the way they do.\n\nYour superpower: Seeing patterns.\nYour kryptonite: Assuming everyone behaves the same.\nAchievement unlocked: Trusting data over gut feeling.",
    summary: "Your superpower: Seeing patterns. Your kryptonite: Assuming everyone behaves the same.",
  },
  {
    id: "data-driven",
    name: "The Data-Driven",
    min: 26,
    max: 33,
    badge: "!!!",
    description: "You make decisions backed by evidence rather than hope. Your website is not just collecting data - it is helping you make smarter decisions. You are dangerously close to becoming the person who says things like: \"Actually... according to GA4...\"\n\nYour superpower: Evidence.\nYour kryptonite: Explaining attribution at parties.\nAchievement unlocked: Certified data nerd.",
    summary: "Your superpower: Evidence. Your kryptonite: Explaining attribution at parties.",
  },
  {
    id: "the-one",
    name: "The One",
    min: 34,
    max: 42,
    badge: "M",
    description: "Legends speak of people like you. Your tracking is tidy. Your reports make sense. Your dashboards spark joy. Bots fear you. UTM parameters behave themselves. You do not check analytics because you have to... you check them because you genuinely want to.\n\nYour superpower: Knowing exactly what is happening.\nYour kryptonite: Seeing broken tracking on other people's websites.\nAchievement unlocked: Analytics enlightenment.",
    summary: "Your superpower: Knowing exactly what is happening. Your kryptonite: Seeing broken tracking on other people's websites.",
  },
];

const QUIZ_URL = "https://uxsites.co.uk/resources/website-stats-quiz/";

function getTier(score: number): Tier {
  return TIERS.find((t) => score >= t.min && score <= t.max) || TIERS[0];
}

function generateResultImage(tier: Tier, score: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const gradient = ctx.createLinearGradient(0, 0, 800, 500);
  gradient.addColorStop(0, "#1a1a1a");
  gradient.addColorStop(1, "#0a0a0a");
  ctx.fillStyle = gradient;
  ctx.roundRect(0, 0, 800, 500, 24);
  ctx.fill();

  ctx.fillStyle = "rgba(64, 237, 136, 0.08)";
  ctx.fillRect(0, 0, 800, 500);

  ctx.textAlign = "center";
  ctx.fillStyle = "#40ED88";
  ctx.font = "600 16px system-ui, -apple-system, sans-serif";
  ctx.fillText("HOW WELL DO YOU KNOW YOUR WEBSITE STATS?", 400, 90);

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 54px system-ui, -apple-system, sans-serif";
  ctx.fillText(tier.name, 400, 210);

  ctx.fillStyle = "#40ED88";
  ctx.font = "800 32px system-ui, -apple-system, sans-serif";
  ctx.fillText(`${score} / 42`, 400, 275);

  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = "400 16px system-ui, -apple-system, sans-serif";
  const words = tier.summary.split(" ");
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    const test = currentLine ? currentLine + " " + word : word;
    ctx.font = "400 16px system-ui, -apple-system, sans-serif";
    if (ctx.measureText(test).width > 500) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = test;
    }
  }
  if (currentLine) lines.push(currentLine);
  lines.forEach((line, i) => {
    ctx.fillText(line, 400, 330 + i * 24);
  });

  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.font = "400 14px system-ui, -apple-system, sans-serif";
  ctx.fillText("uxsites.co.uk", 400, 440);

  ctx.fillStyle = "rgba(64, 237, 136, 0.15)";
  ctx.fillRect(0, 420, 800, 80);

  return canvas.toDataURL("image/png");
}

export default function WebsiteStatsQuiz() {
  const [step, setStep] = useState<"welcome" | "quiz" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [usedKeyboard, setUsedKeyboard] = useState(false);
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  const [showAllImprovements, setShowAllImprovements] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  const score = answers.reduce((a, b) => a + b, 0);
  const tier = getTier(score);
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;
  const allStrengths = QUESTIONS.filter((_, i) => answers[i] >= 2);
  const allImprovements = QUESTIONS.filter((_, i) => answers[i] < 2);

  const handleStart = useCallback(() => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setUsedKeyboard(false);
  }, []);

  const handleAnswer = useCallback((value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("results");
    }
  }, [answers, currentQuestion]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      const prevAnswers = answers.slice(0, -1);
      setAnswers(prevAnswers);
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  }, [currentQuestion, answers]);

  const handleRestart = useCallback(() => {
    setStep("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setUsedKeyboard(false);
    setShowAllStrengths(false);
    setShowAllImprovements(false);
  }, []);

  const handleCopyResult = useCallback(() => {
    const shareLines: Record<string, string> = {
      wandering: "I got \"Wandering in the Dark\" on the Website Stats Quiz. Apparently my website could be generating leads... or summoning ghosts.",
      curious: "I got \"The Curious Beginner\" on the Website Stats Quiz. I know analytics exists. That is a start, right?",
      observer: "I got \"The Informed Observer\" on the Website Stats Quiz. I know what is happening. Now I just need to figure out why.",
      "data-driven": "I got \"The Data-Driven\" on the Website Stats Quiz. Apparently I know my UTM parameters better than most people know their own postcode.",
      "the-one": "I got \"The One\" on the Website Stats Quiz. My dashboards spark joy. Bots fear me.",
    };
    const text = [
      shareLines[tier.id] || `I got "${tier.name}" on the Website Stats Quiz!`,
      "",
      `Take the quiz yourself: ${QUIZ_URL}`,
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [tier]);

  const handleShareLinkedIn = useCallback(() => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(QUIZ_URL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleShareTwitter = useCallback(() => {
    const shareLines: Record<string, string> = {
      wandering: "I got \"Wandering in the Dark\" on the Website Stats Quiz. My website could be generating leads or summoning ghosts. Take the quiz:",
      curious: "I got \"The Curious Beginner\" on the Website Stats Quiz. I know analytics exists. That is a start, right? Take the quiz:",
      observer: "I got \"The Informed Observer\" on the Website Stats Quiz. I know what is happening. Now I just need to figure out why. Take the quiz:",
      "data-driven": "I got \"The Data-Driven\" on the Website Stats Quiz. I know my UTM parameters better than most people know their own postcode. Take the quiz:",
      "the-one": "I got \"The One\" on the Website Stats Quiz. My dashboards spark joy. Bots fear me. Take the quiz:",
    };
    const text = shareLines[tier.id] || `I got "${tier.name}" on the Website Stats Quiz! Take the quiz:`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(QUIZ_URL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [tier]);

  const handleShareFacebook = useCallback(() => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(QUIZ_URL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleDownloadImage = useCallback(() => {
    const dataUrl = generateResultImage(tier, score);
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.download = "website-stats-quiz-result.png";
    link.href = dataUrl;
    link.click();
  }, [tier, score]);

  useEffect(() => {
    if (!shareOpen) return;
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [shareOpen]);

  useEffect(() => {
    if (step !== "quiz") return;
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "a" || key === "b" || key === "c" || key === "d") {
        setUsedKeyboard(true);
        const idx = key.charCodeAt(0) - 97;
        const options = QUESTIONS[currentQuestion].options;
        if (idx < options.length) {
          handleAnswer(options[idx].value);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, currentQuestion, handleAnswer]);

  return (
    <>
      <SEO
        title="How Well Do You Know Your Website Stats? | Free Quiz | UX Sites"
        description="Take our free 2-minute quiz to find out how well you really know your website stats. Score yourself on traffic, conversions, user behaviour, and more."
        url={QUIZ_URL}
      />
      <main>
        <section className="pt-6 pb-16 md:pt-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <AnimatePresence mode="wait">
              {step === "welcome" && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Link
                    href="/resources/"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowLeft size={15} />
                    Back to resources
                  </Link>

                  <div className="flex flex-col items-center text-center mt-8 md:mt-10">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                      <BarChart3 size={40} className="text-primary" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-xl">
                      How Well Do You Know Your Website Stats?
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                      Answer 15 quick questions about your analytics setup, tracking,
                      and data habits. We will score you and show where you stand.
                    </p>

                    <p className="text-muted-foreground/60 text-sm mb-10 max-w-md">
                      No sign-ups, no email required. Just honest answers and a
                      result you can brag about  -  or learn from.
                    </p>

                    <button
                      onClick={handleStart}
                      className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-10 py-4 text-lg font-bold hover:opacity-90 transition-opacity h-14"
                    >
                      Start the Quiz
                      <ArrowRight size={20} className="ml-2" />
                    </button>
                    <p className="text-xs text-muted-foreground/40 mt-4">
                      Takes about 2 minutes  -  15 multiple choice questions
                    </p>
                  </div>
                </motion.div>
              )}

              {step === "quiz" && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Link
                    href="/resources/"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
                  >
                    <ArrowLeft size={15} />
                    Back to resources
                  </Link>

                  <div className="mb-8">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
                    {QUESTIONS[currentQuestion].text}
                  </h2>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.2 }}
                    >

                      <div className="space-y-3 mb-10">
                        {QUESTIONS[currentQuestion].options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(option.value)}
                            className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all ${
                              selectedOption === option.value
                                ? "border-primary bg-primary/10"
                                : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
                            }`}
                          >
                            <span className="flex items-start gap-3">
                              <span
                                className={`inline-flex items-center justify-center w-7 h-7 rounded-full border-2 text-sm font-bold shrink-0 mt-0.5 ${
                                  selectedOption === option.value
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-muted-foreground/30 text-muted-foreground"
                                }`}
                              >
                                {String.fromCharCode(65 + idx)}
                              </span>
                              <span className="text-base md:text-lg leading-relaxed pt-0.5">
                                {option.label}
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center justify-start">
                    <button
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={15} />
                      Back
                    </button>
                  </div>
                </motion.div>
              )}

              {step === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div ref={resultRef} className="text-center">
                    <div className="mb-6">
                      <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        Your result
                      </span>
                    </div>

                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                        <span className="text-4xl font-black text-primary">{tier.badge}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                      {tier.name}
                    </h2>

                    <div className="inline-flex items-baseline gap-2 mb-6">
                      <span className="text-6xl font-black text-primary">{score}</span>
                      <span className="text-2xl text-muted-foreground">/ {QUESTIONS.length * 3}</span>
                    </div>

                    <div className="w-full h-3 bg-border rounded-full overflow-hidden mb-8 max-w-md mx-auto">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(score / (QUESTIONS.length * 3)) * 100}%` }}
                      />
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                      {tier.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                      <div className="bg-card border border-border rounded-2xl p-5">
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          What You Are Doing Well
                        </h3>
                        {allStrengths.length === 0 ? (
                          <p className="text-sm text-muted-foreground">Keep going - every expert started somewhere!</p>
                        ) : (
                          <>
                            <ul className="space-y-2">
                              {(showAllStrengths ? allStrengths : allStrengths.slice(0, 3)).map((q) => (
                                <li key={q.id} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary shrink-0 mt-0.5">+</span>
                                  {q.strength}
                                </li>
                              ))}
                            </ul>
                            {allStrengths.length > 3 && (
                              <button
                                onClick={() => setShowAllStrengths(!showAllStrengths)}
                                className="text-xs text-primary hover:text-primary/80 transition-colors mt-3"
                              >
                                {showAllStrengths ? "Show less" : `Show all (${allStrengths.length})`}
                              </button>
                            )}
                          </>
                        )}
                      </div>

                      <div className="bg-card border border-border rounded-2xl p-5">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span>
                          Things to Improve
                        </h3>
                        {allImprovements.length === 0 ? (
                          <p className="text-sm text-muted-foreground">Nothing - you are an analytics legend!</p>
                        ) : (
                          <>
                            <ul className="space-y-2">
                              {(showAllImprovements ? allImprovements : allImprovements.slice(0, 3)).map((q) => (
                                <li key={q.id} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-muted-foreground/50 shrink-0 mt-0.5">-</span>
                                  {q.tip}
                                </li>
                              ))}
                            </ul>
                            {allImprovements.length > 3 && (
                              <button
                                onClick={() => setShowAllImprovements(!showAllImprovements)}
                                className="text-xs text-primary hover:text-primary/80 transition-colors mt-3"
                              >
                                {showAllImprovements ? "Show less" : `Show all (${allImprovements.length})`}
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-6 mb-10">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                        Share your result
                      </h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        <button
                          onClick={handleCopyResult}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-bold hover:border-foreground/30 transition-colors"
                        >
                          {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                          {copied ? "Copied!" : "Copy Result"}
                        </button>

                        <button
                          onClick={handleDownloadImage}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-bold hover:border-foreground/30 transition-colors"
                        >
                          <Download size={16} />
                          Download Card
                        </button>

                        <div ref={shareRef} className="relative">
                          <button
                            onClick={() => setShareOpen(!shareOpen)}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-bold hover:border-foreground/30 transition-colors"
                          >
                            <Share2 size={16} />
                            Share
                          </button>
                          {shareOpen && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                              <button
                                onClick={() => { handleShareLinkedIn(); setShareOpen(false); }}
                                className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                              >
                                <Linkedin size={16} className="text-[#0A66C2]" />
                                LinkedIn
                              </button>
                              <button
                                onClick={() => { handleShareTwitter(); setShareOpen(false); }}
                                className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                              >
                                <Twitter size={16} className="text-[#1DA1F2]" />
                                X / Twitter
                              </button>
                              <button
                                onClick={() => { handleShareFacebook(); setShareOpen(false); }}
                                className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                              >
                                <Facebook size={16} className="text-[#1877F2]" />
                                Facebook
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleRestart}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RotateCcw size={15} />
                      Take the quiz again
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <CTABanner
          title="Ready to Level Up Your Analytics?"
          description="If this quiz revealed blind spots in your tracking, we can help. From GA4 setup to conversion tracking and UX audits  -  we will get your data working for you."
          buttonText="Get in Touch"
          buttonHref="/contact/"
          secondaryButtonText="Conversion Tracking Setup"
          secondaryButtonHref="/conversion-tracking-setup/"
        />
      </main>
    </>
  );
}

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
    text: "Do you have analytics tracking set up on your website?",
    options: [
      { label: "Yes, properly configured with goals and events", value: 3 },
      { label: "Yes, a basic setup but no goals or events", value: 2 },
      { label: "I think so  -  it was installed by someone else", value: 1 },
      { label: "No analytics at all", value: 0 },
    ],
  },
  {
    id: 2,
    text: "How well do you know your monthly website traffic?",
    options: [
      { label: "I check it daily and track trends over time", value: 3 },
      { label: "I have a rough idea from memory", value: 2 },
      { label: "I could look it up if I had to", value: 1 },
      { label: "I have no idea", value: 0 },
    ],
  },
  {
    id: 3,
    text: "How confident are you that your traffic numbers are real people?",
    options: [
      { label: "I actively filter bot and spam traffic", value: 3 },
      { label: "I assume most visitors are real people", value: 1 },
      { label: "I have never considered bot traffic", value: 0 },
    ],
  },
  {
    id: 4,
    text: "Do you know how many conversions your website actually generates?",
    options: [
      { label: "Full conversion tracking set up and reviewed regularly", value: 3 },
      { label: "I track some conversions but not everything", value: 2 },
      { label: "I count enquiries as they come in manually", value: 1 },
      { label: "I genuinely do not know", value: 0 },
    ],
  },
  {
    id: 5,
    text: "Do you know which are your top-performing pages?",
    options: [
      { label: "Yes, I regularly review page performance metrics", value: 3 },
      { label: "I have a general idea", value: 2 },
      { label: "I could find out if I logged into analytics", value: 1 },
      { label: "No idea", value: 0 },
    ],
  },
  {
    id: 6,
    text: "Do you know how far users scroll on your key pages?",
    options: [
      { label: "Yes, I have scroll depth tracking set up", value: 3 },
      { label: "I have a rough sense from the page layout", value: 1 },
      { label: "I have never considered it", value: 0 },
    ],
  },
  {
    id: 7,
    text: "Do you know where users drop off in your forms or funnels?",
    options: [
      { label: "Yes, I track form abandonment and funnel progression", value: 3 },
      { label: "I have a general sense from the enquiries I receive", value: 1 },
      { label: "I assume everyone who starts completes the process", value: 0 },
    ],
  },
  {
    id: 8,
    text: "Do you know which specific elements on your pages people click?",
    options: [
      { label: "Yes, I use click tracking or heatmaps", value: 3 },
      { label: "I have looked at it before but do not monitor it", value: 1 },
      { label: "I have not thought about it", value: 0 },
    ],
  },
  {
    id: 9,
    text: "Which best describes how you handle website changes?",
    options: [
      { label: "I A/B test changes before rolling them out", value: 3 },
      { label: "I make changes and monitor the impact afterwards", value: 2 },
      { label: "I make changes and hope for the best", value: 1 },
      { label: "I rarely make changes because I do not know what to improve", value: 0 },
    ],
  },
  {
    id: 10,
    text: "Do you know which marketing channels drive your most valuable traffic?",
    options: [
      { label: "Yes, I track source and medium against conversions", value: 3 },
      { label: "I know where people come from broadly", value: 2 },
      { label: "I only look at total traffic numbers", value: 1 },
      { label: "I have no channel tracking at all", value: 0 },
    ],
  },
  {
    id: 11,
    text: "Do you have call tracking set up on your website?",
    options: [
      { label: "Yes, with a dedicated call tracking solution", value: 3 },
      { label: "I track click-to-call clicks on my site", value: 2 },
      { label: "I just have a phone number listed on the site", value: 1 },
      { label: "No phone number or call tracking at all", value: 0 },
    ],
  },
  {
    id: 12,
    text: "How often do you review your analytics data?",
    options: [
      { label: "Weekly or daily  -  it is part of my routine", value: 3 },
      { label: "Monthly  -  I check in periodically", value: 2 },
      { label: "Occasionally  -  when something feels off", value: 1 },
      { label: "Rarely or never", value: 0 },
    ],
  },
  {
    id: 13,
    text: "Do you track user behaviour across multiple sessions?",
    options: [
      { label: "Yes, I use user IDs or cross-session tracking", value: 3 },
      { label: "I look at returning versus new visitor stats", value: 1 },
      { label: "I do not track across sessions", value: 0 },
    ],
  },
  {
    id: 14,
    text: "Do you have automated analytics reports or dashboards?",
    options: [
      { label: "Yes, I get regular reports sent to me automatically", value: 3 },
      { label: "I have a dashboard set up but check it manually", value: 2 },
      { label: "I log in and pull reports when needed", value: 1 },
      { label: "No reporting at all", value: 0 },
    ],
  },
  {
    id: 15,
    text: "Do you segment your audience to understand different user behaviours?",
    options: [
      { label: "Yes, I regularly analyse different audience segments", value: 3 },
      { label: "I have looked at segments once or twice", value: 1 },
      { label: "I treat all visitors the same", value: 0 },
    ],
  },
];

const TIERS: Tier[] = [
  {
    id: "wandering",
    name: "Wandering in the Dark",
    min: 0,
    max: 9,
    badge: "??",
    description: "You are flying blind when it comes to your website data. No judgment  -  most businesses start here. The good news is there is huge low-hanging fruit waiting for you. A basic analytics setup alone will transform what you know about your visitors.",
    summary: "Huge opportunities ahead. Let's get the basics in place.",
  },
  {
    id: "curious",
    name: "The Curious Beginner",
    min: 10,
    max: 18,
    badge: "!",
    description: "You know analytics exists and you are starting to look at the numbers. A bit of structure could turn your curiosity into real, actionable insights. Focus on setting up goals and conversions to understand what is actually working.",
    summary: "Curiosity is the first step. Time to add some structure.",
  },
  {
    id: "observer",
    name: "The Informed Observer",
    min: 19,
    max: 27,
    badge: "!!",
    description: "You know what is happening on your site. You check your numbers, understand your top pages, and have a handle on traffic. The next step is understanding why things are happening  -  not just what. Interaction tracking and funnel analysis will level you up.",
    summary: "You know the what. Next step: understanding the why.",
  },
  {
    id: "data-driven",
    name: "The Data-Driven",
    min: 28,
    max: 36,
    badge: "!!!",
    description: "You are making informed decisions based on real data. Your website is working for you because you measure what matters and act on it. Keep pushing into advanced areas like audience segmentation, cross-session tracking, and automated reporting.",
    summary: "Solid foundation. Keep pushing into advanced analytics.",
  },
  {
    id: "the-one",
    name: "The One",
    min: 37,
    max: 45,
    badge: "M",
    description: "You have achieved analytics enlightenment. Your website data is a well-oiled machine driving business decisions. From bot filtering to audience segments, you leave no metric unturned. You are the person others ask for analytics advice.",
    summary: "Analytics mastery. Your data works as hard as you do.",
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
  ctx.fillText(`${score} / 45`, 400, 275);

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
  const resultRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  const score = answers.reduce((a, b) => a + b, 0);
  const tier = getTier(score);
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;

  const handleStart = useCallback(() => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setUsedKeyboard(false);
  }, []);

  const handleAnswer = useCallback((value: number) => {
    setSelectedOption(value);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("results");
    }
  }, [selectedOption, answers, currentQuestion]);

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
  }, []);

  const handleCopyResult = useCallback(() => {
    const text = [
      `I scored ${score}/45 on the Website Stats Quiz!`,
      `My result: ${tier.name}`,
      "",
      `${tier.summary}`,
      "",
      `Take the quiz yourself: ${QUIZ_URL}`,
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [score, tier]);

  const handleShareLinkedIn = useCallback(() => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(QUIZ_URL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleShareTwitter = useCallback(() => {
    const text = `I scored ${score}/45 on the Website Stats Quiz and got "${tier.name}"! How well do YOU know your website stats?`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(QUIZ_URL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [score, tier]);

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
          setSelectedOption(options[idx].value);
        }
      }
      if (key === "enter" && selectedOption !== null) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, currentQuestion, selectedOption, handleNext]);

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

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
                        {QUESTIONS[currentQuestion].text}
                      </h2>

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

                  {!usedKeyboard && (
                    <p className="hidden md:block text-xs text-muted-foreground/40 text-center mb-6">
                      Did you know? You can also press A-D to select your answers
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={15} />
                      Back
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={selectedOption === null}
                      className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 font-bold hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {currentQuestion < QUESTIONS.length - 1 ? (
                        <>
                          Next
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      ) : (
                        <>
                          See My Results
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      )}
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

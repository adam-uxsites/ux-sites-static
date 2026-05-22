import { motion } from "framer-motion";
import { Shield, Zap, Clock, HardDrive, CheckCircle2, Globe, ArrowUpRight, Activity } from "lucide-react";

const activities = [
  { icon: HardDrive,  color: "#40ED88", label: "Daily backup completed",       time: "03:24" },
  { icon: Shield,     color: "#40ED88", label: "Security scan: all clear",      time: "04:00" },
  { icon: CheckCircle2, color: "#40ED88", label: "WooCommerce 9.4 updated",    time: "06:15" },
  { icon: CheckCircle2, color: "#40ED88", label: "SSL certificate renewed",     time: "Yesterday" },
  { icon: Zap,        color: "#40ED88", label: "Performance score: 94/100",    time: "Yesterday" },
  { icon: Shield,     color: "#40ED88", label: "Malware scan: no threats",      time: "2 days ago" },
];

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
  delay: number;
}

function MetricCard({ icon: Icon, label, value, sub, color, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-[#0d0d0d] border border-white/8 rounded-xl p-4 flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
            <Icon size={14} style={{ color }} />
          </div>
          <span className="text-xs text-white/50">{label}</span>
        </div>
        <span className="flex h-2 w-2 rounded-full" style={{ background: color }} />
      </div>
      <div>
        <div className="text-2xl font-bold text-white leading-none">{value}</div>
        <div className="text-xs text-white/40 mt-1">{sub}</div>
      </div>
    </motion.div>
  );
}

export function SiteDashboardMockup() {
  return (
    <div className="w-full max-w-2xl mx-auto select-none">
      {/* Browser chrome */}
      <div className="bg-[#111] border border-white/10 rounded-t-2xl px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1.5 flex items-center gap-2">
          <Globe size={11} className="text-white/30 shrink-0" />
          <span className="text-xs text-white/30 truncate">uxsites.co.uk/dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/25">
          <Activity size={11} />
          <span>Live</span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* Dashboard panel */}
      <div className="bg-[#0a0a0a] border-x border-b border-white/10 rounded-b-2xl p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/8">
          <div>
            <div className="text-sm font-semibold text-white">Site Health Dashboard</div>
            <div className="text-xs text-white/40 mt-0.5">mybusiness.co.uk · All systems operational</div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/25">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Monitoring</span>
          </div>
        </div>

        {/* Metric cards 2x2 */}
        <div className="grid grid-cols-2 gap-3">
          <MetricCard icon={Clock}     label="Uptime"       value="99.9%"     sub="Last 30 days"         color="#40ED88" delay={0.05} />
          <MetricCard icon={Shield}    label="Security"     value="All clear"  sub="Scanned 4 hrs ago"   color="#40ED88" delay={0.10} />
          <MetricCard icon={Zap}       label="Performance"  value="94 / 100"  sub="Core Web Vitals"      color="#40ED88" delay={0.15} />
          <MetricCard icon={HardDrive} label="Backups"      value="Up to date" sub="Today at 03:24"      color="#40ED88" delay={0.20} />
        </div>

        {/* Activity feed */}
        <div className="bg-[#0d0d0d] border border-white/8 rounded-xl p-4">
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Recent Activity</div>
          <div className="space-y-2.5">
            {activities.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ background: `${a.color}15` }}>
                      <Icon size={11} style={{ color: a.color }} />
                    </div>
                    <span className="text-xs text-white/70">{a.label}</span>
                  </div>
                  <span className="text-xs text-white/30 shrink-0">{a.time}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            Next backup in 18 hrs
          </div>
          <button className="flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors">
            View full report <ArrowUpRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}

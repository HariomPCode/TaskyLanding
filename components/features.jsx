"use client";

import { useState, useEffect } from "react";
import { Sparkles, Bell, CalendarDays, Target, Check } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI-Powered Prioritization",
    description: "Rank tasks by urgency, importance, and personal work rhythm—automatically.",
    tag: "Smart ranking",
    badge: "Popular",
    badgeColor: "bg-purple-600",
    icon: <Sparkles size={22} />,
    highlights: ["Learns your workflow", "Predictive analysis", "Automated priority"],
    preview: "/previews/ai-preview.png",
  },
  {
    id: 2,
    title: "Smart Reminders & Nudges",
    description: "Reminds you only when you can act—not too early, not too late.",
    tag: "Right-time alerts",
    badge: "New",
    badgeColor: "bg-indigo-600",
    icon: <Bell size={22} />,
    highlights: ["Smart alerts", "Adaptive timing", "Focus assistance"],
    preview: "/previews/reminder-preview.png",
  },
  {
    id: 3,
    title: "Calendar & Email Sync",
    description: "Automatically convert meeting and email threads into actionable items.",
    tag: "Unified workspace",
    badge: "",
    badgeColor: "",
    icon: <CalendarDays size={22} />,
    highlights: ["Google & Outlook sync", "Email task extraction", "Event awareness"],
    preview: "/previews/calendar-preview.png",
  },
  {
    id: 4,
    title: "Focus Modes",
    description: "Switch into distraction-free deep work with priority-aligned intervals.",
    tag: "Deep work",
    badge: "",
    badgeColor: "",
    icon: <Target size={22} />,
    highlights: ["Distraction blocking", "Pomodoro mode", "Custom focus scenes"],
    preview: "/previews/focus-preview.png",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  // Auto-cycle spotlight every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative w-full bg-slate-950 py-24 overflow-hidden">

      {/* Animated dividing angled section top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-900 to-slate-950 rotate-1 origin-bottom" />

      {/* Particle background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Why TaskFlow</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to stay on top of your work
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The smartest productivity companion built for modern teams and individuals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateX(${y / 20}deg) rotateY(${x / 20}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
              className={`relative cursor-pointer rounded-2xl p-6 bg-white/5 border backdrop-blur-md
              transition-all duration-300 group
              ${
                active === i
                  ? "border-indigo-400/50 shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  : "border-white/10 hover:border-white/20 hover:-translate-y-1"
              }
              animate-fadeUp
            `}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Badge */}
              {feature.badge && (
                <span
                  className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full text-white ${feature.badgeColor}`}
                >
                  {feature.badge}
                </span>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{feature.description}</p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {feature.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check size={12} className="text-indigo-400" /> {item}
                  </li>
                ))}
              </ul>

              {/* Tag */}
              <span className="inline-block text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">
                {feature.tag}
              </span>

              {/* Preview on hover */}
              <div className="absolute bottom-2 right-2 w-32 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src={feature.preview}
                  alt="preview"
                  className="rounded-lg shadow-lg shadow-indigo-700/30 border border-indigo-400/20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

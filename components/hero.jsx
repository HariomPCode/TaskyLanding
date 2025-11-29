"use client";

import { Menu, Play, MoreHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      {/* Radial Accent */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 400px at 85% 20%, rgba(124,58,237,0.16), transparent 12%), radial-gradient(400px 300px at 10% 80%, rgba(99,102,241,0.08), transparent 12%)",
          mixBlendMode: "screen",
        }}
      />

      {/* NAVBAR */}
      <nav className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-6 flex items-center justify-between">
        <div className="text-slate-50 font-semibold text-lg">TaskFlow</div>

        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            <li><a href="#features" className="hover:text-indigo-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-indigo-300">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-300">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#signin"
              className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200 hover:bg-white/5 transition"
            >
              Sign in
            </a>

            <a
              href="#get-started"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium shadow-lg hover:bg-indigo-500 transition"
            >
              Get started
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setMenuOpen(true)} className="sm:hidden text-slate-200">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {menuOpen && <MobileMenu open={menuOpen} setOpen={setMenuOpen} />}

      {/* HERO SECTION */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}
          <div className="text-slate-100">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-200">
                <Sparkles size={14} />
                New • AI-Powered Productivity
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Stay ahead of every deadline.
              <br />
              <span className="text-indigo-300">Let AI manage your tasks.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              TaskFlow is a smart AI task and time manager that captures tasks from email, calendar,
              and chat, prioritizes them automatically, and nudges you at the right moment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#start-free"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition"
              >
                Start for free
              </a>

              <a
                href="#watch-demo"
                className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:bg-white/5 transition"
              >
                <Play size={16} />
                Watch demo
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-400">No credit card required • Under 2 minutes to set up</p>
          </div>

          {/* RIGHT - CARD WITH CSS FLOAT AND SPOTLIGHT */}
          <aside className="flex justify-center lg:justify-end">
            <div
              className="relative group animate-floating"
              onMouseMove={(e) => {
                e.currentTarget.style.setProperty("--x", `${e.clientX}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY}px`);
              }}
            >
              {/* Glow Aura */}
              <div className="absolute -inset-10 blur-3xl opacity-30 bg-indigo-600/30 rounded-full -z-10" />

              {/* Spotlight Hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background:
                    "radial-gradient(350px circle at var(--x) var(--y), rgba(99,102,241,0.25), transparent 60%)",
                }}
              />

              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(2,6,23,0.6)] p-5 sm:p-6">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-sm">
                    <Sparkles size={12} />
                    AI Priority: Smart
                  </span>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-slate-100 font-semibold text-lg">Today’s Focus</h3>
                    <p className="text-xs text-slate-400">Prioritized for your most important work</p>
                  </div>
                  <div className="text-xs text-slate-400 mt-4">3 tasks</div>
                </div>

                <ul className="space-y-3">
                  {[ 
                    { title: "Finish project report", urgency: "High", time: "Due in 3h" },
                    { title: "Review sprint tasks", urgency: "Medium", time: "Due tomorrow" },
                    { title: "Reply to client emails", urgency: "High", time: "Due in 1h" },
                  ].map((task, i) => (
                    <li key={i} className="flex items-center justify-between gap-3 rounded-xl p-3 bg-white/5 border border-white/10">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-100 truncate">{task.title}</p>
                        <div className="mt-1 text-xs text-slate-400 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                              task.urgency === "High"
                                ? "bg-red-600/20 text-red-300 border border-red-800/20"
                                : task.urgency === "Medium"
                                ? "bg-yellow-600/20 text-yellow-300 border border-yellow-800/20"
                                : "bg-green-600/20 text-green-300 border border-green-800/20"
                            }`}
                          >
                            {task.urgency}
                          </span>
                          • {task.time}
                        </div>
                      </div>

                      <MoreHorizontal size={18} className="text-slate-400" />
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-slate-400">
                  Auto-prioritized by TaskFlow AI • Suggested focus windows included
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </header>
  );
}

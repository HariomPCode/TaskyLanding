"use client"

import React from "react"

import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Help center", "Docs", "Status"],
  }

  const socialLinks = ["X", "LinkedIn", "GitHub"]

  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 lg:pb-12">
          {/* Left Column: Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-3">TaskFlow</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              TaskFlow helps you organize tasks, time, and focus using AI—so you can work with clarity every day.
            </p>
          </div>

          {/* Middle Columns: Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-sm font-semibold text-slate-100 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-indigo-400 hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right Column: Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-100 mb-2">Stay in the loop</h3>
            <p className="text-xs text-slate-400 mb-4">
              Get product updates and productivity tips straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/50 transition-all duration-200"
              />
              <button
                type="submit"
                className="px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-slate-500">© {currentYear} TaskFlow. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 hover:bg-indigo-400/10 transition-all duration-200"
              >
                {social.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

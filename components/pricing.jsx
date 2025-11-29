const plans = [
  {
    id: 1,
    name: "Free",
    price: 0,
    description: "For individuals getting started with better task management.",
    features: ["Up to 3 projects", "Basic task lists", "Due dates & reminders", "Google Calendar sync (1 calendar)"],
    button: "Get started",
    featured: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 12,
    description: "For power users and founders who want AI to manage their day.",
    features: [
      "Unlimited projects",
      "AI task prioritization",
      "Advanced recurring reminders",
      "Multiple calendar & email integrations",
      "Focus mode & smart daily plans",
    ],
    button: "Start 14-day free trial",
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Pricing</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Simple plans for focused work
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Start for free, and upgrade only when you're ready to automate more of your day.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-indigo-600/20 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-400 text-sm ml-2">/ month</span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-200 mb-8 ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 active:scale-95"
                    : "bg-slate-800/50 text-slate-100 border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105 active:scale-95"
                }`}
              >
                {plan.button}
              </button>

              {/* Features List */}
              <div className="space-y-3 border-t border-white/10 pt-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {/* Checkmark */}
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5 text-indigo-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {/* Feature Text */}
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

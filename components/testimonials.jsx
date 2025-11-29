export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "TaskFlow has reduced my mental load more than any other tool I've tried. I just open it and know exactly what to do next.",
      name: "Ananya Singh",
      role: "Product Manager",
      company: "Sprintly",
      initials: "AS",
      bgColor: "bg-indigo-500",
    },
    {
      id: 2,
      quote:
        "The AI prioritization is scarily good. My calendar, tasks, and follow-ups finally feel connected instead of chaotic.",
      name: "Rahul Mehta",
      role: "Founder",
      company: "PixelForge Studio",
      initials: "RM",
      bgColor: "bg-purple-500",
    },
    {
      id: 3,
      quote:
        "As a remote team, having one place where tasks and time blocks come together has boosted our execution speed.",
      name: "Sara López",
      role: "Engineering Lead",
      company: "CloudWave",
      initials: "SL",
      bgColor: "bg-cyan-500",
    },
  ]

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-16 sm:py-20"
    >
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Teams and founders who trust TaskFlow
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            From solo founders to fast-growing teams, TaskFlow helps people stay ahead of deadlines without burning out.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-indigo-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-100 text-base leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.bgColor} text-white text-sm font-semibold flex items-center justify-center flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>

                {/* Name and Role */}
                <div>
                  <p className="text-slate-100 font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-indigo-400 text-xs font-medium">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

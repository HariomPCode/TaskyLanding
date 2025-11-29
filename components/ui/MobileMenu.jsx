import { X } from "lucide-react";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex flex-col p-6 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={() => setOpen(false)}>
          <X className="w-6 h-6 text-slate-200" />
        </button>
      </div>

      <ul className="mt-10 space-y-6 text-center text-lg text-slate-200 font-medium">
        <li><a href="#features" onClick={() => setOpen(false)}>Features</a></li>
        <li><a href="#pricing" onClick={() => setOpen(false)}>Pricing</a></li>
        <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <div className="flex flex-col mt-10 gap-4 text-center">
        <a
          href="#signin"
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200 hover:bg-white/5 transition"
        >
          Sign in
        </a>

        <a
          href="#get-started"
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded-full bg-indigo-600 text-sm text-white font-medium shadow-lg hover:bg-indigo-500 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

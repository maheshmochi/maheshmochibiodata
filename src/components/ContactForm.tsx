import React, { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mrpeelbw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#9d4edd]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 text-[#d8b4fe] text-sm">
            <Mail size={16} />
            Let's Connect
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Feel free to send me a message. I'll get back to you as soon as
            possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none transition focus:border-[#9d4edd]/60 focus:ring-2 focus:ring-[#9d4edd]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none transition focus:border-[#9d4edd]/60 focus:ring-2 focus:ring-[#9d4edd]/20"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-5">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm text-gray-300"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What would you like to discuss?"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none transition focus:border-[#9d4edd]/60 focus:ring-2 focus:ring-[#9d4edd]/20"
            />
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none resize-none transition focus:border-[#9d4edd]/60 focus:ring-2 focus:ring-[#9d4edd]/20"
            />
          </div>

          {/* Status */}
          {status === 'success' && (
            <div className="mt-5 flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle2 size={18} />
              Message sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div className="mt-5 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={18} />
              Something went wrong. Please try again.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="mt-7 w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#9d4edd] hover:bg-[#8b3fc4] text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,78,221,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? 'Sending...' : 'Send Message'}
            {!isSending && <Send size={17} />}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Your message will be securely delivered through Formspree.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
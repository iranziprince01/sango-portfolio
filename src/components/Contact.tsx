import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import type { ContactFormState } from '../types'
import { SectionHeading } from './SectionHeading'

const initial: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
    setForm(initial)
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          id="contact-heading"
          sentenceCase
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-bold text-ink">Direct contact</h3>
            <ul className="mb-8 space-y-4">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Email</p>
                <a href="mailto:fatisango12@gmail.com" className="font-semibold text-primary hover:underline">
                  fatisango12@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Phone</p>
                <a href="tel:+250782485566" className="font-semibold text-primary hover:underline">
                  +250 782 485 566
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Location</p>
                <p className="font-semibold text-ink">Kigali, Rwanda</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {status === 'sent' ? (
              <div
                className="mb-6 rounded-xl border border-cta/30 bg-cta/10 px-4 py-3 text-sm font-medium text-ink"
                role="status"
              >
                Thank you. Your message has been captured locally. Connect via email for a guaranteed response.
              </div>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-ink outline-none ring-primary/0 transition-shadow focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-ink outline-none transition-shadow focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-ink outline-none transition-shadow focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-y rounded-xl border border-primary/15 bg-white px-4 py-3 text-ink outline-none transition-shadow focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-cta px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cta-hover"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

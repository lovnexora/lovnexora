'use client';

import { useState } from 'react';

// Your Web3Forms access key
const WEB3FORMS_ACCESS_KEY = '0b4b05ae-78d8-440d-892e-8ecaadfe6e6a';

type Status = 'idle' | 'sending' | 'sent' | 'error';

function ContactForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New message from lovnexora.xyz');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? 'sent' : 'error');
      if (result.success) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 font-mono"
      onClick={onClose}
    >
      <div
        className="bg-neutral-950 border border-neutral-800 rounded-lg max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors text-sm"
        >
          ✕
        </button>

        {status === 'sent' ? (
          <div className="py-8 text-center space-y-2">
            <p className="text-emerald-500 text-sm font-bold uppercase tracking-widest">
              Message sent
            </p>
            <p className="text-neutral-400 text-sm">
              Thanks for reaching out — I&apos;ll reply soon.
            </p>
          </div>
        ) : (
          <>
            <div className="text-xs text-emerald-500 font-bold tracking-widest uppercase mb-2">
              Get in touch
            </div>
            <p className="text-neutral-500 text-sm mb-6">
              Fill this in and it lands straight in my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-xs">
                  Something went wrong — try again, or email hello@lovnexora.xyz directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-emerald-500 text-black font-bold text-sm uppercase tracking-wide py-2.5 rounded hover:bg-emerald-400 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function TalkToMeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-emerald-500 font-bold tracking-widest uppercase border border-emerald-900 hover:border-emerald-500 hover:bg-emerald-500/10 transition-colors px-4 py-2 rounded-full"
      >
        Talk to me
      </button>

      {open && <ContactForm onClose={() => setOpen(false)} />}
    </>
  );
}

export function MailIcon() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@lovnexora.xyz"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email me"
      className="text-neutral-500 hover:text-emerald-500 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    </a>
  );
}
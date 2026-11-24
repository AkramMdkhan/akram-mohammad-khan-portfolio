"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiX } from "react-icons/fi";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

const RESUME_PDF = "https://drive.google.com/file/d/1CohxEl0EnEXOJPswLZ6IqjbCb5w7hrnr/view?usp=drive_link";

// ✏️ one image per page. Add "/resume-2.png" here if you have 2 pages
const RESUME_PAGES = ["/resume-1.JPG"];

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  // close with Escape key + stop page scrolling behind the modal
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
          >
            {/* top bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <h2 className="text-base font-semibold text-white sm:text-lg">
                My Resume
              </h2>

              <div className="flex items-center gap-2">
                <a
                  href={RESUME_PDF}
                  download="Akram-Mohammad-Khan-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/30 sm:text-sm"
                >
                  <FiDownload />
                  Download PDF
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* resume preview (scrollable) */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-800 p-3 sm:p-5">
              {RESUME_PAGES.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`Resume page ${i + 1}`}
                  className="mx-auto h-auto w-full rounded-lg bg-white shadow-lg"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
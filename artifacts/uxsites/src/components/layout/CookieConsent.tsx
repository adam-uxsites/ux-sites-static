import { useState, useEffect } from "react";
import { getConsent, setConsent, loadGtag } from "@/lib/analytics";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === "accepted") {
      loadGtag();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  function accept() {
    setConsent("accepted");
    loadGtag();
    setVisible(false);
  }

  function reject() {
    setConsent("rejected");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 md:p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">Cookie Consent</p>
                <p className="text-sm text-muted-foreground">
                  We use a Google Ads cookie to measure the effectiveness of our advertising. No personal data is shared with Google.
                  <a href="/privacy-policy/" className="text-primary hover:underline ml-1 whitespace-nowrap">Privacy policy â†’</a>
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={reject}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={accept}
                  className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

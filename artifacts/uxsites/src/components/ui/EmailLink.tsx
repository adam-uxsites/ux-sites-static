import { useState, useEffect } from "react";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmailLink({ email, className, children }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <span className={className}>{children ?? email}</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}

export function EmailText({ email, className }: { email: string; className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <span className={className}>[email]</span>;

  return <span className={className}>{email}</span>;
}
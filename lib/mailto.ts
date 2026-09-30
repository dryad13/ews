export function mailtoInquiry(to: string, subject: string, body: string) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (typeof window !== "undefined") {
    window.location.href = href;
  }
}

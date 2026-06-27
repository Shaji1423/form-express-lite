import { useRouter, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.history.back();
    }
  };

  return (
    <Link
      to={fallback}
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Link>
  );
}

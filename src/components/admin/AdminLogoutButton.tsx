"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AdminLogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-[var(--text-muted)]"
      disabled={pending}
      onClick={async () => {
        setPending(true);

        try {
          await fetch("/api/logout", { method: "POST" });
          router.push("/login");
          router.refresh();
        } finally {
          setPending(false);
        }
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      {pending ? "Signing out..." : "Logout"}
    </Button>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Invalid email or password");
      }

      const nextPath =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("next")
          : null;

      router.push(nextPath || "/admin");
      router.refresh();
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--mist)] px-4 py-8">
      <div className="absolute inset-0">
        <Image src="/assets/imgs/login/login.png" alt="Ocean login" fill className="object-cover" priority sizes="100vw" />
        <div className="hero-overlay absolute inset-0 opacity-90" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card variant="glass" className="space-y-6 text-white">
            <p className="text-on-dark-glass text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sun)]">Admin access</p>
            <div className="space-y-3">
              <h1 className="text-on-dark-glass font-display text-5xl leading-none">Welcome back to Blue Lagoon.</h1>
              <p className="text-on-dark-glass max-w-md text-sm leading-7 text-white/92">
                Use the existing cookie-based login to enter the new admin workspace for packages, stays, and guides.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/16 bg-white/12 p-5 text-sm leading-7 text-white/88">
              Demo admin login: <strong>admin@bluelagoon.com</strong> / <strong>password</strong>. Successful login routes to the protected admin section.
            </div>
          </Card>

          <Card variant="default" className="mx-auto w-full max-w-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-5xl leading-none text-[var(--ocean-deep)]">Sign in</h2>
              <p className="text-sm leading-7 text-[var(--text-muted)]">Enter your configured admin credentials to continue.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />

              <div className="space-y-2">
                <span className="text-sm font-medium text-[var(--text-main)]">Password</span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-[var(--border-soft)] bg-white px-4 py-3 pr-12 text-sm text-[var(--text-main)] shadow-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--ocean)] focus:ring-4 focus:ring-[rgba(94,211,208,0.18)]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[rgba(8,126,139,0.08)] hover:text-[var(--ocean-deep)]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {errorMsg ? (
                <div className="rounded-2xl border border-[rgba(255,122,89,0.36)] bg-[rgba(255,122,89,0.12)] px-4 py-3 text-sm text-[var(--coral)]">
                  {errorMsg}
                </div>
              ) : null}

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                {loading ? "Signing in..." : "Open admin"}
              </Button>
            </form>

            <p className="text-sm text-[var(--text-muted)]">
              Need a public overview instead?{" "}
              <Link href="/" className="font-semibold text-[var(--ocean-deep)] underline-offset-4 hover:underline">
                Return to the homepage
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function SignUpPage() {
  const [ownerName, setOwnerName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // TODO: connect signup interest capture to a real CRM or onboarding API.
      setShowSuccess(true);
      setOwnerName("");
      setOrganizationName("");
      setMobileNumber("");
      setEmail("");
      setPassword("");
    } catch (registerError) {
      setError(registerError instanceof Error ? registerError.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--mist)] px-4 py-8">
      <div className="absolute inset-0">
        <Image src="/assets/imgs/login/login.png" alt="Ocean signup" fill className="object-cover" priority sizes="100vw" />
        <div className="hero-overlay absolute inset-0 opacity-90" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card variant="glass" className="space-y-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sun)]">Vendor onboarding</p>
            <h1 className="text-on-dark-glass font-display text-5xl leading-none">Sign up as a Blue Lagoon vendor.</h1>
            <p className="text-on-dark-glass text-sm leading-7 text-white/92">
              For Lakshadweep hotels, resorts, homestays, guides, and local experience providers who want to receive tourist leads through Blue Lagoon.
            </p>
          </Card>

          <Card variant="default" className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-5xl leading-none text-[var(--ocean-deep)]">Join as vendor</h2>
              <p className="text-sm leading-7 text-[var(--text-muted)]">Share your property or guide profile and we&apos;ll follow up about onboarding.</p>
            </div>

            <form onSubmit={handleRegister} className="grid gap-5 md:grid-cols-2">
              <Input
                label="Owner name"
                value={ownerName}
                onChange={(event) => setOwnerName(event.target.value)}
                placeholder="Aarav Menon"
                required
              />
              <Input
                label="Organization name"
                value={organizationName}
                onChange={(event) => setOrganizationName(event.target.value)}
                placeholder="Agatti Lagoon House"
                required
              />
              <Input
                label="Mobile number"
                type="tel"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
                placeholder="+91 98765 43210"
                required
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="owner@company.com"
                required
              />
              <div className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-[var(--text-main)]">Password</span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Choose a password"
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

              {error ? (
                <div className="md:col-span-2 rounded-2xl border border-[rgba(255,122,89,0.36)] bg-[rgba(255,122,89,0.12)] px-4 py-3 text-sm text-[var(--coral)]">
                  {error}
                </div>
              ) : null}

              <div className="md:col-span-2 flex flex-col gap-4">
                <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                  {loading ? "Submitting..." : "Submit vendor interest"}
                </Button>
                <p className="text-sm text-[var(--text-muted)]">
                  Already have vendor access?{" "}
                  <Link href="/login" className="font-semibold text-[var(--ocean-deep)] underline-offset-4 hover:underline">
                    Sign in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {showSuccess ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(6,59,76,0.46)] p-4 backdrop-blur-sm">
          <Card variant="default" className="relative w-full max-w-md space-y-5">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[rgba(8,126,139,0.08)] hover:text-[var(--ocean-deep)]"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(94,211,208,0.18)] text-[var(--ocean)]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">Thank you.</h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">
                Your vendor interest has been captured in this preview. TODO: connect this to real persistence and follow-up workflows.
              </p>
            </div>
            <Button variant="primary" size="lg" fullWidth onClick={() => setShowSuccess(false)}>
              Close
            </Button>
          </Card>
        </div>
      ) : null}
    </div>
  );
}

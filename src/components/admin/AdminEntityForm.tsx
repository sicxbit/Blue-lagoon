"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button, buttonStyles } from "@/components/ui/Button";

type FieldType = "text" | "number" | "textarea" | "select" | "checkbox" | "email" | "tel";

interface FormFieldOption {
  label: string;
  value: string;
}

export interface AdminFormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  hint?: string;
  options?: FormFieldOption[];
}

interface AdminEntityFormProps {
  title: string;
  description: string;
  backHref: string;
  fields: AdminFormField[];
  initialValues: Record<string, string | boolean>;
}

export function AdminEntityForm({
  title,
  description,
  backHref,
  fields,
  initialValues,
}: AdminEntityFormProps) {
  const [values, setValues] = useState<Record<string, string | boolean>>(initialValues);
  const [notice, setNotice] = useState("");

  const groupedFields = useMemo(() => {
    const midpoint = Math.ceil(fields.length / 2);
    return [fields.slice(0, midpoint), fields.slice(midpoint)];
  }, [fields]);

  const updateValue = (name: string, value: string | boolean) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <Card variant="admin" className="space-y-4">
        <Link href={backHref} className={buttonStyles({ variant: "ghost", size: "sm" })}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        <div className="space-y-2">
          <h1 className="font-display text-4xl leading-none text-[var(--ocean-deep)]">{title}</h1>
          <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)]">{description}</p>
        </div>
        <div className="rounded-2xl border border-[rgba(246,200,95,0.4)] bg-[rgba(246,200,95,0.16)] px-4 py-3 text-sm text-[var(--ocean-deep)]">
          Demo form only. Changes are kept in local component state and are not persisted yet.
        </div>
      </Card>

      {notice ? (
        <Card variant="admin" className="border-[rgba(94,211,208,0.4)] bg-[rgba(94,211,208,0.12)] text-sm text-[var(--ocean-deep)]">
          {notice}
        </Card>
      ) : null}

      <Card variant="admin">
        <form
          className="space-y-8"
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: replace demo submit with API/database persistence for admin forms.
            setNotice("Demo save complete. TODO: connect this form to a persistent API.");
          }}
        >
          <div className="grid gap-6 xl:grid-cols-2">
            {groupedFields.map((fieldGroup, columnIndex) => (
              <div key={columnIndex} className="space-y-5">
                {fieldGroup.map((field) => {
                  const currentValue = values[field.name];

                  if (field.type === "textarea") {
                    return (
                      <Textarea
                        key={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                        hint={field.hint}
                        value={String(currentValue ?? "")}
                        onChange={(event) => updateValue(field.name, event.target.value)}
                      />
                    );
                  }

                  if (field.type === "select") {
                    return (
                      <Select
                        key={field.name}
                        label={field.label}
                        hint={field.hint}
                        value={String(currentValue ?? "")}
                        onChange={(event) => updateValue(field.name, event.target.value)}
                      >
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    );
                  }

                  if (field.type === "checkbox") {
                    return (
                      <label
                        key={field.name}
                        className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[rgba(8,126,139,0.04)] px-4 py-4"
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(currentValue)}
                          onChange={(event) => updateValue(field.name, event.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-[var(--border-soft)] text-[var(--ocean)] focus:ring-[var(--aqua)]"
                        />
                        <span>
                          <span className="block text-sm font-semibold text-[var(--ocean-deep)]">{field.label}</span>
                          {field.hint ? <span className="mt-1 block text-sm text-[var(--text-muted)]">{field.hint}</span> : null}
                        </span>
                      </label>
                    );
                  }

                  return (
                    <Input
                      key={field.name}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      hint={field.hint}
                      value={String(currentValue ?? "")}
                      onChange={(event) => updateValue(field.name, event.target.value)}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" variant="admin" size="lg">
              Save demo changes
            </Button>
            <Link href={backHref} className={buttonStyles({ variant: "secondary", size: "lg" })}>
              Cancel
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

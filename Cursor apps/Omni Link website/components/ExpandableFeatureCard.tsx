"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Video,
  MessageSquare,
  Mic,
  ListTodo,
  Zap,
  BarChart3,
  Plug,
  GitBranch,
  ArrowRightLeft,
  Sparkles,
  Languages,
  Database,
  Users,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Video,
  MessageSquare,
  Mic,
  ListTodo,
  Zap,
  BarChart3,
  Plug,
  GitBranch,
  ArrowRightLeft,
  Sparkles,
  Languages,
  Database,
  Users,
  BookOpen,
  Lightbulb,
};

interface ExpandableFeatureCardProps {
  title: string;
  summary: string;
  bullets: string[];
  description: string;
  iconName?: string;
  index?: number;
}

export default function ExpandableFeatureCard({
  title,
  summary,
  bullets,
  description,
  iconName,
  index = 0,
}: ExpandableFeatureCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconName ? ICON_MAP[iconName] : null;

  return (
    <article
      className="group rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:shadow-premium hover:-translate-y-0.5 hover:border-surface-200"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {Icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink-700">{summary}</p>
      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-600">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" aria-hidden />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" aria-hidden />
              Learn more
            </>
          )}
        </button>
        {expanded && (
          <p className="mt-3 text-ink-600 leading-relaxed text-sm">{description}</p>
        )}
      </div>
    </article>
  );
}

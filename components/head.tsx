"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import { ExternalLink } from "lucide-react";

export const Head = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-3xl font-family-inter font-medium text-left my-3 md:my-4 cursor-default text-zinc-700",
        className,
      )}
    >
      {title}
    </h1>
  );
};

export const SubHead = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "font-inter text-xl font-medium mb-1 cursor-default text-zinc-700",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export const Label = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return <h3 className={cn("text-md text-zinc-600", className)}>{content}</h3>;
};

export const Description = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-md md:text-lg leading-6 text-zinc-700 font-family-inter",
        className,
      )}
    >
      {description}
    </p>
  );
};

export const TitleContext = ({
  context,
  showMore = true,
  className,
}: {
  context: string;
  showMore?: boolean;
  className?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = context.length > 140;

  const displayedText =
    isLong && !expanded && showMore
      ? context.slice(0, 140).trim() + "..."
      : context;

  return (
    <div className={cn("text-lg font-family-inter text-zinc-700", className)}>
      <p>{displayedText}</p>
      {isLong && showMore && (
        <button
          className="mt-1 text-sm text-zinc-500 hover:underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export const Date = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return (
    <span className={cn("text-sm text-zinc-600 italic", className)}>
      {date}
    </span>
  );
};

export const Author = ({
  author,
  className,
}: {
  author: string;
  className?: string;
}) => {
  return (
    <span className={cn("text-sm text-zinc-600 italic", className)}>
      {author}
    </span>
  );
};

export const Link = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("hover:underline wrap-break-words", className)}
    >
      {text}
      <ExternalLink size={18} />
    </a>
  );
};

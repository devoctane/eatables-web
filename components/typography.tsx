import { cn } from "../lib/utils";

export const TypographyH1 = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-center text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
    >
      {title}
    </h1>
  );
};

export const TypographyH2 = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export const TypographyH3 = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-medium font-family-inter tracking-tight pt-4 pb-1 text-zinc-800",
        className,
      )}
    >
      {title}
    </h3>
  );
};

export const TypographyH4 = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {title}
    </h4>
  );
};

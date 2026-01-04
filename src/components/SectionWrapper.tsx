import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  wrapperClassName?: string;
}

export default function SectionWrapper({ children, wrapperClassName }: SectionWrapperProps) {
  return (
    <section className={`w-full overflow-x-hidden flex items-center justify-center py-24 sm:py-32 lg:py-40 px-6 ${wrapperClassName}`}>
      <div className="max-w-7xl w-full">
        {children}
      </div>
    </section>
  );
}

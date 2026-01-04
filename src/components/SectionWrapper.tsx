import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  wrapperClassName?: string;
  childrenWrapperClass?: string;
}

export default function SectionWrapper({ children, wrapperClassName, childrenWrapperClass }: SectionWrapperProps) {
  return (
    <section className={`w-full overflow-x-hidden flex items-center justify-center py-24 sm:py-32 lg:py-40 px-4 sm:px-6 ${wrapperClassName}`}>
      <div className={`max-w-7xl w-full ${childrenWrapperClass}`}>
        {children}
      </div>
    </section>
  );
}

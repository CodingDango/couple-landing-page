import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const FadeInWrapper = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
}: FadeInWrapperProps) => {
  return (
    // We use motion.div as the wrapper.
    // We pass any incoming className to it so we can style it.
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }} makes the animation happen only once.
      // amount: 0.25 means it triggers when 25% of the element is visible.
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;

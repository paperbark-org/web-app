import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-4xl flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full gradient-green border border-green-200/50 text-center backdrop-blur-sm">
            <AnimatedShinyText className="px-6 py-2 text-secondary-text">
              <span>✨ Coming Soon</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/paperbark-logo.svg"
            alt="Paperbark Logo"
            width={300}
            height={90}
            className="h-auto w-auto max-h-24 sm:max-h-28 md:max-h-32"
            priority
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-bold tracking-tight sm:text-6xl text-brown900"
          text="social-media intelligence like no other"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-1xl text-center text-lg text-secondary-text leading-relaxed"
          text="Persona Segmentation. Competitor Intelligence. Creator Matchmaking."
          duration={0.8}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-secondary-text">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Early Access Available</span>
          </div>
          <div className="hidden sm:block text-secondary-text">•</div>
          <div className="flex items-center space-x-2">
            <span>No Credit Card Required</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

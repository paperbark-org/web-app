import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between items-center top-0 z-[50] m-4">
      
      {/* Paperbark Logo */}
      <motion.div variants={itemVariants}>
        <Image
          src="/paperbark-text-logo.svg"
          alt="Paperbark"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </motion.div>

      {/* Coming Soon Badge
      <motion.div variants={itemVariants}>
        <div className="bg-green-200/80 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
          Coming soon
        </div>
      </motion.div> */}
    </motion.div>
  );
}

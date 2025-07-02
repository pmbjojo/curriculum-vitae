"use client";

import { ArrowUpIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const checkScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed right-4 bottom-4 z-50"
        >
          <Button onClick={scrollToTop} size="icon">
            <ArrowUpIcon />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to show or hide the button based on scroll position
  const checkScroll = () => {
    if (window.scrollY > 300) {
      // Customize the scroll position as needed
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll event listener setup
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling
    });
  };

  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50"
          size="icon"
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;

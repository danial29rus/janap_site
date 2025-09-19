"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function SakuraBranches() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth mouse following
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to subtle movement
  const branch1X = useTransform(mouseXSpring, [0, windowSize.width], [-10, 10]);
  const branch1Y = useTransform(mouseYSpring, [0, windowSize.height], [-5, 5]);
  const branch2X = useTransform(mouseXSpring, [0, windowSize.width], [-15, 15]);
  const branch2Y = useTransform(mouseYSpring, [0, windowSize.height], [-8, 8]);

  // Parallax scroll effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* First Sakura Branch - Top Right */}
      <motion.div
        className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16"
        style={{
          x: branch1X,
          y: branch1Y,
          top:
            windowSize.width >= 1024
              ? "-16rem"
              : windowSize.width >= 768
              ? "-6rem"
              : windowSize.width >= 640
              ? "-4rem"
              : "-3rem",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -10 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/sakura_scaled.png"
          alt="Sakura branch"
          width={800}
          height={1200}
          className="w-40 h-60 sm:w-48 sm:h-72 md:w-56 md:h-84 object-contain opacity-80 sm:opacity-85 transform"
          style={{
            width:
              windowSize.width >= 1024
                ? windowSize.width >= 1280
                  ? "40rem"
                  : "32rem"
                : windowSize.width >= 640
                ? "20rem"
                : "16rem",
            height:
              windowSize.width >= 1024
                ? windowSize.width >= 1280
                  ? "60rem"
                  : "48rem"
                : windowSize.width >= 640
                ? "30rem"
                : "24rem",
          }}
          priority
        />
      </motion.div>

      {/* Second Sakura Branch - Middle Right */}
      <motion.div
        className="absolute -right-6 sm:-right-8 md:-right-10 lg:-right-12"
        style={{
          x: branch2X,
          y: branch2Y,
          top:
            windowSize.width >= 1024
              ? "12.8rem"
              : windowSize.width >= 768
              ? "12rem"
              : windowSize.width >= 640
              ? "10rem"
              : "21rem",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
        initial={{ opacity: 0, scale: 0.9, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src="/images/sakura_scaled.png"
          alt="Sakura branch"
          width={720}
          height={1080}
          className="w-36 h-54 sm:w-42 sm:h-63 md:w-48 md:h-72 object-contain opacity-75 sm:opacity-80 transform"
          style={{
            width:
              windowSize.width >= 1024
                ? windowSize.width >= 1280
                  ? "36rem"
                  : "28rem"
                : windowSize.width >= 640
                ? "18rem"
                : "14rem",
            height:
              windowSize.width >= 1024
                ? windowSize.width >= 1280
                  ? "54rem"
                  : "42rem"
                : windowSize.width >= 640
                ? "27rem"
                : "21rem",
          }}
          priority
        />
      </motion.div>

      {/* Floating Sakura Petals Animation */}
      <div className="absolute inset-0">
        {[...Array(windowSize.width >= 768 ? 15 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              right: `${5 + i * 6}%`,
              top: `${15 + i * 8}%`,
              width: `${4 + (i % 3)}px`,
              height: `${4 + (i % 3)}px`,
              backgroundColor: "#EDDAD6",
            }}
            animate={{
              y: [0, -30, -10, -40, 0],
              x: [0, -15, -5, -20, 0],
              opacity: [0.7, 0.4, 0.8, 0.3, 0.7],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Additional smaller particles */}
        {[...Array(windowSize.width >= 768 ? 10 : 8)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              right: `${15 + i * 10}%`,
              top: `${25 + i * 9}%`,
              backgroundColor: "#EDDAD6",
            }}
            animate={{
              y: [0, -50, -20, -60, 0],
              x: [0, -25, -10, -30, 0],
              opacity: [0.5, 0.2, 0.7, 0.1, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

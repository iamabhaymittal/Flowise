"use client";

import { Variants, motion, useInView } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fontHeading } from "@/lib/font";
import Balancer from "react-wrap-balancer";

function CardAnitmation({
  isInView,
}: {
  ref: React.MutableRefObject<null>;
  isInView: boolean;
}) {
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      className="max-w-5xl md:max-w-2xl"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            type: "inertia",
          },
        },
      }}
    >
      <motion.div
        variants={FADE_IN_ANIMATION_VARIANTS}
        className="w-[300px] my-10 mx-auto h-[300px] bg-black"
      ></motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="mx-auto mt-1 max-w-full px-6 md:mt-3 lg:px-8 ">
      <div className="mx-auto"></div>
      <div className="mx-auto max-w-full text-center">
        <motion.div
          initial="hidden"
          className="max-w-5xl md:max-w-2xl"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={cn(
              "space-x-4 font-headingAlt text-4xl font-bold tracking-tight md:text-7xl",
              fontHeading.className
            )}
          >
            <span className={cn("inline")}>Generate Quiz</span>
            <span className="md:mx-1"></span> with the power of AI
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-6 text-sm md:text-lg leading-8 "
          >
            <Balancer>
              Unleash the quiz-termind AI for lightning-fast, brain-teasing
              trivia in a flash! Get ready to quiz and be amazed!
            </Balancer>
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-10 flex items-center justify-center gap-x-6 "
          >
            {/* <Link className="z-50"> */}
            <Link href="/" className="z-50">
              <Button variant="cta" size={"lg"}>
                Try Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

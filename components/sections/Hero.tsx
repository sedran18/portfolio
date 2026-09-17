"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { NameRevealLens } from "@/components/sections/NameRevealLens";
import { PointerShift } from "@/components/motion/PointerShift";
import { localize } from "@/lib/i18n/localize";
import { easeOutExpo } from "@/lib/motion/easings";
import type { Locale, Messages } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import PixelSnow from "../PixelSnow";

type HeroProps = {
  locale: Locale;
  messages: Messages;
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export function Hero({ locale, messages }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <PixelSnow
            className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
            color="#ffffff"
            flakeSize={0.01}
            minFlakeSize={1.25}
            pixelResolution={100}
            speed={1.7}
            density={0.2}
            direction={130}
            brightness={1.1}
            depthFade={5}
            farPlane={23}
            gamma={0.4545}
            variant="square"
          />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/60 to-violet-900/25" />

      <Container className="relative z-10   sm:h-auto lg:h-screen grid items-center gap-12 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)] sm:gap-10 sm:py-20 lg:gap-16 lg:py-30">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09, delayChildren: 0.04 },
            },
          }}
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.22em] text-accent"
          >
            {localize(profile.availability, locale)}
          </motion.p>

          <h1 className="mt-5 font-display font-bold text-[2.6rem] leading-[1.05] text-white sm:text-5xl lg:text-[9rem]">
            <NameRevealLens>
              <AnimatedText text={profile.name} />
            </NameRevealLens>
          </h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg text-zinc-200 sm:text-xl"
          >
            {localize(profile.role, locale)}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            {localize(profile.shortBio, locale)}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" className=" w-40 sm:w-35 lg:w-40  h-12 text-base p-3 sm:p-3 lg:p-4 flex items-center justify-center gap-2">
              {messages.actions.viewWork} <ArrowUpRight className="size-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.22, ease: easeOutExpo }}
          className="relative mx-auto w-full max-w-[320px] pb-14 sm:mx-0 sm:max-w-[380px] sm:justify-self-end sm:pb-8"
        >
          <PointerShift amount={10}>
            <div className="group">
              <ProfilePortrait locale={locale} priority />
            </div>
          </PointerShift>

          <PointerShift
            amount={6}
            className="absolute bottom-6 left-4 max-w-[16.5rem] sm:bottom-5 sm:left-[-1em] lg:bottom-10 lg:left-[-1.25rem]"
          >
            <div
              aria-hidden
              className="rounded-lg border border-white/10 bg-zinc-950/80 p-3.5 font-mono text-[9px] leading-relaxed text-zinc-300 backdrop-blur-md shadow-xl"
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-violet-400">
                {messages.hero.codeLabel}
              </p>

              <pre>{`const profile = {
  name: Gabriel Nardes,
  potential: 'high'
}`}</pre>
            </div>
          </PointerShift>
        </motion.div>
      </Container>
    </section>
  );
}

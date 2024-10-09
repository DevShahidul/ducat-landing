"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { CiPlay1 } from "react-icons/ci";
import { useWindowSize } from 'react-use';
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function Hero () {
   const { width, height } = useWindowSize();
   useEffect(() => {
      const lenis = new Lenis();
      function raf (time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
   }, []);

   const maximumScale = useMemo(() => {
      const windowYRatio = height / width;
      const xScale = 2.181976871;
      const yScale = xScale * (16 / 9) * windowYRatio;
      return Math.max(xScale, yScale);
   }, [width, height]);

   const container = useRef<HTMLSectionElement>(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
   });

   const rotate = useTransform(scrollYProgress, [0, 0.20], [-25, 0]);
   const scale = useTransform(scrollYProgress, [0.28, 0.50, 0.80, 1], [1, maximumScale * 0.56, maximumScale * 0.56, 1]);
   // const scaleDown = useTransform(scrollYProgress, [0.41, 0.66], [maximumScale * 1.1, maximumScale, 1]);
   const marginB = useTransform(scrollYProgress, [0, 0.15], [-160, 0])
   const shadowheight = useTransform(scrollYProgress, [0, 0.46], [128, 56])
   return (
      <section ref={container}>
         <div className="container mx-auto">
            <div className="mx-auto lg:max-w-[68.5rem] text-center mt-[8vw] h-[300vh]">
               <Button variant="outline" size="sm">
                  <CiPlay1 className="mr-1 size-4" /> Login with Email
               </Button>
               <div className="mb-16 md:mb-40">
                  <h1 className="mt-5 font-bold [font-size:var(--fs-h1)] tracking-wide leading-tight">Hold BTC & Leverage it with <span className="bg-gradient-to-r from-gstart to-gend bg-clip-text [-webkit-text-fill-color:transparent]">UNIT</span></h1>
                  <span className="font-bold mt-9 text-muted-foreground">The first decentralised stablecoin, native to the Bitcoin L1.</span>
               </div>
               <motion.div className="text-center tracking-wide max-w-3xl mx-auto pb-6 md:pb-12" style={{ marginBottom: marginB }}>
                  <h2 className="text-6xl font-bold mb-5">Try it yourself.</h2>
                  <p className="text-2xl text-muted-foreground">Escrow BTC in your own TapTree 'vault' and borrow UNIT stablecoins against your BTC.</p>
               </motion.div>
               <div className="[perspective:45.833vw] sticky top-48">
                  <motion.div className="rounded-xl bg-gradient-to-r from-gstart to-gend p-px relative z-10 w-[45.833vw] mx-auto after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-r after:from-gstart/80 after:to-gend/80 after:blur-md after:z-0" style={{
                     rotateX: rotate,
                     scale,
                  }}>
                     <motion.div className="absolute -z-10 h-32 -left-1/4 -right-1/4 bottom-full bg-gradient-to-t from-background/90 to-transparent" style={{ height: shadowheight }}></motion.div>
                     <Card className="relative z-10">
                        <Image src="/assets/images/hero-thumb.png" width={880} height={626} alt="Leverage BTC with UNIT" />
                     </Card>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
          data-testid="text-section-about"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-p1">
              I am a Technical Developer that has worked with a research-support organization and
              has practical experience in creating tools, web platforms, and reports that help
              transform the data into actionable information.
            </p>

            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-p2">
              My main strength is that I can combine web development and research-report writing,
              which allows me not only to gather and analyze the information but also to present
              the results in a professional way.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 shadow-xl">
              <Avatar className="h-48 w-48">
                <AvatarFallback className="text-5xl bg-primary/10 text-primary">
                  AG
                </AvatarFallback>
              </Avatar>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

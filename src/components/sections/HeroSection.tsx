"use client";

import { personalInfo } from "@/data/personal";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting - subtle and professional */}
          <p className="text-sm md:text-base text-primary font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Hi, I&apos;m
          </p>

          {/* Name - bold and impactful */}
          <h1 className="heading-primary mb-6 animate-fade-in-up">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Title - clear hierarchy */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8 animate-fade-in-up">
            {personalInfo.title}
          </h2>

          {/* Tagline - if available */}
          {personalInfo.tagline && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed">
              {personalInfo.tagline}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={() => {
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

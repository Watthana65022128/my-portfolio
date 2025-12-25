"use client";

import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="heading-secondary text-center mb-4">About Me</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
                className="object-cover"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Info Card */}
            <div className="mt-8">
              <div className="bg-card rounded-xl p-4 border border-border/50 transition-all duration-200 hover:border-primary/30">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">Email</p>
                <p className="font-semibold text-foreground text-sm">{personalInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

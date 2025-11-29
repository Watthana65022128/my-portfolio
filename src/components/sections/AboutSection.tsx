"use client";

import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4 text-lg text-muted-foreground">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold">{personalInfo.location}</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm">{personalInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

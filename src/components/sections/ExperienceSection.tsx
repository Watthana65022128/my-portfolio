import { experiences } from "@/data/experience";
import { formatDate, calculateDuration } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4">Work Experience</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-7 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1 tracking-tight">
                        {exp.projectName}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span className="text-border">•</span>
                        <span>
                          {formatDate(exp.startDate)} -{" "}
                          {exp.current ? "Present" : formatDate(exp.endDate!)}
                        </span>
                        <span className="text-border">•</span>
                        <span className="text-primary/80">
                          {calculateDuration(exp.startDate, exp.endDate)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">›</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { experiences } from "@/data/experience";
import { formatDate, calculateDuration } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4">Work Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My professional journey and career highlights
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-6" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.projectName}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>
                          {formatDate(exp.startDate)} -{" "}
                          {exp.current ? "Present" : formatDate(exp.endDate!)}
                        </span>
                        <span>•</span>
                        <span>
                          {calculateDuration(exp.startDate, exp.endDate)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-muted-foreground">
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx}>{resp}</li>
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

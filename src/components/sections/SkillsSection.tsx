import { skillGroups } from "@/data/skills";
import Card from "@/components/ui/Card";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4">Skills & Technologies</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group) => (
            <Card key={group.category} hover glow>
              <h3 className="text-lg font-semibold mb-6 text-primary tracking-tight">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-lg font-medium text-sm border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

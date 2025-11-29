import { skillGroups } from "@/data/skills";
import Card from "@/components/ui/Card";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillGroups.map((group) => (
            <Card key={group.category} hover>
              <h3 className="heading-tertiary mb-6 text-primary">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm"
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

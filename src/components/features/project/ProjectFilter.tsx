import { ProjectCategory } from "@/types";
import { projectCategoryLabels } from "@/lib/constants";

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
}

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const categories: Array<ProjectCategory | "all"> = [
    "all",
    "fullstack",
    "frontend",
    "backend",
    "web",
    "mobile",
    "machine learning",
  ];

  const getCategoryLabel = (category: ProjectCategory | "all"): string => {
    if (category === "all") return "All Projects";
    return projectCategoryLabels[category] || category;
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
          }`}
        >
          {getCategoryLabel(category)}
        </button>
      ))}
    </div>
  );
}

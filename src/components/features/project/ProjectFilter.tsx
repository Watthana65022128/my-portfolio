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
  ];

  const getCategoryLabel = (category: ProjectCategory | "all"): string => {
    if (category === "all") return "All Projects";
    return projectCategoryLabels[category] || category;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-background border border-border text-foreground hover:bg-accent"
          }`}
        >
          {getCategoryLabel(category)}
        </button>
      ))}
    </div>
  );
}

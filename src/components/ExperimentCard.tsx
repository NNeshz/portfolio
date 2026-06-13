import { Button } from "./ui/button";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

interface ExperimentCardProps {
  title?: string;
  description?: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ExperimentCard({
  title = "Experiment",
  description = "",
  tags = [],
  githubUrl,
  demoUrl,
}: ExperimentCardProps) {
  return (
    <div className="group border p-5 bg-card/30 hover:bg-card/50 transition-colors flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <span className="flex items-center gap-2 shrink-0">
          {githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconBrandGithub className="size-5" />
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo"
              >
                <IconWorld className="size-5" />
              </a>
            </Button>
          )}
        </span>
      </div>

      {/* Description - Always Visible */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

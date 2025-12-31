import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

interface ProjectCardProps {
  title?: string;
  resume?: string;
  date?: string;
  description?: string[];
  tags?: string[];
  logo?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({
  title = "Full Stack Developer Intern",
  resume = "Dukaan (Rollout)",
  date = "July 2025 - Nov 2025",
  description = [
    "Integrated Monaco Editor with versioning, file explorer, and one-click restore for advanced editing.",
    "Designed custom parsing logic to handle LLM output for accurate and reliable code generation.",
    "Implemented JWT-based auth with protected routes and OAuth integrations for Google and Twitter.",
    "Used Nginx to serve generated static project files.",
  ],
  tags = [
    "React",
    "Express.js",
    "MongoDB",
    "JWT",
    "OAuth",
    "Nginx",
    "Monaco Editor",
  ],
  githubUrl,
  demoUrl,
  logo,
}: ProjectCardProps) {
  return (
    <div className="group border p-5 bg-card/30 hover:bg-card/50 transition-colors h-full flex flex-col">
      {/* Header Section - Always Visible */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
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
                  aria-label="Github"
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

        <div className="flex items-center gap-2">
          {/* Logo placeholder or image */}
          
          <span className="font-medium text-muted-foreground">{resume}</span>
        </div>
      </div>

      <div className="mt-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionContent className="text-muted-foreground">
              <div className="flex flex-col gap-4 py-4">
                <div className="space-y-2 text-sm leading-relaxed">
                  {description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
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
            </AccordionContent>

            <AccordionTrigger className="justify-start gap-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:no-underline data-[state=open]:text-foreground">
              Ver detalles
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"

interface ExperienceItemProps {
  title?: string;
  company?: string;
  date?: string;
  description?: string[];
  tags?: string[];
  logo?: string;
}

export function ExperienceItem({ 
  title = "Full Stack Developer Intern",
  company = "Dukaan (Rollout)",
  date = "July 2025 - Nov 2025",
  description = [
    "Integrated Monaco Editor with versioning, file explorer, and one-click restore for advanced editing.",
    "Designed custom parsing logic to handle LLM output for accurate and reliable code generation.",
    "Implemented JWT-based auth with protected routes and OAuth integrations for Google and Twitter.",
    "Used Nginx to serve generated static project files."
  ],
  tags = ["React", "Express.js", "MongoDB", "JWT", "OAuth", "Nginx", "Monaco Editor"],
  logo
}: ExperienceItemProps) {
  return (
    <div className="text-foreground py-4 transition-colors">
      {/* Header Section - Always Visible */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground">
            {date}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
            {logo ? (
              <img src={logo} alt={company} className="size-6 rounded object-contain" />
            ) : (
              <div className="size-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold">
                  {company.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="font-medium text-muted-foreground">{company}</span>
        </div>
      </div>

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
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                            {tag}
                        </span>
                    ))}
                </div>
             </div>
          </AccordionContent>
          
          <AccordionTrigger className="justify-start gap-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:no-underline data-[state=open]:text-foreground">
            Ver más
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

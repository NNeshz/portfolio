interface ExperienceItemProps {
  title?: string;
  company?: string;
  date?: string;
  description?: string[];
  tags?: string[];
  logo?: string;
  eagerLogo?: boolean;
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
  logo,
  eagerLogo = false,
}: ExperienceItemProps) {
  return (
    <div className="text-foreground py-4 transition-colors">
      {/* Header Section */}
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
              <img src={logo} alt={company} loading={eagerLogo ? "eager" : "lazy"} decoding="async" className="size-6 rounded object-contain" />
            ) : (
              <div className="size-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold">
                  {company.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="font-medium text-muted-foreground">{company}</span>
        </div>
      </div>

      {/* Content - Always Visible */}
      <div className="flex flex-col gap-4 text-muted-foreground">
        <ul className="space-y-2 text-sm leading-relaxed">
            {description.map((desc, i) => (
                <li key={i} className="flex gap-2.5">
                    <span
                        className="mt-1.5 size-1.5 shrink-0 bg-muted-foreground/60"
                        aria-hidden="true"
                    />
                    <span>{desc}</span>
                </li>
            ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  )
}

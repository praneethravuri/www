import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "@/app/data/resume";

export function Work() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold border-b pb-2">Work</h2>
      
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {data.work.map((role, index) => (
          <AccordionItem value={`item-${index}`} key={role.company}>
            <AccordionTrigger className="hover:no-underline hover:bg-muted/50 px-2 py-4 transition-all rounded-md">
              <div className="flex flex-col text-left w-full pr-4 gap-1">
                <div className="flex justify-between items-center w-full">
                  <a href={role.companyUrl} target="_blank" className="font-semibold text-lg sm:text-xl hover:underline">
                    {role.company}
                  </a>
                  {/* Date hidden on mobile within trigger to prevent crowding, shown below instead */}
                  <span className="text-sm font-mono text-muted-foreground tabular-nums hidden sm:block">
                    {role.startDate} - {role.endDate}
                  </span>
                </div>
                
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm font-medium text-foreground/80">
                    {role.title}
                  </span>
                  {/* Mobile Date */}
                  <span className="text-xs font-mono text-muted-foreground tabular-nums sm:hidden">
                    {role.startDate} - {role.endDate}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-4 text-base text-muted-foreground leading-relaxed">
              <div className="pt-2 pb-4">
                 {/* Optional: Add a subtle separator if you want extra distinction */}
                {role.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
import { data } from "@/app/data/resume";

export function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        {data.firstName} {data.lastName}
      </h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
        {data.about}
      </p>
      
      {/* Quick Links for Recruiters */}
      <div className="flex gap-4 mt-2">
        {Object.values(data.contact.social).map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            className="p-2 border rounded-md hover:bg-foreground hover:text-background transition-all"
            aria-label={social.name}
          >
            <social.icon className="size-4" />
          </a>
        ))}
        <a 
          href={`mailto:${data.contact.email}`} 
          className="px-4 py-2 border rounded-md bg-foreground text-background font-medium hover:opacity-80 transition-opacity flex items-center gap-2 text-sm"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
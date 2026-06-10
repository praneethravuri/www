import { data } from "@/app/data/resume";
import { CustomLink } from "@/components/ui/custom-link";

export function ContactLinks() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            {Object.values(data.contact.social).map((social) => (
                <CustomLink
                    key={social.name}
                    href={social.url}
                    className="text-base"
                >
                    {social.name}
                </CustomLink>
            ))}
        </div>
    );
}

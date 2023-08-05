import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export interface Props {
  domain: {
    name: string;
    href?: string;
    tooltip?: string;
  };
  section?: string;
  link?: {
    href: string;
    tooltip: string;
  };
}

export const TopBar = ({ domain, section, link }: Props) => {
  return (
    <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
      <span className="py-1.5">
        {domain.href ? (
          <TooltipProvider delayDuration={50}>
            <Tooltip>
              <TooltipTrigger asChild={true}>
                <Link
                  href={domain.href}
                  className={
                    "transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  }
                >
                  {domain.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent side={"bottom"} sideOffset={8}>
                <p>{domain?.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          domain.name
        )}
        {section && ` · ${section}`}
      </span>
      {link && (
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger asChild={true}>
              <a
                href={link?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-white group-focus-within:text-neutral-900 group-focus-within:shadow-skeuo cursor-alias group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-skeuo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={"sr-only"}>
                  {`${link?.tooltip} (opens in new window)`}
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent side={"left"} sideOffset={8}>
              <p>{link?.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

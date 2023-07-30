import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";
import ZollAuktion from "@/public/images/projects/zoll-auktion.png";
import LittleWomen from "@/public/images/books/little-women.jpg";
import Valencia from "@/public/images/travel/valencia.jpg";
import Bavaria from "@/public/images/travel/bavaria.jpg";
import { ProjectTile } from "@/components/tiles/project-tile";
import { Grid, Section, SectionType } from "@/components/layout/grid";
import { ReadingTile, Status } from "@/components/tiles/reading-tile";
import { FilmTile } from "@/components/tiles/film-tile";
import { BlogTile } from "@/components/tiles/blog-tile";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
      <NavigationBar />
      <Grid>
        {CONTENT.map((section, index) => (
          <Section sectionType={section.sectionType} key={index}>
            {section.component}
          </Section>
        ))}
      </Grid>
      <Footer></Footer>
    </main>
  );
}

const HeroLink = ({
  href,
  underlineColor,
  underlineStyle,
  textStyle = "text-neutral-900",
  offset = "underline-offset-4",
  children,
  external = false,
}: {
  children: ReactNode;
  href: string;
  underlineColor: string;
  underlineStyle: string;
  textStyle?: string;
  offset?: string;
  external?: boolean;
}) => {
  return (
    <>
      {external ? (
        <a
          href={href}
          target={"_blank"}
          className={cn(
            "rounded focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline cursor-alias",
            underlineColor,
            underlineStyle,
            textStyle,
            offset,
          )}
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className={cn(
            "rounded focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline",
            underlineColor,
            underlineStyle,
            textStyle,
            offset,
          )}
        >
          {children}
        </Link>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <div className="h-full w-full p-4 sm:p-8">
      <h1 className="font-fraunces-variation decoration font-fraunces text-2xl font-light !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">
        Hey there, I’m <span className="text-neutral-900">Andreas</span>{" "}
        👋&nbsp; Welcome to my{" "}
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger asChild={true}>
              <HeroLink
                href={
                  "https://ndrsllwngr.wordpress.com/2023/07/27/what-is-a-digital-garden/"
                }
                underlineColor={""}
                underlineStyle={"underline decoration-dotted"}
                textStyle={"text-neutral-400 hover:text-neutral-500"}
                offset={""}
                external={true}
              >
                digital garden
              </HeroLink>
            </TooltipTrigger>
            <TooltipContent side={"bottom"} sideOffset={8}>
              <p>Click to read more!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        🌱 I like building{" "}
        <HeroLink
          href={""}
          underlineColor={"decoration-orange-400"}
          underlineStyle={"decoration-solid"}
        >
          things
        </HeroLink>
        , and I’m currently helping to build the future of{" "}
        <HeroLink
          href={"https://www.celonis.com"}
          underlineColor={"decoration-sky-400"}
          underlineStyle={"decoration-wavy"}
          external={true}
        >
          Celonis
        </HeroLink>
        .<br />
        <br />
        In my free time, I enjoy drinking{" "}
        <HeroLink
          href={""}
          underlineColor={"decoration-rose-400"}
          underlineStyle={"decoration-solid"}
        >
          coffee
        </HeroLink>
        , hanging out with my{" "}
        <HeroLink
          href={""}
          underlineColor={"decoration-lime-400"}
          underlineStyle={"decoration-solid"}
        >
          friends
        </HeroLink>
        , and experiencing&nbsp;
        <HeroLink
          href={""}
          underlineColor={"decoration-purple-400"}
          underlineStyle={"decoration-solid"}
        >
          arty
        </HeroLink>{" "}
        stuff.
        <br />
        <br />I do some{" "}
        <HeroLink
          href={""}
          underlineColor={"decoration-fuchsia-400"}
          underlineStyle={"decoration-solid"}
        >
          reading
        </HeroLink>{" "}
        and{" "}
        <HeroLink
          href={""}
          underlineColor={"decoration-teal-400"}
          underlineStyle={"decoration-solid"}
        >
          writing
        </HeroLink>{" "}
        as well, albeit not as consistently, but I’m working on being better at
        that.
      </h1>
    </div>
  );
};

const CONTENT: { sectionType: SectionType; component: ReactNode }[] = [
  { sectionType: SectionType.HERO, component: <Hero /> },
  {
    sectionType: SectionType.RECTANGLE,
    component: (
      <ProjectTile
        image={{ src: ZollAuktion, alt: "Zoll-Auktion" }}
        topBar={{
          domain: { name: "Projects" },
          section: "Zoll-Auktion",
          link: {
            href: "https://medium.com/tech4germany/tech4germany-10-wochen-9-fellows-2-projekte-erfahrungsbericht-ea1c4406c37a",
            tooltip: "Find out more",
          },
        }}
      />
    ),
  },
  {
    sectionType: SectionType.SQUARE,
    component: (
      <ReadingTile
        topBar={{
          domain: { name: "Reading" },
          section: "Books",
          link: {
            href: "https://www.goodreads.com/book/show/41557328-little-women",
            tooltip: "View on Goodreads",
          },
        }}
        bookDetails={{ title: "Little Women", author: "Louisa May Alcott" }}
        image={{
          src: LittleWomen,
          alt: "Little Women (Penguin Classics Deluxe Edition) book cover",
        }}
        status={Status.READING}
      />
    ),
  },
  {
    sectionType: SectionType.SQUARE,
    component: (
      <FilmTile
        topBar={{
          domain: { name: "Film" },
          link: {
            href: "https://www.instagram.com/ndrsllwngr/",
            tooltip: "Watch on Instagram",
          },
        }}
        image={{ src: Valencia, alt: "Valencia" }}
      />
    ),
  },
  {
    sectionType: SectionType.SQUARE,
    component: (
      <FilmTile
        topBar={{
          domain: { name: "Film" },
          link: {
            href: "https://www.instagram.com/ndrsllwngr/",
            tooltip: "Watch on Instagram",
          },
        }}
        image={{ src: Bavaria, alt: "Bavaria" }}
      />
    ),
  },
  {
    sectionType: SectionType.SQUARE,
    component: (
      <BlogTile
        date={"July 29, 2023"}
        excerpt={
          "When you're interviewing for a software engineering role, you'll likely face both technical and behavioral interviews. To prepare for these interviews, you can use resources like The Tech Interview Handbook, The System Design Primer, and Leetcode. For behavioral interviews, the Amazon STAR answer format and mock interviews are helpful. Be sure to research the company and practice your answers to common interview questions. And most importantly, be yourself!"
        }
        title={"Prepare for your interview"}
        topBar={{
          domain: {
            name: "Writing",
          },
          section: "Blog",
          link: {
            href: "https://ndrsllwngr.wordpress.com/2023/07/28/prepare-for-your-interview/",
            tooltip: "Read full blog post",
          },
        }}
      />
    ),
  },
  {
    sectionType: SectionType.RECTANGLE,
    component: (
      <BlogTile
        date={"June 10-15, 2018"}
        excerpt={
          "It takes movie camera operators years of professional training to follow an object in an aesthetically pleasing way, both by classical means (boom, slider) and by drones. As this complex task requires a high workload and situation awareness while controlling the camera, an uncluttered and efficient user interface (UI) is preferred. The emergence of mobile devices and motion control devices incorporating automation made touch-based UIs attractive to operators. Much work has already been done on UI adaptation strategies. However, little work is trying to solve the problem of combining manual control and automation within a UI. Especially with a central premise of minimising occlusion and visual clutter in a cinematic context. We, therefore, conducted a first user study (N=15) to evaluate different design alternatives regarding occlusion and preference. Afterwards, we created a functional prototype of the most promising design. To further reduce the occlusion we applied a progressive reduction adaption strategy. We evaluated the influence of different reduction levels on workload, control, creativity support and precision in a second user study (N=24). While we could reduce the clutter, due to our design decisions we found no negative effects affecting the measured variables."
        }
        title={
          "Axis- plus Content-based Control for Camera Drones: Design and Evaluation of User Interface Concepts"
        }
        topBar={{
          domain: {
            name: "Writing",
          },
          section: "Research",
          link: {
            href: "https://dl.acm.org/doi/10.1145/3213526.3213529",
            tooltip: "Read publication",
          },
        }}
      />
    ),
  },
];

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
};

export default function ColophonPage() {
  return (
    <div className="flex flex-col grow">
      <main className="p-6 pt-16 grow">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <section className="md:col-start-2 md:col-end-4 max-w-3xl">
            <div className="pb-4">
              <h2 className="text-lg font-[575]">Inspiration &not;</h2>
            </div>
            <div className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
              {INSPIRATION.map((inspiration, index) => {
                return (
                  <span key={index}>
                    <a href={inspiration.href}>{inspiration.label}</a>{" "}
                    <span className="text-neutral-400" role="none">
                      &#8277;
                    </span>{" "}
                  </span>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const INSPIRATION = [
  { label: "delba.dev", href: "https://delba.dev/" },
  { label: "paco.me", href: "https://paco.me" },
  { label: "leerob.io", href: "https://leerob.io/" },
];

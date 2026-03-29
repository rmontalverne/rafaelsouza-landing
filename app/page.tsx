"use client";

import Image from "next/image";
import { useState } from "react";

type Locale = "en" | "pt";

type SocialLink = {
  name: string;
  href: string;
  icon: JSX.Element;
};

type ToolLink = {
  id: string;
  name: string;
  href: string;
  kind: "external" | "internal";
  description: {
    en: string;
    pt: string;
  };
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/rmontalverne",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61a3.17 3.17 0 0 0-1.34-1.76c-1.1-.75.08-.74.08-.74a2.5 2.5 0 0 1 1.83 1.22 2.54 2.54 0 0 0 3.47 1 2.54 2.54 0 0 1 .76-1.59c-2.66-.3-5.47-1.33-5.47-5.94a4.65 4.65 0 0 1 1.24-3.24 4.31 4.31 0 0 1 .12-3.19s1.01-.33 3.3 1.24a11.4 11.4 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24.43 1.02.47 2.17.12 3.2a4.65 4.65 0 0 1 1.24 3.23c0 4.62-2.82 5.64-5.5 5.93a2.84 2.84 0 0 1 .81 2.2v3.25c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rmontalverne/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 7a1.97 1.97 0 0 0-.05-4ZM20.44 13.42c0-3.37-1.8-4.94-4.21-4.94a3.66 3.66 0 0 0-3.32 1.83V8.5H9.53V20h3.38v-6.15c0-1.62.3-3.2 2.3-3.2 1.98 0 2 1.86 2 3.3V20h3.38v-6.58Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rmontalverne",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:rmontalverne95@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm1.8.36v.1l7.2 5.4 7.2-5.4v-.1a.7.7 0 0 0-.7-.7h-13a.7.7 0 0 0-.7.7Zm14.4 2.35-6.66 5a1 1 0 0 1-1.2 0l-6.54-4.9v10.19c0 .39.31.7.7.7h13a.7.7 0 0 0 .7-.7V8.2Z"
        />
      </svg>
    ),
  },
];

const toolLinks: ToolLink[] = [
  {
    id: "ez-gantt",
    name: "ez-gantt",
    href: "https://thiagosanches.github.io/ez-gantt/",
    kind: "external",
    description: {
      en: "Simple and visual project timeline tool.",
      pt: "Ferramenta simples e visual para cronogramas de projeto.",
    },
  },
];

const copy = {
  en: {
    badge: "Project Manager",
    intro:
      "IT Project Manager with experience supporting clients across North America.",
    contactCta: "Contact me",
    aboutTitle: "About me",
    aboutText1:
      "This section is being refined and will be updated soon with my profile, expertise, and professional highlights.",
    aboutText2: "",
    toolsTitle: "Tools",
    toolsText:
      "Useful tools and pages. This section is ready to grow with more links over time.",
    openTool: "Open tool",
    openPage: "Open page",
    contactTitle: "Quick contact",
    contactText:
      "Want to discuss a project or opportunity? Reach me on the channels below.",
  },
  pt: {
    badge: "Gerente de Projetos",
    intro:
      "Gerente de projetos em TI com experiencia em clientes da America do Norte.",
    contactCta: "Falar comigo",
    aboutTitle: "Sobre mim",
    aboutText1:
      "Essa secao ainda esta em definicao e sera atualizada em breve com meu perfil, experiencia e principais destaques.",
    aboutText2: "",
    toolsTitle: "Ferramentas",
    toolsText:
      "Ferramentas e paginas uteis. Esta secao esta pronta para crescer com novos links.",
    openTool: "Abrir ferramenta",
    openPage: "Abrir pagina",
    contactTitle: "Contato rapido",
    contactText:
      "Quer conversar sobre um projeto ou oportunidade? Me encontre nos canais abaixo.",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,#f7f4ee_0%,transparent_35%),radial-gradient(circle_at_85%_10%,#dceeff_0%,transparent_30%),#fbfaf7] text-zinc-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-16">
        <div className="mb-4 flex justify-end">
          <div className="inline-flex rounded-full border border-zinc-300 bg-white p-1 text-sm font-semibold">
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-3 py-1 transition ${
                locale === "en"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className={`rounded-full px-3 py-1 transition ${
                locale === "pt"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
              aria-pressed={locale === "pt"}
            >
              PT
            </button>
          </div>
        </div>

        <section className="grid items-center gap-10 rounded-3xl border border-zinc-200/80 bg-white/85 p-8 shadow-[0_20px_80px_-40px_rgba(25,35,75,0.35)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-7">
            <span className="inline-flex rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-zinc-50 uppercase">
              {t.badge}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-zinc-950 md:text-6xl">
                Rafael Souza
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-700 md:text-xl">
                {t.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rmontalverne95@gmail.com"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                {t.contactCta}
              </a>
              <a
                href="https://linkedin.com/in/rmontalverne/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:text-zinc-950"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-[#c8ddff]" />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-2xl bg-[#f2dcb8]" />
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xl">
              <Image
                src="/profile-photo.jpg"
                alt="Photo of Rafael Souza"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <article className="rounded-3xl border border-zinc-200/80 bg-white/90 p-7 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-700">{t.aboutText1}</p>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200/80 bg-white/90 p-7 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            {t.toolsTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-700">{t.toolsText}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {toolLinks.map((tool) => (
              <article
                key={tool.id}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{tool.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {tool.description[locale]}
                </p>
                <a
                  href={tool.href}
                  target={tool.kind === "external" ? "_blank" : undefined}
                  rel={
                    tool.kind === "external" ? "noopener noreferrer" : undefined
                  }
                  className="mt-4 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:text-zinc-950"
                >
                  {tool.kind === "external" ? t.openTool : t.openPage}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-3xl border border-zinc-200/80 bg-zinc-950 px-7 py-8 text-zinc-100 md:px-10 md:py-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">{t.contactText}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.name}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold transition hover:border-zinc-400 hover:bg-zinc-800"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

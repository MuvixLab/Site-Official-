import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Code2, Smartphone, Database, Workflow, Plug, Lightbulb,
  ArrowRight, Star, Check, Instagram, Linkedin, Github, Mail,
  Sparkles, Globe, Server, Cloud, Play,
} from "lucide-react";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { ParticlesField } from "@/components/particles";
import { Logo } from "@/components/logo";

import erpImg from "@/assets/proj-erp.jpg";
import portalImg from "@/assets/proj-portal.jpg";
import dashImg from "@/assets/proj-dashboard.jpg";
import finImg from "@/assets/proj-finance.jpg";
import mobImg from "@/assets/proj-mobile.jpg";
import saasImg from "@/assets/proj-saas.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MuvixLab Technology — Soluções Digitais Premium" },
      { name: "description", content: "Desenvolvimento de software, sistemas web, apps mobile, automação e consultoria para micro e pequenas empresas." },
      { property: "og:title", content: "MuvixLab Technology" },
      { property: "og:description", content: "Transformamos ideias em soluções digitais." },
    ],
  }),
  component: Home,
});

/* ────────────────────────────── Sections ────────────────────────────── */

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <ParticlesField density={24} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Startup de Tecnologia
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Transformamos<br />
              <span className="text-gradient">Ideias em Soluções</span><br />
              Digitais
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Desenvolvemos sistemas, automações e plataformas digitais para impulsionar
              micro e pequenas empresas — com a sofisticação de uma startup de classe mundial.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-8px_var(--primary)] transition-all hover:scale-105 hover:shadow-[0_16px_40px_-4px_var(--primary)]">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary hover:bg-card">
                Ver Portfólio
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {["Entrega ágil", "Código limpo", "Cloud-ready", "Suporte contínuo"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

const STATS = [
  { value: "20+", label: "Projetos Entregues" },
  { value: "30+", label: "Sistemas Desenvolvidos" },
  { value: "28+", label: "Processos Automatizados" },
  { value: "50+", label: "Clientes Atendidos" },
];

function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass p-6 sm:p-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Globe, title: "Desenvolvimento Web", desc: "Sites, landing pages e plataformas de alta performance." },
  { icon: Database, title: "Sistemas Personalizados", desc: "ERP, CRM e sistemas internos sob medida." },
  { icon: Smartphone, title: "Aplicativos Mobile", desc: "Apps nativos e híbridos para Android e iOS." },
  { icon: Plug, title: "APIs e Integrações", desc: "Conecte plataformas com APIs robustas e seguras." },
  { icon: Workflow, title: "Automação", desc: "Automação de processos empresariais e operacionais." },
  { icon: Lightbulb, title: "Consultoria Tecnológica", desc: "Planejamento estratégico e transformação digital." },
];

function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="O que fazemos" title="Serviços que aceleram seu negócio" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_var(--primary)]">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_8px_20px_-6px_var(--primary)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all group-hover:opacity-100">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { img: erpImg, name: "Sistema de Gestão Empresarial", cat: "Sistemas", tech: ["React", "Node.js", "PostgreSQL"], desc: "ERP completo com gestão de estoque, vendas e financeiro." },
  { img: portalImg, name: "Portal de Atendimento", cat: "Web", tech: ["Next.js", "Tailwind", "Supabase"], desc: "Plataforma omnichannel de atendimento ao cliente." },
  { img: dashImg, name: "Dashboard Inteligente", cat: "Sistemas", tech: ["React", "D3.js", "Python"], desc: "BI em tempo real com inteligência artificial." },
  { img: finImg, name: "Sistema Financeiro", cat: "Sistemas", tech: ["Spring Boot", "MySQL", "AWS"], desc: "Controle financeiro corporativo automatizado." },
  { img: mobImg, name: "Aplicativo Mobile", cat: "Mobile", tech: ["React Native", "Firebase"], desc: "App de delivery com geolocalização e pagamentos." },
  { img: saasImg, name: "Plataforma SaaS", cat: "Web", tech: ["Next.js", "Stripe", "Kubernetes"], desc: "Multi-tenant SaaS com billing automatizado." },
];

const FILTERS = ["Todos", "Web", "Mobile", "Sistemas", "Automações"];

function Portfolio() {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Portfólio" title="Projetos que Geram Resultados" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === f
                  ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)]"
                  : "border border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_var(--primary)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
                    Ver Projeto <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH_GROUPS = [
  { label: "Frontend", icon: Code2, items: ["React", "Next.js", "Angular"] },
  { label: "Backend", icon: Server, items: ["Java", "Spring Boot", "Node.js"] },
  { label: "Banco de Dados", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Cloud & DevOps", icon: Cloud, items: ["Docker", "AWS", "Kubernetes"] },
];

function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Stack" title="Tecnologias de ponta" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 80}>
              <div className="h-full rounded-2xl glass p-6 transition-all hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold">{g.label}</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm">
                      <span className="font-medium">{item}</span>
                      <span className="text-[10px] font-mono text-primary">●</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Sobre nós" title="Conheça a MuvixLab em movimento" />
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-muted-foreground">
            Assista ao vídeo institucional e descubra como transformamos
            ideias em soluções digitais escaláveis.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto mt-12 max-w-5xl">
            {/* Glow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/30 via-primary-glow/20 to-gold/20 blur-2xl" />

            {/* Video frame (16:9) — substitua o <video src="..."> pelo seu arquivo */}
            <div className="group relative overflow-hidden rounded-3xl glass-strong p-2 shadow-[0_30px_80px_-20px_var(--primary)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster=""
                >
                  {/* Coloque aqui o arquivo do vídeo institucional */}
                  <source src="" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>

                {/* Placeholder visível enquanto o vídeo não é adicionado */}
                <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-br from-[#050816] via-[#0a1535] to-[#050816]">
                  <div className="text-center">
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_60px_-10px_var(--primary)] animate-pulse-glow">
                      <Play className="h-9 w-9 translate-x-0.5 fill-white text-white" />
                    </div>
                    <p className="mt-5 font-display text-xl font-bold text-white">
                      Vídeo Institucional <span className="text-gradient">MuvixLab</span>
                    </p>
                    <p className="mt-2 text-sm text-white/60">
                      Em breve · adicione seu vídeo neste espaço
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { v: "1+", l: "Anos de stack" },
              { v: "78,9%", l: "Uptime médio" },
              { v: "24/7", l: "Suporte" },
            ].map((x) => (
              <div key={x.l} className="rounded-xl border border-border bg-card/50 p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">{x.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{x.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const TEAM = [
  { img: team1, name: "Luan Porto", role: "CEO & Co-Fundador", desc: "Responsável por ditar a visão estratégica da empresa, conectar tecnologia aos objetivos de negócio e liderar o crescimento do time" },
  { img: team2, name: "Arthur Cidade", role: "Consultor de Vendas", desc: "Especialista em entender as dores dos clientes, desenhar soluções personalizadas e fechar parcerias de alto valor." },
  { img: team3, name: "Miguel Augusto", role: "CTO & Fundador", desc: "Líder técnico focado na evolução da nossa stack, segurança da informação e na arquitetura de sistemas robustos.." },
  { img: team4, name: "--", role: "Digital Marketing", desc: "Responsável pelo posicionamento digital da marca, gestão de canais, growth hacking e análise de métricas para acelerar o crescimento." },
];

function Team() {
  return (
    <section id="equipe" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Equipe" title="As pessoas por trás da MuvixLab" />
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Um time multidisciplinar movido por código, design e propósito.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_60px_-20px_var(--primary)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <a
                    href="#"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card/80 backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Descoberta", d: "Entendemos seu negócio, dores e objetivos." },
  { n: "02", t: "Planejamento", d: "Arquitetura, escopo e cronograma definidos." },
  { n: "03", t: "Desenvolvimento", d: "Sprints ágeis com entregas incrementais." },
  { n: "04", t: "Testes", d: "QA automatizado e validação contínua." },
  { n: "05", t: "Entrega", d: "Deploy seguro e treinamento da equipe." },
  { n: "06", t: "Evolução", d: "Suporte contínuo e novas funcionalidades." },
];

function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Como trabalhamos" title="Nosso processo de desenvolvimento" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-bold text-gradient">{s.n}</span>
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Rafael Mendes", role: "CEO, Logística MX", text: "A MuvixLab transformou nossos processos. Redução de 60% no tempo operacional em 3 meses." },
  { name: "Camila Souza", role: "Fundadora, BeautyApp", text: "Equipe excepcional. Entregaram nosso app antes do prazo e com qualidade impecável." },
  { name: "Eduardo Lima", role: "Diretor, Comércio Sul", text: "O ERP que desenvolveram é a espinha dorsal da nossa operação hoje. Recomendo." },
];

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Depoimentos" title="O que nossos clientes dizem" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-2xl glass-strong p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_var(--primary)]">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-gold/10" />
      <ParticlesField density={40} />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16">
            <div className="absolute -top-20 left-1/2 -z-10 h-60 w-[140%] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
            <h2 className="text-3xl font-bold sm:text-5xl">
              Pronto para Transformar sua <br className="hidden sm:block" />
              <span className="text-gradient">Ideia em Realidade?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Conte-nos sobre seu projeto. Em até 24h retornamos com uma proposta personalizada.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/5521984151278?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento." className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-8px_var(--primary)] transition-all hover:scale-105">
                Solicitar Orçamento <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:muvixlab@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-base font-semibold backdrop-blur transition-all hover:border-primary">
                <Mail className="h-5 w-5" /> muvixlab@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-10 w-10" />
              <span className="font-display text-lg font-bold">
                Muvix<span className="text-primary">Lab</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Startup de tecnologia especializada em transformar ideias em soluções digitais escaláveis.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/muvi.xlab/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/muvixlab" },
                { Icon: Github, href: "https://github.com/MuvixLab" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/50 transition-all hover:border-primary hover:text-primary hover:scale-110">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Início", "Serviços", "Portfólio", "Tecnologias", "Sobre"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-foreground/80 transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground/80">
                <Mail className="h-4 w-4 text-primary" /> muvixlab@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 MuvixLab Technology. Todos os direitos reservados.</span>
          <span>Feito com tecnologia premium ⚡</span>
        </div>
      </div>
    </footer>
  );
}

/* helpers */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      </Reveal>
    </div>
  );
}

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Technologies />
      <About />
      <Team />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

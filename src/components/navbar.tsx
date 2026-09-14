"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navItems, site } from "@/data/site";
import { ThemeToggle } from "./ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Background transition on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile menu: the open menu locks body scroll (overflow:hidden), which
  // swallows the default anchor jump. Close first, then scroll once the lock
  // is released so the section actually comes into view.
  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", `#${id}`);
    }, 80);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border/60 bg-canvas/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border/70 bg-surface-2/60 text-accent transition-colors group-hover:border-accent/50">
            AP
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors duration-200",
                  active === item.id ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-surface-2/70 ring-1 ring-border/60"
                    transition={
                      reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumePath}
            download
            className="hidden items-center gap-2 rounded-md border border-border/70 bg-surface-2/40 px-3 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface-2/80 sm:inline-flex"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-surface-2/40 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border/60 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleMobileNav(e, item.id)}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base transition-colors",
                      active === item.id
                        ? "bg-surface-2/70 text-foreground"
                        : "text-muted hover:bg-surface-2/50 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumePath}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-2 rounded-md bg-accent px-3 py-3 text-base font-medium text-accent-foreground"
                >
                  <FileDown className="h-4 w-4" />
                  Download Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

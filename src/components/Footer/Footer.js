// import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark relative border-t border-border bg-background">
      {/* Ambient brand glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-56 w-[120vw] -translate-x-1/2 bg-[radial-gradient(closest-side,var(--brand)/0.15,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-[hsl(var(--card)/0.6)] backdrop-blur-md shadow-[var(--shadow-elegant)]">
          <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3 md:p-10">
            {/* Brand */}
            <section aria-label="About ECESS" className="flex flex-col items-center text-center md:items-start md:text-left">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src={"https://i.imgur.com/Lg3kv0j.png"}
                  alt="ECESS NIT Durgapur logo"
                  loading="lazy"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain -translate-y-4 sm:-translate-y-6"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </Link>
              <p className="mt-0 max-w-md text-balance text-sm leading-6 text-muted-foreground">
                Electronics and Communication Engineering Students’ Society at NIT Durgapur — building community, learning and opportunity.
              </p>

              {/* Socials */}
              <nav aria-label="Social links" className="flex items-center gap-3">
                {[
                  { href: "https://www.facebook.com/ecess.nitdgp/", label: "Facebook", Icon: Facebook },
                  { href: "https://www.instagram.com/ece_students_society/", label: "Instagram", Icon: Instagram },
                  { href: "https://www.linkedin.com/company/73885679/admin/feed/posts/", label: "LinkedIn", Icon: Linkedin },
                  { href: "mailto:ecess.ece.nitdurgapur@gmail.com", label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[hsl(var(--glass)/0.06)] text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </a>
                ))}
              </nav>
            </section>

            {/* Quick Links */}
            <section aria-labelledby="quick-links" className="md:mx-auto">
              <h2 id="quick-links" className="border-b border-border pb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Links
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { to: "/", label: "Home" },
                  { to: "/team", label: "Team" },
                  { to: "/events", label: "Events" },
                  { to: "/about", label: "About Us" },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand/60" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section aria-labelledby="contact" className="md:mx-auto">
              <h2 id="contact" className="border-b border-border pb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <p className="font-medium text-foreground">Dhritishree Saha <span className="font-normal text-muted-foreground">(President)</span></p>
                  <a href="tel:+919732996467" className="mt-1 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                    <Phone className="h-4 w-4" /> +91 97329 96467
                  </a>
                </li>
                <li>
                  <p className="font-medium text-foreground">Manas Mahata <span className="font-normal text-muted-foreground">(Vice President)</span></p>
                  <a href="tel:+916294260685" className="mt-1 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                    <Phone className="h-4 w-4" /> +91 62942 60685
                  </a>
                </li>
                <li>
                  <p className="font-medium text-foreground">Mohammed Asif <span className="font-normal text-muted-foreground">(General Secretary)</span></p>
                  <a href="tel:+918967290251" className="mt-1 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                    <Phone className="h-4 w-4" /> +91 89672 90251
                  </a>
                </li>
                <li>
                  <a href="mailto:ecess.ece.nitdurgapur@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                    <Mail className="h-4 w-4" /> ecess.ece.nitdurgapur@gmail.com
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border px-8 py-6 text-center text-xs text-muted-foreground md:flex md:items-center md:justify-between">
            <p>&copy; 2025 ECESS NIT Durgapur. All rights reserved.</p>
            <p className="mt-3 md:mt-0">
              Designed & Developed by <span className="font-semibold text-foreground">Web Development Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { personalInfo, socialLinks } from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="section-container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">{personalInfo.name}</h3>
            <p className="text-muted-foreground text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

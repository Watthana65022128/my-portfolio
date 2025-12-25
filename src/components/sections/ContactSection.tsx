import { personalInfo, socialLinks } from "@/data/personal";
import ContactForm from "@/components/features/contact/ContactForm";
import SocialLinks from "@/components/features/contact/SocialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="heading-secondary text-center mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="heading-tertiary mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 transition-all duration-200 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 transition-all duration-200 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-foreground">Location</p>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold mb-4 text-foreground">Connect With Me</p>
                <SocialLinks links={socialLinks} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

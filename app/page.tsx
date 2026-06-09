"use client";
import { useState, useEffect } from "react";
import {
  Menu, X, Globe, GraduationCap, Briefcase, Users, CheckCircle,
  ArrowRight, Mail, Phone, MapPin, ChevronDown, Star, Shield, Clock, Award
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Services", "Process", "Testimonials", "FAQ", "Contact"];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        transition: "all 0.3s ease", padding: "0 5%",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Globe size={26} style={{ color: "#C9A84C" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "0.01em" }}>
              Global J1 Careers
            </span>
          </div>
          <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
            {navLinks.map(l => (
              <a key={l} href={"#" + l.toLowerCase()}
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s", letterSpacing: "0.03em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >{l}</a>
            ))}
            <a href="#contact" style={{ background: "#C9A84C", color: "#0A1628", padding: "9px 22px", borderRadius: 4, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#E2C47A")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
            >Get Started</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }} className="mobile-menu-btn">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#0A1628", padding: "20px 5% 24px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            {navLinks.map(l => (
              <a key={l} href={"#" + l.toLowerCase()} onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "12px 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {l}
              </a>
            ))}
            <a href="#contact" style={{ display: "block", marginTop: 16, background: "#C9A84C", color: "#0A1628", padding: "12px 0", textAlign: "center", borderRadius: 4, fontWeight: 600, textDecoration: "none" }}>Get Started</a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F2040 50%, #1A3560 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 5% 80px" }}>
        <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)", opacity: 0.07, pointerEvents: "none" }}>
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
            <circle cx="350" cy="350" r="340" stroke="#C9A84C" strokeWidth="2"/>
            <circle cx="350" cy="350" r="240" stroke="#C9A84C" strokeWidth="1.5"/>
            <circle cx="350" cy="350" r="140" stroke="#C9A84C" strokeWidth="1"/>
            <ellipse cx="350" cy="350" rx="340" ry="130" stroke="#C9A84C" strokeWidth="1.5"/>
            <ellipse cx="350" cy="350" rx="340" ry="220" stroke="#C9A84C" strokeWidth="1"/>
            <line x1="10" y1="350" x2="690" y2="350" stroke="#C9A84C" strokeWidth="1.5"/>
            <line x1="350" y1="10" x2="350" y2="690" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M 120 480 Q 280 200 580 260" stroke="#C9A84C" strokeWidth="2.5" strokeDasharray="8 5" fill="none"/>
            <circle cx="120" cy="480" r="8" fill="#C9A84C"/>
            <circle cx="580" cy="260" r="8" fill="#C9A84C"/>
          </svg>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 28 }}>
            <Star size={14} style={{ color: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Trusted J1 Visa Consultancy</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, maxWidth: 700, marginBottom: 24 }}>
            Your Gateway to a <span style={{ color: "#C9A84C" }}>J1 Career</span> in the United States
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 560, lineHeight: 1.75, marginBottom: 44 }}>
            We connect international students and recent graduates with meaningful J1 visa positions at leading U.S. companies — handling the complexity so you can focus on building your career.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C9A84C", color: "#0A1628", padding: "15px 32px", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(201,168,76,0.35)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#E2C47A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.transform = "translateY(0)"; }}
            >Start Your Journey <ArrowRight size={18} /></a>
            <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", padding: "15px 32px", borderRadius: 4, fontWeight: 500, fontSize: 15, textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
            >Explore Services</a>
          </div>
          <div style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap" }}>
            {[["500+", "Students Placed"], ["50+", "Partner Companies"], ["15+", "Countries Served"], ["98%", "Visa Success Rate"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>{num}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <a href="#about" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.35)", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={18} style={{ animation: "bounce 2s infinite" }} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: "#fff", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>About Us</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px 0 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628", lineHeight: 1.25, marginBottom: 24 }}>
              Bridging Global Talent with U.S. Opportunity
            </h2>
            <p style={{ color: "#4A5568", lineHeight: 1.8, marginBottom: 20, fontSize: 15.5 }}>
              Global J1 Careers was founded with a clear mission: remove the barriers that prevent talented international students from accessing transformative work experiences in the United States. The J1 visa process is complex — we have mastered it so you do not have to.
            </p>
            <p style={{ color: "#4A5568", lineHeight: 1.8, marginBottom: 32, fontSize: 15.5 }}>
              Our team of immigration specialists and career advisors has helped hundreds of students from over 15 countries secure placements at top U.S. firms in technology, finance, hospitality, healthcare, and more.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Licensed Sponsors", "End-to-End Support", "Alumni Network"].map(tag => (
                <span key={tag} style={{ display: "flex", alignItems: "center", gap: 6, background: "#FDF8EE", border: "1px solid rgba(201,168,76,0.3)", color: "#0A1628", padding: "7px 14px", borderRadius: 4, fontSize: 13, fontWeight: 500 }}>
                  <CheckCircle size={14} style={{ color: "#C9A84C" }} /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: <Shield size={28} />, title: "SEVIS Certified", sub: "Fully compliant sponsorship", dark: true },
              { icon: <Globe size={28} />, title: "Global Network", sub: "Partners in 15+ countries", dark: false },
              { icon: <Award size={28} />, title: "Expert Advisors", sub: "10+ years of experience", dark: false },
              { icon: <Clock size={28} />, title: "Fast Processing", sub: "Avg. 3–4 week turnaround", dark: true },
            ].map((card, i) => (
              <div key={i} style={{ background: card.dark ? "#0A1628" : "#FDF8EE", padding: "28px 24px", borderRadius: 8, border: !card.dark ? "1px solid rgba(201,168,76,0.2)" : "none" }}>
                <div style={{ color: "#C9A84C", marginBottom: 14 }}>{card.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: card.dark ? "#fff" : "#0A1628", marginBottom: 6 }}>{card.title}</div>
                <div style={{ color: card.dark ? "rgba(255,255,255,0.55)" : "#4A5568", fontSize: 13.5 }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: "#F8F6F1", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Offer</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px auto 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628" }}>Full-Service J1 Placement</h2>
            <p style={{ color: "#718096", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.75, fontSize: 15.5 }}>From first consultation to your first day at work, we handle every step of the J1 visa journey.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: <GraduationCap size={32} />, title: "Student & Graduate Placement", desc: "We match your academic background, skills, and career goals with the right J1 positions at U.S. companies across all major industries.", features: ["Resume & profile optimization", "Personalized job matching", "Interview coaching", "Offer negotiation support"] },
              { icon: <Briefcase size={32} />, title: "Visa Sponsorship & Filing", desc: "Our licensed sponsors handle all DS-2019 paperwork, SEVIS registration, and embassy preparation — ensuring a smooth, compliant process.", features: ["DS-2019 issuance", "SEVIS fee payment guide", "Embassy interview prep", "Ongoing compliance support"] },
              { icon: <Users size={32} />, title: "Pre-Departure Support", desc: "Arriving in a new country is daunting. We prepare you with practical guidance on housing, banking, social security, and cultural orientation.", features: ["Housing search assistance", "SSN & banking setup", "Cultural orientation", "Airport & arrival guide"] },
              { icon: <Globe size={32} />, title: "Alumni & Career Mentorship", desc: "Your J1 year is a launchpad. Our alumni network and mentorship program keep doors open long after your program ends.", features: ["Alumni network access", "Post-J1 career planning", "OPT/H1B pathway guidance", "Referral connections"] },
            ].map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "36px 32px", border: "1px solid rgba(10,22,40,0.08)", boxShadow: "0 2px 16px rgba(10,22,40,0.05)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(10,22,40,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(10,22,40,0.05)"; }}
              >
                <div style={{ color: "#C9A84C", marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0A1628", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#4A5568", fontSize: 14.5, lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: "#0A1628", fontSize: 13.5 }}>
                      <CheckCircle size={15} style={{ color: "#C9A84C", flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: "#0A1628", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>How It Works</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px auto 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff" }}>From Application to Arrival</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
            {[
              { step: "01", title: "Free Consultation", desc: "Discuss your background, goals, and eligibility with a J1 specialist at no cost." },
              { step: "02", title: "Profile & Matching", desc: "We build your profile and match you to verified positions that fit your field." },
              { step: "03", title: "Visa Sponsorship", desc: "Our sponsors issue your DS-2019 and guide you through the embassy interview." },
              { step: "04", title: "Placement & Arrival", desc: "Start your role with full pre-departure support and an on-ground orientation." },
            ].map((p, i) => (
              <div key={i} style={{ padding: "0 16px 0 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: "rgba(201,168,76,0.1)" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C", fontSize: 16, fontWeight: 700 }}>{p.step}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: "#fff", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Success Stories</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px auto 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628" }}>Students Who Made It</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { name: "Priya Sharma", country: "India → New York, NY", role: "Software Engineer Intern, FinTech Firm", quote: "Global J1 Careers handled my DS-2019 within two weeks and coached me through every step. I landed a role I could not have imagined accessing on my own.", stars: 5 },
              { name: "Carlos Mendez", country: "Mexico → Chicago, IL", role: "Hospitality Management Trainee", quote: "The team understood my field perfectly and connected me to a Marriott property program. Their pre-departure support made arriving in the US so much less overwhelming.", stars: 5 },
              { name: "Aiko Tanaka", country: "Japan → San Francisco, CA", role: "Business Development Intern", quote: "I had tried to navigate the J1 process alone and failed twice. Global J1 Careers made it seamless. I am now one year in and extending my stay.", stars: 5 },
            ].map((t, i) => (
              <div key={i} style={{ background: "#FDF8EE", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 8, padding: "36px 32px" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {Array.from({ length: t.stars }).map((_, s) => <Star key={s} size={16} style={{ color: "#C9A84C", fill: "#C9A84C" }} />)}
                </div>
                <p style={{ color: "#0A1628", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#0A1628", fontSize: 16 }}>{t.name}</div>
                  <div style={{ color: "#C9A84C", fontSize: 13, marginTop: 2 }}>{t.role}</div>
                  <div style={{ color: "#718096", fontSize: 12.5, marginTop: 2 }}>{t.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#F8F6F1", padding: "100px 5%" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>FAQ</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px auto 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628" }}>Common Questions</h2>
          </div>
          <FaqList />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#0A1628", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Get In Touch</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px 0 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>Start Your J1 Journey Today</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40, fontSize: 15.5 }}>Book a free 30-minute consultation with one of our advisors. No commitment — just clarity on your options.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <Mail size={18} />, label: "Email", value: "globalj1careers@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+1 (225)284-5556 " },
                { icon: <MapPin size={18} />, label: "Office", value: "Hyderabad, Telangana, India" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 2 }}>{c.label}</div>
                    <div style={{ color: "#fff", fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060E1A", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "36px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Globe size={20} style={{ color: "#C9A84C" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 16, fontWeight: 600 }}>Global J1 Careers</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>© {new Date().getFullYear()} Global J1 Careers. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Who is eligible for a J1 visa?", a: "The J1 Exchange Visitor visa is available to international students currently enrolled or recently graduated from an accredited university. You must have sufficient English proficiency and health insurance coverage for the duration of your stay." },
    { q: "How long does the J1 visa process take?", a: "On average, we complete the DS-2019 issuance and placement process within 3–4 weeks. Embassy appointment availability in your home country may affect the overall timeline, which is why we recommend starting 3 months before your intended start date." },
    { q: "Do I need a job offer before contacting you?", a: "No — that is what we are here for. We source and match positions based on your background. You will come to us with your resume and goals; we handle the employer side." },
    { q: "What industries do your placements cover?", a: "We place students across technology, finance, hospitality, healthcare administration, marketing, and engineering. If you have a specialized field, contact us — our network is broad and growing." },
    { q: "Can I extend my J1 program or transition to another visa?", a: "Yes. J1 programs can often be extended with employer support. Our team also provides guidance on transitioning to OPT (for F-1 holders) or H-1B sponsorship after your program ends." },
    { q: "What does the service cost?", a: "We offer a free initial consultation. Our placement fee structure is transparent and discussed upfront — there are no hidden costs. Contact us to receive a full breakdown based on your program type." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((f, i) => (
        <div key={i} style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.1)", borderRadius: 6, overflow: "hidden" }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "20px 24px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 16 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: "#0A1628" }}>{f.q}</span>
            <ChevronDown size={18} style={{ color: "#C9A84C", flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>
          {open === i && <div style={{ padding: "0 24px 20px", color: "#4A5568", fontSize: 14.5, lineHeight: 1.8 }}>{f.a}</div>}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "" });
  const [sent, setSent] = useState(false);
  const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4, padding: "13px 16px", color: "#fff", fontSize: 14.5, outline: "none", fontFamily: "'Inter', sans-serif", boxSizing: "border-box", transition: "border-color 0.2s" };
  const labelStyle: React.CSSProperties = { color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 6, display: "block" };
  if (sent) return (
    <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 8, padding: "48px 32px", textAlign: "center" }}>
      <CheckCircle size={48} style={{ color: "#C9A84C", margin: "0 auto 16px" }} />
      <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 22, marginBottom: 10 }}>Message Received</h3>
      <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>Thank you! A consultant will reach out within 1 business day to schedule your free consultation.</p>
    </div>
  );
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 8, padding: "40px 36px" }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 20, fontWeight: 600, marginBottom: 28 }}>Book a Free Consultation</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div><label style={labelStyle}>Email Address *</label><input style={inputStyle} type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div><label style={labelStyle}>Country of Residence</label><input style={inputStyle} placeholder="e.g. India, Brazil, Japan" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div><label style={labelStyle}>Tell us about your goals</label><textarea style={{ ...inputStyle, height: 100, resize: "vertical" }} placeholder="Your field of study, target industry, ideal start date..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <button onClick={() => { if (form.name && form.email) setSent(true); }} style={{ background: "#C9A84C", color: "#0A1628", padding: "14px 0", borderRadius: 4, border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          onMouseEnter={e => e.currentTarget.style.background = "#E2C47A"}
          onMouseLeave={e => e.currentTarget.style.background = "#C9A84C"}
        >Request Free Consultation <ArrowRight size={18} /></button>
      </div>
    </div>
  );
}

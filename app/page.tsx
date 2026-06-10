"use client";
import { useState, useEffect } from "react";
import {
  Menu, X, Globe, ChefHat, Briefcase, Users, CheckCircle,
  ArrowRight, Mail, Phone, MapPin, ChevronDown, Star, Shield, Clock, Award, Hotel, ConciergeBell
} from "lucide-react";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&q=80",
  chef: "https://drive.google.com/file/d/1bXmbTn6xNYffFhV3yQgjxC_9UrZcnUya/view?usp=drivesdk",
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  lobby: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  concierge: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  housekeeping: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=800&q=80",
};

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
            <ChefHat size={26} style={{ color: "#C9A84C" }} />
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
            <a href="#contact" style={{ background: "#C9A84C", color: "#0A1628", padding: "9px 22px", borderRadius: 4, fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "background 0.2s" }}
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } .two-col { grid-template-columns: 1fr !important; } .hide-mobile { display: none !important; } }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", padding: "120px 5% 80px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 60%, rgba(10,22,40,0.5) 100%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 28 }}>
            <Star size={14} style={{ color: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>J-1 Visa Hospitality Careers</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, maxWidth: 750, marginBottom: 24 }}>
            Launch Your<br /><span style={{ color: "#C9A84C" }}>Hospitality Career</span><br />in the United States
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(1rem, 2vw, 1.18rem)", maxWidth: 620, lineHeight: 1.8, marginBottom: 44 }}>
            We help international students and hospitality graduates navigate the J-1 process and explore internship and trainee opportunities at top U.S. hotels, resorts, and restaurants.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C9A84C", color: "#0A1628", padding: "15px 32px", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(201,168,76,0.35)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#E2C47A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.transform = "translateY(0)"; }}
            >Start Your Journey <ArrowRight size={18} /></a>
            <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff", padding: "15px 32px", borderRadius: 4, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
            >Explore Roles</a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
            {[
              ["800+", "Students Guided"],
              ["50K+", "Social Media Community"],
              ["10+", "Years Hospitality Experience"],
              ["2019", "Former J-1 Participant"],
            ].map(([num, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <CheckCircle size={18} style={{ color: "#C9A84C", marginTop: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 4 }}>{label}</div>
                </div>
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
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 80 }} className="two-col">
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/5" }}>
                <img src={IMAGES.chef} alt="Chef in professional kitchen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: -20, background: "#0A1628", border: "3px solid #fff", borderRadius: 8, padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} className="hide-mobile">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#C9A84C" }}>10+</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>Years Experience</div>
              </div>
            </div>
            <div>
              <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Story</span>
              <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px 0 24px" }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#0A1628", lineHeight: 1.25, marginBottom: 20 }}>
                Founded by Someone<br />Who Walked Your Path
              </h2>
              <p style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: 16, fontSize: 15.5 }}>
                <strong style={{ color: "#0A1628" }}>Kranthi</strong> knows exactly what it feels like to dream of a career in American hospitality. He came to the United States on a J-1 visa as a culinary student — navigating an unfamiliar system, a new culture, and the high-pressure world of professional kitchens entirely on his own.
              </p>
              <p style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: 16, fontSize: 15.5 }}>
                He worked his way up from extern to head chef at a respected U.S. restaurant, building a life and career he is proud of. But he never forgot how hard that first step was.
              </p>
              <p style={{ color: "#4A5568", lineHeight: 1.85, marginBottom: 32, fontSize: 15.5 }}>
                That is why he founded <strong style={{ color: "#0A1628" }}>Global J1 Careers</strong> — to be the guide he wished he had. Today, Global J1 Careers helps aspiring hospitality professionals explore J-1 opportunities in the United States by connecting them with reputable sponsors, employers, and industry resources throughout the process.
              </p>
              <div style={{ padding: "20px 24px", background: "#FDF8EE", borderLeft: "4px solid #C9A84C", borderRadius: "0 6px 6px 0" }}>
                <p style={{ color: "#0A1628", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  "I built this so no one has to figure out the J-1 process alone. If I could do it, so can you — and we will help every step of the way."
                </p>
                <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: 13, marginTop: 10, marginBottom: 0 }}>— Kranthi, Founder & Head Chef</p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: <Shield size={26} />, title: "Sponsor Connections", sub: "We match you with licensed U.S. DS-2019 sponsors", dark: true },
              { icon: <ChefHat size={26} />, title: "Hospitality Specialists", sub: "100% focused on hotel & restaurant roles", dark: false },
              { icon: <Award size={26} />, title: "Founder-Led Guidance", sub: "Advice from someone who did it himself", dark: false },
              { icon: <Clock size={26} />, title: "Processing Time", sub: "Average 2–4 months turnaround", dark: true },
            ].map((card, i) => (
              <div key={i} style={{ background: card.dark ? "#0A1628" : "#FDF8EE", padding: "28px 24px", borderRadius: 8, border: !card.dark ? "1px solid rgba(201,168,76,0.2)" : "none" }}>
                <div style={{ color: "#C9A84C", marginBottom: 14 }}>{card.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: card.dark ? "#fff" : "#0A1628", marginBottom: 6 }}>{card.title}</div>
                <div style={{ color: card.dark ? "rgba(255,255,255,0.55)" : "#4A5568", fontSize: 13.5, lineHeight: 1.6 }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES PHOTO STRIP */}
      <section style={{ background: "#0A1628", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Roles We Place</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>From back-of-house to front-of-house — every corner of hospitality.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { img: IMAGES.kitchen, title: "Culinary Arts / Kitchen", roles: "Commis Chef, Line Cook, Kitchen Steward, Pastry Assistant, Baker" },
              { img: IMAGES.dining, title: "Food & Beverage", roles: "F&B Operations, Banquet Service, Bar & Lounge Operations" },
              { img: IMAGES.housekeeping, title: "Housekeeping / Rooms", roles: "Housekeeping Attendant, Room Attendant, Laundry Attendant" },
              { img: IMAGES.lobby, title: "Front Office / Guest Services", roles: "Front Desk Agent, Guest Services, Concierge, Reservations" },
            ].map((r, i) => (
              <div key={i} style={{ position: "relative", borderRadius: 8, overflow: "hidden", aspectRatio: "3/4" }}>
                <img src={r.img} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{r.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, lineHeight: 1.5 }}>{r.roles}</div>
                </div>
                <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: 20, padding: "4px 12px" }}>
                  <span style={{ color: "#C9A84C", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>J-1 Positions</span>
                </div>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628" }}>Full-Service J-1 Placement</h2>
            <p style={{ color: "#718096", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.75, fontSize: 15.5 }}>From first consultation to your first day on the floor — we handle the entire J-1 hospitality journey.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              {
                icon: <ChefHat size={32} />,
                title: "Hospitality Job Matching",
                desc: "We align your culinary training, hotel management degree, or food & beverage experience with the right J-1 opportunities at leading hotels, resorts, and restaurant groups across the United States.",
                features: ["Resume & portfolio optimization", "Personalized role matching", "Interview preparation & coaching", "Offer guidance & negotiation support"]
              },
              {
                icon: <Briefcase size={32} />,
                title: "Visa Sponsorship Guidance",
                desc: "We connect you with licensed U.S. sponsors who issue your DS-2019 on your behalf. We manage the relationship and paperwork guidance so the process is smooth end to end.",
                features: ["Sponsor matching and selection support", "DS-2019 process guidance and walkthrough", "Embassy interview preparation", "Ongoing program compliance support"]
              },
              {
                icon: <Hotel size={32} />,
                title: "Partner Hotel Network",
                desc: "We work with a wide range of hospitality employers and help connect candidates to J-1 opportunities.",
                features: ["Hotel, resort & restaurant placements through sponsor networks", "Opportunities across luxury, city, and resort locations", "Access to fine dining and hospitality training programs", "Expanding network of employers across the U.S."]
              },
              {
                icon: <Users size={32} />,
                title: "Pre-Departure & Arrival",
                desc: "Moving to the U.S. is a big step. We prepare you for everything from housing and banking to understanding American tipping culture.",
                features: ["Housing search assistance", "SSN & banking setup", "Workplace culture briefing", "Airport & arrival guide"]
              },
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
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#0A1628", fontSize: 13.5 }}>
                      <CheckCircle size={15} style={{ color: "#C9A84C", flexShrink: 0, marginTop: 2 }} /> {f}
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
              { step: "01", icon: <Globe size={22} />, title: "Free Consultation", desc: "Discuss your hospitality background, preferred roles, and J-1 eligibility with our team." },
              { step: "02", icon: <ChefHat size={22} />, title: "Profile & Matching", desc: "We build your professional profile and match you with suitable hospitality opportunities through our sponsor network." },
              { step: "03", icon: <Briefcase size={22} />, title: "Sponsor Matching", desc: "We connect you with a licensed U.S. J-1 sponsor who issues your DS-2019 and manages your program documentation and compliance." },
              { step: "04", icon: <ConciergeBell size={22} />, title: "Start Your Role", desc: "Receive pre-departure guidance, arrival orientation, and support as you begin your J-1 hospitality program in the U.S." },
            ].map((p, i) => (
              <div key={i}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>{p.icon}</div>
                <div style={{ color: "rgba(201,168,76,0.5)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 6 }}>STEP {p.step}</div>
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
              { name: "Arjun Reddy", country: "India → New York, NY", role: "Culinary Extern, Michelin-Starred Restaurant", quote: "Kranthi understood exactly what I was going through — he had lived it. The team placed me at a restaurant in Manhattan within 6 weeks. My career changed overnight.", stars: 5 },
              { name: "Maria Santos", country: "Brazil → Orlando, FL", role: "Front Desk Supervisor, Hilton Resort", quote: "I had no idea how complex the J-1 visa process was. Global J1 Careers handled everything and connected me with the right sponsor. I am now a supervisor at a Hilton property.", stars: 5 },
              { name: "Wei Zhang", country: "China → Las Vegas, NV", role: "F&B Management Trainee, MGM Grand", quote: "The hotel connections this team has are incredible. They matched me with a sponsor and placed me at MGM Grand for my management trainee program. Best decision I ever made.", stars: 5 },
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
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
          <div>
            <span style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Get In Touch</span>
            <span style={{ display: "block", width: 60, height: 3, background: "#C9A84C", margin: "12px 0 24px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>Start Your Hospitality<br />Career in the U.S.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40, fontSize: 15.5 }}>
              Book a free 30-minute call with Kranthi's team. No commitment — just honest guidance from people who have been in your shoes. We will connect you with the right sponsor and the right job.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <Mail size={18} />, label: "Email", value: "globalj1careers@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+1 (225) 284-5556" },
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
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ChefHat size={20} style={{ color: "#C9A84C" }} />
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
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16 }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, lineHeight: 1.7, maxWidth: 800 }}>
              <strong style={{ color: "rgba(255,255,255,0.45)" }}>Disclaimer:</strong> Global J1 Careers is an independent consulting and recruitment support platform. We are not a U.S. Department of State designated sponsor and do not issue DS-2019 forms.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is a J-1 visa?", a: "The J-1 visa is a U.S. exchange program that allows international candidates to gain training and work experience in hospitality roles." },
    { q: "What hospitality roles can I get on a J-1 visa?", a: "We place students in a wide range of roles: culinary externs, pastry chefs, line cooks, front desk agents, guest services associates, food and beverage managers, event coordinators, concierge staff, and general manager trainees — at hotels, resorts, and restaurants across the U.S." },
    { q: "Do I need a culinary or hotel management degree?", a: "For most placements you need to be currently enrolled in or recently graduated from a hospitality, culinary arts, or hotel management program. Some front-of-house and management trainee roles may accept related degrees. Contact us and we will assess your eligibility." },
    { q: "How does visa sponsorship work?", a: "We do not sponsor visas ourselves — we connect you with licensed U.S. sponsors who issue your DS-2019 on your behalf. We manage the relationship, paperwork guidance, and embassy prep so the process is smooth end to end." },
    { q: "How long does the J-1 process take?", a: "We typically complete sponsor matching and placement within 2–4 months. Embassy appointment wait times in your home country can affect the overall timeline, so we recommend starting early." },
    { q: "Can I extend or change my J-1 program?", a: "Extensions or changes depend on sponsor approval, program rules, and U.S. regulations." },
    { q: "Is housing provided?", a: "Housing is not always guaranteed. Some employers or sponsors may offer guidance or assistance in finding accommodation." },
    { q: "What does the service cost?", a: "We offer a free initial consultation. Our placement fee structure is fully transparent and discussed upfront — no hidden charges. Reach out for a breakdown based on your program type and desired role." },
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
  const [form, setForm] = useState({ name: "", email: "", country: "", role: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});
    setLoading(false);
    setSent(true);
  };

  const inputStyle: React.CSSProperties = { width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4, padding: "13px 16px", color: "#fff", fontSize: 16, outline: "none", fontFamily: "'Inter', sans-serif", boxSizing: "border-box", transition: "border-color 0.2s" };
  const labelStyle: React.CSSProperties = { color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 6, display: "block" };

  if (sent) return (
    <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 8, padding: "48px 32px", textAlign: "center" }}>
      <CheckCircle size={48} style={{ color: "#C9A84C", margin: "0 auto 16px" }} />
      <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 22, marginBottom: 10 }}>Message Received!</h3>
      <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>Thank you! Kranthi's team will reach out within 1 business day to schedule your free consultation.</p>
    </div>
  );

  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 8, padding: "40px 36px" }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 20, fontWeight: 600, marginBottom: 28 }}>Book a Free Consultation</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div><label style={labelStyle}>Email Address *</label><input style={inputStyle} type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div>
          <label style={labelStyle}>Role of Interest</label>
          <select style={{ ...inputStyle, appearance: "none" }} value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}>
            <option value="" style={{ background: "#0A1628" }}>Select a role...</option>
            <option value="culinary" style={{ background: "#0A1628" }}>Culinary / Kitchen</option>
            <option value="fb" style={{ background: "#0A1628" }}>Food & Beverage</option>
            <option value="housekeeping" style={{ background: "#0A1628" }}>Housekeeping / Rooms</option>
            <option value="front-office" style={{ background: "#0A1628" }}>Front Office / Guest Services</option>
            <option value="other" style={{ background: "#0A1628" }}>Other</option>
          </select>
        </div>
        <div><label style={labelStyle}>Country of Residence</label><input style={inputStyle} placeholder="e.g. India, Brazil, Philippines" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <div><label style={labelStyle}>Tell us about your goals</label><textarea style={{ ...inputStyle, height: 90, resize: "vertical" }} placeholder="Your current studies, target city, ideal start date..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"} onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} /></div>
        <button onClick={handleSubmit} disabled={loading} style={{ background: "#C9A84C", color: "#0A1628", padding: "14px 0", borderRadius: 4, border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: loading ? 0.8 : 1 }}
          onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#E2C47A"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; }}
        >{loading ? "Sending..." : <>Request Free Consultation <ArrowRight size={18} /></>}</button>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import anuLogo from "@/assets/anu-logo.png";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About ANU",
    href: "/about",
    children: [
      { label: "Profile", href: "/about" },
      { label: "History", href: "/about#history" },
      { label: "Location", href: "/about#location" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Emblem", href: "/about#emblem" },
      { label: "ANU Song", href: "/about#song" },
    ],
  },
  {
    label: "Administration",
    href: "/administration",
    children: [
      { label: "Vice-Chancellor", href: "/administration" },
      { label: "Registrar", href: "/administration#registrar" },
      { label: "Rector", href: "/administration#rector" },
      { label: "Finance Officer", href: "/administration#finance" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Courses Offered", href: "/academics" },
      { label: "Departments", href: "/academics#departments" },
      { label: "Research Centres", href: "/academics#research" },
      { label: "Library", href: "/academics#library" },
    ],
  },
  { label: "Affiliated Colleges", href: "/affiliated-colleges" },
  { label: "Results", href: "/results" },
  { label: "ANUCDE", href: "/anucde" },
  { label: "Sports", href: "/sports" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={anuLogo} alt="ANU Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide text-anu-maroon uppercase">
                Acharya Nagarjuna University
              </h1>
              <p className="font-telugu text-lg text-anu-red">
                ఆచార్య నాగార్జున విశ్వవిద్యాలయం
              </p>
              <p className="text-xs text-muted-foreground">
                Accredited by NAAC with 'A' Grade | Nagarjuna Nagar, Guntur, A.P.
              </p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-anu-gold/20 flex items-center justify-center text-xs font-bold text-secondary-foreground">ISO</div>
              <span className="text-[10px] text-muted-foreground">9001:2015</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-anu-green/20 flex items-center justify-center text-xs font-bold text-foreground">NAAC</div>
              <span className="text-[10px] text-muted-foreground">'A' Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-anu-nav relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-center">
            <button
              className="lg:hidden p-2 text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="anu-nav-link flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={12} />}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 bg-background shadow-lg rounded-b-md min-w-[200px] py-1 z-50 border border-border">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-anu-nav border-t border-border/20">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-primary-foreground text-sm hover:bg-primary/20 border-b border-border/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Marquee */}
      <div className="bg-anu-gold/10 border-b border-border overflow-hidden py-1">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 M.Phil. Part-1/ Pre.Ph.D-2025 Exams Notification
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Advertisement for Research Project Fellowship
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Skill Training Programme for students
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Applications invited for UG/PG Admissions 2025-26
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 M.Phil. Part-1/ Pre.Ph.D-2025 Exams Notification
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Advertisement for Research Project Fellowship
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

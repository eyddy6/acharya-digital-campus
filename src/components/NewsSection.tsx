import { FileText, ExternalLink } from "lucide-react";

const newsItems = [
  { title: "M.Phil. Part-1/ Pre.Ph.D-2025 Exams Notification", date: "28 Feb 2026", tag: "Examinations" },
  { title: "Advertisement for Research Project Fellowship — University College of Pharmaceutical Sciences", date: "25 Feb 2026", tag: "Research" },
  { title: "Skill Training Programme for Students — Foundational Skills", date: "22 Feb 2026", tag: "Training" },
  { title: "Applications invited for UG/PG Admissions 2026-27", date: "20 Feb 2026", tag: "Admissions" },
  { title: "Re-valuation Application Form — Last Date Extended", date: "18 Feb 2026", tag: "Examinations" },
  { title: "Guidelines for preparation of MBA Project Report", date: "15 Feb 2026", tag: "Guidelines" },
  { title: "Workshop on NEP 2020 Implementation in Higher Education", date: "12 Feb 2026", tag: "Events" },
  { title: "Advertisement for Guest Faculty Positions in Various Departments", date: "10 Feb 2026", tag: "Recruitment" },
];

const events = [
  { title: "Annual Convocation Ceremony 2026", date: "15 Mar 2026" },
  { title: "National Science Day Celebrations", date: "28 Feb 2026" },
  { title: "Inter-University Sports Meet", date: "10 Mar 2026" },
  { title: "International Conference on AI & Data Science", date: "20 Mar 2026" },
];

const NewsSection = () => {
  return (
    <section className="py-12 bg-anu-news">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="anu-section-title">Latest News & Notifications</h2>
            <div className="space-y-3">
              {newsItems.map((item, i) => (
                <div
                  key={i}
                  className="anu-card flex items-start gap-3 p-4 cursor-pointer group"
                >
                  <FileText size={18} className="text-primary mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="anu-badge">{item.tag}</span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h2 className="anu-section-title">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="anu-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground text-center rounded-md p-2 min-w-[50px]">
                      <div className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</div>
                      <div className="text-xs">{event.date.split(" ")[1]}</div>
                    </div>
                    <p className="text-sm font-medium text-foreground">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <h2 className="anu-section-title mt-8">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Results", "Examinations", "Admissions", "Scholarships", "Library", "ANUCDE", "RTI", "NIRF"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="anu-card p-3 text-sm text-center font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

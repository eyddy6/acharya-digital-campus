import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, FlaskConical, Library } from "lucide-react";

const departments = [
  "Botany & Microbiology", "Chemistry", "Computer Science", "Commerce & Business Administration",
  "Economics", "Education", "Electronics", "English", "Geography", "Hindi", "History",
  "Law", "Mathematics", "Pharmacy", "Physics", "Political Science & Public Administration",
  "Sociology & Social Work", "Statistics", "Telugu", "Zoology & Aquaculture",
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Academics</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 flex items-center gap-2">
            <GraduationCap size={22} /> Courses Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { level: "Undergraduate Programs", items: ["B.A.", "B.Sc.", "B.Com.", "B.Tech", "B.Pharm", "BBA", "BCA", "B.Ed.", "LLB"] },
              { level: "Postgraduate Programs", items: ["M.A.", "M.Sc.", "M.Com.", "M.Tech", "M.Pharm", "MBA", "MCA", "M.Ed.", "LLM"] },
              { level: "Doctoral Programs", items: ["M.Phil.", "Ph.D.", "D.Sc.", "D.Litt."] },
            ].map((cat) => (
              <div key={cat.level} className="anu-card p-5">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> {cat.level}
                </h3>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground pl-2 border-l-2 border-primary/30">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="departments" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 flex items-center gap-2">
            <FlaskConical size={22} /> University Departments
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {departments.map((dept) => (
              <div key={dept} className="anu-card p-4 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {dept}
              </div>
            ))}
          </div>
        </section>

        <section id="library" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 flex items-center gap-2">
            <Library size={22} /> University Library
          </h2>
          <div className="anu-card p-6">
            <p className="text-foreground leading-relaxed mb-3">
              The University Library houses over 2,00,000 books, 500+ journals, and provides access to 
              e-resources through UGC-INFLIBNET. The library is fully automated and provides digital 
              library services to students and faculty.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                { label: "Books", value: "2,00,000+" },
                { label: "Journals", value: "500+" },
                { label: "E-Resources", value: "10,000+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted rounded-md">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;

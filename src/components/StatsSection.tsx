import { GraduationCap, BookOpen, Users, Building, Award, FlaskConical } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Students", value: "1,50,000+" },
  { icon: Building, label: "Affiliated Colleges", value: "400+" },
  { icon: BookOpen, label: "Courses", value: "200+" },
  { icon: Users, label: "Faculty", value: "500+" },
  { icon: FlaskConical, label: "Research Centres", value: "80+" },
  { icon: Award, label: "Years of Excellence", value: "48+" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-anu-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <stat.icon size={28} className="text-anu-gold group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-sm text-anu-footer-fg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

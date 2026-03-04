import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Building2, Users, MapPin, History, Eye, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">About Acharya Nagarjuna University</h1>

        <section id="profile" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
            <Building2 size={22} /> University Profile
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Acharya Nagarjuna University is a state university located at Nagarjuna Nagar, Guntur, Andhra Pradesh, India. 
            It was established in 1976 through Act 43 of the Andhra Pradesh State Legislature. The University is named after 
            the great Buddhist philosopher Acharya Nagarjuna, who founded a center of learning on the banks of the river Krishna centuries ago.
          </p>
          <p className="text-foreground leading-relaxed">
            The University has grown to become one of the largest affiliating universities in Andhra Pradesh with over 400 
            affiliated colleges spread across the districts of Guntur, Prakasam, and Palnadu. It offers programs in Arts, 
            Science, Commerce, Engineering, Medicine, Law, Education, and various professional courses.
          </p>
        </section>

        <section id="history" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
            <History size={22} /> History
          </h2>
          <p className="text-foreground leading-relaxed">
            The name Nagarjuna University is significant — the great Buddhist preceptor and philosopher Acharya Nagarjuna 
            established a University on the banks of river Krishna centuries ago, making it a great centre of learning that 
            attracted teachers and students from distant parts of the world. The University was established by Act 43 of 1976 
            of A.P. State Legislature and governed by Act 4 of 1991 covering 6 Universities of the State.
          </p>
        </section>

        <section id="vision" className="mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="anu-card p-6">
              <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
                <Eye size={22} /> Vision
              </h2>
              <p className="text-foreground leading-relaxed">
                To become a world-class university that fosters academic excellence, innovative research, 
                and holistic development, producing globally competent graduates who contribute to society.
              </p>
            </div>
            <div className="anu-card p-6">
              <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
                <Target size={22} /> Mission
              </h2>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Provide quality higher education accessible to all sections of society</li>
                <li>Promote research and innovation in emerging areas</li>
                <li>Foster industry-academia collaboration</li>
                <li>Develop ethical and socially responsible citizens</li>
                <li>Preserve and promote cultural heritage</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="location" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
            <MapPin size={22} /> Location
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            The University campus is spread over 293 acres at Nagarjuna Nagar, located 12 km from Guntur city 
            and 35 km from Vijayawada. The campus is well-connected by road and rail, with Guntur Railway Station 
            being the nearest railhead.
          </p>
          <div className="rounded-md overflow-hidden shadow-md">
            <iframe
              title="ANU Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.2!2d80.5!3d16.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzAwLjAiTiA4MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-3 flex items-center gap-2">
            <BookOpen size={22} /> Courses Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Under Graduate", courses: ["B.A.", "B.Sc.", "B.Com.", "BBA", "B.Tech", "B.Pharm", "BCA", "B.Ed."] },
              { title: "Post Graduate", courses: ["M.A.", "M.Sc.", "M.Com.", "MBA", "M.Tech", "M.Pharm", "MCA", "M.Ed."] },
              { title: "Research", courses: ["M.Phil.", "Ph.D.", "D.Sc.", "D.Litt.", "Post Doctoral"] },
            ].map((cat) => (
              <div key={cat.title} className="anu-card p-5">
                <h3 className="font-bold text-foreground mb-3">{cat.title}</h3>
                <ul className="space-y-1">
                  {cat.courses.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Users size={12} className="text-primary" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;

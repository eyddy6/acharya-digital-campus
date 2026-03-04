import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vcPhoto from "@/assets/vc-photo.jpg";

const officers = [
  {
    id: "vc",
    name: "Prof. Kancharla Gangadhara Rao",
    title: "Vice-Chancellor (I/c)",
    photo: vcPhoto,
    description:
      "It is a matter of privilege to be steering Acharya Nagarjuna University with the academic impulse to establish everything in Truth - \"Satye Sarvam Pratishitam.\" An eminent academician and researcher dedicated to illuminating students and scholars.",
  },
  {
    id: "registrar",
    name: "Prof. K. Venkata Rao",
    title: "Registrar",
    photo: null,
    description:
      "The Registrar is the chief administrative officer of the University, responsible for overseeing all administrative and academic operations.",
  },
  {
    id: "rector",
    name: "Prof. S. Ramakrishna",
    title: "Rector",
    photo: null,
    description:
      "The Rector assists the Vice-Chancellor in the overall academic and administrative governance of the University.",
  },
  {
    id: "finance",
    name: "Sri M. Narasimha Rao",
    title: "Finance Officer",
    photo: null,
    description:
      "The Finance Officer manages the financial affairs of the University including budgets, accounts, and financial planning.",
  },
];

const Administration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Administration</h1>
        <div className="space-y-8">
          {officers.map((officer) => (
            <div key={officer.id} id={officer.id} className="anu-card p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-36 h-44 bg-muted rounded-md overflow-hidden shrink-0 border-2 border-anu-gold">
                  {officer.photo ? (
                    <img src={officer.photo} alt={officer.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      Photo
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-anu-maroon">{officer.name}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{officer.title}</p>
                  <p className="text-foreground leading-relaxed">{officer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Administration;

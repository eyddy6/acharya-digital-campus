import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="anu-card p-6 space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Acharya Nagarjuna University, Nagarjuna Nagar,
                    Guntur - 522510, Andhra Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">0863-2293299, 2293356</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">registrar@anu.ac.in</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-foreground">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <h2 className="anu-section-title mt-8">Important Contact Numbers</h2>
            <div className="anu-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-primary text-primary-foreground">
                  <tr><th className="p-3 text-left">Department</th><th className="p-3 text-left">Phone</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Vice-Chancellor Office", "0863-2293208"],
                    ["Registrar Office", "0863-2293299"],
                    ["Controller of Examinations", "0863-2293150"],
                    ["Admissions", "0863-2293120"],
                    ["ANUCDE", "0863-2293208"],
                    ["Library", "0863-2293283"],
                  ].map(([dept, phone], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="p-3 text-foreground">{dept}</td>
                      <td className="p-3 text-muted-foreground">{phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="anu-card p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input className="w-full border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input type="email" className="w-full border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input className="w-full border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground" placeholder="Subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea rows={5} className="w-full border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground" placeholder="Your Message" />
                </div>
                <button type="button" className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

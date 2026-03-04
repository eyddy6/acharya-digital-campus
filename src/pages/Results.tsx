import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Examination Results</h1>

        {/* Search */}
        <div className="anu-card p-6 mb-8">
          <h2 className="font-bold text-foreground mb-4">Search Results</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground flex-1">
              <option>Select Examination</option>
              <option>B.A. 1st Year</option>
              <option>B.Sc. 2nd Year</option>
              <option>M.A. Final Year</option>
              <option>MBA 1st Semester</option>
            </select>
            <input
              type="text"
              placeholder="Enter Hall Ticket Number"
              className="border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground flex-1"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Search size={16} /> Search
            </button>
          </div>
        </div>

        {/* Recent Results */}
        <h2 className="anu-section-title">Recent Results</h2>
        <div className="space-y-3">
          {[
            "B.A./B.Sc./B.Com. I, III, V Semester Results — Feb 2026",
            "M.A./M.Sc./M.Com. I, III Semester Results — Feb 2026",
            "MBA/MCA II Semester Results — Jan 2026",
            "B.Tech III Year I Semester Results — Jan 2026",
            "B.Ed. I Year Results — Dec 2025",
            "B.Pharm IV Year II Semester Results — Dec 2025",
            "LLB III Year Results — Nov 2025",
          ].map((result, i) => (
            <div key={i} className="anu-card p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 border border-transparent transition-colors">
              <span className="text-sm text-foreground">{result}</span>
              <span className="anu-badge">View</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;

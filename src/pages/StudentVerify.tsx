import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, GraduationCap, User, Calendar, BookOpen, Languages } from "lucide-react";

interface StudentData {
  name: string;
  fatherName: string;
  hallTicketNumber: string;
  degree: string;
  specialization: string;
  passedOut: string;
  percentage: number;
  studyPeriod: string;
  language: string;
  status: string;
}

const MOCK_STUDENTS: Record<string, StudentData> = {
  A19RG89741: {
    name: "Salla Bharath Kumar",
    fatherName: "Salla Prasad Rao",
    hallTicketNumber: "A19RG89741",
    degree: "Bachelor of Computer Science (B.Sc)",
    specialization: "Computer Science",
    passedOut: "May 2012",
    percentage: 81,
    studyPeriod: "2009 - 2012",
    language: "English",
    status: "Passed",
  },
};

const StudentVerify = () => {
  const [hallTicket, setHallTicket] = useState("");
  const [result, setResult] = useState<StudentData | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const trimmed = hallTicket.trim().toUpperCase();
    if (!trimmed) {
      setError("Please enter a hall ticket number");
      return;
    }
    setSearched(true);
    setError("");
    const found = MOCK_STUDENTS[trimmed] || null;
    setResult(found);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Student Verification</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Verify student credentials by entering the hall ticket number below.
        </p>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="anu-card p-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Hall Ticket Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hallTicket}
                onChange={(e) => setHallTicket(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="e.g., A19RG89741"
                className="flex-1 border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground uppercase"
              />
              <button
                onClick={handleSearch}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Search size={16} />
                Verify
              </button>
            </div>
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </div>
        </div>

        {/* Results */}
        {searched && result && (
          <div className="max-w-2xl mx-auto">
            <div className="anu-card p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <GraduationCap size={18} />
                  Verified - {result.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <User size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Student Name</p>
                    <p className="font-semibold text-foreground">{result.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Father's Name</p>
                    <p className="font-semibold text-foreground">{result.fatherName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Degree</p>
                    <p className="font-semibold text-foreground">{result.degree}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Specialization</p>
                    <p className="font-semibold text-foreground">{result.specialization}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Study Period</p>
                    <p className="font-semibold text-foreground">{result.studyPeriod}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Passed Out</p>
                    <p className="font-semibold text-foreground">{result.passedOut}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Percentage</p>
                    <p className="font-semibold text-foreground">{result.percentage}%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Medium of Instruction</p>
                    <p className="font-semibold text-foreground">{result.language}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">
                  Hall Ticket: {result.hallTicketNumber} | This is a digitally verified record from Acharya Nagarjuna University.
                </p>
              </div>
            </div>
          </div>
        )}

        {searched && !result && (
          <div className="max-w-xl mx-auto text-center">
            <div className="anu-card p-8">
              <p className="text-destructive font-medium">No student record found for this hall ticket number.</p>
              <p className="text-sm text-muted-foreground mt-2">Please check the number and try again.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StudentVerify;

import vcPhoto from "@/assets/vc-photo.jpg";

const VCMessage = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="anu-section-title">Vice-Chancellor's Message</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 flex flex-col items-center">
            <img
              src={vcPhoto}
              alt="Vice-Chancellor"
              className="w-48 h-56 object-cover rounded-md shadow-md border-2 border-anu-gold"
            />
            <h3 className="mt-3 font-bold text-foreground text-center">Prof. Raja Sekhar P.</h3>
            <p className="text-sm text-muted-foreground text-center">Vice-Chancellor</p>
          </div>
          <div className="md:w-3/4">
            <p className="text-foreground leading-relaxed mb-4">
              It is a matter of great pride and privilege to be part of an esteemed organization — Acharya Nagarjuna University — 
              that prepares today's students to meet the challenges around the globe. I have seen the way Acharya Nagarjuna University 
              has become a pioneer in providing superior quality education in India.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The University was established by Act 43 of 1976 of A.P. State Legislature and has since grown into one of the largest 
              universities in Andhra Pradesh, with over 400 affiliated colleges and numerous departments offering undergraduate, 
              postgraduate, and doctoral programs across various disciplines.
            </p>
            <p className="text-foreground leading-relaxed">
              Our mission is to provide quality education through innovative teaching, research, and community engagement. 
              We are committed to fostering an environment that nurtures intellectual growth, creativity, and ethical values 
              in our students, preparing them to become responsible citizens and future leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCMessage;

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
            <h3 className="mt-3 font-bold text-foreground text-center">Prof. Kancharla Gangadhara Rao</h3>
            <p className="text-sm text-muted-foreground text-center">Vice-Chancellor (I/c)</p>
          </div>
          <div className="md:w-3/4">
            <p className="text-foreground leading-relaxed mb-4">
              It is a matter of privilege to be steering Acharya Nagarjuna University with the academic impulse to establish everything in Truth - "Satye Sarvam Pratishitam." The word Truth is simple yet sublime. Finding and practicing truth is difficult. Truth is relative so it is illusive. But Shankaracharya avers "Aham Bhramam" that is truth is inherent in you.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Franz Kafka, the German philosophical writer, helps to identify the inherent truth is nothing but objective human conscience. Education is the best means to recognize the truth and which is our conscience.
            </p>
            <p className="text-foreground leading-relaxed">
              The object of Acharya Nagarjuna University is to illuminate the students and scholars to realize the truth in them to be conscious people who can perceive truth in the world around and build a society where "everything is established in truth."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCMessage;

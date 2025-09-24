import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScheduleCard from "@/components/ScheduleCard";
import Footer from "@/components/Footer";
import { scheduleData } from "@/data/scheduleData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <HeroSection />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {scheduleData.map((daySchedule, index) => (
            <ScheduleCard
              key={index}
              day={daySchedule.day}
              courses={daySchedule.courses}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

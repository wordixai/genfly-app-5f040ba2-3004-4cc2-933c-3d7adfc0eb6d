import Header from "@/components/Header";
import UserDashboard from "@/components/UserDashboard";
import ReferralBanner from "@/components/ReferralBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Header />
      <div className="container mx-auto">
        <UserDashboard />
        <div className="p-6">
          <ReferralBanner />
        </div>
      </div>
    </div>
  );
};

export default Index;
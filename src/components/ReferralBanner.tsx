import { Button } from "./ui/button";

const ReferralBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-lg p-6 flex items-center justify-between">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-1">邀请好友</h3>
        <p className="text-white text-2xl font-bold mb-2">赚取丰厚佣金</p>
        <div className="bg-black bg-opacity-20 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
          10<span className="text-sm">%</span>
        </div>
        <p className="text-white text-sm mt-2">立刻赚钱！佣金金额返现，可提现或用于充值</p>
        <Button className="mt-4 bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-30 text-white">
          立即邀请
        </Button>
      </div>
      <div className="hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=300&h=300" 
          alt="Retro phone" 
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default ReferralBanner;
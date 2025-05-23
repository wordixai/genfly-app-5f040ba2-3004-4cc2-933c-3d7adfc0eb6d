import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const AccountBalance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-[#1a1a1a] border-none text-white">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">账户余额</span>
            <span className="text-xl">¥ 0.00</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1a1a1a] border-none text-white">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">账户余额</span>
            <span className="text-xl">¥ 461.55</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1a1a1a] border-none text-white col-span-1 md:col-span-2">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">我的钱包</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">¥ 461.55</span>
              <div className="bg-gray-700 rounded-md p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#374151" />
                  <path d="M6 8H18V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="white" />
                  <path d="M8 5L16 5L16 8L8 8L8 5Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="green" className="px-8">充值</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountBalance;
import { Bell, Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

const UserDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-[#111] text-white min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-[#0e3e35] rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80" />
              <AvatarFallback>MX</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Halo, Matrix</h2>
              <p className="text-gray-300">我的订阅</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Rocket 500GB</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-300">到期时间</p>
              <p>永久有效</p>
            </div>
            <div>
              <p className="text-gray-300">流量重置时间</p>
              <p>无需重置</p>
            </div>
            <div>
              <p className="text-gray-300">剩余可用流量</p>
              <p>500 GB</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-[#1a7cb1] text-white border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#3b82f6" />
                  <path d="M12 6L20 14H4L12 6Z" fill="white" />
                  <path d="M4 14H20V18H4V14Z" fill="white" />
                </svg>
              </div>
              <p className="text-center">Windows 客户端</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#8e44ad] text-white border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#9333ea" />
                  <path d="M12 6C15.866 6 19 9.13401 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 9.13401 8.13401 6 12 6Z" fill="white" />
                </svg>
              </div>
              <p className="text-center">iOS 客户端</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#27ae60] text-white border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#10b981" />
                  <path d="M6 8H18V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="white" />
                  <path d="M8 5L16 5L16 8L8 8L8 5Z" fill="white" />
                </svg>
              </div>
              <p className="text-center">Android 客户端</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#7f8c8d] text-white border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#64748b" />
                  <path d="M12 6C15.866 6 19 9.13401 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 9.13401 8.13401 6 12 6Z" fill="white" />
                  <path d="M12 9L15 13H9L12 9Z" fill="#64748b" />
                </svg>
              </div>
              <p className="text-center">MacOS 客户端</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">订阅链接</h3>
          <div className="flex items-center gap-2 mb-4">
            <Input 
              value="https://v2b.r8d.pro/uuuuu/ppppp/tttt/232?token=c14f9272l" 
              readOnly 
              className="bg-[#222] border-[#333] text-gray-300"
            />
            <Button variant="ghost" className="p-2 bg-[#222] hover:bg-[#333]">
              <Copy size={18} />
            </Button>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">快速导入到第三方客户端</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Button key={i} variant="ghost" className="p-2 bg-[#222] hover:bg-[#333]">
                  <div className="w-6 h-6 bg-gray-600 rounded-md"></div>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <div className="text-center">
              <div className="bg-white p-2 rounded-md w-24 h-24 mx-auto mb-2">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com" alt="QR Code" className="w-full h-full" />
              </div>
              <p className="text-xs text-gray-400">扫描二维码导入订阅</p>
              <p className="text-xs text-gray-400">Shadowrocket / Clash 等客户端</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="w-full md:w-80 space-y-6">
        <Card className="bg-[#1a1a1a] border-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">重要通知</h3>
              <Bell size={18} />
            </div>
            
            <div className="mt-4">
              <div className="bg-gradient-to-b from-pink-500 to-red-500 rounded-lg p-4 text-center">
                <div className="text-pink-200 font-bold">限时特惠</div>
                <div className="text-2xl font-bold mt-2">-594:-58:-54</div>
                <div className="text-4xl font-bold mt-2">7.8 折</div>
                <div className="mt-2 text-white">EveryOne 收下这份礼物吧！</div>
                <Button className="mt-4 bg-white text-pink-500 hover:bg-gray-100">点击领券下单</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1a1a1a] border-none">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#222] p-1 rounded">
                <Bell size={16} />
              </div>
              <span className="font-medium">iOS 须知</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">近期苹果AppStore修改登陆流程，大量不行...</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1a1a1a] border-none">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-6xl font-bold flex justify-center">
                <span>20</span>
                <span className="text-red-500 border-2 border-red-500 px-2">25</span>
              </div>
              <p className="mt-2">祝全站用户新年快乐</p>
              <p className="text-sm text-gray-400 mt-1">蛇年到，祝新年快乐！事业发达，财运滚滚...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
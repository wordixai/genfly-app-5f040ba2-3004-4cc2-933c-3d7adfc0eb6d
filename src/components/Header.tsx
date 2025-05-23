import { Bell, ChevronDown, Menu, Package, Search, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-[#111] text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-emerald-400">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 8L12 14L20 8L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              <path d="M4 14L12 20L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold">AirRocket</span>
        </Link>
        
        <Button variant="ghost" className="hidden md:flex items-center space-x-1 bg-[#1a1a1a] hover:bg-[#222]">
          <Package size={18} />
          <span>我的油板</span>
        </Button>
        
        <Button variant="ghost" className="hidden md:flex items-center space-x-1 bg-[#1a1a1a] hover:bg-[#222]">
          <Package size={18} />
          <span>购买套餐</span>
        </Button>
        
        <Button variant="ghost" className="hidden md:flex items-center space-x-1 bg-[#1a1a1a] hover:bg-[#222]">
          <Search size={18} />
          <span>我的邀请</span>
        </Button>
        
        <Button variant="ghost" className="hidden md:flex items-center space-x-1 bg-[#1a1a1a] hover:bg-[#222]">
          <Settings size={18} />
          <span>账号设置</span>
        </Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="hidden md:flex items-center space-x-1">
          <Menu size={18} />
          <span>全部菜单</span>
        </Button>
        
        <Button variant="ghost" className="hidden md:flex items-center space-x-1">
          <Package size={18} />
          <span>礼品卡兑换</span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="p-2">
            <Bell size={18} />
          </Button>
          <Button variant="ghost" className="p-2">
            <User size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Bell, ChevronDown, Library } from "lucide-react";
import { cn } from "@/src/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e7eb] dark:border-gray-800 px-4 md:px-10 py-4">
      <div className="flex items-center justify-between mx-auto max-w-[1280px]">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-12 rounded-2xl bg-primary text-white shadow-sm">
            <Library className="size-7" />
          </div>
          <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">Knowledge Hub</h2>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-primary text-base font-semibold" href="#">Trang chủ</a>
          <a className="text-[#617289] dark:text-gray-400 hover:text-primary text-base font-medium transition-colors" href="#">Danh mục</a>
          <a className="text-[#617289] dark:text-gray-400 hover:text-primary text-base font-medium transition-colors" href="#">Tài liệu của tôi</a>
          <a className="text-[#617289] dark:text-gray-400 hover:text-primary text-base font-medium transition-colors" href="#">Trợ giúp</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <button className="flex items-center justify-center size-11 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#617289] dark:text-gray-400 transition-colors relative">
            <Bell className="size-6" />
            <span className="absolute top-2.5 right-2.5 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
          <div className="h-10 w-[1px] bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
          <button className="flex items-center gap-3 group cursor-pointer">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-11 border-2 border-transparent group-hover:border-primary transition-all shadow-sm" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSNSl_DmwBNu7Nf68l18KCS3nhCMnxBttPxEjwwXclhLql7PI0WtdOGwT6ccODx3jRDa5UOYM7-67sfmdLMpTKvUWDicsd3Yfv2yMQYcwhxYMxwIt-Rpx8d5ISDRpBLUGdjUMQIRRME_B8nLjFjMv-wAksdcvTF9_6rz5zLlOR8YvPx7uzqmma9VbK8WZVosVq2Whm2kF2KUy-6ue00lvLEOSHR0hIFkb5N2FoniRD1_Oy5YIfZ560GsgK6yYXq8qEP1ViOmgjzkHM")' }}
            />
            <span className="hidden lg:block text-base font-semibold text-[#111418] dark:text-white">Nguyễn Văn A</span>
            <ChevronDown className="size-5 text-gray-400 hidden lg:block" />
          </button>
        </div>
      </div>
    </header>
  );
}

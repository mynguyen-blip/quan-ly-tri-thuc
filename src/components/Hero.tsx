import { Search } from "lucide-react";
import { motion } from "motion/react";

const suggestions = [
  "Quy trình nghỉ phép",
  "Báo cáo tài chính Q3",
  "Onboarding nhân viên mới"
];

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 pb-16 pt-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex flex-col items-center text-center gap-10 max-w-[1000px]"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-[#111418] dark:text-white text-4xl font-extrabold tracking-tight leading-tight md:text-[3.5rem]">
            Xin chào, bạn cần tìm thông tin gì?
          </h1>
          <p className="text-[#617289] dark:text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            Tra cứu quy trình, tài liệu và hồ sơ nhân sự nhanh chóng trong một nền tảng tập trung
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="w-full max-w-[720px] relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary">
            <Search className="size-8" />
          </div>
          <input 
            className="block w-full pl-16 pr-36 py-5 text-xl text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full shadow-medium focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none" 
            placeholder="Tìm kiếm chính sách, KPI, hợp đồng..." 
            type="text"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <button className="bg-primary hover:bg-blue-700 text-white text-lg font-bold rounded-full px-8 py-3 transition-colors shadow-md">
              Tìm kiếm
            </button>
          </div>
        </div>

        {/* Smart Suggestions / Chips */}
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <span className="text-base text-gray-500 dark:text-gray-400 font-bold mr-2 uppercase tracking-wide">Gợi ý:</span>
          {suggestions.map((suggestion, index) => (
            <motion.button 
              key={suggestion}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-primary-light dark:hover:bg-primary/20 hover:text-primary rounded-full text-base font-medium text-gray-600 dark:text-gray-300 transition-colors border border-transparent hover:border-primary/20 shadow-sm"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

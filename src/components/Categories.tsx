import { Users, TrendingUp, Terminal, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const categories = [
  {
    title: "Nhân sự (HR)",
    description: "Quy định, Phúc lợi, Nghỉ phép, Đào tạo nội bộ & Onboarding",
    icon: Users,
    color: "bg-blue-600",
    gradient: "from-blue-100",
    hoverBorder: "hover:border-primary/30",
    textColor: "text-primary",
    hoverTextColor: "group-hover:text-primary"
  },
  {
    title: "Kinh doanh (Sales)",
    description: "KPI, Dữ liệu khách hàng, Báo cáo doanh số và CRM Hub",
    icon: TrendingUp,
    color: "bg-green-600",
    gradient: "from-green-100",
    hoverBorder: "hover:border-green-500/30",
    textColor: "text-green-600",
    hoverTextColor: "group-hover:text-green-700"
  },
  {
    title: "Công nghệ (IT)",
    description: "Hướng dẫn cài đặt, Ticket hỗ trợ, Bảo mật hệ thống",
    icon: Terminal,
    color: "bg-purple-600",
    gradient: "from-purple-100",
    hoverBorder: "hover:border-purple-500/30",
    textColor: "text-purple-600",
    hoverTextColor: "group-hover:text-purple-700"
  }
];

export default function Categories() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111418] dark:text-white">Danh mục chính</h2>
        <a className="text-primary text-base font-bold hover:underline flex items-center gap-1" href="#">
          Xem tất cả <ExternalLink className="size-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={cn(
              "group bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-medium transition-all cursor-pointer relative overflow-hidden flex flex-col items-center text-center",
              cat.hoverBorder
            )}
          >
            <div className={cn("absolute top-0 right-0 w-40 h-40 bg-gradient-to-br to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none opacity-50", cat.gradient)}></div>
            <div className={cn("size-24 rounded-[28px] text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform", cat.color)}>
              <cat.icon className="size-12" />
            </div>
            <div>
              <h3 className={cn("text-2xl font-bold text-gray-900 dark:text-white transition-colors", cat.hoverTextColor)}>{cat.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base mt-3 leading-relaxed">{cat.description}</p>
            </div>
            <div className={cn("mt-8 flex items-center text-lg font-bold", cat.textColor)}>
              <span>Truy cập</span>
              <ArrowRight className="size-5 ml-2 transition-transform group-hover:translate-x-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

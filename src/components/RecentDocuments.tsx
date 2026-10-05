import { History, LayoutGrid, List, FileText, Table, MoreVertical, ArrowDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const documents = [
  {
    id: 1,
    name: "Chính sách Bảo mật thông tin 2023.pdf",
    type: "PDF",
    size: "2.4 MB",
    dept: "IT Dept",
    deptColor: "bg-purple-100 text-purple-800",
    updated: "Vừa xong",
    author: "Trần B",
    authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzk3NB8YDOkjrl5nPl-tzAiT3k-XA8FouiIkYu2rhvCcW38B576tHvUt3fFWmD1FDQqwqSYbaMpC0oKg286KZ4rAGjuELpgj_KlizIkB36sYxqj7n2p7pbodY02K1nWi4oZ5l-veQpvYHtXPQgLKUW_tDLcwZZWJPBjimJaL5DRvziMt1YA4Sa6HZ_5lHvbquy-eFpW3FvijE0wiInIF8ZNdPIjfkMbNvGP2Ob2zGZpFjlFDgJOMMktrBctJ37ZRykMBpqCNaRqxlD",
    icon: FileText,
    iconColor: "bg-red-100 text-red-600"
  },
  {
    id: 2,
    name: "Mẫu hợp đồng lao động mới.docx",
    type: "DOCX",
    size: "156 KB",
    dept: "HR Dept",
    deptColor: "bg-blue-100 text-blue-800",
    updated: "2 giờ trước",
    author: "Lê Thị C",
    authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0tx7rGx4iciSkJcvilgz1vdbeiCeZSxeoxSFa0UKQiFdIFKc99uiuLZA7ZzKLeni43Dl7U1aJlQX0BZlnkHDLafptzAS915kaBLXrzZqhoD6V7VhUFefIibKtXjMj1l759LJykvfKCdPyHA3nfHhKyO9jphsA4J9OO8V7J814I8yrJhj-I9YwG9IONIihsO-QrsKymKQXEuimYFtXYVWKVyZOIsJMe1DtR3Gr4N1_8JhuNnSqZ0rCCxCOS_CBRlhOtju91DU9NdKS",
    icon: FileText,
    iconColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    name: "Báo cáo doanh số Tháng 10.xlsx",
    type: "XLSX",
    size: "1.2 MB",
    dept: "Sales",
    deptColor: "bg-green-100 text-green-800",
    updated: "Hôm qua",
    author: "Nguyễn Văn A",
    authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdt7BB-d9n4g6cjOv-CaJ4adca2A-TsMZarXg6nxXMRTDGhug5s4zWD727eMANJNfdplaMyOIav8zv-9sZQCGxj2N43dW6h3rI8918S0gZ5CcaVbgft1ITf72Ea7EioPSS0INQH9wkTd8QTFtOhjmayhO8bzWIjzRLKDazxR9qJ1LYtgt9UbWrahDuTD_84Sg8odblk-fJOV-PWGmDu1PwIRBzYQ7gtvOVUGjDAvpPAMrbsTtt9zgh7SkFd9ZkFRO5C5OzLDXjt9Hb",
    icon: Table,
    iconColor: "bg-green-100 text-green-600"
  }
];

export default function RecentDocuments() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <History className="text-primary size-8" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111418] dark:text-white">Tài liệu gần đây</h2>
        </div>
        <div className="flex gap-3">
          <button className="size-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <LayoutGrid className="size-6" />
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-primary/20 bg-primary-light dark:bg-primary/20 text-primary transition-all">
            <List className="size-6" />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 text-sm uppercase font-bold text-gray-500 dark:text-gray-400 tracking-wider">
              <tr>
                <th className="px-8 py-5 w-1/2" scope="col">Tên tài liệu</th>
                <th className="px-8 py-5" scope="col">Phòng ban</th>
                <th className="px-8 py-5" scope="col">Cập nhật cuối</th>
                <th className="px-8 py-5" scope="col">Người sửa</th>
                <th className="px-8 py-5 text-right" scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-blue-50/50 dark:hover:bg-primary/5 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn("size-12 rounded-xl flex items-center justify-center shrink-0", doc.iconColor)}>
                        <doc.icon className="size-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white group-hover:text-primary cursor-pointer text-lg leading-tight">{doc.name}</p>
                        <p className="text-sm text-gray-400 mt-1">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn("inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold", doc.deptColor)}>
                      {doc.dept}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-base">
                    {doc.updated}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-center bg-no-repeat bg-cover rounded-full size-8 shadow-sm" 
                        style={{ backgroundImage: `url("${doc.authorImg}")` }}
                      />
                      <span className="text-base font-medium">{doc.author}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                      <MoreVertical className="size-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30 flex justify-center">
          <button className="text-base font-bold text-primary hover:text-blue-700 transition-colors flex items-center gap-2">
            Xem tất cả tài liệu <ArrowDown className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

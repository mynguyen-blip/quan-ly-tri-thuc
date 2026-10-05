export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-base text-gray-500 dark:text-gray-400 font-medium">© 2024 Knowledge Hub System. All rights reserved.</p>
        <div className="flex gap-10">
          <a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary font-medium transition-colors" href="#">Điều khoản</a>
          <a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary font-medium transition-colors" href="#">Bảo mật</a>
          <a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary font-medium transition-colors" href="#">Liên hệ IT</a>
        </div>
      </div>
    </footer>
  );
}

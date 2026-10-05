/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import RecentDocuments from "./components/RecentDocuments";
import Footer from "./components/Footer";

// Wait, I named the file Categories.tsx but imported it as categories. 
// Also I should check the path.

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full">
        <Hero />
        
        <div className="w-full max-w-[1280px] px-4 md:px-10 py-12 flex flex-col gap-16">
          <Categories />
          <RecentDocuments />
        </div>
      </main>

      <Footer />
    </div>
  );
}


// app/page.js

import ContrastChecker from './components/ContrastChecker.js';
import About from './components/About.js';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C1C1C] text-[#ECE6E6] text-center relative">
      <h1 className="text-4xl font-bold mb-[30px] mt-10">
        Coloreto
      </h1>

      <About/>

      <ContrastChecker />
    </div>
  );
}

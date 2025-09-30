import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-pink to-orange flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col items-center gap-8">
        <header className="w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink mb-2 drop-shadow-lg">Creative Studio</h1>
          <p className="text-lg sm:text-xl text-orange font-medium">Professional & Modern Web Experiences</p>
        </header>
        <section className="w-full flex flex-col items-center gap-6">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={30}
            className="mb-2"
            priority
          />
          <div className="text-center text-pink-dark text-base sm:text-lg">
            Welcome to your new creative website! <br />
            Designed with a vibrant pink & orange palette, fully mobile responsive.
          </div>
        </section>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-light/80 rounded-xl p-4 shadow-md flex flex-col items-center">
            <h2 className="text-xl font-bold text-pink mb-2">Professional Design</h2>
            <p className="text-pink-dark">Modern layouts, beautiful colors, and creative visuals for your brand.</p>
          </div>
          <div className="bg-orange-light/80 rounded-xl p-4 shadow-md flex flex-col items-center">
            <h2 className="text-xl font-bold text-orange mb-2">Mobile Friendly</h2>
            <p className="text-orange-dark">Fully responsive and optimized for all devices.</p>
          </div>
        </section>
        <footer className="w-full text-center text-xs text-orange-dark mt-8">
          &copy; {new Date().getFullYear()} Creative Studio. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

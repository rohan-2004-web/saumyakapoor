export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-pink to-orange flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink mb-4">Our Services</h1>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li className="bg-pink-light/80 rounded-xl p-4 shadow-md text-pink-dark">Web Design</li>
          <li className="bg-orange-light/80 rounded-xl p-4 shadow-md text-orange-dark">Branding</li>
          <li className="bg-pink-light/80 rounded-xl p-4 shadow-md text-pink-dark">SEO Optimization</li>
          <li className="bg-orange-light/80 rounded-xl p-4 shadow-md text-orange-dark">Consulting</li>
        </ul>
      </main>
    </div>
  );
}

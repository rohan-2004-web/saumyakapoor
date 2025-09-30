export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-pink to-orange flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink mb-4">About Us</h1>
        <p className="text-lg text-pink-dark text-center">We are a creative studio passionate about building beautiful, modern, and mobile-friendly web experiences. Our team blends design and technology to help brands stand out online.</p>
      </main>
    </div>
  );
}

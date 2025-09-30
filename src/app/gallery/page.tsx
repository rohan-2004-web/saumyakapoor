export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-pink to-orange flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink mb-4">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-pink-light rounded-lg h-32"></div>
          <div className="bg-orange-light rounded-lg h-32"></div>
          <div className="bg-pink-light rounded-lg h-32"></div>
          <div className="bg-orange-light rounded-lg h-32"></div>
          <div className="bg-pink-light rounded-lg h-32"></div>
          <div className="bg-orange-light rounded-lg h-32"></div>
        </div>
      </main>
    </div>
  );
}

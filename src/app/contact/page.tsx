export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-pink to-orange flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink mb-4">Contact Us</h1>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded-lg border border-pink-light focus:outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg border border-orange-light focus:outline-none" />
          <textarea placeholder="Message" className="p-3 rounded-lg border border-pink-light focus:outline-none" rows={4} />
          <button type="submit" className="bg-pink text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-orange transition">Send</button>
        </form>
      </main>
    </div>
  );
}

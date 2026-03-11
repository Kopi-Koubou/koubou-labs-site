export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6">
      <div className="max-w-[640px] text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 animate-fade-in-up">
          Koubou Labs
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-stone-500 animate-fade-in-up-delayed">
          We build products people actually use.
        </p>
        <p className="mt-4 text-base md:text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delayed">
          A studio crafting thoughtful software at the intersection of design
          and technology.
        </p>
      </div>
      <div className="absolute bottom-8 animate-fade-in-up-delayed">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-stone-300"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

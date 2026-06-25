export function ParticlesField({ density = 30 }: { density?: number }) {
  const particles = Array.from({ length: density });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dur = Math.random() * 6 + 4;
        const delay = Math.random() * 5;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/60 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
              boxShadow: "0 0 10px currentColor",
            }}
          />
        );
      })}
    </div>
  );
}

import type { CSSProperties } from "react";

type AshStyle = CSSProperties & {
  "--ash-x": string;
  "--ash-drift": string;
  "--ash-size": string;
  "--ash-duration": string;
  "--ash-delay": string;
  "--ash-opacity": string;
  "--ash-tone": string;
  "--ash-blur": string;
  "--ash-stretch": string;
};

const ashTones = [
  "rgba(196, 190, 179, 0.98)",
  "rgba(158, 153, 145, 0.98)",
  "rgba(218, 210, 196, 0.96)",
  "rgba(177, 161, 148, 0.98)",
];

const ashParticles: AshStyle[] = Array.from({ length: 28 }, (_, index) => {
  const seed = (index * 47 + 19) % 101;

  return {
    "--ash-x": `${(index * 37 + 11) % 100}%`,
    "--ash-drift": `${(seed % 2 === 0 ? 1 : -1) * (18 + (seed % 42))}px`,
    "--ash-size": `${3 + (seed % 5) * 0.65}px`,
    "--ash-duration": `${26 + (seed % 19)}s`,
    "--ash-delay": `${-1 * ((index * 13) % 43)}s`,
    "--ash-opacity": `${0.55 + (seed % 21) / 100}`,
    "--ash-tone": ashTones[seed % ashTones.length],
    "--ash-blur": `${seed % 7 === 0 ? 0.35 : 0}px`,
    "--ash-stretch": `${1.2 + (seed % 7) / 5}`,
  };
});

export default function FloatingAsh() {
  return (
    <div className="floating-ash" aria-hidden="true">
      {ashParticles.map((style, index) => (
        <span
          className={`ash-particle ${index % 6 === 0 ? "ash-particle--rising" : ""}`}
          style={style}
          key={index}
        />
      ))}
    </div>
  );
}

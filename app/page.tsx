"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

const blackExodusTracks = [
  {
    title: "Alef: The Fall Of Amon Ra",
    description:
      "The first crack in the divine order. A forgotten god falls, leaving only ash and silence.",
  },
  {
    title: "Bet: LevitiKuss",
    description:
      "A ritual beyond scripture. Sacred names twisted into forbidden invocation.",
  },
  {
    title: "Gimel: Circles Of Hell",
    description:
      "Bound by symbols, fire and blood. No escape once the circle is complete.",
  },
  {
    title: "Dalet: Pesach Mass",
    description:
      "Ancient tradition consumed by darkness, where faith becomes ritual and ritual becomes sacrifice.",
  },
  {
    title: "Hei: The Fifth Gate",
    description:
      "The final threshold before the abyss. Few reach it. None return unchanged.",
  },
  {
    title: "Vav: The Black Exodus",
    description:
      "The closing chapter. A procession into darkness where there is no promised land.",
  },
];

export default function Home() {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const openGalleryImage = (img: string) => {
    setActiveGalleryImage(img);
  };

  const closeGalleryImage = () => {
    setActiveGalleryImage(null);
  };

  useEffect(() => {
    if (!activeGalleryImage) return;

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    bodyStyle.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGalleryImage();
    };

    globalThis.addEventListener("keydown", handleEscape);

    return () => {
      bodyStyle.overflow = previousOverflow;
      globalThis.removeEventListener("keydown", handleEscape);
    };
  }, [activeGalleryImage]);

  return (
    <main className="bg-black text-gray-400 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="hero-section group relative h-screen min-h-[100svh] flex items-center justify-center text-center">
        <Image
          src="/Logo.png"
          alt="ShkheeV MerA"
          fill
          priority
          className="hero-img hero-logo object-contain opacity-100 brightness-105"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 px-4 sm:px-6"
        >
          <div className="mb-8 space-y-3 text-white drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]">
            <p className="text-sm uppercase tracking-[0.34em] text-white/75 sm:text-base">
              Ritualistic Black Metal from Israel
            </p>
            <p className="text-xs uppercase tracking-[0.42em] text-red-200/70 sm:text-sm">
              Occult / Ritual / Darkness
            </p>
            <p className="mx-auto max-w-[90vw] text-lg italic text-white/85 sm:text-2xl">
              &quot;Beyond the Fifth Gate, there is no return.&quot;
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              document.getElementById("occult")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="ritual-breath group relative inline-block mt-6 -translate-y-2.5"
          >
            {/* glow */}
            <span className="absolute inset-0 rounded-md bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition duration-700" />

            {/* button */}
            <span
              className="
                relative
                inline-flex
                max-w-[92vw]
                justify-center
                px-3 py-3
                sm:px-5 sm:py-5
                tracking-[0.16em]
                sm:tracking-[0.25em]
                border border-white/40
                text-white
                uppercase
                text-[11px]
                sm:text-sm
                backdrop-blur-sm
                transition
                duration-500
                group-hover:border-white
                group-hover:bg-white
                group-hover:text-black
              "
            >
              ENTER THE RITUAL
            </span>
          </button>
        </motion.div>
      </section>

      <Navbar />

      {/* ================= Occult Dictionary ================= */}
      <section id="occult" className="occult-section">
        <div className="occult-bg-title">ShkheeV MerA</div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="occult-wrap"
        >
          <h2 className="occult-title font-semibold" data-text="ShkheeV MerA">
            ShkheeV MerA
            <span className="hebrew">(שְׁכִיב מְרַע)</span>
          </h2>

          <p className="occult-label">Ancient Term — Noun</p>

          <p className="occult-definition">
            A name whispered for one suspended at the threshold of death — neither living nor gone,
            <br />
            but slowly dissolving into the hush beyond breath.
          </p>
        </motion.div>
      </section>

      {/* ================= MUSIC ================= */}

      <motion.section
        id="music"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 py-16 px-4 text-center sm:py-24 sm:px-6 md:px-12 lg:py-32 lg:px-20"
      >
        <h2 className="text-3xl text-white mb-10 font-semibold sm:text-4xl sm:mb-14 lg:text-5xl lg:mb-16">
          Latest Release
        </h2>

        <p className="mb-8 text-xl text-white/85 sm:text-2xl">
          The Black Exodus (Full EP) [2026]
        </p>

        <div className="mx-auto grid max-w-6xl gap-10 text-left lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
          <div className="mx-auto w-full max-w-[420px] aspect-[35/42]">
            <iframe
              title="YouTube video: Latest Release"
              src="https://www.youtube.com/embed/xmnMdJfvrKc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            <section className="border-l border-red-900/60 pl-5">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">About the Album</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                The Black Exodus follows a descent from broken divinity into ritual, fire, and
                exile. Across six chapters, ancient symbols are stripped of comfort and turned
                into thresholds: gates, circles, invocations, and final processions. It is an
                occult passage through faith corrupted, gods abandoned, and a promised land that
                never arrives.
              </p>
            </section>

            <div className="grid gap-3 text-center sm:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Total Runtime</p>
                <p className="mt-2 text-xl text-white">28:48</p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Genre</p>
                <p className="mt-2 text-xl text-white">Atmospheric / Occult Black Metal</p>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Tracklist</h3>
              <ol className="mt-5 space-y-3">
                {blackExodusTracks.map((track, index) => (
                  <li key={track.title}>
                    <div
                      tabIndex={0}
                      className="group relative border border-white/10 bg-white/[0.03] px-4 py-4 outline-none transition duration-300 hover:border-red-900/70 hover:bg-white/[0.06] focus-visible:border-red-800 focus-visible:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 shrink-0 text-sm text-white/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-5 w-4 shrink-0 items-center" aria-hidden="true">
                          <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white/80" />
                        </span>
                        <span className="text-lg text-white">{track.title}</span>
                      </div>

                      <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-white/65 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus:max-h-24 group-focus:opacity-100 sm:text-base">
                        {track.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </motion.section>

      {/* ================= EMISSARIES OF DEATH ================= */}

      <motion.section
        id="emissaries"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative scroll-mt-28 py-20 px-4 sm:py-28 sm:px-6 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl text-white text-center mb-14 sm:text-4xl lg:text-5xl">
          Emissaries of Death
        </h2>

        <div className="lord-ofear-frame relative mx-auto max-w-5xl h-[520px] sm:h-[620px] overflow-hidden bg-black">
          <Image
            src="/me1.png"
            alt="Emissary of Death"
            fill
            className="lord-ofear-image object-cover object-[50%_20%] scale-90 grayscale contrast-105 brightness-95"
          />

          {/* heavy vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

          {/* text */}
          <div className="absolute bottom-16 left-10 max-w-xl">
            <h3 className="text-white text-4xl sm:text-5xl tracking-[0.25em] font-semibold">
              The Fallen Prophet
            </h3>

            <p className="mt-4 text-white/80 tracking-[0.35em] uppercase text-sm">
              Guitars • Bass • Illness Melodies
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              Among the dying, he wanders. <br/>
              Breath fades before his gaze. <br/>
              All that survives mourns in silence.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY ================= */}

      <motion.section
        id="gallery"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 py-16 px-4 sm:py-24 sm:px-6 md:px-12 lg:py-32 lg:px-20"
      >
        <h2 className="text-3xl text-white text-center mb-12 sm:text-4xl sm:mb-16 lg:text-5xl lg:mb-20">Gallery</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            { id: "g1", src: "/The Black Exodus - Album Art.png" },
            { id: "g3", src: "/Logo New.png" },
            { id: "g2", src: "/LogoHebrew.png" },
          ].map((img) => {
            const galleryButton = (
              <button
                type="button"
                onClick={() => openGalleryImage(img.src)}
                className="relative h-[260px] w-full overflow-hidden group cursor-pointer sm:h-[320px] lg:h-[420px]"
                aria-label="Open gallery image"
              >
                <Image
                  src={img.src}
                  alt="Band photo"
                  fill
                  className="object-contain bg-black grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </button>
            );

            if (img.id === "g1") {
              return (
                <Parallax key={img.id} speed={-5} easing="easeOutQuad">
                  {galleryButton}
                </Parallax>
              );
            }

            return (
              <div key={img.id}>
                {galleryButton}
              </div>
            );
          })}
        </div>
      </motion.section>

      {activeGalleryImage && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute inset-0 bg-black/80"
            onClick={closeGalleryImage}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <div className="relative z-10 w-[94vw] h-[78svh] max-w-6xl pointer-events-auto sm:w-[92vw] sm:h-[82vh]">
              <Image
                src={activeGalleryImage}
                alt="Gallery image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= TOUR ================= */}

      <motion.section
        id="tour"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="scroll-mt-28 text-white py-16 bg-black text-center sm:py-24 lg:py-32"
      >
        <h2 className="text-3xl mb-10 sm:text-4xl sm:mb-14 lg:text-5xl lg:mb-16">Tour</h2>

        <div className="space-y-10 text-lg">
          <p>Rituals will be announced soon.</p>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}

      <footer className="py-10 px-4 text-center text-gray-500 sm:py-16">
        © {new Date().getFullYear()} ShkheeV MerA • Where Light Dies, We Reign
      </footer>
    </main>
  );
}

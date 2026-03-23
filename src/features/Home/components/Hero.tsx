
import Image from "next/image";
import { Button } from "@/components/Button";
import elder from "../../../../public/assets/elder2.png";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* 1. Background Image Layer - Lowered z-index */}
      <div className="absolute inset-0 z-0">
        <Image
          src={elder}
          alt="Ethiopian elder"
          fill
          priority
          className="object-cover object-center"
        />

        {/* 2. Gradient Overlay - sits on top of image, below text */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(145deg, rgba(21, 66, 18, 0.9) 0%, rgba(45, 90, 39, 0.4) 100%)",
          }}
        />
      </div>

      {/* 3. Content Layer - Highest z-index */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center">
        {/* The container now uses flex-col + items-center + text-center */}
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
          {/* Heading with better tracking and letter-spacing */}
          <h1 className="font-headline font-black text-6xl md:text-8xl text-white leading-[1.05] tracking-tight">
            Mana Gara-Laafummaa,
            <br />
            <span className="text-secondary italic font-light drop-shadow-sm">
              {" "}
              ATIS NAMA.
            </span>
          </h1>

          {/* Paragraph: centered and balanced with max-w-2xl */}
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Mana boqonnaa warra bara isaani guutuu boqonnaa hin argatinii, Iddoo
            aara galfii warra rooba fi Aduudhaan bara isaani fixani.
          </p>

          {/* Buttons: centered and evenly spaced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(158,65,39,0.3)] hover:scale-105 hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2 group">
              Explore Our Projects
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <button className="px-10 py-5 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              How You Can Help
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[10px] text-white uppercase tracking-[0.4em] font-bold">
          Scroll
        </span>
        <span className="material-symbols-outlined text-white text-3xl font-light">
          expand_more
        </span>
      </div>
    </section>
  );
};

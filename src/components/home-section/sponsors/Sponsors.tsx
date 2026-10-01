import Image from "next/image";



type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};



const COPIES = 4;

export function Sponsors() {

    const sponsors: Logo[] = [
  { src: "/sponsors/pic (1).svg", alt: "Logoipsum", width: 167, height: 41 },
  { src: "/sponsors/pic (2).svg", alt: "Logoipsum", width: 168, height: 41 },
  { src: "/sponsors/pic (3).svg", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/sponsors/pic (4).svg", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/sponsors/pic (5).svg", alt: "Logoipsum", width: 169, height: 42 },
];


  return (
    <section className="overflow-hidden bg-neutral-50 py-20">
      <h2 className="sr-only">Our partners</h2>

    
      <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="group flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          {Array.from({ length: COPIES }).map((_, copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0 || undefined}
              className="flex shrink-0 items-center gap-6 pr-6 xl:gap-18 xl:pr-18"
            >
              {sponsors.map((item) => (
                <li key={item.src} className="shrink-0">
                  <Image
                    src={item.src}
                    alt={copy === 0 ? item.alt : ""}
                    width={item.width}
                    height={item.height}
                    className="max-md:h-8 max-md:w-auto"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
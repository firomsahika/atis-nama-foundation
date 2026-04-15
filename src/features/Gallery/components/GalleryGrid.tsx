import React from "react";
import Image from "next/image";

import a from "../../../../public/assets/a.png";
import b from "../../../../public/assets/b.png";
import c from "../../../../public/assets/c.png";
import d from "../../../../public/assets/d.png";
import e from "../../../../public/assets/e.png";
import f from "../../../../public/assets/f.png";
import g from "../../../../public/assets/g.png";
import h from "../../../../public/assets/h.png";
import achievement1 from "../../../../public/assets/achievement1.png";
import achievement2 from "../../../../public/assets/achievement2.png";
import achievement3 from "../../../../public/assets/achievement3.png";
import achievement4 from "../../../../public/assets/achievement4.png";
import acheivement5 from "../../../../public/assets/acheivement5.png";
import achievement6 from "../../../../public/assets/achievement6.png";
import achievement7 from "../../../../public/assets/achievement7.png";
import achievement8 from "../../../../public/assets/achievement8.png";

const images = [
  a,
  achievement1,
  b,
  achievement2,
  c,
  achievement3,
  d,
  achievement4,
  e,
  acheivement5,
  f,
  achievement7,
  g,
  achievement8,
  h,
];

export const GalleryGrid = () => {
  return (
    <div className="columns-2 sm:columns-4 lg:columns-6 gap-5 space-y-5">
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 break-inside-avoid
            ${
              index % 5 === 0
                ? "aspect-[4/5]"
                : index % 3 === 0
                  ? "aspect-square"
                  : "aspect-[3/4]"
            }
          `}
        >
          <Image
            src={img}
            alt={`gallery-${index}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-transparent transition" />
        </div>
      ))}
    </div>
  );
};

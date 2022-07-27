import React from "react";
import Image from "next/image"; // for automatic optimization, webp convertion, lazy loading, image-loading-(blur)-placeholder
import img from "../public/1.jpg";
import placeholderImg from "../public/placeholder.jpg";

function PetsPage() {
  return (
    <div>
      <Image
        src={img}
        blurDataURL={placeholderImg}
        alt="pet"
        width="280"
        height="420"
      />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              blurDataURL={placeholderImg}
              alt="pet"
              width="280"
              height="420"
            />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;

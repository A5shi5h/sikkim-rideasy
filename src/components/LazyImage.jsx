import Image from "next/image";
import React, { useState } from "react";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-56">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          Loading...
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        height={500}
        width={500}
        onLoad={() => setLoaded(true)}
        className={`w-full h-56 object-cover rounded-lg transition-opacity ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default LazyImage;

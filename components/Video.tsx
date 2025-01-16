import Image from 'next/image';
import React from 'react';

const Video = () => {
  return (
    <section
      id="video"
      className="flexCenter flex-col max-container padding-container py-10 md:py-20"
    >
      <div className="padding-container max-container w-full pb-24">
        <Image src="/drone.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-20 font-bold -mt-1 mb-3 text-green-50">
          How we work
        </p>
      </div>
      <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.youtube.com/embed/k4Pm3IRYtOE?si=SJGqiCQr3lnFdfem"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
};

export default Video;

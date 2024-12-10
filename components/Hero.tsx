import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-58">Kipepeo Aerospace</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(2)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="start"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="ml-1 regular-16 lg:regular-20">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Kajiado Gateaway</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">100.0 kms</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.829 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { useEffect } from "react";
import { Button } from "../button";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.to([".hero-title", ".hero-description", ".hero-buttons"], {
      color: "black",
      y: -60,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1800px] w-full mt-[10rem]">
        <h1 className="hero-title text-8xl max-w-[900px] font-bold text-transparent">
          Modern <span className="font-normal">payments</span> for markets
        </h1>
        <p className="hero-description text-xl max-w-[800px] my-[1rem] text-transparent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nostrum
          nisi porro dicta delectus adipisci aliquam similique aspernatur sed
          minima debitis? Culpa est natus error earum provident assumenda omnis
          quis!
        </p>

        <div className="hero-buttons gap-[1rem] ">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-xl mr-[1rem] bg-[#B1FF05]"
          >
            Start now
          </Button>
          <Button variant="outline" className="rounded-xl">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };

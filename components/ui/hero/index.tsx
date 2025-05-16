"use client";

import { useEffect } from "react";
import { Button } from "../button";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.to([".hero-title", ".hero-description", ".hero-buttons"], {
      color: "black",
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    });

    gsap.to(".hero-title", {
      height: 200,
    });

    gsap.to(".hero-description", {
      height: 100,
    });

    gsap.to(".hero-buttons", {
      height: 100,
      display: "flex",
    });

    gsap.to(".hero-buttons", {
      height: 100,
      display: "flex",
    });

    gsap.to(".hero-buttons button", {
      height: 50,
      display: "flex",
    });
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1800px] w-full mt-[10rem]">
        <h1 className="hero-title text-8xl max-w-[900px] font-bold overflow-hidden h-0">
          Modern <span className="font-normal">payments</span> for markets
        </h1>
        <p className="hero-description text-xl max-w-[800px] my-[1rem] overflow-hidden h-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nostrum
          nisi porro dicta delectus adipisci aliquam similique aspernatur sed
          minima debitis? Culpa est natus error earum provident assumenda omnis
          quis!
        </p>

        <div className="hidden hero-buttons gap-[1rem]">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-xl mr-[1rem] bg-[#B1FF05] overflow-hidden h-0 hidden"
          >
            Start now
          </Button>

          <Button
            variant="outline"
            className="rounded-xl overflow-hidden h-0 hidden"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };

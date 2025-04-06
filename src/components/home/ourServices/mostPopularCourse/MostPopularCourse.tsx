import YellowLineSvg from "./svg/YellowLineSvg";
import { IoIosStar } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostPopularCourse = () => {
  return (
    <section className="md:px-28 mt-28 bg-[#F2FAF7]">
      <div className="py-16 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-5xl leading-14 font-semibold">
            Most <br /> <span className="text-[#49bc8a]">Popular</span> <br />{" "}
            <span className="text-[#49bc8a]">Course</span>
          </h2>
          <div className="absolute top-26.5">
            <YellowLineSvg></YellowLineSvg>
          </div>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white rounded-md">
                  <div className="p-3">
                    <img
                      className="h-44 w-36"
                      src="https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <h4 className="mt-3">Various versions have evolved daf</h4>
                    <div className="mt-3 flex items-center gap-1.5">
                      <IoIosStar className="text-xl text-[#F4C384]"></IoIosStar>
                      <IoIosStar className="text-xl text-[#F4C384]"></IoIosStar>
                      <IoIosStar className="text-xl text-[#F4C384]"></IoIosStar>
                      <IoIosStar className="text-xl text-[#F4C384]"></IoIosStar>
                      <IoIosStar className="text-xl text-[#F4C384]"></IoIosStar>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MostPopularCourse;

import { RxStarFilled } from "react-icons/rx";
import { RxArrowTopRight } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744131623/cmhxbnt15wbzflk7hbth.svg",
    paragraph: "Various versions have evolved daf.",
    stars: 5,
    price: "49.99",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744132222/b5u1iqivjvozffyslfzb.svg",
    paragraph: "Various versions have evolved daf.",
    stars: 4,
    price: "39.95",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744132244/u3aoneyhvluf7atgwfan.svg",
    paragraph: "Various versions have evolved daf.",
    stars: 4.5,
    price: "29.99",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744132222/b5u1iqivjvozffyslfzb.svg",
    paragraph: "Various versions have evolved daf.",
    stars: 5,
    price: "59.00",
  },
];

const SliderCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="relative slider-container max-w-[700px]">
        <Slider className="" {...settings}>
          {data.map((item, index) => (
            <div
              id="slider-boxes"
              className="bg-white rounded-lg py-3"
              key={index}
            >
              <div className="px-4 mb-3">
                <img src={item.image} alt="" />
              </div>
              <div className="px-3 text-[15px]">{item.paragraph}</div>
              <div className="flex px-3 items-center gap-1 mt-4 text-xl border-b pb-4">
                <RxStarFilled className="text-[#F6C485]"></RxStarFilled>
                <RxStarFilled className="text-[#F6C485]"></RxStarFilled>
                <RxStarFilled className="text-[#F6C485]"></RxStarFilled>
                <RxStarFilled className="text-[#F6C485]"></RxStarFilled>
                <RxStarFilled className="text-[#F6C485]"></RxStarFilled>
              </div>
              <div className="px-3 mt-3 flex items-center justify-between">
                <h3 className="text-2xl font-sans font-medium flex items-center">
                  <FaDollarSign className="text-xl"></FaDollarSign> {item.price}
                </h3>
                <RxArrowTopRight className="p-2 rounded-sm shadow-sm text-3xl hover:bg-[#56AF88] hover:text-white"></RxArrowTopRight>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderCart;

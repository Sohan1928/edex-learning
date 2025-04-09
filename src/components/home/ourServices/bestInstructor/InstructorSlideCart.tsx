import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213374/sfq4be4vcw3fp1tvfkg1.svg",
    name: "Jacob Jones",
    paragraph: "UI-UX Design Expart",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213399/zlrfvtxmchqn0klrvgpe.svg",
    name: "Jacob Jones",
    paragraph: "Social Media Expart",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213416/ymh9qlprtn4gz4etjzny.svg",
    name: "Jacob Jones",
    paragraph: "Business Idea Expart",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213439/pw74hkdo1ybiqgqz83cn.svg",
    name: "Jacob Jones",
    paragraph: "Photograpy Expart",
  },
  {
    image:
      "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213416/ymh9qlprtn4gz4etjzny.svg",
    name: "Jacob Jones",
    paragraph: "Business Idea Expart",
  },
];

const InstructorSlideCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      <div className="relative slider-container max-w-ful">
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
              <div className="flex flex-col text-center px-3 text-[15px]">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <h4 className="opacity-60">{item.paragraph}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InstructorSlideCart;

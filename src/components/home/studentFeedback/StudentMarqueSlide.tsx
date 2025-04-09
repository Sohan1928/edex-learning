import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jenny Wilson",
    username: "UI-UX Designer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744214802/xwkycs8jve1dja2ryxci.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
  {
    name: "Guy Hawkins",
    username: "Developer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744214841/tsxrm1tzirysnoftjn1t.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
  {
    name: "Jenny Wilson",
    username: "UI-UX Designer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213374/sfq4be4vcw3fp1tvfkg1.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
  {
    name: "Guy Hawkins",
    username: "Developer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213399/zlrfvtxmchqn0klrvgpe.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
  {
    name: "Jenny Wilson",
    username: "UI-UX Designer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213416/ymh9qlprtn4gz4etjzny.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
  {
    name: "Guy Hawkins",
    username: "Developer",
    body: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    img: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744213439/pw74hkdo1ybiqgqz83cn.svg",
    img2: "http://res.cloudinary.com/du0uabbwo/image/upload/v1744216135/ltasuevq5717kt5dhdnx.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  img2,
  username,
  body,
}: {
  img: string;
  name: string;
  img2: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="42" height="42" alt="" src={img} />

        <div className="flex gap-12">
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
            <p className="text-xs font-medium opacity-70 dark:text-white/40 mt-1">
              {username}
            </p>
          </figcaption>
          <div className="mt-2 size-6">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

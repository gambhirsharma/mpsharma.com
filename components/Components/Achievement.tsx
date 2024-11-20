'use client'

import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/Responsive.module.css";
export default function AchievementCarousel() {


const response = [
  {
    id: 1,
    imageUrl: "/images/1.png",
    title: "Achievement 1",
    text: "This is the first achievement",
  },
  {
    id: 2,
    imageUrl: "/images/2.png",
    title: "Achievement 2",
    text: "This is the second achievement",
  }
]

  return (
    <div className='container w-full flex items-center justify-center'>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
      renderIndicator={()=> null}
        className="w-1/2"
      >
        {response.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="">
              <img
                alt="Achievement"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </div>
            <div className="my-4">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}


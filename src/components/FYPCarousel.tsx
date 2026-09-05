import Carousel, { type SlideData } from "@/components/ui/carousel";
import result1 from '../assets/FYPImages/Result (1).png';
import result2 from '../assets/FYPImages/Result (2).png';
import result3 from '../assets/FYPImages/Result (3).png';
import result4 from '../assets/FYPImages/Result (4).png';
import result5 from '../assets/FYPImages/Result (5).png';
import result6 from '../assets/FYPImages/Result (6).png';
import result7 from '../assets/FYPImages/Result (7).png';
import result8 from '../assets/FYPImages/Result (8).png';
import result9 from '../assets/FYPImages/Result (9).png';
import result10 from '../assets/FYPImages/Result (10).png';
import result11 from '../assets/FYPImages/Result (11).png';
import result12 from '../assets/FYPImages/Result (12).png';
import result13 from '../assets/FYPImages/Result (13).png';
import result14 from '../assets/FYPImages/Result (14).png';
import result15 from '../assets/FYPImages/Result (15).png';
import result16 from '../assets/FYPImages/Result (16).png';
import result17 from '../assets/FYPImages/Result (17).png';
import result18 from '../assets/FYPImages/Result (18).png';
import result19 from '../assets/FYPImages/Result (19).png';
import result20 from "../assets/FYPImages/result 20.jpg"

export function CarouselDemo() {
   const slideData: SlideData[] = [

  { title: "Result 10", button: "Explore Component", src: result20, type: 'image' },
  { title: "Result 12", button: "Explore Component", src: result12, type: 'image' },
  { title: "Result 13", button: "Explore Component", src: result13, type: 'image' },
  { title: "Result 11", button: "Explore Component", src: result11, type: 'image' },
  { title: "Result 10", button: "Explore Component", src: result10, type: 'image' },
  { title: "Result 14", button: "Explore Component", src: result14, type: 'image' },
  { title: "Result 15", button: "Explore Component", src: result15, type: 'image' },
  { title: "Result 16", button: "Explore Component", src: result16, type: 'image' },
  { title: "Result 17", button: "Explore Component", src: result17, type: 'image' },
  { title: "Result 18", button: "Explore Component", src: result18, type: 'image' },
  { title: "Result 19", button: "Explore Component", src: result19, type: 'image' },
  { title: "Result 1", button: "Explore Component", src: result1, type: 'image' },
  { title: "Result 2", button: "Explore Component", src: result2, type: 'image' },
  { title: "Result 3", button: "Explore Component", src: result3, type: 'image' },
  { title: "Result 4", button: "Explore Component", src: result4, type: 'image' },
  { title: "Result 5", button: "Explore Component", src: result5, type: 'image' },
  { title: "Result 6", button: "Explore Component", src: result6, type: 'image' },
  { title: "Result 7", button: "Explore Component", src: result7, type: 'image' },
  { title: "Result 8", button: "Explore Component", src: result8, type: 'image' },
  { title: "Result 9", button: "Explore Component", src: result9, type: 'image' },
];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

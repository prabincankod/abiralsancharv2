import { HomePageResponse } from "~/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

function CategoryCarousel(props: { posts: HomePageResponse }) {
  return (
    <div className=" mt-2 flex flex-col items-center">
      <Carousel
        className="min-w-md w-full max-w-lg"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {props.posts.data[0]?.navbar_category?.map((category) => (
            <CarouselItem
              key={category.slug}
              className="text-center  md:basis-1/2  lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center border-dotted bg-[url('https://www.onlinekhabar.com/wp-content/uploads/2023/12/Rolls-Royce-Mini-Nuclear-Plant-768x432.jpg')]  bg-cover p-6"></CardContent>
                </Card>
                <span className="sm-xl w-24 font-semibold text-primary-foreground">
                  {category.title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default CategoryCarousel;

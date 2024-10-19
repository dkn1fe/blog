import useEmblaCarousel from "embla-carousel-react";
import {useCallback} from "react";
import {blogCarouselList} from "../../../shared/utils/blogCarouselList";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {BlogSlide} from "./BlogSlide.tsx";
import {BlogCarouselProgress} from "./BlogCarouselProgress.tsx";
import {useDotButton} from "./useDotButtons.tsx";

export const BlogCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative w-full h-[500px]">
            <div ref={emblaRef} className="overflow-hidden w-full h-full">
                <div className="flex gap-5">
                    {blogCarouselList && blogCarouselList.map((item, index) => (
                        <BlogSlide
                            key={index}
                            index={index}
                            text={item.text}
                            img={item.img}
                            tag={item.tag}
                            author={item.author}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>

            {scrollSnaps.length > 0 && (
                <div
                    className="absolute z-10 top-[45%] left-[50%] transform -translate-x-1/2 flex items-center justify-between w-full">
                    <button onClick={onPrevButtonClick} className="p-2">
                        <ChevronLeft size={40} color="white"/>
                    </button>

                    <div className='absolute top-56 left-[38%] sm:left-[45%]'>

                    <BlogCarouselProgress
                        scrollSnaps={scrollSnaps as []}
                        onDotButtonClick={onDotButtonClick}
                        selectedIndex={selectedIndex}
                    />
                    </div>

                    <button className="p-2" onClick={onNextButtonClick}>
                        <ChevronRight size={40} color="white"/>
                    </button>
                </div>
            )}
        </div>
    )
}

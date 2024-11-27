import {BlogCard} from "./BlogCard.tsx";
import {blogCarouselList} from "@/shared/utils/blogCarouselList.ts";

export const BlogList = () => {
    return (
        <div className='grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-6 flex-wrap'>
            {blogCarouselList && blogCarouselList.map(item => (
                <BlogCard
                    key = {item.id}
                    index = {item.id}
                    tag={item.tag}
                    text={item.text}
                    author={item.author}
                    date={item.date}
                    img={item.img}
                />
            ))}
        </div>
    )
}
import {BlogCarousel} from "../../../features/blogCarousel";
import {BlogList} from "../../../features/blogList";
import {ButtonLoadMore} from "../../../features/blogList/ui/ButtonLoadMore.tsx";


export const HomePage = () => {
    return (
        <>
        <section>
            <BlogCarousel/>
        </section>
        <section>
            <BlogList/>
            <ButtonLoadMore/>
        </section>
        </>
    )
}
import avatar from '../../../assets/blog/avatar.png';
import {FC} from "react";

interface BlogCardProps {
    img: string;
    text: string;
    tag: string;
    author: string;
    date: string;
    index: number;
}

export const BlogCard: FC<BlogCardProps> = ({img, tag, text, author, date}) => {
    return (
        <div className="relative flex-shrink-0 w-full h-[450px] mt-10 overflow-hidden">
            <div
                style={{
                    background: `url(${img}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
                className="absolute top-0 left-0 w-full h-full rounded-xl"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl"></div>
                <div className="absolute bottom-14 left-8 md:bottom-12 md:left-11">
                       <span className="text-white rounded-lg text-sm bg-[#4B6BFB] text-center p-2">
                             {tag}
                        </span>
                    <p className="text-lg sm:text-xl xl:text-3xl text-white pt-3 pr-2 max-w-[650px] font-semibold">
                        {text}
                    </p>
                    <div className="flex pt-3 items-center gap-5 text-white text-sm xl:text-lg">
                        <img src={avatar} alt="avatar"/>
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

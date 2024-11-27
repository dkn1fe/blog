import avatar from '../../../assets/blog/avatar.png';
import { FC } from 'react';

interface BlogCardProps {
    index: number;
    img: string;
    text: string;
    tag: string;
    author: string;
    date: string;
}

export const BlogCard: FC<BlogCardProps> = ({ tag, author, date, text, img, index }) => {
    return (
        <div key={index} className="border border-[#E8E8EA] shadow-lg cursor-pointer rounded-xl p-4 max-w-[360px] sm:max-w-[480px] md:max-w-[600px] mx-auto">
            <div className="flex flex-col items-start gap-4">
                <img src={img} alt="img" className="w-full h-auto rounded-xl object-cover" />

                <span className="rounded-lg text-xs sm:text-sm md:text-base text-[#4B6BFB] bg-[#4B6BFB]/[0.05] text-center p-2">
                    {tag}
                </span>

                <p className="text-sm sm:text-lg xl:text-xl text-black font-semibold max-w-full">
                    {text}
                </p>

                <div className="flex items-center gap-3 text-[#97989F] text-xs sm:text-sm md:text-base">
                    <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                    <p className="truncate">{author}</p>
                    <p className="hidden sm:block">{date}</p>
                </div>
            </div>
        </div>
    );
};

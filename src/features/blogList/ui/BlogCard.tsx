import avatar from '../../../assets/blog/avatar.png'
import {FC} from "react";

interface BlogCardProps {
    index: number;
    img: string;
    text: string;
    tag: string;
    author: string;
    date: string;
}

export const BlogCard: FC<BlogCardProps> = ({tag, author, date, text, img, index}) => {
    return (
        <div key={index} className='border border-[#E8E8EA] cursor-pointer rounded-xl'>
            <div className='p-4'>
                <img src={img} alt='img' className='max-w-[360px] pb-5 lg:pr-5 rounded-xl'/>
                <span className="rounded-lg text-sm text-[#4B6BFB] bg-[#4B6BFB]/[0.05] text-center p-2">
    {tag}
</span>
                <p className="text-sm sm:text-lg xl:text-xl text-black pt-3 pr-2 max-w-[344px] font-semibold">
                    {text}
                </p>
                <div className="flex py-2 text-[#97989F] items-center gap-3 text-sm xl:text-[16px]">
                    <img src={avatar} alt="avatar" className='bg-black'/>
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

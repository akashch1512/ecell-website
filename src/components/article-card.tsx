import { MdOutlineArrowOutward } from "react-icons/md";
import Avatar from "./avatar";
import Image from "next/image";
import Link from "next/link";

interface Author {
    name: string;
    avatar: string;
}

interface ArticleCardProps {
    thumbnail: string; // This can be a video or an image URL
    title: string;
    content: string;
    author: Author;
    date: string;
    postUrl: string;
    className?: string;
}

export default function ArticleCard({ thumbnail, title, content, author, date, postUrl, className }: ArticleCardProps) {
    const isThumbnailVideo = thumbnail.endsWith(".mp4") || thumbnail.endsWith(".webm") || thumbnail.endsWith(".ogg"); // Check for video formats

    return (
        <div className={className}>
            <Link href={postUrl}>
                {isThumbnailVideo ? (
                    <video 
                        width={300} 
                        height={200} 
                        className="min-w-full rounded-xl" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src={thumbnail} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image 
                        src={thumbnail} 
                        width={300} 
                        height={200} 
                        alt="hero image" 
                        className="min-w-full rounded-xl" 
                    />
                )}
            </Link>
            <div className="mt-4 flex flex-col gap-1">
                <div className="flex items-start justify-between">
                    <Link href={postUrl}>
                        <h3 className="text-xl font-bold">{title}</h3>
                    </Link>
                    <Link href={postUrl} target="_blank">
                        <MdOutlineArrowOutward size={40} className="hidden transition-opacity hover:opacity-50 sm:block" />
                    </Link>
                </div>
                <Link href={postUrl}>
                    <p>{content}</p>
                </Link>
                <div className="mt-2 flex items-center gap-1 font-bold">
                    <Avatar src={author.avatar} alt="avatar" size={32} />
                    <p className="ml-2">{author.name}</p>
                    •
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

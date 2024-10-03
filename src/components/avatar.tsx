import Image from "next/image";

interface AvatarProps {
    src: string;
    size: number;
    alt: string;
    className?: string;
    isVideo?: boolean; // Ensure isVideo is optional
    [key: string]: any; // Allow additional props
}

export default function Avatar({ src, size, alt, className, isVideo = false, ...props }: AvatarProps) {
    const isVideoFile = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg"); // Check for video formats

    return (
        <>
            {isVideoFile ? (
                <video
                    width={size}
                    height={size}
                    controls
                    className={"aspect-square rounded-full " + className}
                    {...props}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image
                    src={src}
                    width={size}
                    height={size}
                    alt={alt}
                    className={"aspect-square rounded-full " + className}
                    {...props}
                />
            )}
        </>
    );
}

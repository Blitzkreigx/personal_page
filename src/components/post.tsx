import Image from "next/image";

interface PostProps {
    image: string;
    title: string;
    previewContent: string;
}

export default function Post({ image, title, previewContent }: PostProps) {
    return (
        <>
            <div className="">
                <a href="">
                    <Image 
                        src={image}
                        alt={title}
                        width={1800}
                        height={1080}
                        sizes="fill" 
                        className="hover:opacity-90"
                    />
                </a >
                <div>
                    <h3><a href=""><b>{title}</b></a></h3>
                    <p>{previewContent}</p>
                </div>
            </div>
        </>
    )
}
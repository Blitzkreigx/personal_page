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
                    <img src={image} alt={title} className="hover:opacity-90" />
                </a >
                <div>
                    <h3><a href=""><b>{title}</b></a></h3>
                    <p>{previewContent}</p>
                </div>
            </div>
        </>
    )
}
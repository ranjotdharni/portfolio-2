import BlobContainer from "../molecules/BlobContainer"


export default function Background() {

    return (
        <div className="z-0 w-full h-full absolute bg-color-bg">
            <BlobContainer tailwind="absolute w-3/5 -top-32 -left-16 md:w-1/5 md:-top-[18vh] md:-left-[5vw]" blob={{blobId: 'blob1'}} />
            <BlobContainer tailwind="absolute w-1/4 left-2/3 top-[10vh]" blob={{blobId: 'blob1'}} />
            <BlobContainer tailwind="absolute w-1/2 left-2/3 top-[10vh]" blob={{blobId: 'blob1'}} />
            <BlobContainer tailwind="absolute w-1/5 left-1/5 top-[80vh]" blob={{blobId: 'blob1'}} />
        </div>
    )
}
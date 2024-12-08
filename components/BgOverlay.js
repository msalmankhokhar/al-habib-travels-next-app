import Image from "next/image"

export default function BgOverlay() {
    return (
        <Image
        src={'/img/tomb-overlay.webp'}
        width={2000}
        height={2000}
        alt="background overlay"
        className="fixed bottom-0 -z-50"
        />
    )
}

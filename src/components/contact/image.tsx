/* eslint-disable @next/next/no-img-element */

interface PropsType {
  img: string
  alt: string
}

export default function Image({ img, alt }: PropsType) {
  return (
    <img
      src={img}
      alt={alt}
      className="h-14 w-full max-w-[56px] rounded-full border-[2px] border-[#4F75FF]"
    />
  )
}

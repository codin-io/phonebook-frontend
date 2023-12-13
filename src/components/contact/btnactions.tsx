/* eslint-disable @next/next/no-img-element */
interface PropsType {
  icon: string
  onClick: () => void
  alt: string
}

export default function BtnActions({ icon, onClick, alt }: PropsType) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 items-center rounded-[40px] border border-[#8F8F8F3D] px-4 py-2"
    >
      <img src={icon} alt={alt} />
    </button>
  )
}

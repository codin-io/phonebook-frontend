/* eslint-disable @next/next/no-img-element */

interface PropsTyoe {
  placeholder: string
  icon: string
  onChange: (e: any) => void
}

export function Input({ placeholder, icon, onChange }: PropsTyoe) {
  return (
    <div
      id="input"
      className="flex h-10 w-full max-w-[216px] items-center gap-2 rounded-[8px] bg-[#F4F4F4] p-2"
    >
      <img src={icon} alt="icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full max-w-[164px] border-none bg-transparent outline-none placeholder:text-sm placeholder:font-normal placeholder:tracking-[1px] placeholder:text-[#363636]"
      />
    </div>
  )
}

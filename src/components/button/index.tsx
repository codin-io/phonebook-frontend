interface PropsType {
  icon: string
  onClick: () => void
}

export function Button({ icon, onClick }: PropsType) {
  return (
    <button onClick={onClick} className="rounded-sm bg-[#4F75FF] px-3 py-[10px]">
      <img src={icon} alt="icon" />
    </button>
  )
}

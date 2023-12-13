/* eslint-disable @next/next/no-img-element */
interface PropsTypes {
  totalContacts: number
}

export function HeaderDataTable({ totalContacts }: PropsTypes) {
  return (
    <header className="flex items-start justify-between">
      <div id="about__contacts" className="flex flex-col gap-3">
        <h1 className="text-[32px] font-semibold leading-9">Meus contatos ({totalContacts})</h1>
        <p className="text-base font-normal leading-5 text-[#737373]">
          Gere a sua lista de contatos
        </p>
      </div>

      <div id="search__area" className="flex items-start gap-4">
        <div
          id="input"
          className="flex h-10 w-full max-w-[216px] items-center gap-2 rounded-[8px] bg-[#F4F4F4] p-2"
        >
          <img src="/MagnifyingGlass.svg" alt="MagnifyingGlass" />
          <input
            type="text"
            placeholder="Pesquisar contatos..."
            className="w-full max-w-[164px] border-none bg-transparent outline-none placeholder:text-sm placeholder:font-normal placeholder:tracking-[1px] placeholder:text-[#363636]"
          />
        </div>

        <button className="rounded-sm bg-[#4F75FF] px-3 py-[10px]">
          <img src="/UserPlus.svg" alt="UserPlus" />
        </button>
      </div>
    </header>
  )
}

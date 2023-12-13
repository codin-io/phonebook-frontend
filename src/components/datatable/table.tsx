'use client'
import { Contact } from '../contact'
import { contacts, tableHeader } from './data'

export function Table() {
  return (
    <table className="left-0 w-full">
      <thead>
        <tr className="border-b border-[#E8E8E8]">
          {tableHeader.map(({ id, content }) => (
            <th className="w-auto py-6 text-left text-lg font-normal text-[#363636]" key={id}>
              {content}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, email, icon, img, name, phoneNumber, state }) => (
          <Contact.Root className="mb-3" key={id}>
            <th className="flex items-center gap-3 py-6 ">
              <Contact.CheckBox />
              <Contact.Image img={img} alt={name} />
              <Contact.Name name={name} />
            </th>
            <th className="w-auto text-left">
              <Contact.PhoneNumber phoneNumber={phoneNumber} />
            </th>
            <th className="w-auto text-left">
              <Contact.Email email={email} />
            </th>

            <th className="w-auto text-left">
              <Contact.State locked={state} />
            </th>

            <th className="w-auto text-left">
              <Contact.BtnActions
                icon={icon}
                alt="alt"
                onClick={() => {
                  alert('Funciona')
                }}
              />
            </th>
          </Contact.Root>
        ))}
      </tbody>
    </table>
  )
}

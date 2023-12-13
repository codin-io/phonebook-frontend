interface PropsType {
  email: string
}

export default function Email({ email }: PropsType) {
  return <span className="font-normal text-[#484848]">{email}</span>
}

interface PropsType {
  phoneNumber: string
}

export default function PhoneNumber({ phoneNumber }: PropsType) {
  return <span className="font-normal text-[#484848]">{phoneNumber}</span>
}

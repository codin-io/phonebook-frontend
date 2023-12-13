interface PropsType {
  name: string
}

export default function Name({ name }: PropsType) {
  return <span>{name}</span>
}

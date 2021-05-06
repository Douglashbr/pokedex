import { TypeLabel } from "./style"

const TypeLabelPoke = ({ name, bgColor }) => {
  return (
    <TypeLabel bgColor={bgColor}>{name}</TypeLabel>
  )
} 

export default TypeLabelPoke
import { Container } from './style'

const MainContainer = ({ children, bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      {children}
    </Container>
  )
}

export default MainContainer
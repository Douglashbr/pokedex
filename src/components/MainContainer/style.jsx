import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 414px;
  padding: 20px;
  margin: 20px auto;
  background-color: ${props => props.bgColor && props.bgColor};
  border-radius: 20px;
`
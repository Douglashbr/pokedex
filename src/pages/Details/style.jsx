import styled from 'styled-components'

export const DetailsHeader = styled.div`
  background: url(${props => props.bgImage && props.bgImage}) ${props => props.bgColor && props.bgColor};
  background-position: calc(100% + 20px) calc(100% - 10px);
  background-size: 150px;
  background-repeat: no-repeat;
  margin: -20px -20px 0;
  padding: 20px 20px 0;
  border-radius: 20px 20px 0 0;
  text-align: center;
`

export const DetailsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`

export const DetailsTitle = styled.h1`
  font-size: 1.857rem;
  color: #ffffff;
  font-weight: 900;
`

export const DetailsNumb = styled.h2`
  color: #ffffff;
  font-weight: 900;
`

export const DetailsLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 20px
`

export const PokeImg = styled.img`
  z-index: 1;
  position: relative;
`

export const DetailsContent = styled.div`
  background-color: #ffffff;
  position: relative;
  top: -20px;
  height: 200px;
  border-radius: 20px;
  margin: 0 -20px;
  z-index: 0;
  padding: 30px 30px;
`

export const DetailsContentTitle = styled.h3`
  font-weight: 900;
  border-bottom: 2px solid #919ae4;
  width: fit-content;
  padding-bottom: 10px;
  margin-bottom: 10px;
`
export const DetailsListLabel = styled.span`
  color: #8d9297;
  min-width: 100px;
  display: inline-block;
  margin: 10px 0;
`

export const BackIcon = styled.div`
  display: block;
  width: fit-content;
  margin-bottom: 10px;
`
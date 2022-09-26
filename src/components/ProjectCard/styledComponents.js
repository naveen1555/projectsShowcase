import styled from 'styled-components'

export const ProjectCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const ProjectCardImage = styled.img`
  height: 240px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const ProjectCardName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
`

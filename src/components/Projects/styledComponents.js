import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f1f5f9;
  height: 110px;
  width: 100%;
  padding-left: 230px;
`

export const NavBarImage = styled.img`
  height: 80px;
  width: 240px;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1300px;
  margin-top: 50px;
`
export const SelectInput = styled.select`
  width: 450px;
  height: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding-left: 15px;
  font-size: 16px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
`
export const Option = styled.option`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
export const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
  padding-left: 0px;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const FailureImage = styled.img`
  height: 500px;
  width: 900px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
`
export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  outline: none;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  cursor: pointer;
`

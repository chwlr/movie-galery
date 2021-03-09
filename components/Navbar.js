import styled from 'styled-components'

const NavContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #83c5be;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edf6f9;
`


const Navbar = () => {
  return (
    <NavContainer>
      <span>Movie Gallery</span>
    </NavContainer>
  )
}

export default Navbar
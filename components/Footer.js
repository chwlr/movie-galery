import styled from 'styled-components'

const FooTainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #83c5be;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edf6f9;
  clear: both;
  margin-top: 60px;
  position: relative;
`

const Footer = () => {
  return (
    <FooTainer>
      <span>Online Take Home Test</span>
    </FooTainer>
  )
}

export default Footer
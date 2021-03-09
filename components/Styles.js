import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row ${props => props.flexDir};
  flex-wrap: wrap;
`

const AutoComplete = styled.div`
  display: flex; 
  align-items: center; 
  flex-direction: column; 
  width: 600px;
  padding: 10px;
  margin-top: 10px;
  background: #e29578;
  border-radius: 25px;
  color: #fff;
  border:1px solid #ffddd2;
`

const Card = styled.div`
  width:250px;
  height:350px;
  background-color: #83c5be;
  margin : 50px auto 0 auto;
  box-shadow:5px 5px 85px -14px #ffddd2;
  border-radius: 4px;
  color: #edf6f9;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    margin-top: 5px;
    padding: 2px 15px;
  }
`
const Button = styled.div`
  background-color:#e29578;
	border-radius:28px;
	border:1px solid #ffddd2;
	display:inline-block;
	cursor:pointer;
	color:#edf6f9;
	font-family:Arial;
	font-size:17px;
	padding:10px 31px;
	text-decoration:none;
`

const Input = styled.input`
  padding: 5px 5px;
  margin-top: 10px;
  border-radius:28px;
	border:1px solid #ffddd2;
  background: #e29578;
  &:focus {
    outline: none;
  }
`



export { Container, Card, Button, Input, AutoComplete }
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

export default function Home() {
  return (
    <Container>
      <Link href="/movies">
        <Button>Get All Movies</Button>
      </Link>
     </Container>
  )
}

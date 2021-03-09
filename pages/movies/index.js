import { useState, useRef } from 'react'
import Image from 'next/image'
import axios from "axios"
import { Container, Card, Button, Input, AutoComplete } from "../../components/Styles"
import Link from "next/link"

export const getStaticProps = async () => {
  
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b72892f67476a3c410fea4c01d6eab97&language=en-US&page=1`)

  return {
    props: { movies: res.data.results }
  }
}

const Movies = ({ movies }) => {

  const btnLoadMore = useRef(null);

  const [count, setCount] = useState(2);
  const [dataMovies, setDataMovies] = useState(movies)
  const [searchTerm, setSearchTerm] = useState("")
  const [display, setDisplay] = useState(false)
  
  const handleClick = () => {


    if(count == 5) {
      btnLoadMore.current.style.display = "none"
    }else {
      setCount(count + 1)
      loadMore()
    }
  }

  const loadMore = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b72892f67476a3c410fea4c01d6eab97&language=en-US&page=${count}`)
    let data = res.data.results

    setDataMovies([...dataMovies, ...data])
  }


  return (
    
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Input  type="text" placeholder="search" onChange={event => {
        setSearchTerm(event.target.value)
      }} onClick = {() => setDisplay(!display)} />

      {display && (
        <AutoComplete>
          {
            dataMovies.filter(val => {
            if (searchTerm == "") {
              return val
            } else if ( val.title.toLowerCase().includes(searchTerm.toLowerCase()) ) {
              return val
            }
            }).map(list => (
              <Link href={'/movies/' + list.id} key={list.id}>{list.title}</Link>
            ))
          }
        </AutoComplete>
      )}

      <Container style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {dataMovies.map( movie => (
          <Link href={'/movies/' + movie.id} key={movie.id}>
            <Card>
              <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} width={250} height={280} alt={movie.title}/>
              <span>{movie.title}</span>
              <span> Release Date: {movie.release_date}</span>
            </Card>
          </Link>
        ))}
      </Container>
      <Button  style={{ marginTop: "50px" }} onClick={handleClick} ref={btnLoadMore}>Load More</Button>
    </div>
  )
}

export default Movies
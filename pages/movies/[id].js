import axios from 'axios'
import Image from 'next/image'
import { Container, Card } from '../../components/Styles'

export const getStaticPaths = async () => {
  let allData = []
  let i = 1
  while(i < 5) {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b72892f67476a3c410fea4c01d6eab97&language=en-US&page=${i}`)
    i++
    let data = res.data.results
    allData.push(data)
  }
  let movies = ([...allData[0], ...allData[1], ...allData[2], ...allData[3] ])

  


  const paths = movies.map(movie => {
    return {
      params: { id: movie.id.toString() }
    }
    
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b72892f67476a3c410fea4c01d6eab97&language=en-US`)
  const movie = res.data

  return {
    props: { movie }
  }
}


const MovieDetail = ({ movie }) => {
  return ( 
    <Container style={{ maxWidth: "1080px", margin: "0 auto", height: "100vh" }}>
          <Container flexDir="column">
            <Card>
                <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} width={250} height={350} alt={movie.title}/>
            </Card>
            <Container style={{ flexDirection: 'column', textAlign: "center", color: "#e29578" }}>
              <h1>{movie.title}</h1>
              <span>{movie.vote_average}</span>
              <p>{movie.tagline}</p>
              <p>{movie.overview}</p>
            </Container>
          </Container>
    </Container> 
  );
}
 
export default MovieDetail;
import Carousel from 'react-bootstrap/Carousel';


function Individual() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img style={{width:"1000px",height:"600px"}} src="https://flxt.tmsimg.com/assets/p11770738_b_v9_ad.jpg" />
        <Carousel.Caption>
          <h3>Rosewood</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{width:"1000px",height:"600px"}} src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
        <Carousel.Caption>
          <h3>Avatar</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"1000px",height:"600px"}} src="https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg" />
        <Carousel.Caption>
          <h3>Prison Break</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Individual;
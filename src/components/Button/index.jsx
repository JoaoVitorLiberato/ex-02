import {Container, Imagem} from './style'


export default function Button(props) {

  const { img, alt } = props

  return(
    <Container>
        <Imagem 
          src={img}
          alt={alt}
        />
    </Container>
  )
}
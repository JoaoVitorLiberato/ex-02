import Button from "./components/Button"
import { 
    Container, 
    ContainerButtons, 
    Title,
    CartItems,
    Cart,
    CartFooter,
    ContainerItems,
    ContainerLimitador
  } from './styles'

function App() {
  const hortFruti = [
    { 
      id: 1,
      img: './src/assets/img/alface.png',
      alt: 'Imagem DO alface',
    },
    { 
      id: 2,
      img: './src/assets/img/laranja.png',
      alt: 'Imagem da laranja',
    },
    { 
      id: 3,
      img: './src/assets/img/cereja.png',
      alt: 'Imagem da cereja',
    },
    { 
      id: 4,
      img: './src/assets/img/cenoura.png',
      alt: 'Imagem da cenoura',
    },
    { 
      id: 5,
      img: './src/assets/img/manga.png',
      alt: 'Imagem da verdura alface',
    },
    { 
      id: 6,
      img: './src/assets/img/limao.png',
      alt: 'Imagem do limão',
    },
    { 
      id: 7,
      img: './src/assets/img/beterraba.png',
      alt: 'Imagem da beterraba',
    },
    { 
      id: 8,
      img: './src/assets/img/tomate.png',
      alt: 'Imagem do tomate',
    },
  ]

  return (
    <Container>
      <ContainerLimitador>

        <Title>
          <h1>
            HortFruts
          </h1>
          <span>
            VnW
          </span>
        </Title>
        <ContainerItems>
          <div>
            <h2>
              Nossos Produtos
            </h2>
            <ContainerButtons>
              {
                hortFruti.map(item => (
                  <div
                    key={item.id}
                  >
                    <Button 
                      img={item.img}
                      alt={item.alt}
                    />
                  </div>
                ))
              }
            </ContainerButtons>

          </div>
          <Cart>
            <CartItems>
              <img 
                src="./src/assets/icons/ShoppingCart.svg" 
                alt="icone plus" 
              />
              <span>
                Arraste o seu produto aqui para colocar no carrinho
              </span>
            </CartItems>
            <CartFooter>
              <button>
                <img 
                  src="./src/assets/icons/PlusCircle.svg" 
                  alt="icone plus" 
                />
              </button>
              <button>
                <img 
                  src="./src/assets/icons/MinusCircle.svg" 
                  alt="icone minius" 
                />
              </button>
            </CartFooter>
          </Cart>
        </ContainerItems>
      </ContainerLimitador>
    </Container>
  )
}

export default App

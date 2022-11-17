import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <Button colorScheme="padrao" variant="solid">
        Texto do botão
      </Button>
      <Button colorScheme="padrao" variant="outlined">
        Texto do botão 2
      </Button>
      <Button colorScheme="padrao" variant="solid" isLoading>
        Texto do botão 3
      </Button>
      <Button colorScheme="padrao" disabled variant="solid">
        Texto do botão 4
      </Button>
      <Button colorScheme="padrao" disabled variant="outlined">
        Texto do botão 5
      </Button>
      <Text as="p" fontSize="sm">
        Texto pequeno
      </Text>
      <Text as="p" fontSize="md">
        Texto medio
      </Text>
      <Text as="h1" fontSize="lg">
        Texto grande
      </Text>
      <Button variant="outlined" colorScheme="blue">
        Botao personalizavel
      </Button>
      <Text align="center" as="p" fontSize="lg">
        Texto centralizado
      </Text>
      <Text align="start" as="p" fontSize="lg">
        Texto na direita
      </Text>
      <Text align="end" as="p" fontSize="lg">
        Texto na esquerda
      </Text>
    </div>
  );
}

export default App;

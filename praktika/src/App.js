import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Product
      img="https://www.towerhobbies.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dw9fa583d9/Images/TAM/TAM58714A_A0_Q5DVS6FV.jpg?sw=800&sh=800&sm=fit"
      category="Posters"
      title="Volkswagen Golf MK2"
      price="99.99"
      description="12 Unique designs All pieces are printed"
      availability="10"
      />
    </div>
  );
}

export default App;

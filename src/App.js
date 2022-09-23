
import './App.css';
import Card from './components/elements/card';
import { products } from './list';

function App() {
  return (
    <div className="App">
      <div className="container">
      <main className="products__cards">
        {products.map((item) => {
          return (
            <Card
            key={item.id}
            title={item.title}
            description={item.description}
            url={'images/'+ item.img}
            />
          )
        })}
        </main>
      </div>

    </div>
  );
}

export default App;

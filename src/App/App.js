import GoodsList from '../containers/GoodsList';
import CartList from '../containers/CartList';
import './App.css'

function App() {
  return (
    <div>
      {/* Вывод данных из хранилища */}
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;

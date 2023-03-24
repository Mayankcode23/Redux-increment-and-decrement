// import logo from './logo.svg';
// import './App.css';
// import { addToCart } from './redux/Action';
// import { useDispatch } from 'react-redux';

// function App() {
//   const dispatch = useDispatch();
//   const product={
//     name:"mayank",
//     price:100,
//   }
//   return (
//     <div className="App">

//     <button onClick={()=>dispatch(addToCart(product))}>submit</button>
//     </div>
//   );
// }

// export default App;


import './App.css';
import Page from './Page';
const App = () => {
  return (
    <div>
      <Page/>
    </div>
  )
}

export default App;

import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store/store";

function App(){
  return(
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App;
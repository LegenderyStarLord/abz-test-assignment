import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Users/UsersContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import RegistrationContainer from "./components/Registration/RegistrationContainer";


function App() {
  return (
      <div className={"container"}>
          <div className={"main-container"}>
              <Navbar />
              <Description />
              <Provider store={store}>
                  <UsersContainer />
                  <RegistrationContainer />
              </Provider>
              <Footer />
          </div>
      </div>
  )
  ;
}

export default App;

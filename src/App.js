import { MenuUI } from "./components/menu-UI/index";
import {menus} from './components/data.js'

function App() {
  return (
    <div>
     <MenuUI menus={menus} />
    </div>
  );
}

export default App;

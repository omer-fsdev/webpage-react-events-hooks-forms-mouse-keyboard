import Events from "./1-events/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Form from "./3-forms/Form";
import MouseKeyboard from "./4-mouse-keyBoard/MouseKeyboard";

function App() {
  return (
    <div>
      <Events />
      <Hooks />
      <Form />
      <MouseKeyboard />
    </div>
  );
}

export default App;

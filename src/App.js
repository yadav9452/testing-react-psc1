import "./App.css";
import LoadingIndicator from "./Component/LoadingIndicator";

export default function App() {
  const hello = "hello how are you";
  return (
    <div className="App">
      <h1>App testing</h1>
      <LoadingIndicator hello={hello} />
    </div>
  );
}

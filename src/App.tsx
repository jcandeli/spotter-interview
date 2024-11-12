import TimerProvider from "./context/TimerContext";
import Timer from "./components/Timer";

function App() {
  return (
    <TimerProvider>
      <Timer />
    </TimerProvider>
  );
}

export default App;

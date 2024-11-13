import { useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
import TimerProvider from "./context/TimerContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Button
        variation="invisible"
        onClick={() => setIsOpen(true)}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Open timer
      </Button>
      <TimerProvider>
        <Timer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </TimerProvider>
    </main>
  );
}

export default App;

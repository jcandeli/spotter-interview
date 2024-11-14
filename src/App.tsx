import styled from "@emotion/styled";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
import TimerProvider from "./context/TimerContext";

const Main = styled.main<{ isDarkMode: boolean }>`
  --primary-color: #000;
  --secondary-color: #dde4e9;
  --background-color: #657d8b;
  --modal-background-color: #bdc8cd;
  --modal-heading-color: #82929a;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    --primary-color: #fff;
    --secondary-color: #263238;
    --background-color: #263238;
    --modal-background-color: #546e7a;
    --modal-heading-color: #37474f;
    `}

  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Main isDarkMode={isDarkMode}>
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          padding: "0.5rem",
          background: "transparent",
          color: "var(--primary-color)",
          border: "none",
          cursor: "pointer",
          zIndex: 100,
        }}
      >
        {isDarkMode ? (
          <Sun size={20} aria-label="Light mode" />
        ) : (
          <Moon size={20} aria-label="Dark mode" />
        )}
      </button>
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
        New timer
      </Button>
      <TimerProvider>
        <Timer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </TimerProvider>
    </Main>
  );
}

export default App;

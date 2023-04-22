import Game from "./Game/Game";
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
      <Game />
      <Analytics />
    </>
  );
}

export default App;

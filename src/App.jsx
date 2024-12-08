import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime= {1} />
        <TimeChallenge title="Not easy" targetTime={7} />
        <TimeChallenge title="Getting tough" targetTime={5} />
        <TimeChallenge title="Pros only" targetTime={10} />
      </div>
    </>
  );
}

export default App;

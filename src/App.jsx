import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targtTime={1} />
        <TimeChallenge title="Not easy" targtTime={7} />
        <TimeChallenge title="Getting tough" targtTime={5} />
        <TimeChallenge title="Pros only" targtTime={10} />
      </div>
    </>
  );
}

export default App;

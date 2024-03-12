import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard.jsx";
export function App() {
  const formatUserName = (useName) => `@${useName}`;
  return (
    <section className="App">
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        username="midudev"
        name="Miguel Angel Duran"
      />
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        username="midudev"
        name="Carlos Andres Cuenca"
      />
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing
        username="midudev"
        name="Carlos Andres Cuenca"
      />
    </section>
  );
}

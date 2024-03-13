import { useState } from "react";
import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard.jsx";
export function App() {
  //const formatUserName = (useName) => `@${useName}`; --> Pasando una funcion a un prop
  // formatUserName={formatUserName} en las props
  //const formattedUserName = <span>@{username}</span>;

  return (
    <section className="App">
      <TwiterFollowCard username="midudev" InitialIsFollowing={true}>
        Miguel Angel Duran
      </TwiterFollowCard>
      <TwiterFollowCard username="midudev">Carlos Cuenca</TwiterFollowCard>
    </section>
  );
}

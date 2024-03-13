import { useState } from "react";
import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard.jsx";
export function App() {
  //const formatUserName = (useName) => `@${useName}`; --> Pasando una funcion a un prop
  // formatUserName={formatUserName} en las props
  //const formattedUserName = <span>@{username}</span>;
  /* <TwiterFollowCard username="midudev" InitialIsFollowing={true}>
        Miguel Angel Duran
      </TwiterFollowCard>
      <TwiterFollowCard username="midudev">Carlos Cuenca</TwiterFollowCard>*/
  const users = [
    { username: "midudev", name: "Miguen Angel Duran", isFollowing: true },
    { username: "Andresccc33", name: "Miguen Angel Duran", isFollowing: true },
    { username: "texasjock", name: "Miguen Angel Duran", isFollowing: true },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { username, name, isFollowing } = user;
        return (
          <TwiterFollowCard
            key={username}
            username={username}
            InitialIsFollowing={isFollowing}
          >
            {name}
          </TwiterFollowCard>
        );
      })}
    </section>
  );
}

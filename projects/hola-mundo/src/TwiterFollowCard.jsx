import { useState } from "react";

export function TwiterFollowCard({ children, username, InitialIsFollowing }) {
  //const imageSrc = `https://unavatar.io/${userNamel}`
  // <article style={{ display: "flex", alignItems: "center", color: "#fff" }}> -> se asigna en react native pero es muy tedioso
  const [isFollowing, setIsFollowing] = useState(InitialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const butttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="md-tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de Midudev"
          //src={imageSrc}
          src={`https://unavatar.io/${username}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={butttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-StopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

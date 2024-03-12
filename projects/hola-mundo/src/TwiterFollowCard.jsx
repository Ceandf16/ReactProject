export function TwiterFollowCard({
  formatUserName,
  username,
  name,
  isFollowing,
}) {
  //const imageSrc = `https://unavatar.io/${userNamel}`
  // <article style={{ display: "flex", alignItems: "center", color: "#fff" }}> -> se asigna en react native pero es muy tedioso
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
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(username)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

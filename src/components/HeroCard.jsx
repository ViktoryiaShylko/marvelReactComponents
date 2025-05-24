function HeroCard(props) {
  const { name, universe, alterego, occupation, superpowers, url, info } =
    props.hero;
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <p className="universe">{universe}</p>
      <p className="alterego">{alterego}</p>
      <p className="occupation">{occupation}</p>
      <p className="superpowers">{superpowers}</p>
      <img src={url} alt={name} />
      <p className="info">{info}</p>
    </div>
  );
}
export default HeroCard;

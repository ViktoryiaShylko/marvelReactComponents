function HeroCard(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <img src={props.imgLink} alt={props.title} />
      <p className="universe">{props.universe}</p>
      <p className="alterego">{props.alterego}</p>
      <p className="superpower">{props.superpower}</p>
      <p className="description">{props.description}</p>
    </div>
  );
}
export default HeroCard;

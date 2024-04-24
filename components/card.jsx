import '../app/styles/card.css'

export default Card = (props) => {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;

};

import classes from "./RepoDetail.module.css";

function RepoDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.name}</h1>
      <url>{props.url}</url>
      <p>{props.description}</p>
    </section>
  );
}

export default RepoDetail;

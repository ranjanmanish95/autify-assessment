import Card from "../ui/Card";
import classes from "./RepoItem.module.css";
import { useRouter } from "next/router";

function RepoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} className={classes.github} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.url}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default RepoItem;

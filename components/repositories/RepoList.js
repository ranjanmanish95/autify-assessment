import RepoItem from "./RepoItem";
import classes from "./RepoList.module.css";
import { useState } from "react";

function RepoList(props) {
  const [query, setQuery] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Search your repository by name"
        className={classes.search}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <ul className={classes.list}>
        {props.repos
          .filter((repo) => repo.name.includes(query))
          .map((repo) => (
            <RepoItem
              key={repo.id}
              id={repo.id}
              image="https://pngimg.com/uploads/github/github_PNG28.png"
              name={repo.name}
              url={repo.url}
            />
          ))}
      </ul>
    </>
  );
}

export default RepoList;

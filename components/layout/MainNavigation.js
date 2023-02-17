import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Github With GraphQl</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Repository</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

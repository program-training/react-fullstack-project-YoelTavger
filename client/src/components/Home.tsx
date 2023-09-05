import "./Home.css";

interface Props {
  flagTrips: any;
  flagHome: any;
}
export default function Home(props: Props) {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
                Home
              </span>
            </a>
          </li>
          <li
            onClick={() => {
              props.flagTrips(true);
              props.flagHome(false);
            }}
          >
            <a target="_blank" rel="noreferrer noopener">
              <span>
                <svg role="img" viewBox="0 0 24 24">
                  <title>All trips</title>
                </svg>
                Trips
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <span>
                <svg role="img" viewBox="0 0 24 24">
                  <title>Sign</title>
                </svg>
                Sign
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener">
              <span>
                <svg>
                  <title>Login</title>
                </svg>
                Login
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
    // <div className="home">
    //   <button
    //     onClick={() => {
    //       props.flagTrips(true);
    //       props.flagHome(false);
    //     }}
    //   >
    //     get all the trips
    //   </button>
    //   <button>sign up</button>
    //   <button>log in</button>
    // </div>
  );
}

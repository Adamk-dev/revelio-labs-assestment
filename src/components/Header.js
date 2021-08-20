import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DARK_MODE } from "../Redux/types";

const Header = () => {
  const dispatch = useDispatch();

  const dmode = useSelector((state) => state?.configReducer?.mode);

  const handleClick = () => {
    dispatch({
      type: DARK_MODE,
      payload: !dmode,
    });
  };

  return (
    <>
      <div className="nav-link d-flex flex-row">
        <img
          src={require("../assets/logo.png").default}
          className="logo align-self-center"
        />
        <h1 className="heading">Hacker News</h1>
        <NavLink
          to="/latest"
          activeClassName="active"
          className="text-center align-self-center baseColor"
        >
          latest
        </NavLink>
        <NavLink
          to="/starred"
          activeClassName="active"
          className="text-center align-self-center baseColor"
        >
        | starred
        </NavLink>

        {/* <span className="text-center align-self-center">| starred</span> */}

        <div className="dark-mode-icon" onClick={handleClick}>
          {dmode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-moon-fill text-center align-self-center justify-content-end"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="text-center align-self-center bi bi-brightness-high-fill justify-content-end"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IconContext } from "react-icons";
// import { useDispatch } from "react-redux";
// import { openUserProfileModal } from "../../../store/actions/users";
import styles from "./LoggedInAs.module.scss";
import LogOut from "../logout/Logout";

const LoggedInAs = () => {
  const userName = useSelector((state) => state.auth.user.userName);
  // const userImage = useSelector((state) => state.auth.user.userImageUrl);
  const [showChevronDownIcon, setShowChevronDownIcon] = useState(true);

  // const dispatch = useDispatch();

  const showChevronDownOrUp = () => {
    switch (showChevronDownIcon) {
      case true:
        setShowChevronDownIcon(!showChevronDownIcon);
        break;
      case false:
        setShowChevronDownIcon(!showChevronDownIcon);
        break;
      default:
    }
  };

  // TODO: delay for 2seconds redirect to the home page upon successful logout

  return (
    <Fragment>
      <div className={styles["logged__in__as__container"]}>
        <div className={styles["user__data__container"]}>
          <div id="edit-user-profile">{/* <UserImage /> */}</div>
          <div className={styles["user__name__container"]}>
            <span>{userName}</span>
          </div>
          <IconContext.Provider
            value={{
              size: "1.2em",
              color: "hsl(0, 0%, 95%)",
              className: "global-class-name",
            }}
          >
            <div
              onClick={() => showChevronDownOrUp()}
              className={styles["chevron__icon__container"]}
            >
              {showChevronDownIcon ? (
                <GoChevronDown className={styles["chevron__down__icon"]} />
              ) : (
                <GoChevronUp className={styles["chevron__up__icon"]} />
              )}
            </div>
            {!showChevronDownIcon && (
              <div className={styles["log__out__container"]}>
                <LogOut />
              </div>
            )}
          </IconContext.Provider>
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedInAs;

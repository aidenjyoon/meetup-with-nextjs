import { Fragment } from "react";
import styles from "./MeetupDetails.module.scss";

const MeetupDetail = (props) => {
  return (
    <Fragment className={styles.detail}>
      <img>{props.image}</img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>details</p>
    </Fragment>
  );
};

export default MeetupDetail;

import { Center } from "@chakra-ui/react";
import React from "react"
import styles from "./loadingText.module.css"


const LoadingScreen = () => {
  return (
    <Center>
    <div id={styles.wifi_loader}>
    <svg className={styles.circle_outer} viewBox="0 0 86 86">
        <circle className={styles.back} cx="43" cy="43" r="40"></circle>
        <circle className={styles.front} cx="43" cy="43" r="40"></circle>
        <circle className={styles.new} cx="43" cy="43" r="40"></circle>
    </svg>
    <svg className={styles.circle_middle} viewBox="0 0 60 60">
        <circle className={styles.back} cx="30" cy="30" r="27"></circle>
        <circle className={styles.front} cx="30" cy="30" r="27"></circle>
    </svg>
    <svg className={styles.circle_inner} viewBox="0 0 34 34">
        <circle className={styles.back} cx="17" cy="17" r="14"></circle>
        <circle className={styles.front} cx="17" cy="17" r="14"></circle>
    </svg>
    <div className={styles.text} data-text="Loading...."></div>
</div>
</Center>
  );
};

export default LoadingScreen;
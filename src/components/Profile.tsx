import { Profiler } from "inspector";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/leandrorangel94.png" alt="Leandro Rangel" />

            <div>
                <strong>Leandro Rangel</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
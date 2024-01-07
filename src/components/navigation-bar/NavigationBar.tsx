import {ReactComponent as ViteLogo} from '@/assets/alien-agency-skinny.svg';
import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <ViteLogo/>
                </div>
            </div>
            <div>
                <ol>
                    <li></li>
                </ol>
            </div>
        </nav>
    )
}
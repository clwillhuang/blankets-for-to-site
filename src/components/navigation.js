import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const pages = [
    { to: "/", desc: "Home" },
    { to: "/about/", desc: "About" },
    { to: "/team/", desc: "Team" },
    { to: "/positions/", desc: "Volunteers and Positions" },
    { to: "/contact/", desc: "Contact" },
    { to: "/blog/", desc: "Updates" },
  ]

export default () => {

    const [drawerActive, setDrawer] = React.useState(false);

    const changeState = () => {
        setDrawer(!drawerActive);
        console.log(drawerActive);
    }

    return (
        <nav role="navigation">
            <div className={styles.logo}>
                <h1>Blankets For Toronto</h1>
            </div>

            {true ?
                <div className={styles.toggle}>
                    <li className={styles.navigationItem} onClick={changeState}>Navigation
                    </li>
                </div>
                : null}
            <ul className={styles.navigation}
                style={drawerActive ? { top: "17vh" } : { top: "-150%" }}
            >
                {
                    pages.map((page) => {
                        return (
                            <li className={styles.navigationItem} key={page.desc}>
                                <Link to={page.to}>{page.desc}</Link>
                            </li>
                        )
                    })
                }
                {drawerActive ?
                    <li className={styles.navigationItem}
                        onClick={changeState}>
                        Close Menu
                </li> : null}
            </ul>

        </nav>)
}
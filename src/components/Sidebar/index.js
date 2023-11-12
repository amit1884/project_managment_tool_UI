import React from "react";
import styles from "./sidebar.module.scss";
import { SIDEBAR_MENU_ITEMS } from "@/constants/appConstants";
import Link from "next/link";
function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.menuContainer}>
        {SIDEBAR_MENU_ITEMS?.map((menu, index) => {
          return (
            <Link href={menu.path}className={styles.menusContainer__menu} key={index}>
              <div className={styles.menusContainer__menu__icon}>{menu.icon}</div>
              <div className={styles.menusContainer__menu__text}>{menu.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

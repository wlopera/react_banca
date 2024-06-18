import React, { useState } from "react";
import Menu from "../../components/menu/";
import User from "../admin/user";
import Account from "../admin/Account";

import { administrators } from "../../data/data";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState("/admin/user");
  const data = administrators;

  const getContext = () => {
    switch (selectedOption) {
      case "/admin/user":
        return <User />;

      case "/admin/account":
        return <Account />;

      default:
        break;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu
          title="Administrador Bancario"
          data={data}
          onSelected={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className={styles.body}>{getContext()}</div>
    </div>
  );
};

export default HomeScreen;

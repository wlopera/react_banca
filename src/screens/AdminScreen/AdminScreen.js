import React, { useState } from "react";
import Menu from "../../components/menu";
import User from "../admin/User";
import Client from "../admin/Client";
import Account from "../admin/Account";

import { administrators } from "../../data/data";
import Header from "../../components/header";
import Body from "../../components/body";
import Footer from "../../components/footer";
import { observer } from "mobx-react";
import store from "../../store/store";

import styles from "./AdminScreen.module.css";

const AdminScreen = () => {
  const [selectedOption, setSelectedOption] = useState("/admin/user");
  const data = administrators;

  const getContext = () => {
    switch (selectedOption) {
      case "/admin/user":
        return <User />;

      case "/admin/client":
        return <Client />;

      case "/admin/account":
        return <Account />;

      default:
        break;
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.mainWrapper}>
        <Menu
          title="Administrador Bancario"
          data={data}
          onSelected={setSelectedOption}
          selectedOption={selectedOption}
        />
        <Body>
          <div className={styles.body}>{getContext()}</div>
        </Body>
      </div>
      <Footer messages={store.messages} />
    </div>
  );
};

export default observer(AdminScreen);

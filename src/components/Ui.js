import React from 'react';

import Burguer from "../components/ui/Burguer";
import Nav from "../components/ui/Nav";
import Share from "../components/ui/Share";

import {
  useLocation,
} from "react-router-dom";

const Ui = () => {
  let { pathname } = useLocation();
  let isExp = pathname.split("/")[1] === "exp";

  return (
    <div>
      {isExp && <Burguer />}
      {/* {isExp && <Share />} */}
      {isExp && <Nav />}
    </div>
  );
};

export default Ui;
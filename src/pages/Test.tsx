import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  backUrl,
  isAuthentified,
  redirectToLogin,
  UserInterface,
} from "../globals";

const Test = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    isAuthentified().then((user) => {
      if (user === null) setRedirect(true);
    });
  });

  if (redirect) return <Navigate to={"/login"} />;

  return <div>test page</div>;
};

export default Test;

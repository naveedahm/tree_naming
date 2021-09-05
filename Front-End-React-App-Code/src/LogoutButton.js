import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const uri = "https://nametreesfornaveeed.s3.us-west-2.amazonaws.com/index.html"
  return (
    <button onClick={() => logout({ returnTo: uri })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
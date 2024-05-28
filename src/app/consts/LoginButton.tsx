"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { generatePayload, isLoggedIn, login, logout } from "../actions/auth";

export const LoginButton = () => {
  return (
    <ConnectButton
      autoConnect={true}
      client={client}
      auth={{
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          return await isLoggedIn();
        },
        doLogin: async (params) => {
          console.log("logging in!");
          await login(params);
        },
        getLoginPayload: async ({ address }) => generatePayload({ address }),
        doLogout: async () => {
          console.log("logging out!");
          await logout();
        },
      }}
    />
  );
};

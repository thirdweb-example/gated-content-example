"use client";
import { LoginButton } from "../consts/LoginButton";

export const GatedContent = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <LoginButton />
      </div>
      <div className="text-center mt-12">
        Welcome, stranger. Only a selected few can see this message. You are
        rare!
      </div>
    </div>
  );
};

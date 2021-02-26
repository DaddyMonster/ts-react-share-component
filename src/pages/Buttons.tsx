import { Button } from "@material-ui/core";
import React from "react";
import RootLayout from "../layouts/RootLayout";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <RootLayout title="버튼" description="버튼 컴포넌트 모음">
      <div className="py-3 flex items-center">
        <Button className="text-red-300 font-pen bg-red-500">
          SIMPLE BUTTOHN
        </Button>
        <h1 className="font-logo">
          Dolore nulla excepteur esse tempor dolore eiusmod aute.
        </h1>
        <h1 className="font-pen">
          Dolore nulla excepteur esse tempor dolore eiusmod aute.
        </h1>
        <h1 className="font-guide">
          Dolore nulla excepteur esse tempor dolore eiusmod aute.
        </h1>
      </div>
    </RootLayout>
  );
};

export default Buttons;

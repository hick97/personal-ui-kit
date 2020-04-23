import React from "react";
import { storiesOf } from "@storybook/react";

import { Separator } from "../src";

storiesOf("Separator", module).add("Default", () => (
  <div
    style={{
      width: "500px",
      padding: "20px 10px",
      backgroundColor: "#111",
    }}
  >
    <Separator />
  </div>
));

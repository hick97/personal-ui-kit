import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Button", module).add("Default", () => <Button>BUTTON</Button>);
storiesOf("Button", module).add("Outlined", () => (
  <Button outlined>BUTTON</Button>
));
storiesOf("Button", module).add("Disabled", () => (
  <Button disabled>BUTTON</Button>
));

import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Radio } from "../src";

storiesOf("Radio", module)
  .add("Radio Group", () => {
    const allOptions = [
      { id: 1, value: "First value" },
      { id: 2, value: "Second value" },
    ];

    const [option, setOption] = useState(allOptions[1].id);

    return (
      <form>
        {allOptions.map((item) => (
          <Radio
            name="radio"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={option === item.id}
            onChange={() => setOption(Number(item.id))}
          />
        ))}
      </form>
    );
  })
  .add("Checked Radio", () => (
    <Radio
      label="Checked"
      value="Checked"
      name="radio"
      defaultChecked={true}
      readOnly
    />
  ))
  .add("Unchecked Radio", () => (
    <Radio
      label="Unchecked"
      value="Unchecked"
      name="radio"
      checked={false}
      readOnly
    />
  ));

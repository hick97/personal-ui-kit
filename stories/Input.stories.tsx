import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../src";

import { FaSearch } from "react-icons/fa";

storiesOf("Input", module)
  .add("Default", () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <Input
        name="search"
        type="text"
        placeholder="Placeholder..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add("With icon", () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <Input
        name="search"
        type="text"
        placeholder="Placeholder..."
        value={inputValue}
        setValue={setInputValue}
        icon={<FaSearch />}
      />
    );
  });

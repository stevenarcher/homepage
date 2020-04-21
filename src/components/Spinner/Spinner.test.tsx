import React from "react";
import { render } from "@testing-library/react";
import { usage } from "./Spinner.stories";

test("<Spinner>", () => {
  const wrapper = render(usage());
  expect(wrapper).toMatchSnapshot();
});

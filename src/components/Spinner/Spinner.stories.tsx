import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "Spinner",
  parameters: {
    component: Spinner,
    componentSubtitle:
      "Spinner is a pure css animating spinner for use when data is loading"
  }
};

export const usage = () => <Spinner />;

export const spinnerSize = () => <Spinner spinnerSize={64} />;

spinnerSize.story = {
  parameters: {
    docs: {
      storyDescription:
        "The `spinnerSize` prop can be used to control the size of the spinner"
    }
  }
};

export const spinnerColor = () => <Spinner spinnerColor="red" />;

spinnerColor.story = {
  parameters: {
    docs: {
      storyDescription:
        "The `spinnerColor` prop can be used to control the color of the spinner"
    }
  }
};

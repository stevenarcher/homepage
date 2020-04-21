import { shallow } from "enzyme";
import { usage } from "./Button.stories";

describe("<Button>", () => {
  it("renders correctly", () => {
    const wrapper = shallow(usage());
    expect(wrapper).toMatchSnapshot();
  });
});

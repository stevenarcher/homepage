import { shallow } from "enzyme";
import { usage } from "./ButtonGroup.stories";

describe("<ButtonGroup>", () => {
  it("renders correctly", () => {
    const wrapper = shallow(usage());
    expect(wrapper).toMatchSnapshot();
  });
});

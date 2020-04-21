import * as React from 'react'
import { Icon } from '.'
import { Text } from '../Text'
import { Heading } from '../Heading'
import Theme from "../../theme";
import { DemoUl, DemoLi, DemoBox } from './Icon.styles'

import { paths } from './Icon.paths'

const allIcons = Object.keys(paths).map((path: string, index: number) => {
  return (
    <DemoLi key={index}>
      <DemoBox>
        <Icon iconName={path} iconSize={Theme.fontSizes[6]} />
        <Text
          as="span"
          color={Theme.colors.grey}
          textAlign="center"
          marginTop={Theme.space[4]}
        >
          {path}
        </Text>
      </DemoBox>
    </DemoLi>
  )
});

export default {
  title: 'Icon',
  parameters: {
    component: Icon,
    componentSubtitle:
      'Icon renders an icon from a subset of material design icons. More will follow once designs are approved and new icons can easily added to the paths. Icon is of type svg and the "iconName" prop is required'
  }
}

export const usage = () => (
  <Icon iconName="baseline_info">Click me</Icon>
);

export const className = () => (
  <Icon className="some-class" iconName="baseline_info">
    Click me
  </Icon>
);

className.story = {
  parameters: {
    docs: {
      storyDescription: 'The `className` prop can be used to set a class name'
    }
  }
};

export const allPaths = () => <DemoUl>{allIcons}</DemoUl>

allPaths.story = {
  parameters: {
    docs: {
      storyDescription: 'These are all icons currently available'
    }
  }
};

export const iconName = () => <Icon iconName="baseline_add_circle" />;

iconName.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `iconName` prop can be used to control which icon to display'
    }
  }
};

export const iconFill = () => (
  <Icon iconFill={Theme.colors.primary} iconName="baseline_info" />
);

iconFill.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `iconFill` prop can be used to control the icon fill color'
    }
  }
};

export const iconSize = () => (
  <Icon iconSize={96} iconName="baseline_info" />
);

iconSize.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `iconSize` prop can be used to control the size of the icon'
    }
  }
};

export const style = () => (
  <Icon style={{ margin: 32 }} iconName="baseline_info" />
);
style.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `style` prop allows for addtional css to be applied inline'
    }
  }
};

export const functionalTest = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Icon iconName="baseline_info" iconSize={Theme.fontSizes[8]} />
    <Heading as="h1" display="inline">
      Heading
    </Heading>
  </div>
);

functionalTest.story = {
  parameters: {
    docs: {
      storyDescription:
        'Test icon size using fontSizes[8] which is what heading h1 font size uses under the hood'
    }
  }
};

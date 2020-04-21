import * as React from 'react'
import { Text } from '.'
import Theme from "../../theme";

export default {
  title: 'Text',
  parameters: {
    component: Text,
    componentSubtitle:
      'Text can be used for a restricted number of html elements. The "as" prop is required'
  }
}

export const usage = () => (
  <>
    <Text as="p">Text p</Text>
    <Text as="div">Text div</Text>
    <Text as="span">Text span</Text>
  </>
)

export const textAlign = () => (
  <Text as="p" textAlign="right">
    Text
  </Text>
)

textAlign.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `textAlign` prop can be used to set the css value text-align'
    }
  }
}

export const fontSize = () => (
  <>
    <Text as="p" fontSize={Theme.fontSizes[0]}>
      xs
    </Text>
    <Text as="p" fontSize={Theme.fontSizes[1]}>
      sm
    </Text>
    <Text as="p" fontSize={Theme.fontSizes[2]}>
      p
    </Text>
  </>
)

fontSize.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `fontSize` prop can be used to set the css value font-size'
    }
  }
}

export const fontWeight = () => (
  <>
    <Text as="p" fontWeight="bold">
      Bold
    </Text>
    <Text as="p" fontWeight="medium">
      Medium
    </Text>
    <Text as="p" fontWeight="regular">
      Regular
    </Text>
    <Text as="p" fontWeight="light">
      Light
    </Text>
  </>
)

fontWeight.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `fontWeight` prop can be used to set the css value font-weight'
    }
  }
}

export const color = () => (
  <Text as="p" color={Theme.colors.primary}>
    Text
  </Text>
)

color.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `color` prop can be used to set the css value color'
    }
  }
}

export const marginTop = () => (
  <Text as="p" marginTop={Theme.space[6]}>
    Text
  </Text>
)

marginTop.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginTop` prop can be used to set the css value margin-top'
    }
  }
}

export const marginRight = () => (
  <Text as="p" marginRight={Theme.space[6]}>
    Text
  </Text>
)

marginRight.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginRight` prop can be used to set the css value margin-right'
    }
  }
}

export const marginBottom = () => (
  <Text as="p" marginBottom={Theme.space[6]}>
    Text
  </Text>
)

marginBottom.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginBottom` prop can be used to set the css value margin-bottom'
    }
  }
}

export const marginLeft = () => (
  <Text as="p" marginLeft={Theme.space[6]}>
    Text
  </Text>
)

marginLeft.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginLeft` prop can be used to set the css value margin-left'
    }
  }
}

export const textTransform = () => (
  <Text as="p" textTransform="uppercase">
    Text
  </Text>
)

textTransform.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `textTransform` prop can be used to set the css value text-transform'
    }
  }
}

export const hasBottomBorder = () => (
  <Text
    as="p"
    hasBottomBorder={true}
    textTransform="uppercase"
    color={Theme.colors.primary}
  >
    Text
  </Text>
)

hasBottomBorder.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `hasBottomBorder` prop can be used to display a heading with a bottom-border'
    }
  }
}

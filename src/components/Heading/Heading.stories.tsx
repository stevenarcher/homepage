import React from 'react'
import { Heading } from '.'
import Theme from "../../theme";

export default {
  title: 'Heading',
  parameters: {
    component: Heading,
    componentSubtitle:
      'Heading can be used for all html headings. The "as" prop is required'
  }
}

export const usage = () => (
  <>
    <Heading as="h1">Heading h1</Heading>
    <Heading as="h2">Heading h2</Heading>
    <Heading as="h3">Heading h3</Heading>
    <Heading as="h4">Heading h4</Heading>
    <Heading as="h5">Heading h5</Heading>
    <Heading as="h6">Heading h6</Heading>
  </>
)

export const className = () => (
  <>
    <Heading as="h1">
      Heading h1
    </Heading>
    <Heading as="h2">
      Heading h2
    </Heading>
    <Heading as="h3">
      Heading h3
    </Heading>
    <Heading as="h4">
      Heading h4
    </Heading>
    <Heading as="h5">
      Heading h5
    </Heading>
    <Heading as="h6">
      Heading h6
    </Heading>
  </>
)

className.story = {
  parameters: {
    docs: {
      storyDescription: 'The `className` prop can be used to set a class name'
    }
  }
}

export const textAlign = () => (
  <Heading as="h1" textAlign="right">
    Heading
  </Heading>
)

textAlign.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `textAlign` prop can be used to set the css value text-align'
    }
  }
}

export const fontWeight = () => (
  <>
    <Heading as="h1" fontWeight="bold">
      Bold
    </Heading>
    <Heading as="h1" fontWeight="medium">
      Medium
    </Heading>
    <Heading as="h1" fontWeight="regular">
      Regular
    </Heading>
    <Heading as="h1" fontWeight="light">
      Light
    </Heading>
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
  <Heading as="h1" color={Theme.colors.primary}>
    Heading
  </Heading>
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
  <Heading as="h1" marginTop={64}>
    Heading
  </Heading>
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
  <Heading as="h1" marginRight={64}>
    Heading
  </Heading>
)

marginRight.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginRight` prop can be used to set the css value margin-top'
    }
  }
}

export const marginBottom = () => (
  <Heading as="h1" marginBottom={64}>
    Heading
  </Heading>
)

marginBottom.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginBottom` prop can be used to set the css value margin-top'
    }
  }
}

export const marginLeft = () => (
  <Heading as="h1" marginLeft={64}>
    Heading
  </Heading>
)

marginLeft.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `marginLeft` prop can be used to set the css value margin-top'
    }
  }
}

export const textTransform = () => (
  <Heading as="h1" textTransform="uppercase">
    Heading
  </Heading>
)

textTransform.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `textTransform` prop can be used to set the css value text-transform'
    }
  }
}

export const display = () => (
  <Heading as="h1" display="inline">
    Heading
  </Heading>
)

display.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `display` prop can be used to set one of a restricted set of display css values'
    }
  }
}

export const hasBottomBorder = () => (
  <Heading
    as="h1"
    hasBottomBorder={true}
    textTransform="uppercase"
    color={Theme.colors.primary}
  >
    Heading h1
  </Heading>
)

hasBottomBorder.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `hasBottomBorder` prop can be used to display a heading with a bottom-border'
    }
  }
}

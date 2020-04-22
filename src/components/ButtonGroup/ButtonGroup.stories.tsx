import React from 'react';
import {ButtonGroup} from './ButtonGroup';
import {Button} from '../Button';


export default {
  title: 'ButtonGroup',
  parameters: {
    component: ButtonGroup,
    componentSubtitle:
       'ButtonGroup is used to wrap multiple buttons and ensures consistant space between them'
  }
}

export const usage = () => (
   <ButtonGroup>
     <Button variant="ghost">Ghost</Button>
     <Button variant="primary">Primary</Button>
     <Button variant="secondary">Secondary</Button>
   </ButtonGroup>
)

export const className = () => (
   <ButtonGroup>
     <Button variant="ghost">Ghost</Button>
     <Button variant="primary">Primary</Button>
     <Button variant="secondary">Secondary</Button>
   </ButtonGroup>
)

className.story = {
  parameters: {
    docs: {
      storyDescription: 'The `className` prop can be used to set a class name'
    }
  }
}

export const space = () => (
   <ButtonGroup space={32}>
     <Button variant="ghost">Ghost</Button>
     <Button variant="primary">Primary</Button>
     <Button variant="secondary">Secondary</Button>
   </ButtonGroup>
)

space.story = {
  parameters: {
    docs: {
      storyDescription:
         'The `space` prop can be used to control the space between the Buttons'
    }
  }
}

export const justifyContent = () => (
   <ButtonGroup justifyContent="space-between">
     <Button variant="primary">Primary</Button>
     <Button variant="secondary">Secondary</Button>
   </ButtonGroup>
)

justifyContent.story = {
  parameters: {
    docs: {
      storyDescription:
         'The `justifyContent` prop can be used to set the css value justify-content'
    }
  }
}

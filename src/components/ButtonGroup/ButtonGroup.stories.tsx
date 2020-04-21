import React from 'react'
import {ButtonGroup} from './ButtonGroup';
import {Button} from '../Button';
import {ButtonVariant} from '../Button/Button';


export default {
  title: 'ButtonGroup',
  parameters: {
    component: ButtonGroup,
    componentSubtitle:
       'ButtonGroup is used to wrap multiple buttons and ensures consistant space between them'
  }
};

export const usage = () => (
   <ButtonGroup>
     <Button variant={ButtonVariant.GHOST}>Ghost</Button>
     <Button variant={ButtonVariant.PRIMARY}>Primary</Button>
     <Button variant={ButtonVariant.SECONDARY}>Secondary</Button>
   </ButtonGroup>
);

export const space = () => (
   <ButtonGroup space={32}>
      <Button variant={ButtonVariant.GHOST}>Ghost</Button>
      <Button variant={ButtonVariant.PRIMARY}>Primary</Button>
      <Button variant={ButtonVariant.SECONDARY}>Secondary</Button>
   </ButtonGroup>
);

space.story = {
  parameters: {
    docs: {
      storyDescription:
         'The `space` prop can be used to control the space between the Buttons'
    }
  }
};

export const justifyContent = () => (
   <ButtonGroup justifyContent="space-between">
     <Button variant={ButtonVariant.PRIMARY}>Primary</Button>
     <Button variant={ButtonVariant.SECONDARY}>Secondary</Button>
   </ButtonGroup>
)

justifyContent.story = {
  parameters: {
    docs: {
      storyDescription:
         'The `justifyContent` prop can be used to set the css value justify-content'
    }
  }
};

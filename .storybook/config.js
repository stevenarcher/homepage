import { create } from '@storybook/theming'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'


//Setup addon-a11y
 addDecorator(withA11y);

// Setup options and theme
addParameters({
  options: {
    theme: create({
      brandTitle: 'Tropic',
      brandUrl: 'https://www.stevenarcher.com/',
      brandImage: 'https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png',

    }),
    isFullscreen: false,
    panelPosition: 'bottom'
  }
});

// Use storybook `configure` to dynamically load stories
configure(require.context('../src/', true, /.stories.tsx$/), module);
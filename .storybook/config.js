import { create } from '@storybook/theming'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'


//Setup addon-a11y
 addDecorator(withA11y);

// Setup options and theme
addParameters({
  options: {
    theme: create({
      brandTitle: 'Steven Archer',
      brandUrl: 'https://www.stevenarcher.com/',

    }),
    isFullscreen: false,
    panelPosition: 'bottom'
  }
});

// Use storybook `configure` to dynamically load stories
configure(require.context('../src/', true, /.stories.tsx$/), module);

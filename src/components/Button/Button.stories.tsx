import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '.';
import {ButtonGroup} from '../ButtonGroup';
import {Icon} from '../Icon';
import Theme from '../../theme';
import {ButtonVariant} from './Button';

const handleClick = (event: React.MouseEvent<any>) => {
	action("handleClick")(event.currentTarget, event.currentTarget.type);
};

export default {
	title: "Button",
	parameters: {
		component: Button,
		componentSubtitle:
			"Button is an html button element of type button and defaults to variant secondary. It extends React.HTMLProps<HTMLButtonElement>"
	}
};

export const usage = () => <Button>Secondary</Button>;

export const variant = () => (
	<ButtonGroup>
		<Button variant={ButtonVariant.PRIMARY}>Primary</Button>
		<Button variant={ButtonVariant.SECONDARY}>Secondary</Button>
		<Button variant={ButtonVariant.GHOST}>Ghost</Button>
	</ButtonGroup>
);

variant.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `variant` prop is used to control which button style to display"
		}
	}
};

export const onClick = () => (
	<Button onClick={(event: React.MouseEvent) => handleClick(event)}>
		Secondary
	</Button>
);

onClick.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `onClick` prop is a pass through prop for the html attribute onClick. The event is passed by default"
		}
	}
};

export const type = () => (
	<Button
		type="submit"
		onClick={(event: React.MouseEvent) => handleClick(event)}
	>
		Secondary
	</Button>
);

type.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `type` prop is a pass through prop for the html attribute type"
		}
	}
};

export const display = () => (
	<Button variant={ButtonVariant.PRIMARY} display="block">
		Primary
	</Button>
);

display.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `display` prop is a pass through prop for the css value display"
		}
	}
};

export const disabled = () => (
	<ButtonGroup>
		<Button
			disabled
			onClick={(event: React.MouseEvent) => handleClick(event)}
			variant={ButtonVariant.GHOST}
		>
			Ghost
		</Button>
		<Button
			disabled
			onClick={(event: React.MouseEvent) => handleClick(event)}
			variant={ButtonVariant.PRIMARY}
		>
			Primary
		</Button>
		<Button
			disabled
			onClick={(event: React.MouseEvent) => handleClick(event)}
			variant={ButtonVariant.SECONDARY}
		>
			Secondary
		</Button>
	</ButtonGroup>
);

disabled.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `disabled` prop is a pass through prop for the html attribute disabled and onClick will not be called"
		}
	}
};

export const as = () => (
	<Button as="div" onClick={(event: React.MouseEvent) => handleClick(event)}>
		Secondary
	</Button>
);

as.story = {
	parameters: {
		docs: {
			storyDescription:
				"The `as` prop is a pass through prop for the StyledComponents polymorphic `as` prop and is restricted to a set of html element types"
		}
	}
};

export const functionalTest = () => (
	<ButtonGroup>
		<a
			href="http://www..com"
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<Button variant={ButtonVariant.GHOST} as="div">
				Ghost
				<Icon
					iconName="baseline_keyboard_arrow_right"
					style={{ marginLeft: Theme.space[2] }}
				/>
			</Button>
		</a>
		<a
			href="http://www..com"
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<Button variant={ButtonVariant.PRIMARY} as="div">
				Primary
				<Icon
					iconName="baseline_keyboard_arrow_right"
					style={{ marginLeft: Theme.space[2] }}
				/>
			</Button>
		</a>
		<a
			href="http://www..com"
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<Button variant={ButtonVariant.SECONDARY} as="div">
				Secondary
				<Icon
					iconName="baseline_keyboard_arrow_right"
					style={{ marginLeft: Theme.space[2] }}
				/>
			</Button>
		</a>
	</ButtonGroup>
);

functionalTest.story = {
	parameters: {
		docs: {
			storyDescription:
				"Test as child of `<a>` with icon. `text-decoration` will need to be set by parent `<a>`"
		}
	}
};

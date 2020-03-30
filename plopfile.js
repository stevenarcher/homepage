const validate = value => {
	let message = true
	if (!/.+/.test(value)) {
		message = 'Missing - you must define a util name'
	} else if (value.length < 3) {
		message = `Too Short - "${value}" is not descriptive enough`
	}
	return message
}

module.exports = function(plop) {
	plop.setGenerator('new', {
		description: 'Generate a new ...',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'What type would you like to create?',
				choices: ['Component', 'Page']
			},
			{
				type: 'input',
				name: 'name',
				message: 'What is it called?',
				validate
			},
			{
				type: 'input',
				name: 'about',
				message: 'What is it used for?',
				validate
			}
		],
		actions: function({ type }) {
			switch (type) {
				case 'Page':
					return [
						{
							type: 'add',
							path: 'src/pages/{{pascalCase name}}/index.ts',
							templateFile: 'generate/page/index.hbs'
						},
						{
							type: 'add',
							path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
							templateFile: 'generate/page/page.hbs'
						},
						{
							type: 'add',
							path:
								'src/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
							templateFile: 'generate/page/stories.hbs'
						},
						{
							type: 'add',
							path:
								'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
							templateFile: 'generate/page/styles.hbs'
						},
						{
							type: 'add',
							path:
								'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
							templateFile: 'generate/page/test.hbs'
						},
						{
							type: 'add',
							path:
								'src/pages/{{pascalCase name}}/{{pascalCase name}}.mocks.tsx',
							templateFile: 'generate/page/mocks.hbs'
						}
					]
				case 'Component':
				default:
					return [
						{
							type: 'add',
							path: 'src/components/{{pascalCase name}}/index.ts',
							templateFile: 'generate/component/index.hbs'
						},
						{
							type: 'add',
							path:
								'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
							templateFile: 'generate/component/component.hbs'
						},
						{
							type: 'add',
							path:
								'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
							templateFile: 'generate/component/stories.hbs'
						},
						{
							type: 'add',
							path:
								'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
							templateFile: 'generate/component/styles.hbs'
						},
						{
							type: 'add',
							path:
								'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
							templateFile: 'generate/component/test.hbs'
						}
					]
			}
		}
	})
}

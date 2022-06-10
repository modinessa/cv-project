module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'scr/*.{js,jsx}',
		'scr/**/**/*.{js,jsx}',
		'scr/**/**/**/*.{js,jsx}',
		'!scr/**/**/constants.{js,jsx}',
	],
};
const { readFileSync } = require('fs');

module.exports = async (filePath) => {
	try {
		const binnary = await readFileSync(filePath);
		return binnary.toString()
	} catch (error) {
		console.error(`File reading error: ${error.message}`);
	}
}
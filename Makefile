install:
		npm ci

test:
		npm test

publish: 
		npm publish --dry-run

lint:
		npx eslint .

fix: 
		npx eslint --fix .

testCoverage:
		npm test -- --coverage --coverageProvider=v8
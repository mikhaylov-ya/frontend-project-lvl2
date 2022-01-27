install-deps:
		npm ci

test:
		npm test

publish: 
		npm publish --dry-run

lint:
		npx eslint .

fix: 
		npx eslint --fix .

test-coverage:
		npm test -- --coverage --coverageProvider=v8
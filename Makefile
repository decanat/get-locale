build: 
	@./node_modules/.bin/duo index.js

build-test: 
	@./node_modules/.bin/duo -d test/specs.js

.PHONY: build

build: 
	@./node_modules/.bin/duo index.js

test: build-test
	@./node_modules/.bin/mocha-phantomjs ./test/index.html

build-test: 
	@./node_modules/.bin/duo -d test/specs.js

.PHONY: build build-test test

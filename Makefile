build:
	@./node_modules/.bin/duo index.js

test: build-test
	@./node_modules/.bin/mocha-phantomjs ./test/index.html

build-test:
	@./node_modules/.bin/duo test/specs.js \
		--development \
		--stdout > ./test/build.js

.PHONY: build build-test test clean

all: build

build:
	npm install

clean:
	rm -rf node_modules
	rm -rf public/javascript/*
	rm -rf public/stylesheets/*
	rm -rf images/*

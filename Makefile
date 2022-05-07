
.PHONY: all npm clean

all:
	npm install
	
	mkdir -p build/bootstrap/scss
	cp -R node_modules/bootstrap/scss/* build/bootstrap/scss/
	
	mkdir -p build/bootstrap-icons/font
	cp node_modules/bootstrap-icons/font/*.scss build/bootstrap-icons/font/
	
	mkdir -p static/bootstrap-icons
	cp node_modules/bootstrap-icons/font/fonts/* static/bootstrap-icons/

clean:
	rm -fr build
	rm -fr assets/css
	rm -fr static/bootstrap-icons

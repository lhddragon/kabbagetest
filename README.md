# kabbagetest
kabbage code test, make forms to do pre qualification for user 



## Building

Clone a copy of the repo:

```
git clone https://github.com/lhddragon/kabbagetest.git
```

Change to the kabbagetest directory:

```
cd kabbagetest
```

Install gulp globally:

```
npm install -g gulp
```

Install dependencies:

```
npm install
```

Install bower components:

```
bower install
```

##Run 

```
gulp
```

##Unit Test

I have put the unit test code for prequalify.controller.js, it can be run using

```
gulp test
```
However, there are some error related to version compatibility of karma-jasmine, jasmine-jquery, and jasmine. Will fix this later.

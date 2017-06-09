[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![NodeJs](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxcvI2vvtITqK5Xz-QGiUi7kb9bWjlkE-kOQV-lwbXg1NrJo2A)](https://nodejs.org/)


# Test Schibsted

## Description

This is the final web development project applying techniques learned in the [Skylab Coders](http://www.skylabcoders.com/en/) Bootcamps (Winter 2017 Edition).




## Coding Style

All the code has been developed under the [JavaScript Standard Style](http://standardjs.com/) and the style guide of the John Papa

## Topics

## Installation 

To install dependencies you can just do

```
bower install
node install
```


To run local server you need to create a `.env` w/ the following variables...

    DB_URI=mongodb://localhost:27017/XXXXX
    PASSXXXXXXXXXXXXXXXX

With this, to start the project you just can do... 

    npm run dev

To run remotely (in heroku) the proper environment variables should be set before deploying...

    DB_URI=mongodb://<%USER%>:<%PASS%>@XXXXXXXXX.mlab.com:00000/xxxxxxxxxxx
    heroku config:set PASS=password email from:


## Built With

* [SublimeText](http://https://www.sublimetext.com/) - Text editor

## Authors

* [Oscar Viciana] (https://github.com/oviciana)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)

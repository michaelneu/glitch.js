# glitch.js

glitch.js is a simple webapp for creating glitch art images by replacing bytes inside a media file. It's similar to replacing it using the following sed parameters:

```
$ sed -i s/search/replace image.jpg
```

glitch.js handles some other stuff like converting images other than `image/jpeg` to the jpeg format and it supports displaying media side-by-side. There's also experimental support to glitch videos.

### Building it yourself

To build the glitch.js webapp yourself you need to have node installed. Then just go ahead and run

```
$ cd glitch.js/
$ npm install
$ node node_modules/.bin/gulp
```

Once gulp finished, the webapp will be located in the `dist/` directory.

### License

glitch.js is released under the [GNU General Public License 3.0](LICENSE.txt).

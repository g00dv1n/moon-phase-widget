<h1 align="center">Moon phase widget for Website</h1>
<p align="center"><i>Super tiny (only 3kb minified) javascript library to add awesome moon phase widget to your website. </i></p>
<p align="center">
  <img src="https://github.com/g00dv1n/moon-phase-widget/raw/master/screenshots/example1.png?raw=true" alt="Moon phase widget for website" style="max-width:75%;">
</p>

## Features
* Auto Geo detection
* Moon phase name and image
* Moon set and moon rise time
* Moon zodiac sign
* Super small size (This will not affect the speed of your site)
* Ability to change the background color

## How To Install (Easy way)
The easiest way to install the widget is by using [CDN](https://www.jsdelivr.com/package/gh/g00dv1n/moon-phase-widget)

Just copy the code below and paste it where you want to see the widget.

```
<div id="moon-phase-widget" data-color="white"></div>
<script async src="https://cdn.jsdelivr.net/gh/g00dv1n/moon-phase-widget@1.2.0/build/automount.min.js">
</script>
```
Thats all.

If you want you can change the background color by adding your value to ```data-color``` attribute.

Text ```white``` or hex value ```#FFFFFF```


## Usage via npm

Install package:

```
npm install moon-phase-widget
```
Import code and styles (if you want):
```javascript
import MoonPhaseWidget from 'moon-phase-widget'

import 'moon-phase-widget/src/index.css'

new MoonPhaseWidget('some-element-id')
```

## Contacts
More information about moon phase you can find [here](https://moonorganizer.com/en/moon-phase-for-today/)

Fill free to contact me if you need help with customization or installation.

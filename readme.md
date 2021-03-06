# tailwind-dark-mode-code

Example in react:

```js
const darkModeCode = require('tailwind-dark-mode-code')

//...
  <script dangerouslySetInnerHTML={{ __html: darkModeCode }} />
//...
```

## Features

* Automatically set `<html class="dark">` if the client OS is in dark mode.
* Automatically update the former class when the client changes the mode when using the website.
* Compatible with Tailwind built-in theme changer (using LocalStorage).


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablopunk.com)                                        |

module.exports = `
(function() {
  function setTheme(dark) {
     var html = document.getElementsByTagName('html')[0]
     var t = dark ? 'dark' : 'light'
     html.classList.add(dark ? 'dark' : 'light')
     html.classList.remove(dark ? 'light' : 'dark')
     localStorage.setItem('theme', t)
  }
  var q = window.matchMedia('(prefers-color-scheme: dark)');
  q.addListener(function(e) { setTheme(e.matches); })
  var themeLS
  try {
    themeLS = localStorage.getItem('theme')
  } catch(err) {}
  setTheme(themeLS ? themeLS === 'dark' : q.matches)
})()
`;

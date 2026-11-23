(function () {
  document.documentElement.classList.add('js')
  try {
    var key = 'portfolio-theme'
    var theme = localStorage.getItem(key)
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
  } catch (e) {}
})()

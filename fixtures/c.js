var scripts = document.getElementsByTagName('script');
document.write('Executing script C. Last script is ' + scripts[scripts.length - 1]
  .getAttribute('src').replace(/\.js$/, '').replace(/^\/fixtures\//, '').toUpperCase());
document.addEventListener('DOMContentLoaded', () => {
  const links = document.getElementsByTagName('a')
  if (links.length !== 0) {
   Array.from(links).forEach(link => {
    if (!link.href.startsWith(window.location.origin)) {
      return
    }
    link.addEventListener('click', (e) => {
     e.preventDefault();
     const scroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
       window.requestAnimationFrame(scroll)
       window.scrollTo({
        top: scrollTop - scrollTop / 7,
       })
      } else {
       if (window.location.href !== link.href) {
         window.location.assign(link.href)
       }
      }
     }
     window.requestAnimationFrame(scroll)
    }, false)
   })
  }
})
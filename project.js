function counter() {
    var clicks = new Map()
    
    document.addEventListener('click', e => {
      var btn = e.target.closest('button')
      
      if (btn) {
        var count = (clicks.get(btn) ?? 0) + 1
        clicks.set(btn, count)
        btn.textContent = count
      }
    })
  }
  
  counter()
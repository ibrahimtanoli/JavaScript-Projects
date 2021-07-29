const imgs = document.getElementById('imgs')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImg()
}

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

// Reset Interval //

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

// Next Button //

nextBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

// Prev Button //
prevBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})

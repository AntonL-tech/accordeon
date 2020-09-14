const arrayOfPluses = document.querySelectorAll('.plus__inner')

arrayOfPluses.forEach(pluse => {
  pluse.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target)
    if (event.target.classList.contains('plus__inner')) {
      event.target.classList.toggle('plus__inner-active')
      event.target.querySelector('.plus__item').classList.toggle('plus__item-active')
      event.target.nextElementSibling.classList.toggle('main__content__text-active')
    } else if (event.target.classList.contains('plus__item')) {
      event.target.classList.toggle('plus__item-active')
      event.target.parentElement.parentElement.classList.toggle('plus__inner-active')
      event.target.parentElement.parentElement.nextElementSibling.classList.toggle('main__content__text-active')
    }
  }, false)
})
const togglex=document.getElementsByClassName('toggle')[0]
const links=document.getElementsByClassName('navLinks')[0]

togglex.addEventListener('click', () => {
    links.classList.toggle('blue')
})
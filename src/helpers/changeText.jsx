

let i = -1
const arr = ["PROJECT LEADER", "DESIGNER & DEVELOPER", "UI & UX SPECIALIST"]
function changeText (){
    return(
        function changeTxt () {
          i = i + 1
          if (i > 2) {
            i = 0
          }
          const text = arr[i]
          const a = document.getElementsByClassName('sectionTop__text')
          a[0].style.opacity = 0

          setTimeout(() => {
            a[0].innerText = text
            a[0].style.opacity = 1
          }, 700)
        }
    )
}

export default changeText()
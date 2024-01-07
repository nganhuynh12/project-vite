

function handleSectionScroll (){
    return(
        function handleSection(sectionClassName, linkClassName) {
              const bottomView = 300
              const section = document.getElementsByClassName(sectionClassName);
              const topSection = section[0].getClientRects()[0].top;
              const link = document.getElementsByClassName(linkClassName);
              if (topSection >= 0 && topSection <= bottomView) {
                link[0].classList.add('active');
              } else {
                link[0].classList.remove('active');
              }
              console.log(topSection)
            }
    )
}

export default handleSectionScroll()
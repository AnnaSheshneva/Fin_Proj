const callbackOpen = document.querySelector('.head__img-repair1120'); 
const callbackClose = document.querySelector('.callback__close'); 
 const callBack = document.querySelector('.callback__cont');
const callbackOpenBut = document.querySelector('.head__cont_repair');
const callbackClose320 = document.querySelector('.callback__close320');

        callbackOpen.onclick = function() {
        callBack.classList.toggle('openn');
          }
          callbackClose.onclick = function() {
          callBack.classList.remove('openn');
          }

        callbackOpenBut.onclick = function() {
        callBack.classList.toggle('openn');
              }
            callbackClose320.onclick = function() {
            callBack.classList.remove('openn');
              }
    
          document.addEventListener('click',  function(event) {
            if (!callBack.contains(event.target) && !callbackOpenBut.contains(event.target)) {
                callBack.classList.remove('openn');
            }
        })
  




        


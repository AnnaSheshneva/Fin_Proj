const callClose = document.querySelector('.oderCall__close'); 
    const call = document.querySelector('.oderCall__cont');
    const checkstatus1120_Open = document.querySelector('.head__img-checkstatus1120');
    const checkstatus_Open = document.querySelector('.head__cont_checkstatus');
    const callClose320 = document.querySelector('.oderCall__close320');

    checkstatus1120_Open.onclick = function() {
        call.classList.toggle('openn');
          }
          callClose.onclick = function() {
          call.classList.remove('openn');
          }
          checkstatus_Open.onclick = function() {
            call.classList.toggle('openn');
              }
              callClose320.onclick = function() {
              call.classList.remove('openn');
              }
              document.onclick = function(even) {
                if (!call.contains(even.target) && !checkstatus1120_Open.contains(even.target) && !checkstatus_Open.contains(even.target)) {
                    call.classList.remove('openn');
                }
            }
   
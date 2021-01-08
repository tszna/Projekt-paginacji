// Zaznaczanie wymaganych elementów
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;



//element.innerHTML = 
createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //Pokaż przycisk prev jeśli wartość zmiennej value jest większa niż 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  } else {
    liTag += `<li class="btn prev disabled"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }
  
 
  if(page > 2){ //Jeśli wartośc zmiennej page jest mniejsza niż 2, dodaj następujący przycisk
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //Jeśli wartość zmiennej value jest większa niż 3, dodaj (...)
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // Ile stron pokazać przed aktywnym przyciskiem
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // Ile stron pokazać po aktywnym przycisku
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //Jeśli wartość zmiennej plength jest większa niż długość zmiennej totalPage, to kontynuuj
      continue;
    }
    if (plength == 0) { //Jeśli wartość zmiennej plength wynosi 0, dodaj +1 do zmiennej plength
      plength = plength + 1;
    }
    if(page == plength){ //Jeśli wartość zmiennej page jest równa zmiennej plength, przypisz string active do zmiennej active
      active = "active disabled disabled-center";
    }else{ // W przeciwnym przypadku przypisz do zmiennej active pusty string
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ // Jeśli wartość zmiennej page jest mniejsza niż totalPages-1, pokaż przycisk z ostatnią cyfrą
    if(page < totalPages - 2){ // Jeśli wartość zmiennej page jest mniejsza niż totalPages-1, pokaż (...)
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //Pokaż przycisk next, jeśli wartość zmiennej page jest mniejsza niż wartość zmiennej totalPages
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  } else {
    liTag += `<li class="btn next disabled"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //Dodaj elementy li do tagu ul
  // return liTag;
}


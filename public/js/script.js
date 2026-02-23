// Dialog header
const dialogHeader = document.getElementById("dialog-header");
const showHeaderBtn = document.querySelector(".show-header");
const closeHeaderBtn = document.querySelector(".close-header");

showHeaderBtn.addEventListener("click", () => {
  if (dialogHeader.open) {
    dialogHeader.close();
  } else {
    dialogHeader.show();
  }
});

closeHeaderBtn.addEventListener("click", () => {
  dialogHeader.close();
});

// Dialog footer
const dialogFooter = document.getElementById("dialog-footer");
const showFooterBtn = document.querySelector(".show-footer");
const closeFooterBtn = document.querySelector(".close-footer");

showFooterBtn.addEventListener("click", () => {
  if (dialogFooter.open) {
    dialogFooter.close();
  } else {
    dialogFooter.show();
  }
});

closeFooterBtn.addEventListener("click", () => {
  dialogFooter.close();
});

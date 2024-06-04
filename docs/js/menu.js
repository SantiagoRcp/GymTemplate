export default function menu() {
  const $btnOPen = document.getElementById("btn_open");
  const $btnClose = document.getElementById("btn_close");
  const $menu = document.querySelector(".menu");

  $btnOPen.addEventListener("click", (e) => {
    $btnOPen.classList.add("btn-hidden");

    $menu.classList.add("menu-active");

    $btnClose.classList.remove("btn-hidden");
    $btnClose.classList.add("btn-display");
  });

  $btnClose.addEventListener("click", () => {
    $btnClose.classList.remove("btn-display");
    $btnClose.classList.add("btn-hidden");

    $menu.classList.remove("menu-active");

    $btnOPen.classList.remove("btn-hidden");
    $btnOPen.classList.add("btn-display");
  });
}

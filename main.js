let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("bx-x");
};

// kirim pesan
function Send() {
  const sendWa = `https://wa.me/6289502826895?text=haii nama saya ${nama.value}, dengan email ${email.value}, saya ingin menyampaikan
   ${pesan.value}`;
  window.open(sendWa);
}

// teks mengetik
var typed = new Typed(".#tes", {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 50,
});

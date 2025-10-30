const inputfile = document.querySelector("#fileupload");
const img = document.querySelector("#imgprewiew");
const divbtn = document.querySelector("#dv");
const btnfileimg = document.querySelector("#btnclosefile");

inputfile.addEventListener("change", () => {
  const frmindex = inputfile.files[0]; // todo seçilen dosyayı alma
  if (frmindex) {
    const reader = new FileReader(); // todo seçilen dosyaları okuma
    reader.onload = (e) => {
      // todo dosya okundugunda tetiklenir.
      img.title = "Resmi Tam Ekran Olarak Görüntülemek İçin Tıklayınız.";
      img.className = "img-thumbnail";
      img.src = e.target.result; // todo seçilen dosyanın url sini döner.
    };
    reader.readAsDataURL(frmindex);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  img.src = "";
  img.className = "";
  img.title = "";
});

btnfileimg.addEventListener("click", () => {
  img.src = "";
  img.className = "";
  img.title = "";
});

img.addEventListener("click", () => {
  if (img.requestFullscreen) {
    img.requestFullscreen(); // todo tıklanan resmi tam ekran yapar
  }
});

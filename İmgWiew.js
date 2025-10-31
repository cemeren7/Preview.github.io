const inputfile = document.querySelector("#fileupload");
const img = document.querySelector("#imgprewiew");
const divbtn = document.querySelector("#dv");
const btnfileimg = document.querySelector("#btnclosefile");

inputfile.addEventListener("change", () => {
  const frmindex = inputfile.files[0]; // todo seçilen dosyayı alma
  if (frmindex) {
    img.title = "Resmi Tam Ekran Olarak Görüntülemek İçin Tıklayınız.";
    img.className = "img-thumbnail";
    img.src = URL.createObjectURL(frmindex); // todo geçici link oluşturarak resim okuma
    URL.revokeObjectURL(frmindex);
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


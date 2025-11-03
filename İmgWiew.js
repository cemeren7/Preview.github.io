const inputfile = document.querySelector("#fileupload");
const img = document.querySelector("#imgprewiew");
const btnfileimg = document.querySelector("#btnclosefile");

const key = "Files";

inputfile.addEventListener("change", () => {
  const frmindex = inputfile.files[0];
  if (frmindex) {
    img.title = "Resmi Tam Ekran Olarak Görüntülemek İçin Tıklayınız.";
    img.className = "img-thumbnail";
    img.src = URL.createObjectURL(frmindex);
    URL.revokeObjectURL(frmindex);
  }
  let array = JSON.parse(localStorage.getItem(key) || "[]");
  let object = {
    FileName: frmindex.name,
  };
  array.push(object);
  localStorage.setItem(key, JSON.stringify(array));
});

document.addEventListener("DOMContentLoaded", () => {
  img.src = "";
  img.className = "";
  img.title = "";
});

btnfileimg.addEventListener("click", () => {
  inputfile.value = "";
  img.src = "";
  img.className = "";
  img.title = "";
});

img.addEventListener("click", () => {
  if (!document.fullscreenElement) img.requestFullscreen();
  else document.exitFullscreen();
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Delete") {
    inputfile.value = "";
    img.src = "";
    img.className = "";
    img.title = "";
  }
  if (e.key === "Enter") {
    inputfile.click();
    e.preventDefault();
  }
  if (e.key === "F" || e.key === "f") {
    if (!document.fullscreenElement) img.requestFullscreen();
    else document.exitFullscreen();
  }
});

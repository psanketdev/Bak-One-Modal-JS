debugger;
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
var modal_list = document.querySelectorAll('.employee-details li');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < modal_list.length; i++) {
    // console.log(images);
    modal_list[i].onclick = function () {

        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }
}


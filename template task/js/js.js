// Selcting all required elements in portfolio section
const filterItem = document.querySelector(".portfolio-items");
const filterImg = document.querySelectorAll(".image");
window.onload = () => { // once the window loaded
  filterItem.onclick = (selectesItem) => { //when user click on  filterItem div
    if (selectesItem.target.classList.contains("item")) { //if user click an element has item class
      filterItem.querySelector(".active").classList.remove("active"); //remove active class which is in the first element
      selectesItem.target.classList.add("active"); //add the class active on the selected element
      let filterName = selectesItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing the value in filterName variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); //getting image data-name value of the user selected
        //if user selected item data-name equals to image data-name value
        //or user selected item data-name value equal all
        if (filterImages == filterName || filterName == "All") {
          // console.log(filterName);
          image.classList.remove("hide");
        } else {
          image.classList.add("hide");
        }
      });
    }
  }
}

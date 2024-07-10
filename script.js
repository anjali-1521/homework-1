function upDate(previewPic) {
  // Log event trigger
  console.log("Mouse over event triggered");

  // Log information about the previewPic
  console.log("Alt text: ", previewPic.alt);
  console.log("Image source: ", previewPic.src);

  // Change the text of the element with id 'image'
  document.getElementById("image").innerHTML = previewPic.alt;

  // Change the background image of the element with id 'image'
  document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
  // Log event trigger
  console.log("Mouse out event triggered");

  // Reset the background image of the element with id 'image'
  document.getElementById("image").style.backgroundImage = "url('')";

  // Reset the text of the element with id 'image'
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
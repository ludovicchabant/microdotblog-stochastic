
var floatRemainder = function(val, div) {
  while (val > div)
    val -= div;
  return val;
}

document.addEventListener("DOMContentLoaded", function(event) {
  const baseline = parseFloat(window.getComputedStyle(document.querySelector('p')).lineHeight);
  const threshold = baseline / 10.0;

  document.querySelectorAll("article img").forEach(function(img) {
    var paraParentNode = null;
    var imgParent = img.parentNode;
    var i = 0;
    while (imgParent != null) {
      if (imgParent.tagName == "p") { paraParentNode = imgParent; break; }
      imgParent = imgParent.parentNode;
    }
    if (paraParentNode != null) {
      var computedStyle = window.getComputedStyle(paraParentNode);
      var excess = floatRemainder(parseFloat(computedStyle.height), baseline);
      if (excess > threshold) {
        paraParentNode.style.marginBottom = (2 * baseline - excess).toString() + "px";
      } else {
        paraParentNode.style.marginBottom = (-excess).toString() + "px";
      }
      paraParentNode.style.textAlign = "center";
      //console.log("Adjusting style on parent ", paraParentNode.style, paraParentNode.style.marginBottom);
    }
    else
    {
      var computedStyle = window.getComputedStyle(img);
      var excess = floatRemainder(parseFloat(computedStyle.height), baseline);
      if (excess > threshold) { 
        img.style.marginBottom = (2 * baseline - excess).toString() + "px"; 
      } else {
        img.style.marginBottom = (-excess).toString() + "px";
      }
      //console.log("Adjusting style on ", img.style, img.style.marginBottom, baseline, excess);
    }
  });

  document.querySelector("a.lc-add-rhythm").addEventListener("click", function(e) {
    document.body.classList.toggle('lc-rhythm');
  });
});


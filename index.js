document.addEventListener('DOMContentLoaded', function () {
  var imageScaleElements = document.querySelectorAll('.image-scale');

  imageScaleElements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(0.95)';
    });
      element.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});
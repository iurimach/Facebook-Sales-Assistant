// slider.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const item = data.find(item => item.id === itemId);
  
        if (item) {
          document.getElementById('item-name').textContent = item.name;
  
          const sliderImagesContainer = document.getElementById('slider-images');
  
          item.images.forEach(imgSrc => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
  
            const image = document.createElement('img');
            image.src = imgSrc;
            image.alt = item.name;
  
            slide.appendChild(image);
            sliderImagesContainer.appendChild(slide);
          });
  
          document.getElementById('item-description').textContent = item.description;
          document.getElementById('item-price').textContent = `$${item.price.toFixed(2)}`;
          document.getElementById('item-details').textContent = item.details;
  
          const video = document.getElementById('item-video');
          video.src = item.video;
        } else {
          console.error('Item not found');
        }
      })
      .catch(error => console.error('Error fetching item data:', error));
  
    // Slider functionality
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      const slides = document.getElementsByClassName('slide');
      if (slides.length === 0) return;
  
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      slides[slideIndex - 1].style.display = 'block';
    }
  
    document.getElementById('prev-slide').addEventListener('click', function() {
      plusSlides(-1);
    });
  
    document.getElementById('next-slide').addEventListener('click', function() {
      plusSlides(1);
    });
  });
  
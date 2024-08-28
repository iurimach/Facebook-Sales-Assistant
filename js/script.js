// script.js

document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items-container');
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
            
          const imgdiv=document.createElement('div');
          imgdiv.className="imgdiv"

          const image = document.createElement('img');
          image.src = item.images[0]; // Displaying the first image in the list
          image.alt = item.name;
            
          const wrapperdiv=document.createElement('div');
          wrapperdiv.className="wrapperdiv"

          const description = document.createElement('p');
          description.textContent = item.description;
  
          const price = document.createElement('p');
          price.textContent = `$${item.price.toFixed(2)}`;
  
          const readMoreButton = document.createElement('button');
          readMoreButton.textContent = 'Read More';
          readMoreButton.addEventListener('click', function() {
            // Navigate to item details page with item id
            window.location.href = `item.html?id=${item.id}`;
          });
          itemDiv.appendChild(imgdiv)
          imgdiv.appendChild(image)
        
          wrapperdiv.appendChild(description);
          wrapperdiv.appendChild(price);
          wrapperdiv.appendChild(readMoreButton);
          itemDiv.appendChild(wrapperdiv)
  
          itemsContainer.appendChild(itemDiv);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
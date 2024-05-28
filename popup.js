document.getElementById('findRoute').addEventListener('click', () => {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
  
    if (origin && destination) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
      chrome.tabs.create({ url });
    } else {
      alert('Please enter both origin and destination.');
    }
  });

  //use here Google api key and Uncommit it
  // document.addEventListener('DOMContentLoaded', () => {
  //   const buttons = document.querySelectorAll('.route-btn');
  //   buttons.forEach(button => {
  //     button.addEventListener('click', () => {
  //       const origin = button.getAttribute('data-origin');
  //       const destination = button.getAttribute('data-destination');
  //       if (origin && destination) {
  //         const mapFrame = document.getElementById('map');
  //         const url = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
  //         mapFrame.innerHTML = `<iframe width="100%" height="100%" frameborder="0" style="border:0" src="${url}" allowfullscreen></iframe>`;
  //       } else {
  //         alert('Invalid origin or destination.');
  //       }
  //     });
  //   });
  // });
  
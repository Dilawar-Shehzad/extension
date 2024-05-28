function getLoadBoardDetails() {
  const table = document.querySelector('table tbody');
  if (!table) {
    return { origin: '', destination: '' };
  }

  const firstRow = table.querySelector('tr');
  if (!firstRow) {
    return { origin: '', destination: '' };
  }

  const cells = firstRow.querySelectorAll('td');
  if (cells.length >= 3) {
    const origin = cells[1].innerText.trim();
    const destination = cells[2].innerText.trim(); 
    return { origin, destination };
  }

  return { origin: '', destination: '' };
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getLoadBoardDetails') {
    sendResponse(getLoadBoardDetails());
  }
});

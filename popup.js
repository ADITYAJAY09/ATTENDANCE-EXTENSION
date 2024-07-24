document.getElementById('markAttendance').addEventListener('click', () => {
    const rollNumber = document.getElementById('rollNumber').value;
  
    chrome.runtime.sendMessage({ type: 'MARK_ATTENDANCE', rollNumber }, (response) => {
      document.getElementById('status').innerText = response.message;
    });
  });
  
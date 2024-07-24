chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ attendanceSheet: {} });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'MARK_ATTENDANCE') {
      const { rollNumber } = message;
      chrome.storage.local.get('attendanceSheet', (data) => {
      const attendanceSheet = data.attendanceSheet || {};
      attendanceSheet[rollNumber] = true;
      chrome.storage.local.set({ attendanceSheet }, () => {
      sendResponse({ message: `Attendance marked for roll number ${rollNumber}` });
        });
         });
        return true;
    }
  });
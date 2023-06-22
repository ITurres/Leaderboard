const renderMessage = (element, message) => {
  const messageSpan = document.createElement('span');
  messageSpan.textContent = `${message}`;
  element.insertAdjacentElement('afterend', messageSpan);
};

const clearMessage = (element) => {
  setTimeout(() => {
    element.nextElementSibling.remove();
  }, 3000);
};

const domMessageOptions = {
  renderMessage,
  clearMessage
};

export default domMessageOptions;

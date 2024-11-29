export function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-products-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent);
}
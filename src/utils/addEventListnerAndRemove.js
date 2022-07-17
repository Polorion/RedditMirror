const AddEventListnerAndRemove = (element, action, handler) => {
  element.addEventListener(action, handler);
  return () => {
    element.removeEventListener(action, handler);
  };
};
export default AddEventListnerAndRemove;

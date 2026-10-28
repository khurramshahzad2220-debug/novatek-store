

export const showToast = (operation, name) => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  // set the text content of the toast based on the operation
  if(operation === 'add'){
    toast.textContent = `Product -${name}- has been added.`;

  }else{
    toast.textContent = `Product -${name}- has been deleted.`;
  }

  document.body.append(toast);

  setTimeout(()=>{
    toast.remove()
  },2000);
}

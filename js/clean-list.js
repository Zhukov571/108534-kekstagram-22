// Функция очистки листа
const cleanList = (parent) => {
  for (let i = parent[0].children.length - 1; i >= 0; i--) {
    const child = parent[0].children[i];
    child.parentElement.removeChild(child);
  }
};

export{cleanList};


function renameFiles(names) {
  const obj = {};

  return names.map((value) => {
    let originalName = value;
    let newName = value;
    let count = obj[newName] || 0;

    while (obj[newName] !== undefined) {
      count++;
      newName = `${originalName}(${count})`;
    }

    obj[newName] = 0;
    console.log(newName);
    return newName;
  });
};

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']) //['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
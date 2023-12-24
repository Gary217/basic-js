function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const sort = members.filter((value) => typeof value === 'string');

  let firstIndex = [];
  sort.forEach((value) => {
    const str = value.trim();
    firstIndex.push(str[0].toUpperCase())
  });

  console.log(firstIndex.sort().join(''));
}

// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) // => 'LOO'
createDreamTeam([['David Abram'],['Robin Attfield'],'Thomas Berry',['Paul R.Ehrlich'],'donna Haraway',' BrIaN_gOodWiN  ',{0: 'Serenella Iovino'},'Erazim Kohak','  val_plumwood',]); // 'BDETV'
// 'BDETV'
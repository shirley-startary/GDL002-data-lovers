const dataLover = {
  filter: (data, filterBy) =>
    data.filter(element => {
      if (filterBy == element.name || filterBy == element.gender || filterBy == element.species) {
        return element;
      }
    }),
  sortData: () => {}

};

window.dataLover = dataLover;

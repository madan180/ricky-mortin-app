export const getAllFilterValues = (
  input,
  filterTerms,
  fieldToFilter,
  subField
) => {
  const output = input?.reduce((acc, item) => {
    const itemToBeFiltered = subField
      ? item[fieldToFilter][subField]
      : item[fieldToFilter];
    if (!acc.some((item) => item?.label === itemToBeFiltered)) {
      acc.push({ label: itemToBeFiltered, checked: false });
    }
    return acc;
  }, []);
  const updatedOutput = output?.map((item) => {
    if (filterTerms?.length > 0) {
      const filterTerm = filterTerms.find(
        (filterItem) => filterItem.name === fieldToFilter
      );
      if (filterTerm) {
        const filterSubTerm = filterTerm.values.find(
          (filterItem) => filterItem.label === item.label
        );
        if (filterSubTerm) {
          item.checked = filterSubTerm.checked;
        }
      }
    }
    return item;
  });
  return { name: fieldToFilter, values: updatedOutput };
};

export const getformattedDate = (dateInput) => {
  const date = new Date(dateInput);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const isNoItemChecked = (filteredData) => {
  if (filteredData.length > 0) {
    const checkedStatus = filteredData.reduce((acc, { name, values }) => {
      const itemCheckedStatus = values.map(({ label, checked }) => checked);
      acc.push(...itemCheckedStatus);
      return acc;
    }, []);
    if (checkedStatus.includes(true)) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

export const getFilteredData = (actualStateData, filterStateData) => {
  if (filterStateData.length > 0 && !isNoItemChecked(filterStateData)) {
    const refactoredFilterStateData = filterStateData.map((filterItem) => {
      const onlyCheckedData = filterItem.values.map((valueItem) => {
        if (valueItem.checked) {
          return valueItem.label;
        }
      });
      return { name: filterItem.name, values: onlyCheckedData };
    });
    const outputData = refactoredFilterStateData.reduce(
      (acc, { name, values }) => {
        if (name === 'species') {
          const filteredSpeciesOutput = actualStateData.filter((filterItem) => {
            return values.includes(filterItem[name]);
          });
          if (acc.length > 0) {
            acc = acc.filter((accItem) => {
              return values.includes(accItem[name]);
            });
          } else {
            acc.push(...filteredSpeciesOutput);
          }
        }
        if (name === 'gender') {
          const filteredGenderOutput = actualStateData.filter((filterItem) => {
            return values.includes(filterItem[name]);
          });
          if (acc.length > 0) {
            const idMap = acc.map((item) => item.id);
            acc = acc.filter((accItem) => {
              return values.includes(accItem[name]);
            });
          } else {
            acc.push(...filteredGenderOutput);
          }
        }
        if (name === 'origin') {
          const filteredOriginOutput = actualStateData.filter((filterItem) => {
            return values.includes(filterItem[name].name);
          });
          if (acc.length > 0) {
            acc = acc.filter((accItem) => {
              return values.includes(accItem[name].name);
            });
          } else {
            acc.push(...filteredOriginOutput);
          }
        }
        return acc;
      },
      []
    );
    return outputData;
  }
  return actualStateData;
};

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRickMortyData } from '../../../actions';
import TwoColumnTemplateLayout from '../../templates/twocolumntemplate';
import {
  getAllFilterValues,
  getFilteredData,
  isNoItemChecked,
} from '../../../../utils';
import { triggerFilter, resetFilter } from '../../../actions/filterActions';
import { noItemChecked } from '../../../actions/dataLoadingActions';

const RickMortyContainer = ({
  rickMortyDataResultSet,
  fetchRickMortyData,
  filterTrigger,
  species,
  gender,
  origin,
  filterReset,
  dataLoading,
  isNoItemChecked
}) => {
  useEffect(() => {
    fetchRickMortyData();
  }, []);
  return (
    <TwoColumnTemplateLayout
      rickMortyData={rickMortyDataResultSet}
      species={species}
      gender={gender}
      origin={origin}
      filterTrigger={filterTrigger}
      noResults={
        dataLoading === 'DONE' &&
        !isNoItemChecked &&
        !(rickMortyDataResultSet?.length > 0)
      }
      filterReset={filterReset}
    />
  );
};

const loadData = (store) => store.dispatch(fetchRickMortyData());

const mapStateToProps = ({ rickMorty, filterTerms, dataLoading, isNoFilterItemChecked }) => ({
  rickMortyDataResultSet: getFilteredData(
    rickMorty?.showData?.results,
    filterTerms
  ),
  species: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'species'
  ),
  gender: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'gender'
  ),
  origin: getAllFilterValues(
    rickMorty?.showData?.results,
    filterTerms,
    'origin',
    'name'
  ),
  dataLoading,
  isNoItemChecked: isNoItemChecked(filterTerms),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRickMortyData: () => dispatch(fetchRickMortyData()),
  filterTrigger: (filterType, filterValue, checkedState) =>
    dispatch(triggerFilter(filterType, filterValue, checkedState)),
  filterReset: () => dispatch(resetFilter())
});

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(RickMortyContainer),
  loadData,
};

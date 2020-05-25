import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterComponent from '../../components/presentational/FilterComponent/filterComponent';
import ImageCardsContainer from '../presentational/ImageCardsContainer/ImageCardsContainer';
import {
  LayoutContainer,
  LeftSection,
  RightSection,
} from './twocolumntemplate.style';
import NoResultsComponent from '../presentational/NoResult/noResults';

const TwoColumnTemplateLayout = ({
  rickMortyData,
  species,
  gender,
  origin,
  filterTrigger,
  noResults,
  filterReset,
}) => {
  return (
    <LayoutContainer>
      <Grid container>
        <LeftSection item xs={12} lg={3}>
          <FilterComponent filterTrigger={filterTrigger} filterComp={species} />
          <FilterComponent filterTrigger={filterTrigger} filterComp={gender} />
          <FilterComponent filterTrigger={filterTrigger} filterComp={origin} />
        </LeftSection>
        <RightSection item xs={12} lg={9}>
          {noResults ? (
            <NoResultsComponent filterReset={filterReset} />
          ) : (
            <ImageCardsContainer rickMortyData={rickMortyData} />
          )}
        </RightSection>
      </Grid>
    </LayoutContainer>
  );
};

export default TwoColumnTemplateLayout;

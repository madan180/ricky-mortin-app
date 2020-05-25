import React, {useState, useEffect} from "react";
import ImageCard from "../ImageCard/imageCard";
import ImageCardsWrapper from "./ImageCardsContainer.style";
import Filters from "./Filters";


const ImageCardsContainer = ({ rickMortyData }) => {


  const [users, setUsers] = useState(rickMortyData);

  useEffect(() => {
    setUsers([...rickMortyData]);
  }, [rickMortyData]);


  const filters = sortBy => {

    let sorted = users.slice();
    if (sortBy == 1) {

      sorted = users && users.sort(asscending);
    } else {

      sorted = users && users.sort(decending);
    }
    setUsers([...sorted]);

  };
  const decending = (a, b) => {

    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    if (b.name.toLowerCase() < a.name.toLowerCase()) {
      return -1;
    }
    return 0;
  };
  const asscending = (a, b) => {


    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (b.name.toLowerCase() > a.name.toLowerCase()) {
      return -1;
    }
    return 0;
  };


  return (
    <>
    <Filters sortBy={filters} />
    <ImageCardsWrapper container spacing={2}>
      {users?.map((data) => {
        return <ImageCard key={data.id} data={data}  />;
      })}
    </ImageCardsWrapper>
    </>
  );
};

export default ImageCardsContainer;

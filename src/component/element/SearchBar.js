import React from "react";
import { Icon, Input } from "semantic-ui-react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function SearchBar() {
  const searchData = useSelector((state) => state.sea.searchData);

  return (
    <SearchContainer>
      <Input icon placeholder="Search...">
        <input value={searchData} />
        <Icon name="search" />
      </Input>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
    position : fixed;
    top : 30px;
    z-index: 50;
    left 50%;
    transform: translate(-50%, -50%);
`;

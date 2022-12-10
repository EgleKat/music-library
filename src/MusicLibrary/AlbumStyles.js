import styled from "styled-components";


export const FilterControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
  align-items: baseline;
  gap: 1rem;
  .selector {
    text-align: left;
    &.album-search{
      display: flex;
      flex-direction: column;
      input {
        font-size: 1rem;
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        height: 2rem;
        padding: 2px;
        padding-left: .4rem;
        
      }
    }
    &.country-select {
      width: 10rem;
    }
  }
`;


export const AlbumList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap: 3rem;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 2rem;
  @media screen and (min-width: 1000px) {
    margin-left: 10rem;
    margin-right: 10rem;
    gap: 5rem;
  }

`;
export const Album = styled.div`
  width: 15rem;
  min-height: 20rem;
  max-height: 30rem;
  height: 25rem;
  margin: 1rem;
  text-align: left;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem;
  &:hover {
    transition: all ease-in-out 0.3s;
    transform: scale(1.2);
    .album-image img {
      border-radius: 4px ;
    }
  }
  .album-name{
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .2px;
    font-size: 1.1rem;
  }
  .album-artist {
    /* font-weight: bolder; */
    letter-spacing: .2px;
  }
  .album-image {
    margin-top: 1rem;
    margin-bottom: 1rem;
    img {
      transition: all ease-in 0.3s;
      transition: all ease-out 0.2s;
      border-radius: 60%;
      width: 100%;
      height: 100%;
     
    }
  }
`;
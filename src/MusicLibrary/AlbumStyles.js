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
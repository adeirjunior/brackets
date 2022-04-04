import styled from "styled-components";

const TextInput = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;  
  margin-bottom: 3.5em;

  input{ 
    margin-top: 3em;  
    border: 1px solid #1e1e1e;
    border-radius: .4em;
    width: 15.5em; 
    font-size: .7rem;
    font-weight: 500; 
    background-color: #F1F1F1;
    padding: .4em 1.5em;
    padding-left: 1em;

      &::placeholder{
      color: #1e1e1e;
      }
      &:focus{
        outline: 0;
      }
      &::selection{
        background-color: #1C1C1C;
        color: #F1F1F1;
      }
  }
`

function Search() {
  return (
    <TextInput>
        <input type='text' placeholder="Search..." />
    </TextInput>
  )
}

export default Search
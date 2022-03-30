import styled from "styled-components";

const TextInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  input{
    margin-top: 4em;
    border: 1px solid #1e1e1e;
    border-radius: .4em;
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
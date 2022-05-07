import styled from 'styled-components'

const SearchInput = styled.input`
    height: 40px;
    font-size: 18px;
    font-family: "Varela Round", sans-serif;
    color: #303030;
    text-align: right;
    padding: 0 10px;
    border: none;
    border-radius: 10px;

    @media only screen and (max-width: 520px) {
        width: 100%;
        text-align: center;
    }
`
  
export const Search = ({
    placeholder,
    value,
    onFocus,
    onChange,
    onKeyDown,
}: {
    placeholder: string;
    value: string;
    onFocus: any;
    onChange: any;
    onKeyDown: any;
}) => {
  return (
    <SearchInput
      type="text"
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

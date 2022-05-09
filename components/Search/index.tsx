import { FormEvent, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useAppContext } from '../../context/sharedState';
import { useDebounce } from '../../hooks/useDebounce';

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
}: {
    placeholder?: string;
    value?: string;
}) => {

  const context = useAppContext();
  
  const [searchTerm, setSearchTerm] = useState<string>(value);
  
  const debouncedInput: string = useDebounce<string>(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedInput) {
        context.setCity(debouncedInput)
      } else {
        // context.setCity('')
      }
    }, [debouncedInput]
  )
  
  return (
    <SearchInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event: FormEvent<HTMLInputElement>) => setSearchTerm((event.target as HTMLInputElement).value)}
    />
  );
};

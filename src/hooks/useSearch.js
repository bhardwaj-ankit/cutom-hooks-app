import {useState} from 'react'

function useSearch(initialValue) {
  const [value, setValue] = useState(initialValue)
  const [searchResult,setSearchResult] = useState('')

  const showResult = () => {
    setSearchResult('Customer : '+value)
  }
  
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, searchResult, bind, showResult]
}

export default useSearch
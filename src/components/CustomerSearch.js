import React, { useState } from 'react'
import useSearch from '../hooks/useSearch';

function CustomerSearch() {
  const [firstName,searchResult, bindFirstName, showResult] = useSearch('')
  
  const hide = {display: 'none'}
  const show = {display: 'block'}
  var visibility = show;
  const submitHandler = e => {
    e.preventDefault()
    showResult()
    visibility = show;
  }
	return (
		<div>
      <form onSubmit={submitHandler}>
				<div>
					<label>Customer Search</label>
					<input
            type="text"
            {...bindFirstName}
					/>
				</div>
        <button>Search</button>
			</form>
        <div style={visibility}>
            Search Result : {searchResult}
        </div>    
		</div>
	)
}

export default CustomerSearch
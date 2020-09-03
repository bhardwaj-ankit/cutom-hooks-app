import React, { useState } from 'react'
import useEalsticSearch from '../hooks/useEalsticSearch';

function ElasticSearch() {
  const [firstName, bindFirstName, resetFirstName] = useEalsticSearch('')
  const [lastName, bindLastName, resetLastName] = useEalsticSearch('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
	return (
		<div>
      <form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<input
            type="text"
            {...bindFirstName}
					/>
				</div>
				<div>
					<label>Last Name</label>
					<input
            type="text"
            {...bindLastName}
					/>
        </div>
        <button>Search</button>
			</form>
        <div>
            Search Result : {lastName, firstName}
        </div>    
		</div>
	)
}

export default ElasticSearch
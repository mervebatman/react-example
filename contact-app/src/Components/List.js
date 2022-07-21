import { useState } from 'react'

function List({ contacts }) {
    
    const [filterText, setFilterText] = useState(''); //filtreleme state i

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
        item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });
    

    console.log("filtered", filtered);

  return (
    <div>

        <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <ul className='list'>
            {
                filtered.map((contacts, i) => <li key={i}>
                    <span>{contacts.fullName} </span>
                    <span>{contacts.phoneNumber}</span>
                </li>
                )}
        </ul>

        <h4>
            Total Contacts  ({ filtered.length })
        </h4>

    </div>
  )
}

export default List
import React, { StrictMode, useState } from 'react';

const Home = () => {
  const [input, setInput] = useState([{ name: '', phone: '' }]);

  const addMore = () => {
    let newField = { name: '', phone: '' };
    setInput([...input, newField]);
  };

  const removeField = (index) => {
    let oldData = [...input];
    oldData.splice(index, 1);
    setInput(oldData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic Form Element</h1>
      <form>
        {input.map((item, i) => {
          return (
            <div style={{ marginBottom: '10px' }} key={i}>
              <label style={{ marginRight: '5px' }}>Name:</label>
              <input type="text" style={{ marginRight: '10px' }} />
              <label style={{ marginRight: '5px' }}>Phone:</label>
              <input type="text" style={{ marginRight: '10px' }} />
              {i > 0 && (
                <button
                  type="button"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                  onClick={() => removeField(i)}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </form>
      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
        onClick={addMore}
      >
        Add
      </button>
    </div>
  );
};
<StrictMode>
  function  App(){
    
  }
</StrictMode>

export default Home;

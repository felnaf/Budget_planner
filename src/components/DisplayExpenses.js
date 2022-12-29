import React from 'react';

const DisplayExpenses = (props) => {
  //   const onDelete=(id)=>{
  //  console.log(id)
  //   }
//   const cost =props.data.map((value)=>value.cost)
//   console.log(cost)

  const item = props.data.map((d, index) => {
    console.log(d,index);

    return (
      <div key={index}>
        <div>
          <h6>
            {d.name}
            <span className="cost"> ${d.cost}</span>
            <button
              className="btn btn-danger delete"
              type="button"
              onClick={() => props.onDelete(index)}
            >
              {' '}
              delete
            </button>
          </h6>
          <h4></h4>
        </div>
        {/* <div>
            <button></button>
        </div> */}
      </div>
    );
  });
  console.log(item);
  return <div>{item}</div>;
};

export default DisplayExpenses;

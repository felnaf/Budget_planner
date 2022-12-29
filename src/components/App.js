import React, { useState } from 'react';

import Header from './Header';
import DisplayExpenses from './DisplayExpenses';
import Footer from './Footer';

import '../assets/css/index.css';

const App = () => {
  const [data, setData] = useState([]);
  //   const [id, setId] = useState(0);
  const onSubmit = (e, cost) => {
    setData([
      ...data,
      {
        // id:
        name: e,
        cost: cost,
      },
    ]);
  };

  const onDelete = (e) => {
    // console.log(e)
    setData(data.filter((d, index) => index !== e));
   
  };

  //    let sum =0
  //   const cost = data.map((value) => value.cost);
  //     sum+= cost
  //   console.log(sum);

  let total = 0;
  const cost = data.map((value) => {
    total += parseInt(value.cost);
  });
  console.log(total);

  return (
    <div className="container">
      <Header total={total} />
      <h4 className="expense">Expenses</h4>
      <DisplayExpenses data={data} onDelete={onDelete} />
      <Footer onSubmit={onSubmit} />
    </div>
  );
};

export default App;

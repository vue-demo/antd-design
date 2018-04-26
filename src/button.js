import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Button, WingBlank, WhiteSpace} from 'antd-mobile';

const Btn = () => (
  <div className="flex-container">

    <div className="title"></div>
    
    <WingBlank>
      <Button>default</Button><WhiteSpace/>
      <Button disabled>default disabled</Button><WhiteSpace/>

      <Button type="primary">primary</Button><WhiteSpace/>
      <Button type="primary" disabled>primary disabled</Button><WhiteSpace/>

      <Button type="warning">warning</Button><WhiteSpace/>
      <Button type="warning" disabled>warning disabled</Button><WhiteSpace/>

      <Button loading>loading button</Button><WhiteSpace/>
      <Button icon="check-circle-o">with icon</Button><WhiteSpace/>
    </WingBlank>

  </div>
);

ReactDOM.render(<Btn/>, document.getElementById('root'));
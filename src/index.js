import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Button,WhiteSpace} from 'antd-mobile';

const Btn = () => (
  <div className="flex-container">

    <div className="title"></div>

    <Button type="default">Button</Button>
    <WhiteSpace/>
    <Button type="primary">Button</Button>

  </div>
);

ReactDOM.render(<Btn/>, document.getElementById('root'));
// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local

import 'src/styles/index.scss';

import App from 'src/components/App';


// == Render

const rootComponent = <App />;


const target = document.getElementById('root');


render(rootComponent, target);

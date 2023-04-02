import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import FrontContainer from './Front/Components/FrontContainer/FrontContainer';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('cx-react-app');
const root = createRoot(container);
root.render(<FrontContainer />);

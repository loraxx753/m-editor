import React from 'react'
import {createRoot} from 'react-dom/client';
import EditorApp from './pages';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => (
  <EditorApp />
)

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
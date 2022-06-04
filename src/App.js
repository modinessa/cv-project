import './App.scss';
import { Route, Routes } from "react-router-dom";

import { Main } from './pages/Main/index';
import { Inner } from './pages/Inner';

function App() {

  return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/inner" element={<Inner/>}/>
		</Routes>
  );
}

export default App;

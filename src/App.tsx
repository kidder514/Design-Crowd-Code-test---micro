import HCard from './HCard/HCard';
import { HCardDataResponse } from './types';
import mockData from './mock.json'

import './App.scss'

function App() {
    return <HCard data={mockData as HCardDataResponse} />;
}

export default App

import React from 'react'
import { PdfViewer } from './components'
import Headshot from './assets/headshot.jpg'
import ResumePdf from './assets/pdfs/resume.pdf'
import CareerChart from './assets/pdfs/career_chart.pdf'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={Headshot} className="App-logo" alt="logo" />
			</header>
			<PdfViewer file={ResumePdf} />
			<div className="break"></div>
			<PdfViewer file={CareerChart} />
		</div>
	)
}

export default App

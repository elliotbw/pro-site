import React, { useCallback } from 'react'
import { PdfViewer } from './components'
import Headshot from './assets/headshot.jpg'
import ResumePdf from './assets/pdfs/resume.pdf'
import CareerChart from './assets/pdfs/career_chart.pdf'
import './App.css'
import { useWindowSize } from './utility/hooks'

const defaultSizes = {
	career: {
		width: 960,
		height: 540,
	},
	resume: {
		width: 612,
		height: 792,
	},
}

function App() {
	const size = useWindowSize()

	const getResumeSize = useCallback(() => {
		return getScale(size, defaultSizes.resume)
	}, [size, size.width])

	const getCareerChartSize = useCallback(() => {
		return getScale(size, defaultSizes.career)
	}, [size, size.width])

	return (
		<div className="App">
			<header className="App-header">
				<img src={Headshot} className="App-logo" alt="logo" />
			</header>
			<PdfViewer file={ResumePdf} scale={getResumeSize()} />
			<div className="break"></div>
			<PdfViewer file={CareerChart} scale={getCareerChartSize()} />
		</div>
	)
}

function getScale(size, defaultSize) {
	const targetWidth = size.width - 40
	const imageWidth = defaultSize.width
	if (imageWidth < targetWidth) return 1
	const scale = targetWidth / imageWidth
	return scale
}

export default App

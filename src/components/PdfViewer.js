import React, { useState, useRef } from 'react'
import Pdf from '@mikecousins/react-pdf'

export default function PdfViewer({ file }) {
	return (
		<div>
			<Pdf file={file} page={1} />
		</div>
	)
}

import React from 'react'
import Pdf from '@mikecousins/react-pdf'

export default function PdfViewer({ file, ...rest }) {
	return (
		<div>
			<Pdf file={file} page={1} {...rest} />
		</div>
	)
}

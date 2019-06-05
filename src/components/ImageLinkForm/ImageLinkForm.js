import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3 b'>
			This will detect faces in pictures.<br/>Paste a URL for any image below.<br/>Give it a shot!
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center formtext' type='text' onChange={onInputChange} />
				<button className='w-30 grow f4 link ph3 pv2 dib white bgbutton'
					onClick={onButtonSubmit}
				>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;
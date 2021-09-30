import { Fragment } from "react"

const QlikContent = props => {

	const box = {
        flex: '1 45%',
        background: '#ccc',
        height:'250px'
    }

	return (
		<Fragment>
			<section>
				<h5>Outros dados</h5>
				<p>Ex elit magna magna ut ad. Fugiat nisi non Lorem pariatur irure nostrud mollit do duis laboris aliqua incididunt fugiat. Sunt anim labore labore ad aliquip id nulla consectetur occaecat velit minim et ipsum. Lorem amet sunt exercitation consectetur. Aliquip ut et aliqua minim consectetur.</p>
			</section>
			<div style={{display: 'flex', gap:'20px', position:'relative', flexWrap:'wrap', marginTop:'50px'}}>
				<div style={box}>Box</div>
				<div style={box}>Box</div>
				<div style={box}>Box</div>
				<div style={box}>Box</div>
			</div>
		</Fragment>
	)
}

export default QlikContent

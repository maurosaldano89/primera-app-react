import React from 'react';

class Time extends React.Component {
	render() {
		return (
			<span>{new Date().toLocaleString()}</span>
		)
	}
}

export default Time;
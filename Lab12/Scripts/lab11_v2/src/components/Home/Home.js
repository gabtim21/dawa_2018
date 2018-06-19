import React from 'react';

import imgNoGato from '../../assets/noesgato.jpg';

const home = () => {
	let greeting = (<span>Bienvenido usuario</span>);
	const name = localStorage.getItem('name');
	if(name) greeting = (<span>Bienvenido {name}</span>);
	return (<div>
	<h1>Pagina de inicio de nuestro Blog</h1>
	{greeting}
	<hr />
	<img src={imgNoGato} alt="NO es un Gato" style={{maxHeight: '250px'}} />
</div>);
}
export default home;
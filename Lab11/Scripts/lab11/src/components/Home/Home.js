import React from 'react';

import imgNoGato from '../../assets/noesgato.jpg';

const home = () => (<div>
	<h1>Pagina de inicio de nuestro Blog</h1>
	<img src={imgNoGato} alt="NO es un Gato" style={{maxHeight: '250px'}} />
</div>);

export default home;
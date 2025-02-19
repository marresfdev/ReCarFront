import React from 'react';
import LayoutComponent from '../components/Layout/index.jsx';
import Form from '../components/FormSimulador.jsx';
import Image from '../components/ImageSimulador.jsx';

const SimuladorPage = () => {
    return (
        <LayoutComponent
        leftColSize={{xs:0, sm:0, md:8, lg: 6}}
        rightColSize={{xs:24, sm:24, md:16, lg:18}}
        leftContent={<Image />}
        rightContent={<Form/>}
      />
    );
};

export default SimuladorPage;
import React from 'react';
import Navbar from '../../layout/navbar/navbar';

const Exhibit = () => {
    return ( 
        <div>
            <title>Exhibit</title>
            <header className='h-10vh sm:h-20vh bg-green-300'>
                <Navbar showGual={true} isRegNav={true} />
            </header>
            <main className='content'>

            </main>
        </div>
     );
}
 
export default Exhibit;
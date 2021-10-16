import React, { useState } from 'react';

import PhotoSelection from '../../Components/PhotoSection/PhotoSelection';
import Thanks from '../../Components/Thanku_popup/Thanku';
import Hellouser from '../../Components/User_Selection_popup/Hellouser';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHelloOpen, setIsHelloOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const toggleHellousrPopup = () => {
        setIsHelloOpen(!isHelloOpen);
    }
    return (
        <div>

            {isOpen && <Thanks handleClose={togglePopup} />}
            {isHelloOpen && <Hellouser handleClose={toggleHellousrPopup} />}
            <PhotoSelection heading="Photo Selection" imageFolderText="Malli's Marriage Folder" mehandiText="Malli's Mehendhi " />
            <input
                type="button"
                value="Thanks popup"
                onClick={togglePopup}
            />
            <input
                type="button"
                value="Hello user popup"
                onClick={toggleHellousrPopup}
            />
        </div>
    )
}

export default Home

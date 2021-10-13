import React, { useState } from 'react';

import PhotoSelection from '../../Components/PhotoSection/PhotoSelection';
import Thanks from '../../Components/Thanku_popup/Thanku';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>

            {isOpen && <Thanks handleClose={togglePopup} />}
            <PhotoSelection heading="Photo Selection" imageFolderText="Malli's Marriage Folder" mehandiText="Malli's Mehendhi " />
            <input
                type="button"
                value="Thanks popup"
                onClick={togglePopup}
            />
        </div>
    )
}

export default Home

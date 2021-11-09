import React, { useState } from 'react';

import PhotoSelection from '../../Components/PhotoSection/PhotoSelection';
import Thanks from '../../Components/Thanku_popup/Thanku';
import Hellouser from '../../Components/User_Selection_popup/Hellouser';
import Versionpop from '../../Components/VersionSelect_popup/version_popup';
import Notification from '../../Components/Notification/notification';
import Clientlogin from '../../Components/ClientLoginPopup/ClientLogin';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHelloOpen, setIsHelloOpen] = useState(false);
    const [isVersionOpen, setIsVersionOpen] = useState(false);
    const [isClientLogin, setIsClientLogin] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const toggleHellousrPopup = () => {
        setIsHelloOpen(!isHelloOpen);
    }
    const toggleVersionPopup = () =>{
        setIsVersionOpen(!isVersionOpen);
    }
    const toggleClientLoginPopup = () => {
        setIsClientLogin(!isClientLogin);
    }
    return (
        <div>

            {isOpen && <Thanks handleClose={togglePopup} />}
            {isHelloOpen && <Hellouser handleClose={toggleHellousrPopup} />}
            {isVersionOpen && <Versionpop handleClose={toggleVersionPopup} />}
            {isClientLogin && <Clientlogin handleClose={toggleClientLoginPopup} />}
            <PhotoSelection heading="Photo Selection" imageFolderText="Malli's Marriage Folder" mehandiText="Malli's Mehendhi " />
            <Notification heading = "Notifications" />
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
            <input
                type="button"
                value="Version selection popup"
                onClick={toggleVersionPopup}
            />
            <input
                type="button"
                value="Client login popup"
                onClick={toggleClientLoginPopup}
            />
        </div>
    )
}

export default Home

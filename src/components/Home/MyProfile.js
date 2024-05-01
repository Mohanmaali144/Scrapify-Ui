import SlTab from '@shoelace-style/shoelace/dist/react/tab';
import SlTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import SlTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Notifications from './Notifications';
import SellProducts from "./SellProducts";
import SellScrap from "./SellScrap";
import UserProfile from "./UserProfile";

export default function MyProfile() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()
    const { state } = useLocation();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            <div className='bg-[#FAF7EF]'>
                <SlTabGroup>
                    <SlTab slot="nav" panel="profile">
                        My Profile
                    </SlTab>
                    <SlTab slot="nav" panel="products">
                        My Products
                    </SlTab>
                    <SlTab slot="nav" panel="scrap">
                        My Scrap
                    </SlTab>
                    <SlTab slot="nav" panel="message">
                        Message
                    </SlTab>
                    <SlTab slot="nav" panel="notification" active={state}>
                        Notifications
                    </SlTab>
                    <SlTabPanel name="profile"><UserProfile /></SlTabPanel>
                    <SlTabPanel name="products"><SellScrap /></SlTabPanel>
                    <SlTabPanel name="scrap"><SellProducts /></SlTabPanel>
                    <SlTabPanel name="message"><SellProducts /></SlTabPanel>
                    <SlTabPanel name="notification"><Notifications /></SlTabPanel>
                </SlTabGroup>
            </div>
        </>
    );
}

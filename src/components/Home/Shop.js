import DeactivePopup from "../Popups/DeactivePopup";

const heading = 'LogOut'
const content = 'Are you want sure to logout this application'
const done = false;
const cencle = false;
export default function Shop() {
    return (<>
        <h3>Shop Now component . . . . . . .. </h3>
        <DeactivePopup heading={heading} content={content} done={done} cencle={cencle} />
    </>)
}
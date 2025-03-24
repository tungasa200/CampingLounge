import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AutoScrollTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
}
export default AutoScrollTop;
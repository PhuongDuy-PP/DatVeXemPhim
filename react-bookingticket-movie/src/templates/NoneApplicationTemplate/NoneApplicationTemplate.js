import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import Header from "../HomeTemplate/Layout/Header/Header";

export const NoneApplicationTemplate = (props) => {    //path, exact, Component
    const { Component, ...restRoute } = props;
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);

    },[])

    const handleBackToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };
    return <Route {...restRoute} render={(propsRoute) => {     //props.location, props.history, props.match
        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <hr className="mt-5" />
            {isVisible && (
                <span onClick={handleBackToTop}>
                    <i
                    className="fa fa-angle-up"
                    style={{
                        color: '#ec7532',
                        fontSize: '37px',
                        position: 'fixed',
                        right: '50px',
                        bottom: '20px',
                        height: '45px',
                        width: '45px',
                        borderRadius: '50%',
                        border: '2px solid #ec7532',
                        lineHeight: '38px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        fontWeight: '900',
                        transition: 'all 1s'
                    }}>
                </i>
                </span>
            )}
            <Footer />
        </Fragment>
    }} />
}
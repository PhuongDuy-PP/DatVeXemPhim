import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";


export const HomeTemplate = (props) => {    //path, exact, Component
    const {Component,...restRoute} = props;

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    return <Route {...restRoute} render={(propsRoute) => {     //props.location, props.history, props.match
        return <Fragment>
            <Header {...propsRoute} />
            
            <Component {...propsRoute} />

            <hr className="mt-5"/>
            <Footer />
        </Fragment>
    }} />
}
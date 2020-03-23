import React from "react";
import Flex from "../Flex";
import fa from "./../../img/redes/facebook.svg";
import tw from "./../../img/redes/twitter.svg";
import it from "./../../img/redes/instagram.svg";
import lk from "./../../img/redes/linkedin.svg";
import epb from "./../../img/epayco-b.svg"


function Footer() {
    return (
        <footer className="wc py-4" id={"footer"}>
            <Flex className="container f01 px-lg-0">
                <div className="logo-footer text-center mb-3 mb-sm-0 col-12 col-sm-4 text-sm-left">
                    <a href="https://epayco.co/index.php" className="wc"><img src={epb}
                                                                              alt="ePayco-blanco"/></a>
                </div>

                <Flex className="redes f01 col-12 col-sm-8 justify-content-sm-end">
                    <a
                        href="http://www.facebook.com/PaycoVirtual"
                        target="_blank"
                        className="text-center mx-3 mx-sm-0 ml-sm-3 imgb redS"
                    >
                        <img src={fa} alt=""/></a>
                    <a
                        href="http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=epaycovirtual"
                        target="_blank"
                        className="text-center mx-3 mx-sm-0 ml-sm-3 imgb redS"
                    >
                        <img src={tw} alt=""/></a>
                    <a
                        href="http://instagram.com/epaycovirtual"
                        target="_blank"
                        className="text-center mx-3 mx-sm-0 ml-sm-3 imgb redS"
                    >
                        <img src={it}
                             alt=""/>
                    </a>
                    <a
                        href=""
                        className="text-center mx-3 mx-sm-0 ml-sm-3 imgb redS"
                    >
                        <img src={lk} alt=""/>
                    </a>
                </Flex>
            </Flex>

        </footer>
    )
};

export default Footer;

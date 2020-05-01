import React, {useEffect, useState} from "react";
import Flex from "../Flex";
import $ from "jquery";

function Menu() {

    const [open,setOpen] = useState(false);

    $(".myList li").addClass("opn");

    if($(window).width() < 998){
        $(".menu01 li").click(function(e){

            $(this).find(".submenu").hasClass("sOpen") ?
                $(this).find(".submenu").removeClass("sOpen"):
                $(this).find(".submenu").addClass("sOpen")

        })
    }

    $("#showM").click(function(){
        $(".cont-menu").toggleClass("SM");
        $(this).find(".open,.closem").toggleClass("dn");
        $(".submenu").removeClass("");
    });


    return (
        <header className="f01">
            <div className="logo">
                <img src="https://epayco.co/img/epayco_davi_color.png" alt=""/>
            </div>
            <div className="icon-menu d-lg-none text-right">
                <button id="showM" onClick={()=> setOpen(!open)}>
                    {open ?
                        <i className="material-icons closem dn">close</i>
                        :
                        <i className="material-icons open">menu</i>
                    }
                </button>
            </div>
            <div className={`cont-menu f01 ${open ? "SM" : ""}`}>
                <ul className="menu01 f01">
                    <li><span className="link"> Producto  <i className="material-icons">arrow_drop_down</i></span>
                        <div className="submenu">
                            <a href="https://epayco.co/epayco_collect.php"><p>ePayco <span
                                className="orange">Agregador</span>
                            </p>
                                <small>Reciba pagos en línea en su sitio web, móvil o presencial al instante.</small>
                            </a>
                            <a href="https://epayco.co/pagos_divididos.php"><p>ePayco <span
                                className="orange">Pagos divididos</span></p>
                                <small>Market Place, Vendedores,distribuya pagos entre clientes, empleados y
                                    proveedores.</small>
                            </a>

                            <a href="/recaudo"><p>ePayco <span
                                className="orange">Recaudo</span></p>
                                <small>Generación de cobros recurrentes al instante.</small>
                            </a>

                            <a href="/paypal"><p>ePayco <span
                                className="orange">PayPal</span></p>
                                <small>Pagos a través de la solución mas conocida en el mundo.</small>
                            </a>
                        </div>
                    </li>
                    <li><span className="link"> Herramientas <i className="material-icons">arrow_drop_down</i>  </span>
                        <div className="submenu">
                            <a href="https://epayco.co/herramientas.php#email">
                                <p>Email de <span className="orange">Cobro</span></p>
                                <small>Cree y envía soliccitudes de cobro ráopudamente por correo electrónico.</small>
                            </a>
                            <a href="https://epayco.co/herramientas.php#link">
                                <p>Link de <span className="orange">Cobro</span></p>
                                <small>cree vínculos de cobro con o cin imñagenes y compártalo en redes sociales y
                                    mensajes
                                    de texto.</small>
                            </a>
                            <a href="https://epayco.co/herramientas.php#datafono">
                                <p>Datáfono<span className="orange">Virtual</span></p>
                                <small>Procese tarjetas de crédito en su negocio en nuestra consola
                                    administrativa.</small>
                            </a>
                            <a href="https://epayco.co/herramientas.php#boton">
                                <p>Botón de <span className="orange">Cobro Único</span></p>
                                <small>Cree botones de cobro fácilmente, y adaptemos en su sitio web sin conocimientos
                                    de
                                    programación</small>
                            </a>
                            <a href="https://epayco.co/herramientas.php#botonopen">
                                <p>Botón de <span className="orange">Cobro Abierto</span></p>
                                <small>Cree botonoes de cobro con campos personalizados y recaude fácilmente sus pagos
                                    en el
                                    sitio web.</small>
                            </a>
                        </div>
                    </li>
                    <li><span className="link"> Integración <i className="material-icons">arrow_drop_down</i>  </span>
                        <div className="submenu">
                            <a href="https://epayco.co/integraciones.php">
                                <p>Web <span className="orange">Checkout</span></p>
                                <small>Implemente nuestro botón de pagos con parámetros fáciles de configurar.</small>
                            </a>
                            <a href="https://epayco.co/integraciones.php">
                                <p><span className="orange">Móvil</span></p>
                                <small>Implemente pagos móviles fácilmente a través de nuestro SDK en su aplicación
                                    móvil.</small>
                            </a>
                            <a href="https://epayco.co/integraciones.php">
                                <p>Carro de <span className="orange">Compra</span></p>
                                <small>Instale Plugins ecommerce fácilmente en su CMS preferido.</small>
                            </a>
                            <a href="https://epayco.co/integraciones.php">
                                <p>API <span className="orange">REST</span></p>
                                <small>Maneje su propio entorno de pagos y personalice su desarrollo</small>
                            </a>
                            <a href="https://epayco.co/integraciones.php">
                                <p>Pagos <span className="orange">Recurrentes</span></p>
                                <small>
                                    Maneje suscripciones, cobre autométicamente sus facturas y aumente las ventas de su
                                    empresa
                                </small>
                            </a>
                        </div>
                    </li>
                    <li><span className="link"> Desarrolladores <i
                        className="material-icons">arrow_drop_down</i>  </span>
                        <div className="submenu">
                            <a href="https://docs.epayco.co/">
                                <p><span className="orange">Documentación</span></p>
                                <small>Implemente nuestro botón de pagos con parámetros fáciles de configurar.</small>
                            </a>
                            <a href="https://epayco.co/plugins.php">
                                <p><span className="orange">Plugins</span></p>
                                <small>Integre fácilmente carritos de compra para tu CVMS favorito (Wordpress,
                                    prestashop y
                                    más).</small>
                            </a>
                            <a href="https://epayco.co/sdks.php">
                                <p><span className="orange">SDKs</span></p>
                                <small>Aprende como integrar nuestros SDK, y empieza a recibir ppagos en línea.</small>
                            </a>
                        </div>
                    </li>
                    <li><span className="link"> <a href="https://epayco.co/precios.php">Tarifas</a> </span></li>
                    <li><span className="link"> Compañia <i className="material-icons">arrow_drop_down</i>  </span>
                        <div className="submenu">
                            <a href="https://epayco.co/partners.php"><p>Partners</p></a>
                            <a href="https://blog.epayco.co/"><p>Blog</p></a>
                            <a href="https://epayco.co/nosotros.php"><p>Nosotros</p></a>
                            <a href="https://epayco.co/recursos_graficos.php"><p>Recursos gráficos</p></a>
                            <a href="https://epayco.co/soporte.php"><p>Preguntas frecuentes</p></a>
                            <a href="https://epayco.co/contacto"><p>Contacto</p></a>
                        </div>
                    </li>
                </ul>
                <Flex className="menu02 f01" flex={"1 1 300px"}>
                    <a
                        href="https://epayco.co/contacto"
                        className="support"
                        data-toggle="tooltip" data-placement="bottom" title="Contáctanos"
                    >
                        <i className="material-icons mr-2">email</i> <span>Contáctenos</span>
                    </a>
                    <a
                        href="https://epayco.co/soporte.php"
                        className="support"
                        data-toggle="tooltip" data-placement="bottom" title="Ayuda y soporte"
                    >
                        <i className="material-icons mr-2">help_outline</i> <span>Ayuda y soporte</span>
                    </a>
                    <a
                        href="https://dashboard.epayco.co/"
                        className="login"
                    >
                        Iniciar sesión
                    </a>
                    <a
                        href="https://dashboard.epayco.co/login?utm_campaign=epayco&utm_medium=button-header&utm_source=web#registro"
                        className="login"
                    >
                        Crear cuenta
                    </a>
                </Flex>
            </div>
        </header>
    )
}

export default Menu;

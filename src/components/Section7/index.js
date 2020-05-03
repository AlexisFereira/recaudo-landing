import React from "react";
import TitleDesc from "../titleDesc";
import Flex from "../Flex";
import formu from "./../../img/formulario.png";
import ListItem from "../ListItem";
import Section08 from "../Section08";
import Grafico from "./grafico";

function Section07() {
    return (
        <div className={"wc"} id={"formulario"} name={"formulario"} style={{paddingTop:"100px"}}>
            <Flex className={"container px-md-0"}>
                <div className="wc mx-auto">
                    <TitleDesc
                        sizeT={"28px"}
                        className={"pb-4"}
                        text={"Formulario"}
                        description={"La opción mas simple y completa para recibir pagos."}
                    />
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                       <p>Así como en una consignación, en este caso virtual, puede configurar un nombre y una descripción a este formulario, la cantidad de campos que requiera como:
                       </p>
                        <ListItem text="Nombre y apellido." />
                        <ListItem text="Correo electrónico." />
                        <ListItem text="Numero celular." />
                        <ListItem text="Valor a pagar." />
                        <ListItem text="Hora y fecha." />
                        <ListItem text="Muchos más…" />
                        <p>Puede agregar a este formulario una lista desplegable, opciones de selección única o múltiple y campos de texto sencillo o extenso, a cada campo podrá agregar una ayuda, ahora no perderá ningún pago.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 pl-md-0 px-0">
                    <Grafico/>
                </div>

                <div className="container px-0">
                    <Section08/>
                </div>
            </Flex>
        </div>
    )
}

export default Section07;

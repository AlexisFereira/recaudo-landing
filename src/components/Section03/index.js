import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import ListItem from "../ListItem";
import Grafico from "./grafico";

function Section03() {
    return (
        <div className={"wc"}>
            <Flex className={"container px-md-0 py-4 py-md-5"}>
                <div className="col-12 col-md-6  px-md-0 px-0">
                    <div className={"m460 mx-0 mx-md-auto wc pb-4 pb-md-0"}>
                        <TitleDesc
                            direction={"left"}
                            text={"Dashboard"}
                            description={"Nuestro panel de administración permite de manera simplificada que usted y su equipo de trabajo realicen las siguientes acciones:"}
                        />

                        <ListItem
                            text={"Crear y configurar los proyectos de recaudo tipo Archivo o Formulario."}
                        />

                        <ListItem
                            text={"Subir lotes de facturas en la opción de Archivo."}
                        />

                        <ListItem
                            text={"Consultar registros pagados, pendientes o vencidos."}
                        />
                        <ListItem
                            text={"Construir y descargar reportes para la conciliación."}
                        />

                        <ListItem
                            text={"Crear y administrar otros usuarios."}
                        />

                        <ListItem
                            text={"Cambiar reglas de negocio y mucho mas."}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 pr-md-0 px-0">
                    <Grafico/>
                </div>
            </Flex>
        </div>
    )
};

export default Section03;

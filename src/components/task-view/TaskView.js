import React, {Fragment, useState} from "react";

import { LogoTitle } from "./header/logo-title/LogoTItle";
import { HeaderTask } from "./header/HeaderTask";
import { Username } from "./header/username/Username";
import { LogOut } from "./header/log-out/LogOut";
import { InfoContainer } from "./header/info-container/InfoContainer";
import { HeaderT } from "./header/header-info/HeaderInfo";
import { MainTaskContainer } from "./main/MainTaskContainer";
import { SideBar } from "./main/side-bar/SideBar";
import { ButtonSide } from "./main/button-side/ButtonSide";
import { MainTask } from "./main/main-task/MainTask";
import { Task } from "./main/task/Task";
import { ButtonAddTask } from "./main/button-add-task/ButtonAddTask";

// Modals
import { Modal } from "../../modal/Modal";
import { AddTask } from "../../modal/AddTask";

// Icons
import plusIcon from "../../assets/icons/plus.svg";
import subjectIcon from "../../assets/icons/file.svg"
import documentIcon from '../../assets/icons/file-plus-2.svg';




function TaskView(){
    const [modal, setModal] = useState(false);

    return(
        <Fragment>
            <HeaderT>
                <LogoTitle/>
                <HeaderTask>
                    <InfoContainer>
                        <Username
                            user="Paco"
                        />
                        <LogOut
                            text="Cerrar sesion"
                        />
                    </InfoContainer>
                </HeaderTask>
            </HeaderT>
            <MainTaskContainer>
                <SideBar>
                    <ButtonSide
                    alt="Plus icon"
                    src={plusIcon}
                    text={"Tareas"}
                    route='../tareas'
                    />
                    <ButtonSide
                    alt="Subject icon"
                    src={subjectIcon}
                    text={"Materias"}
                    route='../materias'
                    />
                </SideBar>
                <MainTask>
                    <Task/>
                    <Task/>
                    <Task/>

                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>

                    <Task/>
                    <Task/>

                    <ButtonAddTask
                        icon={documentIcon}
                        modal={modal}
                        setModal={setModal}
                    />
                </MainTask>
            </MainTaskContainer>

            {!!modal && (
                <Modal>
                    <AddTask/>
                </Modal>
            )}
        </Fragment>

    )
}

export {TaskView};
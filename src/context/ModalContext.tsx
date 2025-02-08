'use client'

import React, {ReactNode, useState} from "react";

interface IModalContext {
    modalState: IModal;
    openModal: (modalOptions: IOpenModal<ModalTypes>) => void;
    closeModal: (closeOptions: ICloseModal) => void;
}

export enum ModalTypes {

    // 악보 댓글/답글 수정
    HOUSE_DONG_CONTROL = "HOUSE_DONG_CONTROL",

    // 악보 답글 달기 모달
    TAB_CHILD_COMMENT_CREATE = "TAB_CHILD_COMMENT_CREATE",
}

type IModal = {
    // 악보 댓글/답글 수정
    [ModalTypes.HOUSE_DONG_CONTROL]: {
        isVisible: boolean,
        data: {
            houseId: string,
            dongId: string
        },
    },

    // 악보 답글 달기 모달
    [ModalTypes.TAB_CHILD_COMMENT_CREATE]: {
        isVisible: boolean,
        data: {
            tabId: number, // targetId
            parentCommentId: number, // commentId
        },
    },
}

const initialModalState: IModal = {
    // 악보 댓글/답글 수정
    [ModalTypes.HOUSE_DONG_CONTROL]: {
        isVisible: false,
        data: {
            houseId: "",
            dongId: ""
        },
    },

    // 악보 답글 달기 모달
    [ModalTypes.TAB_CHILD_COMMENT_CREATE]: {
        isVisible: false,
        data: {
            tabId: 0, // targetId
            parentCommentId: 0, // commentId
        },
    },
};

export const ModalContext = React.createContext<IModalContext>({
    modalState: initialModalState,
    openModal: ({name, data}) => {
        console.log("Opening modal:", name, "with data:", data);
    },
    closeModal: ({name}) => {
        console.log("Closing modal:", name);
    },
});

export type IOpenModal<T extends ModalTypes> = {
    name: T;
    data?: IModal[T]['data'];
}

export type ICloseModal = {
    name: ModalTypes;
}

export function ModalProvider({children}: { children: ReactNode }) {
    const [modalState, setModalState] = useState<IModal>(initialModalState);

    const openModal: IModalContext["openModal"] = ({name, data}) => {
        setModalState((prev) => ({
            ...prev,
            [name]: {
                isVisible: true, data: data ?? {}
            },
        }));
    };

    const closeModal: IModalContext["closeModal"] = ({name}) => {
        setModalState((prev) => ({
            ...prev,
            [name]: {isVisible: false, data: initialModalState[name].data}, // 기본 상태로 복원합니다.
        }));
    };

    const contextValue = {
        modalState,
        openModal,
        closeModal,
    }

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}
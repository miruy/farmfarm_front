'use client';

import {useContext} from "react";
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ModalContext, ModalTypes} from "@/context/ModalContext";

const ControlModal = () => {

    const {modalState, closeModal} = useContext(ModalContext);

    console.log("modalState[ModalTypes.HOUSE_DONG_CONTROL].isVisible", modalState[ModalTypes.HOUSE_DONG_CONTROL].isVisible)

    return (
        <Dialog open={modalState[ModalTypes.HOUSE_DONG_CONTROL].isVisible}>
            <DialogContent
                className="flex flex-col min-w-[80%] lg:min-w-[60%] h-auto rounded-lg z-50 outline-0 px-3 py-5 sm:p-6">

                <form
                    // onSubmit={updateTabCommentForm.handleSubmit(handleUpdateTabCommentSubmit)}
                >
                    <DialogHeader className="flex justify-center items-center">
                        <DialogTitle>수정</DialogTitle>
                    </DialogHeader>

                    <div
                        className="flex bg-transparent py-6">
                        {/*<Controller*/}
                        {/*    control={updateTabCommentForm.control}*/}
                        {/*    name="content"*/}
                        {/*    render={({field: {onChange, value}}) => (*/}
                        {/*        <textarea*/}
                        {/*            value={value}*/}
                        {/*            onChange={onChange}*/}
                        {/*            placeholder="댓글을 남겨보세요!"*/}
                        {/*            className="flex-1 resize-none border bg-background outline-none rounded h-40 p-2">*/}

                        {/*         </textarea>*/}
                        {/*    )}*/}
                        {/*/>*/}
                    </div>

                    <DialogFooter className="flex-row flex justify-center sm:justify-end space-x-3 sm:space-x-3">
                        <Button
                            type="submit"
                            className="w-auto"
                        >
                            저장
                        </Button>
                        <DialogClose asChild>
                            <Button
                                className="hover:bg-secondary-hover"
                                type="button"
                                variant="secondary"
                                onClick={() => {
                                    closeModal({
                                        name: ModalTypes.HOUSE_DONG_CONTROL
                                    });
                                }}
                            >
                                닫기
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    )
}

export default ControlModal;
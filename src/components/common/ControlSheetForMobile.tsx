'use client';

const ControlSheetForMobile = ({cilckControlButton}: { cilckControlButton: boolean }) => {
    return (
        <div
            className={`${cilckControlButton ? 'translate-y-0' : 'translate-y-80'} flex lg:hidden fixed bottom-0 right-0 left-0 border-t bg-gray-50 h-1/3 duration-500 p-5`}>
            컨트롤 박스
        </div>
    )
}

export default ControlSheetForMobile;
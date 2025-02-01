'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Main = () => {
    return (
        <div className="flex flex-1 flex-col pt-[81px]">
            <div className="w-full lg:w-1/2 2xl:w-1/3 space-y-5 px-3 mx-auto">
                <div className="text-center font-black text-[45px]">
                    FARMFARM
                </div>

                <div className="space-y-3">
                    <div className="space-y-3">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="absolute top-[18px] left-3 h-4 w-4 opacity-60">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                            </svg>
                            <Input type="text" className="h-[50px] pl-9 placeholder:text-[15px]" placeholder="아이디"/>
                        </div>

                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="absolute top-[18px] left-3 h-4 w-4 opacity-60">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"/>
                            </svg>
                            <Input type="text" className="h-[50px] pl-9 placeholder:text-[15px]" placeholder="비밀번호"/>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button type="button" variant="default" className="w-full h-[50px] text-[16px]">로그인</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
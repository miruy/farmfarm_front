'use client';

import {useRouter} from "next/navigation";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {useForm} from "react-hook-form";
import {CreateTokenRequest} from "@/openapi/model";
import {useAuthApiCreateToken} from "@/openapi/api/auth/auth";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Slide, toast} from "react-toastify";

const Login = () => {

    const router = useRouter();
    const {login} = useContext(AuthContext);

    const createTokenRequest = useForm<CreateTokenRequest>({
        defaultValues: {},
    });

    const {mutate: createToken} = useAuthApiCreateToken({
        mutation: {
            onSuccess: async (response) => {

                login(response.accessToken!);

                toast.success("성공적으로 로그인이 완료되었습니다.", {
                    position: "top-center",
                    autoClose: 2500,
                    transition: Slide,
                    className: "text-sm",
                    theme: "colored",
                });
                router.push(`/houses`);
            },
            onError: (error) => {
                console.log(error);
                toast.error("관리자에게 문의하세요", {
                    position: "top-center",
                    autoClose: 2500,
                    transition: Slide,
                    className: "text-sm",
                    theme: "colored",
                });
            },
        }
    })

    const onCreateTokenSubmit = () => {


        createTokenRequest.setValue("grantType", "ID_PASSWORD");

        if (!createTokenRequest.getValues().loginId) {
            toast.error("아이디를 입력하세요.", {
                position: "top-center",
                autoClose: 2500,
                transition: Slide,
                className: "text-sm",
                theme: "colored",
            });
            return
        }

        if (!createTokenRequest.getValues().password) {
            toast.error("비밀번호를 입력하세요.", {
                position: "top-center",
                autoClose: 2500,
                transition: Slide,
                className: "text-sm",
                theme: "colored",
            });
            return
        }

        if (
            createTokenRequest.getValues().loginId &&
            createTokenRequest.getValues().password
        ) {

            createToken({
                data: createTokenRequest.getValues()
            });

        }
    }

    return (
        <div className="flex flex-1 flex-col pt-[81px]">
            <div className="w-full lg:w-1/2 2xl:w-1/3 space-y-5 px-3 mx-auto">
                <div className="text-center font-black text-[45px]">
                    FARMFARM
                </div>

                <form className="space-y-5">
                    <div className="space-y-5">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="absolute top-[18px] left-3 h-4 w-4 opacity-60">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                            </svg>
                            <Input type="text" className="h-[50px] pl-9 placeholder:text-[15px]"
                                   placeholder="아이디" {...createTokenRequest.register("loginId")}/>
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
                            <Input type="password" className="h-[50px] pl-9 placeholder:text-[15px]"
                                   placeholder="비밀번호" {...createTokenRequest.register("password")}/>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button type="button" variant="default" className="w-full h-[50px] text-[16px]"
                                onClick={onCreateTokenSubmit}>로그인</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
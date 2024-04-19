import { Button, Label, TextInput } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import './css/signup.css';
export default function Login({ setSignup, setLogin }) {

    return <>
        <div className="signupbg absolute top-0 w-screen h-screen z-50 flex justify-center">
            <div className='absolute w-11/12 sm:w-10/12 md:w-5/12 h-3/4 bg-white rounded-2xl pt-2 sm:mt-[40px]'>
                <div className="h-auto w-full flex items-center">
                    <h3 className="text-2xl font-bold font-oswald text-center w-11/12 pt-3 pl-11 mb-7 ">SCREPIFY</h3>
                    <div>
                        <IoClose onClick={() => { setLogin(false) }} className="absolute cursor-pointer text-3xl" />
                    </div>
                </div>
                {/* content section */}
                <div className="h-full w-full flex justify-center items-center -mt-16">
                    <div className="h-4/5 w-10/12 flex items-center flex-col p-2 ">
                        <h3 className="text-2xl font-bold font-oswald text-center">LOGIN WITH YOUR ACCOUNT</h3>
                        <div className="h-[3px] bg-black w-full mt-2"></div>
                        <form className="grid grid-cols-2  gap-4 mt-3">
                            <div className="col-span-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Username" />
                                </div>
                                <TextInput id="username" type="username" placeholder="Nitin Malviya" required />
                            </div>
                            <div className="col-span-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput id="password1" type="password" required />
                            </div>
                            <button onClick={() => { setLogin(false); setSignup(true) }} className="underline text-blue-700">I don't have an account</button>
                            <Button className="col-span-2 text-xl font-bold font-oswald bg-slate-800 hover:opacity-70" type="submit">Login</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
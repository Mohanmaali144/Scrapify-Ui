import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import OTPForm from "../ui/Otp";
import './css/signup.css';

export default function Signup({ setSignup, setLogin }) {
    const [otp, setShowOtp] = useState(false);

    function handleSignup() {
        // apply logic here when opt get successful 
        setShowOtp(true);
        // apply loader

        // apply what you want
    }

    return (
        <>
            <div className="signupbg absolute top-0 w-screen h-screen z-50 flex justify-center">
                <div className='absolute w-11/12 sm:w-10/12 md:w-5/12 h-screen bg-white rounded-2xl pt-2 sm:mt-[40px]'>
                    {otp ? <OTPForm setShowOtp={setShowOtp} /> :
                        <>
                            <div className="h-auto w-full flex items-center">
                                <h3 className="text-2xl font-bold font-oswald text-center w-11/12 pt-3 pl-11">SCREPIFY</h3>
                                <div>
                                    <IoClose onClick={() => { setSignup(false) }} className="absolute cursor-pointer text-3xl" />
                                </div>
                            </div>
                            {/* content section */}
                            <div className="h-full w-full flex justify-center items-center -mt-16">
                                <div className="h-4/5 w-10/12 flex items-center flex-col p-2 ">
                                    <h3 className="text-2xl font-bold font-oswald text-center">CREATE YOUR ACCOUNT</h3>
                                    <div className="h-[3px] bg-black w-full mt-2"></div>
                                    <form className="grid grid-cols-2 gap-4 mt-3">

                                        <div className="col-span-2 sm:col-span-1">
                                            <div className="mb-2 block">
                                                <Label htmlFor="username" value="Username" />
                                            </div>
                                            <TextInput id="username" type="text" placeholder="Nitin Malviya" required />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <div className="mb-2 block">
                                                <Label htmlFor="email1" value="Your email" />
                                            </div>
                                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                                        </div>
                                        <div className="col-span-2">
                                            <div className="mb-2 block">
                                                <Label htmlFor="contact" value="Your contact" />
                                            </div>
                                            <TextInput id="contact" type="text" placeholder="+918877656541" required />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <div className="mb-2 block">
                                                <Label htmlFor="password1" value="Your password" />
                                            </div>
                                            <TextInput id="password1" type="password" required />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <div className="mb-2 block">
                                                <Label htmlFor="password2" value="Confirm password" />
                                            </div>
                                            <TextInput id="password2" type="password" required />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="remember" />
                                            <Label htmlFor="remember">Remember me</Label>
                                        </div>
                                        <button onClick={() => { setLogin(true); setSignup(false); }} className="underline text-blue-700">Already have an account?</button>
                                        <Button onClick={handleSignup} className="col-span-2 text-xl font-bold font-oswald bg-slate-800 hover:opacity-70" type="button">Next</Button>
                                    </form>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

import React, { useState } from 'react';
import './css/otp.css';
const OTPForm = ({ setShowOtp }) => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your verification logic here using the OTP values in the state (otp array)
        console.log('OTP submitted:', otp.join(''));
    };

    const handleResend = () => {
        // Add logic to resend OTP
        console.log('Resending OTP...');
    };

    return (
        <div className='flex justify-center items-center w-full h-full'>
            <form className="otp-Form" onSubmit={handleSubmit}>
                <span className="mainHeading">Enter OTP</span>
                <p className="otpSubheading">We have sent a verification code to your mobile number</p>
                <div className="inputContainer">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            required
                            maxLength="1"
                            type="text"
                            className="otp-input"
                            id={`otp-input${index + 1}`}
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <button className="w-4/5 bg-[#272727] font-oswald font-medium hover:opacity-90 transition ease-in-out duration-100 mb-5  text-white p-1 rounded-lg" type="submit">Verify</button>
                <p className="resendNote font-oswald">Didn't receive the code? <button className="resendBtn" onClick={handleResend}>Resend Code</button></p>
                <button onClick={() => { setShowOtp(false) }} className='w-4/5 bg-[#272727] font-oswald font-medium hover:opacity-90 transition ease-in-out duration-100 mb-5  text-white p-1 rounded-lg'>Back</button>
            </form>
        </div>
    );
};

export default OTPForm;

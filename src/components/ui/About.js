import image from "../ui/img/about1.jpg";
import gif from "../ui/img/about2.gif";
import React from 'react';
import GoogleMapReact from 'google-map-react';

function MapComponent(props) {
    return (
        <div className="h-[300px] mb-5 w-full sm:w-3/5 lg:w-2/5 mx-auto">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}

function About() {
    const mapCenter = { lat: 51.505, lng: -0.09 };
    const mapZoom = 11;
    return (
        <div className="flex flex-col h-full">
            <div className='h-[570px] relative flex justify-center  items-center'>
                <img src={image} alt="" className="w-full h-full blur-sm absolute inset-0" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <p className="text-white sm:text-5xl font-oswald font-bold mt-10">We're Here to Welcome You As You Are</p>
                    <p className="text-white sm:text-4xl font-oswald font-bold mt-10">One <span className="text-[#56F903]">Step</span> A Head Towards <span className="text-[#56F903]">Cleanliness</span> </p>
                    <p className="text-white sm:text-4xl font-oswald font-bold mt-10">QUICK CONNECT</p>
                    <p className="text-white sm:text-3xl font-oswald font-bold mt-5">ON YOUR <span className="text-[#56F903]">DOOR</span></p>
                    <div className="items-center flex justify-center">
                        <img src={gif} alt="gif" />
                    </div>
                    <p className="text-white sm:text-4xl font-oswald font-bold ">Our Vision: Keep Your Home and Our Earth Clean</p>
                </div>
            </div>

            <div className='h-[570px] bg-red-400'>

            </div>

            <div className="bg-[#DEDED2] flex-grow">
                <h1 className="font-oswald sm:text-4xl font-bold text-center pt-5">Office Locations & Contact Info</h1>
                <div className="flex justify-center items-center flex-col sm:flex-row text-center mt-10">
                    <div className="mb-10 sm:mb-0 sm:mr-5 w-full mb-3 sm:w-1/2 flex justify-center items-center flex-col">
                        <p className="font-oswald sm:text-2xl font-medium">
                            Indore, India (HQ)<br />
                            Pune, India<br />
                            Vadodara, India<br />
                            ------------------------------
                        </p>
                        <p className="font-oswald sm:text-2xl font-medium">
                            Vijay-Nagar Indore<br />
                            (M.P) HeadQuatar 452010<br />
                            Helpline No.9876543212
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center items-center flex-col">
                        <MapComponent center={mapCenter} zoom={mapZoom} />
                    </div>
                </div>
                <div className='h-[1px] bg-black opacity-35'></div>
            </div>
        </div>
    );
}

export default About;

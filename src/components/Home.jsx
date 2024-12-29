import "../styles/home.css"
import image1 from "../assets/gallery/image-1.jpg"
import image2 from "../assets/gallery/image-2.jpg"
import image3 from "../assets/gallery/image-3.jpg"
import image4 from "../assets/gallery/image-4.jpg"
import image5 from "../assets/gallery/image-5.jpg"
import image6 from "../assets/gallery/image-6.jpg"
import image7 from "../assets/gallery/image-7.jpg"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) 
                element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.hash]);

    return <>
        <div className="hero">
            <h1 className="company-title">JBI Conveyor & Rollers</h1>
        </div>

        <section className="about">
            <h1>About us</h1>

            <p>The company was inceptive in 2007 and is located at Rajkot Gujarat (INDIA). we actively engaged in manufacturing CONVEYOR SYSTEM & ROLLERS. Today we have earned a respectable position in the market by supplying quality products. We have world-class infrastructure, which are managed by some of the best talents in the industry. Our machine shop is well equipped with the latest sophisticated equipment. Our quality assurance team puts our products through a series of 'quality checks' and ensures maintain of quality procedures. We offer precision engineered products that are fabricated and machined by using fine raw materials and these are widely accepted across the nation.</p>
        </section>

        <section className="products">
            <h1>Our Products</h1>

            <div className="card-container">
                <div className="card">
                    <a href="">
                        <div className="image">
                            <img src="/product-images/belt-conveyor.png" />
                        </div>
                        <div className="text">
                            <h2>Conveyor Systems</h2>
                            <p>End-to-end solution for all types of conveyor systems, for various usecases</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="image">
                            <img src="/product-images/impact-roller.png" />
                        </div>
                        <div className="text">
                            <h2>Conveyor Components</h2>
                            <p>Customized conveyor components as per the customer's requirements</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="image">
                            <img src="/product-images/investment-cast-components.jpg" />
                        </div>
                        <div className="text">
                            <h2>Precision Components</h2>
                            <p>High precision machinary components for various applications like gears and assemblies</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <section className="why-us">
            <h1>Why Us</h1>

            <div className="icon-card-container">
                <div className="icon-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
                    <p>Timely<br />Delivery</p>
                </div>
                <div className="icon-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
                    <p>Satisfied<br />Customers</p>
                </div>
                <div className="icon-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" /></svg>
                    <p>Competitive<br />Pricing</p>
                </div>
                <div className="icon-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z" /></svg>
                    <p>Experienced<br />Team</p>
                </div>
                <div className="icon-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z" /></svg>
                    <p>Great after-sales<br />servicee</p>
                </div>
            </div>
        </section>

        <section className="clients">
            <h1>Our Clients</h1>

            <div className="scroll-container">
                <div className="contents">
                    <img src="src/assets/clients/logo.png" alt="Client" />
                    <img src="src/assets/clients/logo.png" alt="Client" />
                    <img src="src/assets/clients/logo.png" alt="Client" />
                    <img src="src/assets/clients/logo.png" alt="Client" />
                    <img src="src/assets/clients/logo.png" alt="Client" />
                    <img src="src/assets/clients/logo.png" alt="Client" />
                </div>
            </div>
        </section>

        <section className="gallery" id="gallery">
            <h1>Gallery</h1>

            <div className="gallery-grid">
                <div className="col col1">
                    <div><img src={image1} alt="JBI Conveyor Photo" /></div>
                    <div><img src={image2} alt="JBI Conveyor Photo" /></div>
                </div>
                <div className="col col2">
                    <div><img src={image3} alt="JBI Conveyor Photo" /></div>
                    <div><img src={image4} alt="JBI Conveyor Photo" /></div>
                    <div><img src={image5} alt="JBI Conveyor Photo" /></div>
                </div>
                <div className="col col3">
                    <div><img src={image6} alt="JBI Conveyor Photo" /></div>
                    <div><img src={image7} alt="JBI Conveyor Photo" /></div>
                </div>
            </div>
        </section>

        <section>
            <h1>Follow us on YouTube</h1>
            <iframe className="youtube" src="https://www.youtube.com/embed/MoPuWa5HVuw" title="Belt Conveyor System | JBI Conveyors" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <section className="contact-us" id="contact-us">
            <h1>Contact us</h1>

            <div className="content">
                <div className="details">
                    <div className="detail">
                        <h2>+91 99987 91399</h2>
                        <h2>jbiconveyor@gmail.com</h2>
                    </div>

                    <div className="detail">
                        <h2>+91 94275 64905</h2>
                        <h2>maxconveyor@yahoo.com</h2>
                    </div>
                </div>

                <div className="seperator"></div>

                <div className="form">
                    <input type="text" className="field" placeholder="Name" />
                    <input type="text" className="field" placeholder="Company" />
                    <input type="text" className="field" placeholder="Mobile no." />
                    <textarea placeholder="Description"></textarea>
                    <div className="btn">
                        <a href="">Submit</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
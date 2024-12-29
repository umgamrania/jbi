import styles from "../styles/Navbar.module.css"
import Logo from "../assets/logo.png"
import { useEffect, useState } from "react"
import productJson from "./ProductsJson"
import { useLocation } from "react-router-dom"

export default function Navbar() {
    const [isScrolled, setScrolled] = useState(false)
    
    let activePage = "Home";

    if(window.location.href.includes("about-us")) activePage = "About us"
    else if(window.location.href.includes("about-us")) activePage = "About us"
    else if(window.location.href.includes("products")) activePage = "Products"
    else if(window.location.href.includes("downloads")) activePage = "Downloads"
    else if(window.location.href.includes("contact-us")) activePage = "Contact us"

    useEffect(() => {
        // change navbar based on scroll position
        window.addEventListener('scroll', () => {
            setScrolled(window.scrollY > 0)
        })

        // mobile menu
        const mobileMenuBtn = document.querySelector("#mobile-menu-btn")
        const linksContainer = document.querySelector("#links-container")

        mobileMenuBtn.onclick = () => {
            linksContainer.classList.toggle(styles.mobileMenuVisible)
        }

        // sub menu visiblity
        const productLink = document.querySelector("#product-link")
        const productTypeList = document.querySelector("#product-type-list")
        
        productTypeList.childNodes.forEach(node => {
            node.addEventListener("mouseenter", (e) => {
                e.target.querySelector("ul").style.setProperty("display", "flex")
            })

            node.addEventListener("mouseleave", (e) => {
                e.target.querySelector("ul").style.setProperty("display", "none")
            })
        })
        
        let disappearTimeout = null
        productLink.addEventListener("mouseenter", () => {
            if(disappearTimeout)
                clearTimeout(disappearTimeout)
            productTypeList.style.setProperty("display", "flex")
        })

        productLink.addEventListener("mouseleave", () => {
            disappearTimeout = setTimeout(() => {
                productTypeList.style.setProperty("display", "none")
            }, 200);
        })
    })
    

    return <>
        <nav className={isScrolled ? styles.scrolled : ""}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={Logo} alt="JBI Logo" />
                </a>
            </div>
            <div className={styles.menuBtn} id="mobile-menu-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
            </div>
            <ul className={styles.linksContainer} id="links-container">
                <li className={activePage == "Home" ? styles.active : ''}><a href="/">Home</a></li>
                <li className={activePage == "About us" ? styles.active : ''}><a href="/about-us">About us</a></li>
                <li tabIndex="0" className={styles.productLink + (activePage == "Products" ? " " + styles.active : '')} id="product-link">
                    <a>Products</a>

                    <ul className={styles.productTypeList} id="product-type-list">
                        <li tabIndex="0">
                            <p>Conveyor Systems</p>
                            <ul className={styles.productList}>
                                {
                                    productJson.filter((product) => product.category == "conveyor-systems").map((product) => {
                                        return <li><a href={"/products/" + product.path}>{product.title}</a></li>
                                    })
                                }
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <p>Conveyor Components</p>
                            <ul className={styles.productList}>
                                {
                                    productJson.filter((product) => product.category == "conveyor-components").map((product) => {
                                        return <li><a href={"/products/" + product.path}>{product.title}</a></li>
                                    })
                                }
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <p>Precision Components</p>
                            <ul className={styles.productList}>
                                {
                                    productJson.filter((product) => product.category == "precision-components").map((product) => {
                                        return <li><a href={"/products/" + product.path}>{product.title}</a></li>
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={activePage == "Downloads" ? styles.active : ''}><a href="/#contact-us">Downloads</a></li>
                <li className={activePage == "Contact us" ? styles.active : ''}><a href="/#contact-us">Contact us</a></li>
            </ul>
        </nav>
    </>
}
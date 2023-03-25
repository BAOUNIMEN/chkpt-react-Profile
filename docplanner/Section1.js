import './Style1.css'
import React from 'react'

const Section1 = () => {
    return (
        <div>
           
                <link
                    rel="shortcut icon"
                    href="https://www.docplanner.com/img/sygnet.png"
                    type="image/x-icon"
                />
                <label>Docplanner</label>

            
            <header>
                <img id="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
                <nav>
                    <ul class="menu">
                        <li class="menu-item" style={{color: "#00B39B"}}>About us</li>
                        <li class="menu-item">Career</li>
                        <li class="menu-item">Departments
                            <ul class="drop-menu">
                                <li class="drop-menu-item">Marketing & PR</li>
                                <li class="drop-menu-item">Custmer Success & Sales</li>
                                <li class="drop-menu-item">IT, Product, Data</li>
                                <li class="drop-menu-item">Finance & administration</li>
                                <li class="drop-menu-item">HR & More</li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Section1

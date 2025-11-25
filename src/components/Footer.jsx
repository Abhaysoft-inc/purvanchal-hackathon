import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       <div>
    <div style={{ backgroundColor: '#323232' }} className="footer  bottom-0 text-gray-300 md:px-40 pt-20 pb-5 ">
      <div className= 'md:grid md:grid-cols-3 grid-rows-1  md:gap-30  '>
        <div className='col-span-2  flex flex-col gap-y-5'><img className='w-100 rounded-2xl' src="./logo3.jpg" alt="logo" />
<p>“Unleash your creativity, push your limits, and turn bold ideas into real innovation. Join brilliant minds, collaborate, learn, and build solutions that can shape the future. This is your moment to create, compete, and grow. Be part of the challenge—be part of the change. Register now!”</p>
          <div className="add flex gap-6">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKhSURBVHgB1ZnvcZtAEMVXmnw3HfhKUAeig6gDuwO5AykdpISkgqgDoQpQB8IVWKlgs088wvk/3B0C/2Z2YASz94DV3t7eTCJQ1cwOudnSzJktzDIaOJtVPB7NDmbFbDY7SyAzCcCE5nbYUGRltuMRov42gvhAuOdG6gdrDPf/tvt2MiQmYGV2MtubrSmor4/M7N6spK87SY05dRQJW0oi4IuiId5JCszRA52uZSC8MR4kBnOwpSMnA8OviLG2EgLFliFxGgpFl71FjyHWGzvrJdqLJycjQdGfx7QXR05GppMWforBskFf+LX3711EMj/JxGDuX7114ZRqUjA/Cw70pC04X/R0dSkDXr1ITrmlJICx5wv1CXohfPjc/+FPqjmdzjWx4PX/WGYK0RQ51/PVcNK6XrilBY2hbZrLvkld7kXVqB4vBe3M70EigTYTW9npci518V3IMKR4CQ2onXMIxj+3kOnzKFgMcLLonW4amHY6IREoZ765tMucoTlKHAivDIKzRH+4LgMGQ42XLBEL3tw9z5ElfnrXdjTwKCnQelZKUvcyznw2kgjm4ieEBF71jUwfZ1ZBMD5pcJa4IoiCMwRXUqufOpjgjhCMqXMl0yc3KyC4MHM6woKzK9r28A5z5rfKLH3LKB2IABRSlxgGP2TaYYF15q9nv7DezGVi6FtLJF5Y6Xsr1BHRjzqcWi9v4hpyCdF6mV9+dMPXaqTwxqZVNVqa88R2a+qgaNHxm4H9CidPtJMrESzWc7DR6ze040pSTdXO7zZGmkaktp3xpJMLJ4U9zUlqlB1Oir/T8G2vNUXCV6+SIHRj8bvU6zgMVtBQpl4KqRcbizAsEG55v5O62NqGdIWCBHvCIQaFdS7ttq2T51u3zbZtJXywmFX6P+g8K/PIslj4AAAAAElFTkSuQmCC" alt="" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB1VmBdeIwDBVdoGxwHoENyE0AG8AGdAPYoHcTXG8C2CB0Au4mSDaATqCTyPfFUEoiO4H2v6eXljjSty3LsjygBDDzUB6ZyFjEiYxEhhDFQaTE84/Iq8h2MBgcKBIDioAQzeSxBMlSZIOnknrzhNAhbfNIVce8aPvf0m5DfUIITEUKkVxkAUJWHUORucgOumbUNUSpA0mVMXUE1QXSSt5RFxBFT1C6oJ4Q2HiiFIiCFRQ56hmYRbW1ohiA7C7GT2MB0jsz6XuQDWwPTaQDf3J0J4B0s08HfuTozmjFBVPRWzSwArOdf/RSg3lBnwyI/dNLL4ouN4WuoGnAu4HElrujTwqMchb+sO5lT6/1z2HUb8Oz4J1rWuTIW3L/j4YQtsZcdNK1aLfiy1j7TrTQ4cPc0LtDTgYEnbwadqD7GvaIBI2zi85NHqhKvrdkg58NJ5JfMTihZj0aRl+pGZo7Z565OTpgdELkJwuD/o9K0wi7lvZ0ttYP6OUb2fHj7P+MqtEu4J9LqmfiIxzk1FFSO+hpZuRHyrrg1IdnIJaC1msHNvf6B5MRXC+6VKyNdvmBIoBD5pbSYT+EcoRL4DufTaXAGewdXUJHWEfrkYzAYvku8gIdVmwMC07hREolXK2+OGicnVNzNLiEFdmgNg5KuKSKvRkyQj+p6rAVL/LtX7JhfLTFEVtzCPjWs8Gfi8g1k4tMThOLBKDj+xZkHRnB5wka2JuPRlxFigU3b8GMNo4iwFV6ug5/yNi264xakmSMetI5kascenL+Y8FnyUtL4s9cJ+de1MAvrmpnqa72/oiEF0mLry/wtQonRiqtINchuErud9cafK1CChr6UtXN62oBB0+23WKVhku+fzFwaf3Qk3Z0I0STDRQs+fYF7TiygaJuyvntbHRTiOS6Mm7eXBr0Zlxf9jjqGowKJ8jPOP7aaxHsjlPL97EXiz5xV2NbiBZDjjefZxeLKnpA+Ib2jqocfCXt2hRQ0gkHxJWMJtYZ1de2jk6vbv21bUnoWMrV7T8ArU1k5aRcjgAAAABJRU5ErkJggg==" alt="" />
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgB1ZnhceIwEIUfmfw/XwWn64AO4g6gg9ABdABXwlWQXAXQAaYC6ABfBSEVKLv4CQQhYMk2dr6ZNwZbIz/ZsrQr9VABa20ih1T0JDKiviihlJ0o53EjWomyXq+3QyQ9RCBGUzlMaTIXLXhUU+/OEBukZX6gaJiTlv8n5RZoEjEwFG1FS9GYhkLrSEQj0Zp1PaNupFJDk6on1ITWRdNq3qAOpKIJKx2jIbx7TFAFqWDGigwahm9R7zVDDDS7jumnsdD0Oth0G2a9eydBpr3+ZNASNH27T3v9yKBlSnnhq2hsNAiFb3v51UUdzLfoGBz7h5cubEMmBb6yueilyS6kYcCnB8kpd40A2EDHHA3Cp5z6J+ahc7o9JaixoTBuWbo/CW8aNOaykY4pGsQb5hLXHZaRFemHOsAdYLcYPKIIvjNEIPHsa5lyciMX2G8qBO8aO6cPKLKEDIGwxY4Xnht55/QV9vmFax/Xt/hmY4Mb4L/IqGFt+TvqR+vV0cOcnZ+efPHl0Wym/4BjmlM3Lj26RMxHql0p2T/hKknhDV5FP0W/UTwhh0Eg9Lg33CR/9EaiHIV5h0EkanhnG4p7adRR6Tuhx93eMIo0vOsYUa6G918fus/hCeeo0KfuiE5wGzWsy0dDdJ9UlKnhTGRsCwlnWexxDW/1qMOOnMjlj4aXfwPq2Vz4/Yavp/lr126hPWBxmC8Y1UdFbPeAuebg/OQ2co5vlIspEi8Mu/iU7bUVToaM1RbkaoRp/vpage+1kMKCk0P+1BKe2XKLOppU2vYXA8NiZs+0wZ2INutVMLX3X9CutmRg61rOL3ePehYi7XFlvNbJxc2wlEHdMI3f0vyzjd/2GtOk1hUUKcZuLOq8PkIRlGSUhqn7nc+zjUWVJgi/WN6giMFnUm6FQKIMe8bVjAbWKY7btganW7du2zYHG1YlS/8AQV35ND++wScAAAAASUVORK5CYII=" alt="" /></div>
        </div>
    
        <div className='col-span-1'>
          <h1 className='text-2xl font-bold text-white my-2 '>Get in touch</h1>
          <p>7392049577</p>
          <p>gdgknit@knit.ac.in
</p>
        </div>
        
        </div>
        <div className="spaces w-full h-0.5 bg-gray-500 my-10"></div>
        <div className='text-center'><p>Copyright 2025 @ GDG knit Sultanpur - All Right Reserved.</p></div>
    </div>
    
    </div>
  )
}
export default Footer
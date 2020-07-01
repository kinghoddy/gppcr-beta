import React from 'react';
import classes from './footer.module.css'
import Link from 'next/link';
export default props => {
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
         if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < (document.documentElement.offsetHeight - window.innerHeight - 100)){
setShow(true)
           }else {
               setShow(false)
           }
       window.addEventListener('scroll' , e=> {
           if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < (document.documentElement.offsetHeight - window.innerHeight - 100)){
setShow(true)
           }else {
               setShow(false)
           }
       })
    });
    return (
        <footer className={classes.footer + " bg-white "} id="footer">
        {show ? <button onClick={()=>window.scrollTo(0 , 0)} className={classes.btnTop}> 
<i className="fad fa-3x fa-angle-up"></i>
</button>            : null }
            <div className="container fadeIn wow">
                <div className="row py-5">
                    <div className="col-lg-3 col-6">
                        <h3>Quick Links</h3>

                        <ul className={classes.links}>
                            <li><Link href="/#about"><a>About us</a></Link></li>
                            <li><Link href="/gppcr-tv/activity"><a>Join live stream</a></Link></li>
                            <li><Link href="/#ministers"><a>Our Ministers</a></Link></li>
                            <li><Link href="/login"><a>Login</a></Link></li>
                            <li><Link href="/signup"><a>Create an account</a></Link></li>
                            <li><Link href="/daily-blessings"><a>Today's Daily blessings</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h3>Categories</h3>
                        <ul className={classes.links}>
                            <li><Link href="/ministers-desk"><a>Ministers desk</a></Link></li>
                            <li><Link href="/events"><a>Events</a></Link></li>
                            <li><Link href="/gallery"><a>Gallery</a></Link></li>
                            <li><Link href="/gppcr-tv"><a>GPPCR-tv</a></Link></li>
                            <li><Link href="/prayer-request"><a>prayyer-requests</a></Link></li>
                            <li><Link href="/daily-blessings"><a>daily-blessings</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">

                        <h3>Contacts</h3>

                        <div className="collapse show" id="collapse_ft_3">
                            <ul className={classes.links}>
                                <li className="mb-3"><i className="fa fa-home mr-3 text-primary"></i>23, Mosaku street - Oshodi<br />Lagos - Nigeria</li>
                                <li className="mb-3"><i className="fa fa-phone mr-3 text-primary"></i>
                                    <a href="tel:+2348023363673">
                                        08023363673
                                    </a>
                                </li>
                                <li className="mb-3"><i className="fa fa-envelope mr-3 text-primary"></i><Link href="/"> gppcroshodi@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div class="shareaholic-canvas" data-app="share_buttons" data-app-id="28870426"></div>
                        <img src='/img/logo/gppcr-logo.png' alt="" className={classes.logo} />
                    </div>
                </div>
                <hr />
                <div className="row pt-lg-3 text-center">
                    <div className="col-lg-6 pb-3 pb-lg-0">
                        This site was created by Noel odunmilade
                    </div>
                    <div className="col-lg-6">
                        <ul className={classes.additional_links}>
                            <li><Link href="/"><a>Terms and conditions</a></Link></li>
                            <li><Link href="/"><a>Privacy</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
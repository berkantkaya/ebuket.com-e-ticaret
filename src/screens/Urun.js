import React from 'react'
import './Urun.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Urunler from '../components/Urunler';
import { useSelector } from 'react-redux';


const Urun = () => {
  

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    
    return (
     
     
        <div className="urun">
          
           <div className="kat-bar">
              <div className="kategori-ici">
                <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/32607783926495.Y3JvcCwxNjY3LDEzMDMsMCwxODE.jpg" alt=""/>
                <span>İnternete Özel</span>
              </div>

              <div className="kategori-ici">
                <img src="https://yt3.ggpht.com/a/AGF-l7-p1Sy5uix8m8QSGjWtRHCg-wz827XCxb3apQ=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <span>Çok Satanlar</span>
              </div>

              <div className="kategori-ici">
                <img src="https://yt3.ggpht.com/a/AATXAJxXnBZ1gUMJDD3qZzIxdiCL9UznlHL8IUFM9k0Y=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <span>İhtiyaç Listesi</span>
              </div>

              <div className="kategori-ici">
                <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                <span>Emziren Anne</span>
              </div>

              <div className="kategori-ici">
                <img src="https://thumbs.dreamstime.com/b/green-child-expression-vector-draw-47295747.jpg" alt=""/>
                <span>İlk Hediyem</span>
              </div>


              <div className="kategori-ici">
                <img src="https://yt3.ggpht.com/a/AATXAJyjUPqM2FtqVA2B40CG2bQcs82y42-1UckW4Q=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <span>baby me</span>
              </div>

              <div className="kategori-ici">
                <img src="https://yt3.ggpht.com/a/AGF-l7-p1Sy5uix8m8QSGjWtRHCg-wz827XCxb3apQ=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <span>OUTLET</span>
              </div>

              <div className="kategori-ici">
                <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                <span>baby toys</span>
              </div>

              <div className="kategori-ici">
                <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/32607783926495.Y3JvcCwxNjY3LDEzMDMsMCwxODE.jpg" alt=""/>
                <span>HelloBaby</span>
              </div>

              <div className="kategori-ici">
                <img src="https://yt3.ggpht.com/a/AGF-l7-p1Sy5uix8m8QSGjWtRHCg-wz827XCxb3apQ=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <span>Yeni Gelenler</span>
              </div>

              <div className="kategori-ici">
                <img src="https://media.istockphoto.com/vectors/cute-toddler-baby-care-vector-id493934614" alt=""/>
                <span>Bebek Body</span>
              </div>
           </div>
            <hr style={{marginTop:-7}}/>
            <div className="sliderr">
            <Slider className="slider-ic" {...settings}>
          <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9960519827486.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.e-bebek.com/y.ebebek/9924331143198.jpg" alt=""/>

          </div>
          <div>
          <img src="https://cdn.e-bebek.com/y.ebebek/9966614085662.jpg" alt=""/>

          </div>
          <div>
          <img src="https://cdn.e-bebek.com/y.ebebek/9966421016606.jpg" alt=""/>

          </div>
          
        </Slider>

            </div>
             <Urunler/>
        </div>
       
    )
}

export default Urun

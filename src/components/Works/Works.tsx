import React from 'react';
import {WorksStyles} from './Works.styles.tw';
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import gallery1 from '../../assets/img/nut_mob.png';
import gallery2 from '../../assets/img/tallin_mob.png';
import gallery3 from '../../assets/img/translator_mobile.png';
// import {ReactComponent as GalleryNext} from '../../assets/svg/arrow-next.svg';
// import {ReactComponent as GalleryPrev} from '../../assets/svg/arrow-prev.svg';
import {FreeMode, Navigation} from 'swiper';
import {Link} from "react-router-dom";

function Works() {
    return (
        <WorksStyles className="works">
            <h1 className="works-title">#МОИ РАБОТЫ</h1>
            <div className="swiper works-swiper">
                <Swiper className={'gallery-list'}
                        modules={[FreeMode, Navigation]}
                        freeMode={{enabled: true}}
                        loop={true}
                        navigation={{
                            nextEl: '.works-button-next',
                            prevEl: '.works-button-prev'
                        }}
                        breakpoints={{
                            375: {
                                spaceBetween: 24,
                                slidesPerView: 1.2,
                                height: 360,
                            },
                            1250: {
                                spaceBetween: 32,
                                slidesPerView: 3.9,
                            },
                        }}>
                    <SwiperSlide className={'swiper-item'}>
                        <div>
                            <img className={'swiper-item-image'} src={gallery1} alt="w1" width={1920} height={360}/>
                            <div className={'swiper-item-image__content'}>
                                <p>Ядро кедрового ореха</p>
                                <Link to={'https://www.sib-nut.com/'}>www.sib-nut-com</Link>
                                <span>HTML, CSS, JS</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-item'}>
                        <div>
                            <img className={'swiper-item-image'} src={gallery2} alt="w2" width={1920} height={360}/>
                            <div className={'swiper-item-image__content'}>
                                <p>Tallin</p>
                                <span>React, Vite, TailwindCss</span>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className={'swiper-item'}>
                        <div>
                            <img className={'swiper-item-image'} src={gallery3} alt="w3" width={1920} height={360}/>
                            <div className={'swiper-item-image__content'}>
                                <p>Переводчик</p>
                                <span>React, NextJs, TailwindCss</span>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </WorksStyles>
    );
}

export default Works;

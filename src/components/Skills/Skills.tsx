import React from 'react';
import {SkillsStyles} from './Skills.styles.tw';
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import gallery1 from '../../assets/img/nut_mob.png';
import gallery2 from '../../assets/img/tallin_mob.png';
import gallery3 from '../../assets/img/translator_mobile.png';
// import {ReactComponent as GalleryNext} from '../../assets/svg/arrow-next.svg';
// import {ReactComponent as GalleryPrev} from '../../assets/svg/arrow-prev.svg';
import {FreeMode, Navigation} from 'swiper';
import {Link} from "react-router-dom";

function Skills() {
    return (
        <SkillsStyles className="skills">
            <h1 className="skills-title">#СКИЛЫ</h1>
            <div className="swiper skills-swiper">
                <Swiper className={'gallery-list'}
                        modules={[FreeMode, Navigation]}
                        freeMode={{enabled: true}}
                        loop={true}
                        navigation={{
                            nextEl: '.skills-button-next',
                            prevEl: '.skills-button-prev'
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
                        <h1>ТЕХНОЛОГИИ</h1>
                        <div className={'swiper-item-image__content'}>
                            <p>TypeScript</p>
                            <p>TailwindCss</p>
                            <p>JavaScript</p>
                            <p>NextJs</p>
                            <p>Trpc</p>
                            <p>Astro</p>
                            <p>HTML,CSS</p>
                            <p>Vite</p>
                            <p>Redux</p>
                            <p>SCSS,JSX</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-item'}>
                        <h1>ИНСТРУМЕНТЫ</h1>
                        <div className={'swiper-item-image__content'}>
                            <p>GIT</p>
                            <p>GITLAB</p>
                            <p>LINUX</p>
                            <p>Intellij Idea</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-item'}>
                        <h1>БАЗЫ ДАННЫХ</h1>
                        <div className={'swiper-item-image__content'}>
                            <p>MYSQL</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-item'}>
                        <h1>ФРЭЙМВОРК</h1>
                        <div className={'swiper-item-image__content'}>
                            <p>React Js</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SkillsStyles>
    );
}

export default Skills;

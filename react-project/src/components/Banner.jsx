import React from 'react'
import { Carousel } from 'react-bootstrap';

const CarouselSlide = () => {

    return (
        <Carousel className='main-img'>
            <Carousel.Item>
                <div className='banner-1'>
                    <div className='img-tag'>
                        <h4 >우아한형제들이 알고싶다</h4>
                        <h1 >누군가</h1>
                        <h1 >지켜보고있다?</h1>
                        <p >회사소개{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-2'>
                    <div className='img-tag'>
                        <h4 >우아한형제들이 알고싶다</h4>
                        <h1 >세종대왕님~</h1>
                        <h1 >감사합니다</h1>
                        <p >글꼴{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='banner-3'>
                    <div className='img-tag'>
                        <h4>우아한형제들이 알고싶다</h4>
                        <h1>배달의 민족에서</h1>
                        <h1>광고하고 싶어요!</h1>
                        <p>서비스{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-4'>
                    <div className='img-tag'>
                        <h4>우아한형제들이 알고싶다</h4>
                        <h1>퀵 커머스가</h1>
                        <h1>무엇인가요?</h1>
                        <p>서비스{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-5'>
                    <div className='img-tag'>
                        <h4 >우아한형제들이 알고싶다</h4>
                        <h1 >최고가 되어</h1>
                        <h1 >떠나라</h1>
                        <p >인재영입{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-6'>
                    <div className='img-tag'>
                        <video muted='muted' autoplay='autoplay' loop>
                            <source src='https://woowahan-cdn.woowahan.com/new_resources/image/banner/e7cd396be2fb4c24838ea637b79c32dc.mp4' type='video/mp4' />
                        </video>
                        <h4>우아한형제들이 알고싶다</h4>
                        <h1 className='banner-text'>만든사람이 수고로우면<br></br>쓰는사람이 편하다</h1>
                        <p className='alter-text'>서비스{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-7'>
                    <div className='img-tag'>
                        <video muted='muted' autoplay='autoplay' loop>
                            <source src='https://woowahan-cdn.woowahan.com/new_resources/image/banner/e53b605cce88404ca4c1557a1e62e894.mp4' type='video/mp4' />
                        </video>
                        <h4>우아한형제들이 알고싶다</h4>
                        <h1 className='banner-text'>배경음악<br></br>전격 무료 나눔</h1>
                        <p className='alter-text'>음악{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner-8'>
                    <div className='img-tag'>
                        <video muted='muted' autoplay='autoplay' loop>
                            <source src='https://woowahan-cdn.woowahan.com/new_resources/image/banner/2b427ba22b4d4477876d89fb4b83a695.mp4' type='video/mp4' />
                        </video>
                        <h4>우아한형제들이 알고싶다</h4>
                        <h1 className='banner-text'>콩 한쪽도<br></br>나눠먹으랬으니까</h1>
                        <p className='alter-text'>함께가치{' >'}</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel >
    )
}

export default CarouselSlide
import React from 'react'

const PartTwo = () => {
    return (
        <div className='partTwo-box'>
            <div className='partTwo-title-top'>
                <h1 className='partone-title'>'문 앞으로 배달되는 일상의 행복'이라는 </h1>
                <h1 className='partone-title'>비전으로</h1>
                <p className='partone-sub-title'>우아한 형제들은 배달이 일상을 조금 더 행복하게 하도록 오늘도 달리고 있어요</p>
            </div>
            <div className='part-two-video' >
                <video muted='muted' autoplay='autoplay' loop>
                    <source src=' https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4
' type='video/mp4' />
                </video>

            </div>
            <div className='partTwo-title-bottom'>

                <h1 className='partone-title'> 오늘이 전설이 될 수 있도록 </h1>
                <p className='partone-sub-title'>세계 진출, 배민로봇 개발, 인공지능을 연구하며<br></br>
                    우아한형제들은 미래를 더 가깝게 만들고 있어요.</p>
            </div>

        </div>
    )
}

export default PartTwo
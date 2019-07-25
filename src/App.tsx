import React from 'react';
import imgTriple from 'assets/triple@2x.png';
import imgPlayStore from 'assets/play-store@2x.png';
import imgAppStore from 'assets/app-store@2x.png';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <img
          src={imgTriple}
          alt="트리플 이미지"
        />
        2019년 5월 기준
      </div>
      <div>
        <div>
          <div>410만 명의 여행자</div>
          <div>40만 개의 여행 리뷰</div>
          <div>250만 개의 여행 일정</div>
        </div>
        <div>
          <div>
            <img src={imgPlayStore} alt="플레이스토어 올해의 앱 최우수상 이미지" />
            <div>
              2018 구글 플레이스토어<br/>
              올해의 앱 최우수상 수상
            </div>
          </div>
          <div>
            <img src={imgAppStore} alt="앱스토어 이미지" />
            <div>
              2018 애플 앱스토어<br/>
              오늘의 여행앱 선정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

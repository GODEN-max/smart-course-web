function openHelp() {
    document.getElementById('help-modal').classList.remove('hidden');
}

function closeHelp() {
    document.getElementById('help-modal').classList.add('hidden');
}

function startChat(type) {
    let botName = "";
    if(type === 'graduation') botName = "졸업 요건 AI";
    else if(type === 'timetable') botName = "시간표 매니저";
    else if(type === 'lecture') botName = "강의 추천 봇";
    
    alert(botName + " 서비스를 시작합니다! (챗봇 연결 예정)");
}

// 마우스 휠로 가로 슬라이드 제어
const slider = document.getElementById('slider');
slider.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
    }
});

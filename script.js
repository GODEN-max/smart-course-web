const BOT_URLS = {
    graduation: "https://kw.factchat.bot/졸업요건봇주소",
    timetable: "https://kw.factchat.bot/시간표봇주소",
    lecture: "https://kw.factchat.bot/강의추천봇주소",
    admin: "https://kw.factchat.bot/행정봇주소"
};

function startChat(botType) {
    const targetUrl = BOT_URLS[botType];
    if (targetUrl) {
        window.location.href = targetUrl;
    } else {
        alert("아직 준비 중인 챗봇입니다.");
    }
}

const modal = document.getElementById('help-modal');
function openHelp() { modal.classList.remove('hidden'); }
function closeHelp() { modal.classList.add('hidden'); }
window.onclick = function(event) { if (event.target == modal) closeHelp(); }

document.addEventListener('keydown', function(event) {
    const slider = document.getElementById('slider');
    const card = slider.querySelector('.card');
    if (!card) return;

    const scrollAmount = card.offsetWidth + 25;

    if (event.key === 'ArrowRight') {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});

window.onload = function() {
    document.body.focus();
}

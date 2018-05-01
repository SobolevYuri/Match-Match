const playerBtn=document.querySelector('#submitUserInfo');
const darkBg=document.querySelector('.authorization');
const formWin=document.querySelector('.dark-bg');

playerBtn.addEventListener('click', function(e){
    e.preventDefault();
darkBg.classList.add('hide-win');
formWin.classList.add('hide-win');
});
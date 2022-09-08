document.getElementById('dark-btn').addEventListener('click',() => {
    const selTheme = document.body.classList;
    selTheme.toggle('toggle-dark-theme')
    const selBtnTxt = document.getElementById('dark-btn');
    const textToggle = selTheme.contains('toggle-dark-theme') ? selBtnTxt.innerText='Default Mode' : selBtnTxt.innerText='Dark Mode'; console.log('x');
})
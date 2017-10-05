document.addEventListener('click',(e)=>{
    if (e.target.getAttribute('data-role') !== 'tab') return
    let target = e.target;
    [].forEach.call(target.parentElement.children,(item)=> item.classList.remove('active'))
    target.classList.add('active')
    let targetContent = document.querySelector(target.dataset.view);
    [].forEach.call(targetContent.parentElement.children,(item)=>item.classList.add('hide'))
    targetContent.classList.remove('hide')
})


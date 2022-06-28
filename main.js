const botao = document.querySelector('.hamb_menu');

function menuMobile (){
    const ul = document.querySelector('.menuList',);

    ul.classList.toggle('active-menu');
};

botao.addEventListener('click', menuMobile);

function itensMenu (){
    const itens = document.querySelector('.itens',);

    itens.classList.toggle('itensActive');
};
botao.addEventListener('click', itensMenu);
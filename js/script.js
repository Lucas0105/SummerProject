let Header = function(name, url) {
    const ul = document.querySelector('header ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = name;
    li.appendChild(a);
    ul.appendChild(li);

};

let addHeader = function() {
    const header = document.querySelector('header');
    const div1 = document.createElement('div');

    const div2 = document.createElement('div');
    const img = document.createElement('img');
    const aImg = document.createElement('a');

    const ul = document.createElement('ul');

    div1.id = 'head-first';

    div2.id = 'logo';
    img.src = '../img/logo/f_logo.png';

    aImg.href = 'index.html';
    aImg.appendChild(img)
    div2.appendChild(aImg);

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(ul);

    new Header('로그인', 'login.html');
    new Header('회원가입', 'join_agree.html');

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = 'https://github.com/Lucas0105/SummerProject-trendAnalysis'
    a.textContent = "Fooding Github";

    li.id = "git-site";

    li.appendChild(a);
    ul.appendChild(li);

 
}

let Menu = function(name, url) {
    const ul = document.querySelector('nav ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = name;
    li.appendChild(a);
    ul.appendChild(li);

};

let addNav = function(){
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul')
    nav.appendChild(ul);
    new Menu('푸딩랭킹', 'rank.html');
    new Menu('푸딩 추천', 'recommend.html');
    new Menu('푸딩톡', 'talk.html');
    new Menu('푸딩 레시피', 'recipe.html');
};

let addAside = function(){
    aside = document.querySelector('aside');
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    a1 = document.createElement('a');
    a2 = document.createElement('a');
    img1 = document.createElement('img');
    img2 = document.createElement('img');

    div1.className = 'nav-btn';
    div2.className = 'nav-gray-btn';
    a1.href = "#none";
    a2.href = "#";
    img1.src = '../img/icon/share.png'
    img2.src = '../img/icon/up.png'
    img1.width = '50'
    img2.width = '50'

    a1.appendChild(img1);
    a2.appendChild(img2);
    div1.appendChild(a1);
    div2.appendChild(a2);
    aside.appendChild(div1);
    aside.appendChild(div2);
  
}

let addFooter = function() {
    const footer = document.querySelector('footer');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    img.src = '../img/logo/f_flogo.png'
    p1.textContent = 'Name : 정원재'
    p2.textContent = 'Number : 010-4847-5806'
    p3.textContent = 'Address : 충북 청주시 서원구 충대로1 충북대학교 전자정보대학 소프트웨어학과 S4-1동'
    
    footer.append(img, p1, p2, p3);

};

let init = function() {
    addHeader();
    addNav();
    addAside();
    addFooter();

};
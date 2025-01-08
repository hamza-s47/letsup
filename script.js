function heroAnimaion(condition){
    const hero = document.getElementById('hero-main');

    const doc = hero.children[0];
    const location = hero.children[1];
    const med = hero.children[2];
    const bot = hero.children[3];


    if(condition === 'doc'){
        doc.style.width = '74%';
        bot.style.width = '0';
        location.style.width = '12.5%';
        med.style.width = '12.5%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'flex';
        doc.classList.remove('cursor-pointer');

        // For Location
        location.children[0].style.display = 'block';
        location.children[1].style.display = 'none';
        location.classList.add('cursor-pointer');

        // For Med
        med.children[0].style.display = 'block';
        med.children[1].style.display = 'none';
        med.classList.add('cursor-pointer');

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'none';
        bot.classList.add('cursor-pointer');

    } else if(condition === 'location'){
        doc.style.width = '12.5%';
        bot.style.width = '0';
        location.style.width = '74%';
        med.style.width = '12.5%';
    
        // For Doc
        doc.children[0].style.display = 'block';
        doc.children[1].style.display = 'none';
        doc.classList.add('cursor-pointer');

        // For Location
        location.children[0].style.display = 'none';
        location.children[1].style.display = 'flex';
        location.classList.remove('cursor-pointer');

        // For Med
        med.children[0].style.display = 'block';
        med.children[1].style.display = 'none';
        med.classList.add('cursor-pointer');

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'none';
        bot.classList.add('cursor-pointer');

    } else if(condition === 'med'){
        doc.style.width = '0';
        bot.style.width = '12.5%';
        location.style.width = '12.5%';
        med.style.width = '74%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'none';
        doc.classList.add('cursor-pointer');

        // For Location
        location.children[0].style.display = 'block';
        location.children[1].style.display = 'none';
        location.classList.add('cursor-pointer');

        // For Med
        med.children[0].style.display = 'none';
        med.children[1].style.display = 'flex';
        med.classList.remove('cursor-pointer');

        // For Bot
        bot.children[0].style.display = 'block';
        bot.children[1].style.display = 'none';
        bot.classList.add('cursor-pointer');

    } else if(condition === 'bot'){
        doc.style.width = '0';
        bot.style.width = '74%';
        location.style.width = '12.5%';
        med.style.width = '12.5%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'none';
        doc.classList.add('cursor-pointer');

        // For Location
        location.children[0].style.display = 'block';
        location.children[1].style.display = 'none';
        location.classList.add('cursor-pointer');

        // For Med
        med.children[0].style.display = 'block';
        med.children[1].style.display = 'none';
        med.classList.add('cursor-pointer');

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'flex';
        bot.classList.remove('cursor-pointer');
    } else {
        doc.style.width = '24.6%';
        bot.style.width = '24.6%';
        location.style.width = '24.6%';
        med.style.width = '24.6%';

        // For Doc
        doc.children[0].style.display = 'block';
        doc.children[1].style.display = 'none';
        doc.classList.add('cursor-pointer');

        // For Location
        location.children[0].style.display = 'block';
        location.children[1].style.display = 'none';
        location.classList.add('cursor-pointer');

        // For Med
        med.children[0].style.display = 'block';
        med.children[1].style.display = 'none';
        med.classList.add('cursor-pointer');

        // For Bot
        bot.children[0].style.display = 'block';
        bot.children[1].style.display = 'none';
        bot.classList.add('cursor-pointer');
    }
}

// $(function() {
//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 3
//         },
//         1000: {
//           items: 5
//         }
//       }
//     });
//   });

function classToggle(classToggle, el){
    var element = document.getElementById(el);
    element.classList.toggle(classToggle);
}

function menuShow(){
    let open = document.getElementById('mob-menu-btn');
    let close = document.getElementById('mob-menu-close');
    let mobHeader = document.getElementById('mob-h-detail');

    classToggle('d-none', 'mob-h-detail');

    if(mobHeader.classList.contains('d-none')){
        close.classList.add('d-none');
        open.classList.remove('d-none');

    } else {
        close.classList.remove('d-none');
        open.classList.add('d-none');
    }
}
function heroMobAnimaion(condition){
    const hero = document.getElementById('hero-mob');

    const doc = hero.children[0];
    const location = hero.children[1];
    const med = hero.children[2];
    const bot = hero.children[3];


    if(condition === 'doc'){
        doc.style.height = '49.2%';
        bot.style.height = '0';
        location.style.height = '24.6%';
        med.style.height = '24.6%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'flex';

        // For Location
        location.children[0].style.display = 'flex';
        location.children[1].style.display = 'none';

        // For Med
        med.children[0].style.display = 'flex';
        med.children[1].style.display = 'none';

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'none';

    } else if(condition === 'location'){
        doc.style.height = '24.6%';
        bot.style.height = '0';
        location.style.height = '49.2%';
        med.style.height = '24.6%';
    
        // For Doc
        doc.children[0].style.display = 'flex';
        doc.children[1].style.display = 'none';

        // For Location
        location.children[0].style.display = 'none';
        location.children[1].style.display = 'flex';

        // For Med
        med.children[0].style.display = 'flex';
        med.children[1].style.display = 'none';

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'none';

    } else if(condition === 'med'){
        doc.style.height = '0';
        bot.style.height = '24.6%';
        location.style.height = '24.6%';
        med.style.height = '49.2%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'none';

        // For Location
        location.children[0].style.display = 'flex';
        location.children[1].style.display = 'none';

        // For Med
        med.children[0].style.display = 'none';
        med.children[1].style.display = 'flex';

        // For Bot
        bot.children[0].style.display = 'flex';
        bot.children[1].style.display = 'none';

    } else if(condition === 'bot'){
        doc.style.height = '0';
        bot.style.height = '49.2%';
        location.style.height = '24.6%';
        med.style.height = '24.6%';
    
        // For Doc
        doc.children[0].style.display = 'none';
        doc.children[1].style.display = 'none';

        // For Location
        location.children[0].style.display = 'flex';
        location.children[1].style.display = 'none';

        // For Med
        med.children[0].style.display = 'flex';
        med.children[1].style.display = 'none';

        // For Bot
        bot.children[0].style.display = 'none';
        bot.children[1].style.display = 'flex';
    } else {
        doc.style.height = '24.6%';
        bot.style.height = '24.6%';
        location.style.height = '24.6%';
        med.style.height = '24.6%';

        // For Doc
        doc.children[0].style.display = 'block';
        doc.children[1].style.display = 'none';

        // For Location
        location.children[0].style.display = 'block';
        location.children[1].style.display = 'none';

        // For Med
        med.children[0].style.display = 'block';
        med.children[1].style.display = 'none';

        // For Bot
        bot.children[0].style.display = 'block';
        bot.children[1].style.display = 'none';
    }
}

function classContain(class2, classCheck){
    return class2.classList.contains(classCheck)
}
  
function workToggle(condition) {
    const chat = document.getElementById('w-chat');
    const phone = document.getElementById('w-phone');
    const video = document.getElementById('w-video');
    const query = document.getElementById('w-query');
    const chatDetail = document.getElementById('wc-chat');
    const phoneDetail = document.getElementById('wc-phone');
    const videoDetail = document.getElementById('wc-video');
    const queryDetail = document.getElementById('wc-query');
    const className = 'workToggle';
    const classNameDetail = 'workToggleDetail';

    // Reset all buttons and details
    chat.classList.remove(className);
    phone.classList.remove(className);
    video.classList.remove(className);
    query.classList.remove(className);
    
    chatDetail.classList.add(classNameDetail);
    phoneDetail.classList.add(classNameDetail);
    videoDetail.classList.add(classNameDetail);
    queryDetail.classList.add(classNameDetail);
    chatDetail.classList.remove('d-flex');
    phoneDetail.classList.remove('d-flex');
    videoDetail.classList.remove('d-flex');
    queryDetail.classList.remove('d-flex');

    // Add class to the selected element
    if (condition === 'phone') {
        phone.classList.add(className);
        phoneDetail.classList.remove(classNameDetail);
        phoneDetail.classList.add('d-flex');
    } else if (condition === 'video') {
        video.classList.add(className);
        videoDetail.classList.remove(classNameDetail);
        videoDetail.classList.add('d-flex');
    } else if (condition === 'query') {
        query.classList.add(className);
        queryDetail.classList.remove(classNameDetail);
        queryDetail.classList.add('d-flex');
    } else {
        chat.classList.add(className);
        chatDetail.classList.remove(classNameDetail);
        chatDetail.classList.add('d-flex');
    }
}

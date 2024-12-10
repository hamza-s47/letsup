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

$(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });
  

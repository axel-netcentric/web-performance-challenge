const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const acceptCookies = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--hidden');
};

const readMoreCookies = () => {
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--readMore');
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('marquee');

  // mock content delay
  setTimeout(() => {
    marqueeBar.innerHTML = CONTENT_BREAKING_NEWS;
    marqueeBar.classList.add('main__newsMarquee--loaded');
  }, 3000);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  const template = `<div class="cookieLayer__content">
      <h2 class="cookieLayer__title">{{ title }}</h2>
      <p class="cookieLayer__text">{{ text1 }}</p>
      <p class="cookieLayer__text cookieLayer__text--readMore">{{ text2 }}</p>
      <div class="cookieLayer__buttonContainer">
          <button class="cookieLayer__button cookieLayer__button--secondary cookieLayer__button--readMore" onclick="readMoreCookies()">{{ readMoreButtonLabel }}</button>
          <button class="cookieLayer__button cookieLayer__button--primary" onclick="acceptCookies()">{{ acceptButtonLabel }}</button>
      </div>
    </div>`;
  const data = {
    title: 'Do you like cookies ?',
    text1: 'This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!',
    text2: 'The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.',
    readMoreButtonLabel: 'Read more...',
    acceptButtonLabel: 'I solemny swear I will bake these cookies',
  };
  const compiledTemplate = Object.keys(data)
      .reduce(
          (compiledTemplate, dataKey) =>
              compiledTemplate.replace(new RegExp(`\{\{\\s*${dataKey}\\s*\}\}`), data[dataKey]),
          template,
          );
  let cookieLayer = document.querySelector('.cookieLayer__base');
  cookieLayer.innerHTML = compiledTemplate;
  cookieLayer.classList.add('cookieLayer__base--init');
  document.body.classList.add('no-scroll');
};

const loadWeatherWidget = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
      // !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
      var d=document,s='script',id='weatherwidget-io-js';
      var js, fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }, 3500);
  });
}

const initApp = () => {
  dynamicContent();
  cookieLayerInit();
  loadWeatherWidget();
};

initApp();

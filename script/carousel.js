document.addEventListener("DOMContentLoaded", function (event) {
  const lazySlider = () => {
    const sliderLazyImages = [
      'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=webp&fit=crop&w=747&q=30',
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=webp&fit=crop&w=747&q=30',
    ];
    const emptySlides = [...document.querySelectorAll('.swiper .swiper-slide:empty')];
    let resourcesToDownload = 1 + 0 + sliderLazyImages.length;

    const downloadSwiperJs = () => {
      const script = document.createElement('SCRIPT');
      script.async = true;
      script.onload = () => { setTimeout(resourceLoaded); };
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
      document.head.append(script);
    }
    /* const downloadSwiperCss = () => {
      const link = document.createElement('LINK');
      link.rel = 'stylesheet';
      link.onload = resourceLoaded;
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'
      document.head.append(link);
    } */
    const setImages = () => {
      sliderLazyImages.forEach((url, index) => {
        const emptySlide = emptySlides[index];
        const img = document.createElement('IMG');
        img.onload = resourceLoaded;
        img.src = url;
        emptySlide.append(img);
      });
    }
    const resourceLoaded = () => {
      resourcesToDownload--;
      if (resourcesToDownload === 0) {
        startSlider();
      }
    }
    const startSlider = () => {
      new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    };

    downloadSwiperJs();
    /*downloadSwiperCss();*/
    setImages();
  };

  setTimeout(lazySlider, 2500);
});

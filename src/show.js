const header = document.querySelector("header");
const hero = document.getElementById("heroSection");
const heroInfo = document.getElementById("heroInfo");
const footer = document.querySelector("footer");

function showHeader() {
    header.innerHTML = `<nav class="bg-[#0d0621]">
          <div
            class="flex flex-col lg:flex-row lg:max-w-[1200px] lg:px-3 xl:px-0 lg:w-full lg:mx-auto items-center lg:justify-between"
          >
            <div class="w-[75px] h-[75px] my-6 lg:my-3">
              <img src="./img/lucky-jet__.png" alt="logo" class="w-full" />
            </div>
            <div>
              <ul
                class="flex text-[#fff] flex-wrap gap-4 justify-center text-[15px] font-thin lg:text-[25px] lg:gap-8"
              >
                <li>
                  <a href="index.htm" class="lg:leading-[39px] font-extralight">Главная</a>
                </li>
                <!--<li><a href="promokod.htm">Промокод</a></li>-->
                <li><button onclick="downloadApk()">Скачать</button></li>
                <li><a target="_blank" href="https://1wayto.life/casino/play/1play_1play_luckyjet&p=96pv">Демо</a></li>
                <li><a target="_blank" href="https://www.youtube.com/@gameesluckyjet">Youtube</a></li>
                <!--<li><a target="_blank" href="https://t.me/AVIATOR_CLUB10X">Отзывы</a></li>-->
                <li><a target="_blank" href="https://t.me/AVIATOR_CLUB10X">Сигналы</a></li>
              </ul>
            </div>
          </div>
        </nav>`;
}

showHeader();

function showHero() {
    hero.innerHTML = `<div
          class="flex flex-col lg:max-w-[1200px] xl:px-0 lg:px-3 lg:w-full lg:mx-auto lg:flex-row"
        >
          <div>
            <h1
              class="sm:text-[64px] text-center lg:text-start text-[35px] font-extrabold leading-[34px] sm:leading-[67px] mb-3"
            >
              <strong class="font-medium"
                >
                ${
                    location.pathname === "/src/index.htm"
                        ? `ИГРАТЬ В 
                    <br />
                    Lucky jet signals`
                        : location.pathname === "/src/promokod.htm"
                        ? `ПРОМОКОД НА 
                    <br />
                    ИГРУ Lucky jet signals`
                        : location.pathname === "/src/download.htm"
                        ? `СКАЧАТЬ 
                    <br />
                    ИГРУ Lucky jet signals`
                        : location.pathname === "/src/demo.htm"
                        ? `ДЕМО СЧЁТ 
                    <br />
                    ИГРЫ Lucky jet signals`
                        : location.pathname === "/src/vzlom.htm"
                        ? `ВЗЛОМ ИГРЫ
                    <br />
                    Lucky jet signals`
                        : location.pathname === "/src/strategii.htm"
                        ? `СТРАТЕГИИ
                    <br />
                    ДЛЯ Lucky jet signals`
                        : location.pathname === "/src/siqnal.htm"
                        ? `Сигналы О
                    <br />
                    ИГРЕ Lucky jet signals`
                        : ""
                }
                </strong
              >
            </h1>
            <div
              class="sm:text-[32px] text-[22px] leading-[34px] text-center lg:text-start sm:leading-[50px] mb-4 w-10/12 mx-auto sm:w-full"
            >
              <b class="font-bold">Бонус 500% на первый депозит</b> <br />
              по промокоду:
              <span class="text-[#FFE103] font-normal">10KFBONUS</span>
            </div>
            <div class="flex flex-col lg:items-start items-center">
              <div
                 onclick="copyToClipboard()"
                class="border-[3px] cursor-pointer w-[266px] h-[55px] border-[#51008f] bg-transparent rounded-[12px] text-[14px] mb-4 text-[#fff]"
              >
                <b id="promokodContain" class="font-semibold">СКОПИРОВАТЬ ПРОМОКОД</b>
              </div>
              <button
              class="text-[14px]   border-[3px] order-1  border-[#51008f] bg-[#51008f] text-[#fff] leading-6 rounded-[12px] font-semibold">
              <a class="w-[266px] h-[55px] flex items-center justify-center" target="_blank"
                href="https://cutt.ly/Mw3jQkzQ">
                Играть в LUCKY JET
              </a>
            </button>
            </div>
          </div>
          <div>
            <div
              id="coin1"
              class="w-[53px] absolute left-[179.5px] top-[445px] sm:top-[515px] sm:left-[201px] z-10 lg:left-[660px] lg:top-[30px]"
            >
              <img class="w-full" src="../src/img/coin.png" alt="" />
            </div>
            <div
              id="coin2"
              class="w-[53px] absolute left-[79.5px] sm:left-[21px] sm:top-[785px] top-[639px] z-10 lg:left-[480px] lg:top-[410px]"
            >
              <img class="w-full" src="../src/img/coin.png" alt="" />
            </div>
            <div
              id="coin3"
              class="w-[53px] absolute left-[329.5px] sm:left-[403px] sm:top-[817px] top-[675px] z-10 lg:left-[907px] lg:top-[540px]"
            >
              <img class="w-full" src="../src/img/coin.png" alt="" />
            </div>
            <div
              id="boyContainer"
              class="z-20 absolute left-[79.5px] lg:top-[243px] lg:w-[336px] lg:left-[419px] top-[544px] sm:w-[218px] sm:top-[670px] w-[175px]"
            >
              <div id="boy">
                <img src="../src/img/boy.png" class="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div id="heroSvg" class="absolute top-[744px] sm:top-[884px] lg:top-[574px] -left-[760px] lg:left-[-278px] h-[106px] w-[2000px] z-[200]">
          <svg
            style="fill: #ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 96.2"
            preserveAspectRatio="none"
          >
            <path
              d="M0 96.2h1200V72.9l-50-8.9c-50-8.6-150-26.9-250-22.2C800 46.2 700 72.9 600 64 500 55.4 400 10.4 300 1.8 200-7.1 100 19.5 50 32.9L0 46.2v50z"
            ></path>
          </svg>
        </div>`;
}

showHero();

function showInfo() {
    heroInfo.innerHTML = `<div
          class="lg:max-w-[1200px] flex justify-center xl:px-0 lg:px-3 lg:w-full lg:mx-auto border border-transparent"
        >
          <div class="w-[310px] lg:w-[960px]  xl:w-[1200px] xl:h-[100px] sm:w-[460px] md:w-[640px]  bg-[#f0f0f0] py-3">
            <p
              class="text-[21px] text-center xl:text-start xl:pl-6 leading-[31px] w-full font-normal"
            >
             Хватит угадывать, используй бот Лаки Джет сигналов! Получайте бесплатно точные сигналы игры Lucky jet signals используя надежный бот, который предоставляет 100% точные предсказания прямо в Телеграм, не требуя никакого скачивания. Увеличьте свои шансы на победу, ставьте с нами наслаждаясь захватывающими моментами игры без лишних рисков✅!

            </p>
          </div>
        </div>`;
}

showInfo();

function showFooter() {
    footer.innerHTML = ` <div class="bg-[#51008F]">
        <div
          class="max-w-[1200px] min-h-[130px] flex items-center mx-auto w-full"
        >
          <p class="text-center text-[#fff] text-[14px] font-normal">
            1luckyjet.com является информационным сайтом. Он не предоставляет
            никакой информации в незаконных целях. Вам необходимо нести
            ответственность за то, чтобы вам было разрешено играть в азартные
            игры в соответствии с законами вашей юрисдикции (возраст для
            азартных игр, правовой статус и т.д.). Посещая данный веб-сайт, вы
            соглашаетесь с Положениями и Условиями и Политикой
            конфиденциальности на сайте. 18+
          </p>
        </div>
      </div>`;
}

showFooter();

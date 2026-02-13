document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});

function renderHeader() {
    const headerPlaceholder = document.getElementById('app-header');
    if (!headerPlaceholder) return;

    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    const linkBaseClass = "transition relative group hover:text-black";
    const activeClass = "text-black font-bold";
    const inactiveClass = "text-gray-600";
    
    const createLink = (href, text) => {
        let isActive = false;
        
        if (href.includes('#')) {
             isActive = false; 
        } else {
             isActive = (page === href);
        }

        const classes = isActive ? activeClass : inactiveClass;
        
        const activeSpan = `<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>`;
        const hoverSpan = `<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>`;

        const span = isActive ? activeSpan : hoverSpan;

        return `<a href="${href}" class="${linkBaseClass} ${classes}">
                    ${text}
                    ${span}
                </a>`;
    };

    const headerHTML = `
    <div class="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:rotate-12 transition">
                <i class="fa-solid fa-route text-lg"></i>
            </div>
            <span class="font-serif font-bold text-lg md:text-xl italic">TravelRussia</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
            ${createLink('index.html', 'Главная')}
            ${createLink('index.html#create-tour', 'Создать тур')}
            ${createLink('index.html#tours', 'Туры')}
            ${createLink('faq.html', 'FAQ')}
            ${createLink('contacts.html', 'Контакты')}
        </nav>

        <a href="#" class="flex items-center gap-2 text-sm border border-gray-400 rounded-full px-5 py-2 hover:bg-white hover:shadow-sm transition">
            <i class="fa-regular fa-user"></i> 
            <span class="hidden sm:inline">Профиль</span>
        </a>
    </div>
    `;

    headerPlaceholder.className = "sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md transition-all duration-300 border-b border-gray-200/50";
    headerPlaceholder.innerHTML = headerHTML;
}

function renderFooter() {
    const footerPlaceholder = document.getElementById('app-footer');
    if (!footerPlaceholder) return;

    const footerHTML = `
        <div class="container mx-auto px-4 md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-4 pt-8">
                <div class="text-center md:text-left space-y-4">
                    <h3 class="font-serif text-3xl italic text-gray-800">Остались<br>вопросы?</h3>
                    <button onclick="location.href='contacts.html'" class="border border-black px-8 py-2 rounded-full text-sm hover:bg-black hover:text-white transition duration-300">
                        Связаться в TG
                    </button>
                    
                    <p class="mt-4 font-serif italic text-lg">И присоединяйся в<br>соц. сетях</p>
                    <div class="flex justify-center md:justify-start gap-4 text-2xl text-gray-600 mt-2">
                        <a href="#" class="hover:text-blue-600 transition hover:scale-110"><i class="fa-brands fa-vk"></i></a>
                        <a href="#" class="hover:text-pink-600 transition hover:scale-110"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="hover:text-blue-400 transition hover:scale-110"><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>

                <div class="hidden md:block text-gray-400 opacity-50">
                     <i class="fa-solid fa-arrow-turn-up text-4xl rotate-90"></i>
                </div>
                
                <div class="w-full md:w-64 h-48 rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition duration-500">
                    <img src="assets/img/KontactMain.jpg" class="w-full h-full object-cover" alt="Footer Image">
                </div>
            </div>

            <!-- Кнопка "В начало" остается приклеенной к нижней панели -->
            <div class="flex justify-center relative top-[1px] z-10">
                <a href="#" class="bg-teal-800/10 hover:bg-teal-800/20 px-6 py-2 rounded-t-xl text-xs font-bold text-teal-900 transition shadow-sm backdrop-blur-sm">
                    ^ В начало
                </a>
            </div>

            <div class="pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500 gap-4 pb-8 relative z-20">
                <div class="flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                        <i class="fa-solid fa-tree"></i>
                    </div>
                    <div>
                        <p>ИП Васильев Василий Васильевич</p>
                        <p>ИНН 12345678</p>
                    </div>
                </div>
                
                <div>example@gmail.com</div>

                <div class="flex gap-6">
                    <a href="#" class="hover:text-black underline">Политика конфиденциальности</a>
                    <a href="#" class="hover:text-black underline">Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    `;

    footerPlaceholder.className = "relative bg-gradient-to-t from-teal-50 to-brand-bg pt-12 border-t border-gray-200/50 mt-auto";
    footerPlaceholder.innerHTML = footerHTML;
}
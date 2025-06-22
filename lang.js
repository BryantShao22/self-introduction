const langData = {
    zh: {
        welcome: "你好，我是邵炜杰，欢迎来到我的主页！",
        aboutTitle: "个人信息",
        aboutContent: "我是邵炜杰，2002年9月22日出生，来自中国南京，毕业于常州大学。目前在东京一家互联网公司工作，职位是IT工程师。",
        skillsTitle: "技能展示",
        hobbiesTitle: "兴趣爱好",
        contactTitle: "联系我",
        nav: { home: "首页", skills: "技能", hobbies: "兴趣", contact: "联系" }
    },
    en: {
        welcome: "Hi, I'm Bryant Shao. Welcome to my homepage!",
        aboutTitle: "About Me",
        aboutContent: "I'm Bryant Shao, born on September 22, 2002, from Nanjing, China. I graduated from Changzhou University. Currently working in Tokyo as an IT engineer.",
        skillsTitle: "Skills",
        hobbiesTitle: "Hobbies",
        contactTitle: "Contact Me",
        nav: { home: "Home", skills: "Skills", hobbies: "Hobbies", contact: "Contact" }
    },
    ja: {
        welcome: "こんにちは、邵炜杰です。私のホームページへようこそ！",
        aboutTitle: "個人情報",
        aboutContent: "邵炜杰と申します。2002年9月22日生まれ、中国南京出身。常州大学を卒業し、現在は東京のIT企業で働いています。",
        skillsTitle: "スキル",
        hobbiesTitle: "趣味",
        contactTitle: "お問い合わせ",
        nav: { home: "ホーム", skills: "スキル", hobbies: "趣味", contact: "連絡先" }
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyLang();
}

function applyLang() {
    const lang = localStorage.getItem("lang") || "zh";
    const data = langData[lang];
    if (!data) return;

    const t = (id, key) => {
        const el = document.getElementById(id);
        if (el && data[key]) el.textContent = data[key];
    };

    t("welcome-text", "welcome");
    t("about-title", "aboutTitle");
    t("about-content", "aboutContent");
    t("skills-title", "skillsTitle");
    t("hobbies-title", "hobbiesTitle");
    t("contact-title", "contactTitle");

    const nav = data.nav;
    if (nav) {
        const navMap = ["nav-home", "nav-skills", "nav-hobbies", "nav-contact"];
        const keys = ["home", "skills", "hobbies", "contact"];
        navMap.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.textContent = nav[keys[i]];
        });
    }
}

window.onload = applyLang;

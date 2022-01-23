const bimg_main = [
    "https://www.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220354_qHhPxSJs",
    "https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg"
]
const bimg_body = [
    "https://t1.daumcdn.net/cfile/blog/1851070F4BF21C5A8B",
    "https://t1.daumcdn.net/cfile/blog/1951070F4BF21C5A8C",
    "https://t1.daumcdn.net/cfile/blog/1251070F4BF21C5A8F",
    "https://t1.daumcdn.net/cfile/blog/1151070F4BF21C5A90",
    'https://t1.daumcdn.net/cfile/blog/1351070F4BF21C5A92',
    "https://t1.daumcdn.net/cfile/blog/1551070F4BF21C5B93",
    "https://t1.daumcdn.net/cfile/blog/1651070F4BF21C5B94",
    "https://t1.daumcdn.net/cfile/blog/1751070F4BF21C5B95"
]

const bimg_body_dark = [
    "https://t1.daumcdn.net/cfile/blog/2051070F4BF21C5A8D",
    "https://t1.daumcdn.net/cfile/blog/1151070F4BF21C5A8E",
    "https://t1.daumcdn.net/cfile/blog/2051070F4BF21C5B98"
]

const randnum_one = Math.floor(Math.random() * bimg_body.length);
const randnum_two = Math.floor(Math.random() * bimg_body.length);
const randnum_three = Math.floor(Math.random() * bimg_body_dark.length);


const bgimg_one = document.querySelector("section")
bgimg_one.style = `background-image: url(${bimg_body[randnum_one]})`;

const bgimg_two = document.querySelector("body");
bgimg_two.style = `background-image: url(${bimg_body[randnum_two]})`;

const bgimg_three = document.querySelector("#section-last");
bgimg_three.style = `background-image: url(${bimg_body_dark[randnum_three]})`;
const container = document.getElementById("container");
const audio = document.getElementById("bg-audio");

const messages = [
    "Chúc bé của a 1/6 vui vẻ 🫶",
    "Chúc cô bé của a luôn vui tươi yêu đời ❤️",
    "Yêu anh nhiều hơn và giận anh ít thôi nhé 🥰",
    "Mãi iu em Nguyễn Anh Thư 🥰",
];

const images = [
    "assets/imgs/avt1.jpg",
    "assets/imgs/avt2.jpg",
    "assets/imgs/avt3.jpg",
    "assets/imgs/avt4.jpg",
    "assets/imgs/avt5.jpg",
];

// Xoay theo chuột
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    container.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
});
document.addEventListener("mouseleave", () => {
    container.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

// Phát nhạc
document.addEventListener("click", () => {
    audio.muted = false;
    audio.play().catch(() => {});
});

// Tạo sao
for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 4 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(star);
}

// Hiệu ứng rơi chữ
setInterval(() => {
    const span = document.createElement("span");
    span.className = "falling";
    span.style.left = `${Math.random() * 90}%`;
    span.textContent = messages[Math.floor(Math.random() * messages.length)];
    container.appendChild(span);

    setTimeout(() => span.remove(), 6000);
}, 500);

// Hiệu ứng rơi ảnh
function fallImage() {
    const span = document.createElement("span");
    span.className = "falling image";
    span.style.left = `${Math.random() * 90}%`;

    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.alt = "falling";

    span.appendChild(img);
    container.appendChild(span);

    setTimeout(() => span.remove(), 6000);

    const delay = Math.random() * 3000 + 1000;
    setTimeout(fallImage, delay);
}
fallImage();

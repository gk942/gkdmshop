// Hiển thị acc mẫu
const accList = [
  {
    id: "acc001",
    game: "Free Fire",
    gia: 100000,
    mo_ta: "Rank Cao Thủ, full súng VIP",
    anh: "https://via.placeholder.com/150"
  },
  {
    id: "acc002",
    game: "Liên Quân",
    gia: 150000,
    mo_ta: "Rank Tinh Anh, nhiều skin",
    anh: "https://via.placeholder.com/150"
  }
];

const userInfoDiv = document.getElementById('user-info');
const accListDiv = document.getElementById('acc-list');
const loginLink = document.getElementById('login-link');

function renderAccList() {
  accListDiv.innerHTML = "";
  accList.forEach(acc => {
    const div = document.createElement('div');
    div.className = "acc-item";
    div.innerHTML = `
      <img src="${acc.anh}" alt="${acc.game}" />
      <div class="acc-info">
        <h3>${acc.game}</h3>
        <p>${acc.mo_ta}</p>
        <p><b>Giá:</b> ${acc.gia.toLocaleString()}đ</p>
        <button class="buy-btn" data-id="${acc.id}">Mua ngay</button>
      </div>
    `;
    accListDiv.appendChild(div);
  });

  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", buyAcc);
  });
}

function buyAcc(event) {
  if (!auth.currentUser) {
    alert("Bạn phải đăng nhập để mua acc.");
    window.location.href = "login.html";
    return;
  }
  const accId = event.target.dataset.id;
  alert("Bạn đã mua acc " + accId + ". (Chức năng xử lý mua chưa làm)");
  // TODO: Xử lý trừ tiền, giao acc trong Firestore
}

auth.onAuthStateChanged(user => {
  if (user) {
    userInfoDiv.innerHTML = \`Xin chào \${user.email} | <a href="#" id="logout-btn">Đăng xuất</a>\`;
    loginLink.style.display = "none";
    document.getElementById('logout-btn').onclick = () => {
      auth.signOut();
    }
  } else {
    userInfoDiv.innerHTML = "";
    loginLink.style.display = "inline";
  }
});

renderAccList();

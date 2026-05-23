// ==========================================
// 1. 変数と初期設定
// ==========================================
// 各ファイルから読み込んだデータを合体させる
var figures = [

    
    ...(window.figures3 || []),
    ...(window.figures2 || []), 
    ...(window.figures1 || []),
];

console.log("現在の全データ件数:", figures.length);


let isAllShowMode = false;
const allShowBtn = document.getElementById('allShowBtn');
let ALL_SERIES_OPTIONS = []; // ★これを追加（元のリストを保存する用）

// ==========================================
// 2. 初期表示関数 (initShow)
// ==========================================
function initShow() {
  const today = new Date();
  const period = 21;

  const newFigures = figures.filter(f => {
    if (!f.date) return false;
    const itemDate = new Date(f.date);
    const diffTime = today - itemDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= period;
  });

  if (newFigures.length === 0) return;

  let html = "";
  newFigures.forEach(f => {
    html += `
    <div class="card">
      <div class="new-badge">NEW</div>
      <img src="${f.img}" loading="lazy">
      <h3 class="name">${f.name}</h3>
      <p class="price">¥ ${Number(f.price).toLocaleString()}</p>
      ${f.source ? `<a href="${f.source}" target="_blank" class="source">出典リンク</a>` : ""}
    </div>
    `;
  });

  const listContainer = document.getElementById("figureList");
  if (listContainer) {
    listContainer.innerHTML = html;
    listContainer.classList.add('is-active');
  }

  updatePickupTitle(true);
}

// (省略: initShowの終わり)

// ==========================================
// シリーズの選択肢を頭文字で絞り込む
// ==========================================
function filterSeriesByInitial() {
    const initialSelect = document.getElementById("initial-filter");
    const initial = initialSelect.value;
    const seriesSelect = document.getElementById("series");

    // 初回実行時のみ、全ての選択肢を「ALL_SERIES_OPTIONS」に保存する
    if (ALL_SERIES_OPTIONS.length === 0) {
        ALL_SERIES_OPTIONS = Array.from(seriesSelect.options).map(opt => ({
            value: opt.value,
            text: opt.textContent,
            kana: opt.getAttribute("data-kana") || ""
        }));
    }

    const rows = {
        "あ": /^[あ-おア-オ]/, "か": /^[か-こが-ごカ-コガ-ゴ]/,
        "さ": /^[さ-そざ-ぞサ-ソザ-ゾ]/, "た": /^[た-とだ-どタ-トダ-ド]/,
        "な": /^[な-のナ-ノ]/, "は": /^[は-ほば-ぼぱ-ぽハ-ホバ-ボパ-ポ]/,
        "ま": /^[ま-もマ-モ]/, "や": /^[や-よヤ-ヨ]/,
        "ら": /^[ら-ろラ-ロ]/, "わ": /^[わをんワヲン]/,
        "english": /^[A-Za-z0-9]/
    };

    // 一旦、セレクトボックスの中身を空にする
    seriesSelect.innerHTML = "";

    // 保存しておいた全リストから、条件に合うものだけを「再作成」して追加する
    ALL_SERIES_OPTIONS.forEach(optData => {
        // "All Series" は常に表示
        if (optData.value === "all") {
            seriesSelect.add(new Option(optData.text, optData.value));
            return;
        }

        let isMatch = false;
        if (initial === "all") {
            isMatch = true;
        } else if (rows[initial] && rows[initial].test(optData.kana)) {
            isMatch = true;
        }

        if (isMatch) {
            seriesSelect.add(new Option(optData.text, optData.value));
        }
    });

    // 作品選択をリセット
    seriesSelect.value = "all";
    
    // 少しだけ時間を置いてからフィギュア一覧を更新（スマホの処理待ち対策）
    setTimeout(() => {
        showFigures();
    }, 50);
}

// ==========================================
// 追加：表示件数を管理する変数
// ==========================================
let displayCount = 30; // 最初に表示する件数
const DISPLAY_STEP = 30; // 「もっと見る」で増える件数

// ==========================================
// 3. 絞り込み表示関数 (showFigures) ★ここをリニューアル
// ==========================================
function showFigures() {
  const search = document.getElementById("search").value.toLowerCase();
  const series = document.getElementById("series").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const sort = document.getElementById("sort").value;

  let filtered = [];

  // --- データの抽出範囲を決定 ---
  if (isAllShowMode) {
    filtered = [...figures];
  } else if (search === "" && series === "all" && type === "all" && price === "all") {
    const today = new Date();
    const period = 30;
    filtered = figures.filter(f => {
      if (!f.date) return false;
      const diffDays = (today - new Date(f.date)) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= period;
    });
  } else {
    filtered = [...figures];
  }

  // --- フィルター処理（既存のまま） ---
  if (!isAllShowMode) {
    if (series !== "all") filtered = filtered.filter(f => f.series === series);
    if (type !== "all") {
      filtered = filtered.filter(f =>
        Array.isArray(f.type) ? f.type.includes(type) : f.type === type
      );
    }
    if (price !== "all") {
      const [min, max] = price.split('-').map(Number);
      filtered = filtered.filter(f => {
        const itemPrice = Number(f.price);
        return itemPrice >= min && itemPrice <= max;
      });
    }
    if (search !== "") {
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(search) ||
        (f.search && f.search.toLowerCase().includes(search))
      );
    }
  }

  // --- ソート処理（既存のまま） ---
  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "ja"));

  // ★追加：全件数を保存（件数表示用）
  const totalCount = filtered.length;

  // ★重要：「もっと見る」のために表示件数で切り取る
  const visibleFigures = filtered.slice(0, displayCount);

// ===== 選択時カラー更新 =====
  document.querySelectorAll('select').forEach(sel => {
    sel.classList.toggle('active', sel.value !== '' && sel.value !== 'all' && sel.value !== 'none');
  });
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.classList.toggle('active', searchInput.value.trim() !== '');
  }
  document.querySelectorAll('.custom-button').forEach(btn => {
    btn.classList.toggle('active', isAllShowMode);
  });

  // ===========================

  // --- HTMLの組み立て ---
  let html = "";
  const today = new Date();
  const period = 30;

  visibleFigures.forEach(f => {
    let badgeHtml = "";
    if (f.date) {
      const diffDays = (today - new Date(f.date)) / (1000 * 60 * 60 * 24);
      if (diffDays >= 0 && diffDays <= period) {
        badgeHtml = '<div class="new-badge">NEW</div>';
      }
    }

    html += `
    <div class="card">
      ${badgeHtml}
      <img src="${f.img}" loading="lazy">
      <h3 class="name">${f.name}</h3>
      <p class="price">¥ ${Number(f.price).toLocaleString()}</p>
      ${f.source ? `<a href="${f.source}" target="_blank" class="source">出典リンク</a>` : ""}
    </div>
    `;
  });

  // --- 画面表示とボタン制御 ---
  const listContainer = document.getElementById("figureList");
  const moreButton = document.getElementById("load-more");

  if (listContainer) {
    listContainer.innerHTML = html;
    listContainer.classList.add('is-active');

    if (html === "" && (isAllShowMode || search !== "" || series !== "all")) {
        listContainer.innerHTML = '<p class="no-result">該当する景品がありません</p>';
    }
  }

  // ★「もっと見る」ボタンの出し分け
  if (moreButton) {
    if (displayCount < totalCount) {
      moreButton.style.display = "block";
      moreButton.textContent = `もっと見る (${totalCount - displayCount}件残っています)`;
    } else {
      moreButton.style.display = "none";
    }
  }

  // 看板の更新
  const isFiltering = (search !== "" || series !== "all" || type !== "all" || price !== "all" || sort !== "none");
  const hasNewItem = html.includes('new-badge');
updatePickupTitle(!isAllShowMode && !isFiltering && hasNewItem, totalCount);
}

// ==========================================
// 追加：もっと見るボタン・トップへ戻るボタンの処理
// ==========================================
function loadMore() {
  displayCount += DISPLAY_STEP;
  showFigures();
}

// フィルターを変えたときは表示件数をリセットする
document.querySelectorAll('select, input').forEach(el => {
  el.addEventListener('change', () => {
    displayCount = DISPLAY_STEP; 
  });
});

// トップへ戻るスクロール
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 500) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// ==========================================
// 4. フィルタークリア関数 (clearFilters)
// ==========================================
function clearFilters() {
    const ids = ["search", "series", "type", "price", "sort", "initial-filter"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === "sort") el.value = "none";
            else if (id === "search") el.value = "";
            else el.value = "all";
        }
    });

    filterSeriesByInitial();

    isAllShowMode = false;
    if (allShowBtn) {
        allShowBtn.textContent = '全てのプライズを表示';
        allShowBtn.classList.remove('active');
    }

    const listContainer = document.getElementById("figureList");
    if (listContainer) {
        listContainer.innerHTML = "";
        listContainer.classList.remove('is-active');
    }

    initShow();
}

// ==========================================
// 5. ボタン・看板の制御
// ==========================================
if (allShowBtn) {
  allShowBtn.addEventListener('click', () => {
    isAllShowMode = true;
    allShowBtn.textContent = '全表示にする'; // ← テキストを固定
    showFigures();
    updatePickupTitle(false); 
  });
}

function updatePickupTitle(show, count) {
  const container = document.getElementById("pickupContainer");
  if (!container) return;

  if (show && !isAllShowMode) {
    container.innerHTML = '<h2 class="pickup-text">新着プライズ</h2>';
  } else if (count !== undefined) {
container.innerHTML = `<h2 class="pickup-text">検索結果 <span class="result-count">${count}件</span></h2>`;
  } else {
    container.innerHTML = '';
  }
}


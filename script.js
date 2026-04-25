
// ==========================================
// 1. 変数と初期設定
// ==========================================
let isAllShowMode = false;
const allShowBtn = document.getElementById('allShowBtn');

// ==========================================
// 2. 初期表示関数 (initShow)
// ==========================================
function initShow() {
  const today = new Date();
  const period = 30;

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
    // 1. HTML側の選択された「行」の値を取得する
    const initialSelect = document.getElementById("initial-filter");
    const initial = initialSelect.value; 

    const seriesSelect = document.getElementById("series");
    const options = seriesSelect.options;

    // 2. 各行の判定ルール
    const rows = {
        "あ": /^[あ-おア-オ]/, "か": /^[か-こが-ごカ-コガ-ゴ]/,
        "さ": /^[さ-そざ-ぞサ-ソザ-ゾ]/, "た": /^[た-とだ-どタ-トダ-ド]/,
        "な": /^[な-のナ-ノ]/, "は": /^[は-ほば-ぼぱ-ぽハ-ホバ-ボパ-ポ]/,
        "ま": /^[ま-もマ-モ]/, "や": /^[や-よヤ-ヨ]/,
        "ら": /^[ら-ろラ-ロ]/, "わ": /^[わをんワヲン]/,
        "english": /^[A-Za-z0-9]/
    };

    // 3. 全ての作品選択肢をループ
    for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        
        if (opt.value === "all") {
            opt.style.display = "block";
            continue;
        }

        const kana = opt.getAttribute("data-kana") || "";

        let isMatch = false;
        if (initial === "all") {
            isMatch = true;
        } else if (rows[initial] && rows[initial].test(kana)) {
            isMatch = true;
        }

        // 表示・非表示の切り替え
        opt.style.display = isMatch ? "block" : "none";
    }

    // 作品選択をリセットして一覧を更新
    seriesSelect.value = "all";
    showFigures();
}

// ==========================================
// 3. 絞り込み表示関数 (showFigures)
// ==========================================
// (以下、既存のコード)

// ==========================================
// 3. 絞り込み表示関数 (showFigures)
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
    // 【重要】新着表示中にソートだけ変える場合、新着分(30日)だけを対象にする
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

  // --- フィルター処理 ---
  if (!isAllShowMode) {
    if (series !== "all") {
      filtered = filtered.filter(f => f.series === series);
    }
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

  // --- ソート処理 ---
  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  }

  // --- HTMLの組み立て ---
  let html = "";
  const today = new Date();
  const period = 30;

  filtered.forEach(f => {
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

  // --- 画面表示の切り替え ---
  const listContainer = document.getElementById("figureList");
  if (listContainer) {
    listContainer.innerHTML = html;

    // ソート(sort)も含めてデフォルト状態かを判定
    const isDefault = (search === "" && series === "all" && type === "all" && price === "all" && sort === "none");
    
    // 「全表示モード」である、または「ユーザーが何かしら操作（検索・絞り込み）をしている」なら表示
    if (isAllShowMode || !isDefault) {
      listContainer.classList.add('is-active');

      // もし操作した結果、該当する景品が0件だった場合の処理
      if (html === "") {
        listContainer.innerHTML = '<p class="no-result">該当する景品がありません</p>';
      }
    } else {
      // 本当に何も選んでいない時だけ、新着表示に戻す
      listContainer.classList.remove('is-active');
      initShow(); 
    }
  }

  // 看板の更新
  const isFiltering = (search !== "" || series !== "all" || type !== "all" || price !== "all" || sort !== "none");
  const hasNewItem = html.includes('new-badge');
  updatePickupTitle(!isAllShowMode && !isFiltering && hasNewItem);
}

// ==========================================
// 4. フィルタークリア関数 (clearFilters)
// ==========================================
function clearFilters() {
    // 1. 各セレクトボックスと検索窓の値をリセット
    const ids = ["search", "series", "type", "price", "sort", "initial-filter"]; // initial-filterを追加
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === "sort") el.value = "none";
            else if (id === "search") el.value = "";
            else el.value = "all";
        }
    });

    // 2. 「あかさたな」で隠されていた作品の選択肢(display: none)をすべて「表示」に戻す
    const seriesSelect = document.getElementById("series");
    if (seriesSelect) {
        const opts = seriesSelect.options;
        for (let i = 0; i < opts.length; i++) {
            opts[i].style.display = "block";
        }
    }

    // 3. 全表示モードなどのフラグをリセット
    isAllShowMode = false;
    if (allShowBtn) {
        allShowBtn.textContent = '全表示にする';
        allShowBtn.classList.remove('active');
    }

    // 4. 表示エリアを一旦空にして、初期表示（新着分）を再実行
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
    showFigures();
    updatePickupTitle(false); 
  });
}

function updatePickupTitle(show) {
  const container = document.getElementById("pickupContainer");
  if (!container) return;

  if (show && !isAllShowMode) {
    container.innerHTML = '<h2 class="pickup-text">PICKUP</h2>';
  } else {
    container.innerHTML = '';
  }
}

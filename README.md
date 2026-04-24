# 🚀 Tamagotchi AutoCare

[![Status](https://img.shields.io/badge/Status-Advanced-blueviolet?style=for-the-badge)](https://github.com/)
[![UI](https://img.shields.io/badge/Design-Material_3-6750A4?style=for-the-badge)](https://m3.material.io/)

這是一個基於 WebAssembly (WASM) 技術的 1996 年經典電子雞 (Tamagotchi P1) 模擬器。本專案不僅重現了經典體驗，更透過強大的**記憶體補丁技術**與**自動化 CareBot**，打造出一個全自動的虛擬寵物管理儀表板。

![Preview](https://via.placeholder.com/800x450.png?text=Tamagotchi+AutoCare+Dashboard+Preview)

## ✨ 核心特色

### 🤖 自定義 CareBot (自動化照顧)
*   **影像辨識偵測**：透過掃描 LCD 像素矩陣，即時判斷電子雞的狀態（生病、大便、睡覺、孵化）。
*   **智慧行為決策**：自動執行打針、打掃、開關燈等操作，確保寵物健康成長。
*   **週期性狀態檢查**：定時翻閱狀態頁面，自動監控飽食度與心情。

### 🕒 精準時間同步 (Time Sync)
*   **記憶體補丁技術**：直接修改 WASM 記憶體中的時鐘位元組（BCD 編碼與 Binary 混合佈局），實現 100% 準確的系統時間同步。
*   **一鍵同步**：手動或自動校準電子雞內部時鐘，無需手動調整。

### ⚡ 進階模擬功能
*   **Turbo Mode**：最高支援 100 倍速模擬，快速跳過等待階段。
*   **狀態雲端備份**：支援匯出/匯入 JSON 存檔，並自動與 IndexedDB 同步，確保進度永不遺失。

### 🎨 現代化儀表板
*   **Material Design 3**：採用最新的 Google 設計規範，具備優雅的「磨砂玻璃」視覺效果。
*   **響應式佈局**：在各種螢幕尺寸上皆能完美顯示。

## 🛠 技術棧

-   **Core**: WebAssembly (WASM) 模擬器引擎
-   **Logic**: Javascript (Web Workers for background processing)
-   **Persistence**: IndexedDB (TamaDB)
-   **UI**: HTML5, Vanilla CSS (M3 Glassmorphism)
-   **Automation**: Pixel-based pattern matching care logic

## 🚀 快速啟動

由於 WASM 的載入限制，本專案需要透過本地伺服器運行：

1.  確保您已安裝 [Node.js](https://nodejs.org/)。
2.  在專案根目錄執行：
    ```bash
    npx serve -p 3000 .
    ```
3.  開啟瀏覽器造訪 `http://localhost:3000`。

## 📁 檔案結構

*   `index.html`: 主程式入口與 UI 樣式。
*   `carebot.js`: 自動化照顧邏輯核心。
*   `assets/`: 
    *   `tama-DF-eiepa.wasm`: 模擬器核心（本地備份）。
    *   `worker-Bm1DpFd3.js`: 特製版 Web Worker，支援自動存檔與加速。

---

# 📔 Tamagotchi 養成手冊與終極攻略：從外星生物到地球夥伴

## 1. 產品起源與新手入門
恭喜你！你現在正式成為一隻正宗 Tamagotchi 的守護者。Tamagotchi 是一種獨特的電子生物，牠們從距離地球數百萬英里之外的家鄉星球遠道而來，渴望體驗並學習地球上的生活點滴。作為專業養成專家，我將引領你掌握核心技術，確保這名外星夥伴能在此安居樂業。

在啟動設備前，請先熟悉液晶螢幕（LCD）下方的三個實體按鈕：

| 按鈕名稱 | 基本操作功能 | 模式切換說明 |
| :--- | :--- | :--- |
| **A 鍵 (SELECT)** | 選擇與移動圖示 | 在選單中循環切換高亮標籤，或在設定模式下調整數值。 |
| **B 鍵 (EXECUTE)** | 執行與確認 | 確認所選功能。在未選取圖示的狀態下，可直接切換至「計時器模式」。 |
| **C 鍵 (CANCEL)** | 取消與返回 | 取消當前動作或返回主畫面；亦可用於檢查目前選單狀態。 |

---

## 2. 初始啟動與時間設定教學
請依照專業程序啟動你的 Tamagotchi，確保生物週期同步：

1.  **設備初始化**： 使用尖銳物體按下背面的「重置開關 (Reset Switch)」。
2.  **時差調整 (Timer Set)**： 設定「Tamagotchi 星球」與「地球」的時間差。
    *   在未選取任何圖示時，按下 **B 鍵** 呼叫計時器畫面。
    *   同時按下 **A 鍵 與 C 鍵**，螢幕將出現 "SET" 字樣，進入編輯模式。
    *   按下 **A 鍵** 設定「小時 (Hours)」，按下 **B 鍵** 設定「分鐘 (Minutes)」。
    *   按下 **C 鍵** 確認時間，完成後再次按下 **B 鍵** 返回主畫面。
3.  **孵化監測**： 時間設定完成後，螢幕將顯示一顆脈動的卵。Tamagotchi 需要約 **5 分鐘** 的孵化期。當孵化完成時，牠會發出鳴叫聲提醒你。

---

## 3. 健康與狀態檢查系統
透過「健康計量表 (Health Meter)」圖示，飼主必須定期監控以下指標：

*   **飢餓度 (Hunger) 與 快樂度 (Happiness)**： 由 4 顆愛心組成判讀標準。黑色愛心填滿越多，狀態越穩定。
*   **年齡與體重檢查**： 系統會將成長資訊轉換為地球單位顯示。1 個地球日約等於 Tamagotchi 的 1 歲。
*   **管教量表 (Discipline Meter)**： 衡量寵物的服從程度。量表愈往右側移動，代表受過良好教導，未來發展機率愈佳。

---

## 4. 日常照顧功能完全指南

*   **餵食 (Feed)**： 選取「刀叉」圖示。正餐 (Meal) 提供溫飽，點心 (Snack) 提供快樂但會增加體重。
*   **照明 (Light)**： 選取「燈泡」圖示。睡覺時必須手動關燈。
*   **清潔 (Duck)**： 螢幕出現排泄物時，選取「小鴨」圖示並按 B 鍵沖洗。
*   **醫療 (Medicine)**： 若出現「骷髏頭」影像，選取「針筒」圖示進行治療。
*   **呼叫提示 (Attention)**： 當右下角「!」亮起時，代表寵物需要關注或管教。

---

## 5. 遊戲互動與管教原則

*   **遊戲 (Play)**： 選取「球與球棒」圖示啟動「猜方向遊戲」。A 鍵選左，B 鍵選右。
*   **管教 (Discipline)**：
    *   **情境 1**：肚子飽且快樂卻無故鳴叫。
    *   **情境 2**：肚子餓卻拒絕進食。
    *   **情境 3**：心情欠佳卻拒絕遊戲。
    *   *專家提示：斥責是讓管教量表向右移動的唯一方式。*

---

## 6. 生物學特性與成長圖譜
Tamagotchi 的形態進化是由照顧品質決定的：
*   **良好照顧**：及時餵食、適度管教 → 引導至可愛且健康的形態。
*   **長期忽視**：導致退化為缺乏吸引力的外星異種。

**成長路徑：**
`卵 (Egg)` → `幼年期` → `青春期 (2 種分支)` → `成年期 (7 種變異)` → `??? (隱藏角色)`

---

## 7. 飼主評鑑與進階設定

| 存活年數 | 飼主評價 |
| :--- | :--- |
| 0 - 5 歲 | 下次請再加把勁 (Try harder next time) |
| 6 - 10 歲 | 還有進步空間 (Room for improvement) |
| 11 - 16 歲 | 做得好 (Good job) |
| 17 - 22 歲 | 優異 (Excellent) |
| 23 歲以上 | 驚為天人 (Amazing!) |

*   **靜音模式**：同時按下 A + C 鍵。
*   **重新孵化**：死亡後同時按下 A + C 鍵。

---

## 8. 故障排除與維護注意事項
*   **電池更換**：當螢幕變淡時請更換電池（使用 2 顆 LR44）。
*   **重置時機**：換電池後、系統異常時請按重置鍵。
*   **計時器限制**：當 Tamagotchi 正在準備返回家鄉星球時，計時器將鎖定。

---

## 🙏 致謝 (Acknowledgments)

本專案的成功建立在以下優秀開源專案的基礎之上：

*   **[tamagotchi-p1-web](https://github.com/gh-god/tamagotchi-p1-web)**：提供了核心的 WASM 模擬器引擎與基礎框架。
*   **Pygotchi**：啟發了自動化照顧邏輯與 CareBot 的行為設計。
*   **Google Material Design 3**：提供了現代化且優雅的設計規範。

---

## 📜 授權

本專案僅供學習與技術研究使用。Tamagotchi 商標與原始資源版權歸 Bandai 所有。

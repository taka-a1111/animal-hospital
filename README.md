# MiU動物病院 TOPページ コーディング一式

.figからテキスト・画像を抽出し全文言をデザイン原文と照合。
装飾SVG（動物シルエット・たんぽぽ・花）は見本画像から輪郭トレースで生成し、
形状一致率IoU 0.91〜0.95を実測。コーディング規則ver0.0.2 全項目準拠。

## コーディング規則チェックリスト
- [x] SASS構築（scss/→app.css）
- [x] BEM・FLOCSS（l-/c-/p-/u-）
- [x] ブレイクポイントはmixin.scssのみ（生@mediaゼロをgrep検証）
- [x] 390/1024/1200pxで崩れ・横はみ出しなし
- [x] 要素直指定回避（base例外のみ）
- [x] font-size：body=px（16px）・他は全てrem
- [x] width/height実数値回避（max-width＋aspect-ratio）
- [x] 各セクションにinner＋max-width（MVは画面幅いっぱいの例外規定）
- [x] 診療時間表はtable＋CSS（2箇所）
- [x] JS：フェード程度・main.js集約・HTML直書きなし
- [x] 画像：2倍相当＋圧縮・角丸はCSS・半角英数名
- [x] WordPress指定コード（aside-content/pageNation/pagerLink）のCSSを_c-wp.scssに用意

## fig照合で確定した文言
科目名「腎臓・泌尿器科」／8科目の症状リスト／診療理念4カードの個別タイトル／
Q&A「駐車場はありますか？？」／フォント3種（Noto Sans JP・Zen Maru Gothic・Montserrat）

## 要確認事項（fig未収録・仮対応）
Q&A回答文／科目別モーダル説明文（figは1種のみ）／診療理念02〜04の本文・画像／
メニューリンク先（下層未制作）／フッター（デザイン未提供）／feature_06はMVと写真共用

## ビルド
sass scss/app.scss:scss/app.css --style=expanded

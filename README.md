# KORD Document Tracker — Evidence-first build

全12マップ定義済み。未確認座標を捏造せず、場所だけ裏取りできた情報は `座標未確定` として一覧表示します。

## 現在入っている具体的なエビデンス

- Customs
  - Financial documents: 2-story Dorms entrance guard desk — community report
  - Big Red / Red Customs warehouse area — preliminary area report
- Factory
  - Project documentation / Blueprints and technical documentation — multiple user-found spawn screenshots
  - Desk / file cabinet office area — explicit spawn report

## Evidence policy

- `verified`: 正確な8192座標まで確認済み
- `community`: 具体的な発見報告があるが座標変換未確定
- `area`: 建物/エリア単位のみ確認
- x/yはKordMap等の座標データと一致確認できた時だけ追加

## Sources

- Battlestate Games official Kord Breach announcement
- Escorenews Customs guide, 2026-08-04
- Escorenews Factory guide, 2026-08-04
- KordMap / community map sources for future coordinate reconciliation

This project is an unofficial community tool and is not affiliated with Battlestate Games.


## Data pipeline
- KordMap JSON import ready
- verified/community/area confidence supported
- coordinates are added only after confirmation

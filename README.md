# KORD Document Tracker

Escape from Tarkov / KORD BREACH 用の静的ドキュメント湧き位置マップです。

## 方針

- DBなし
- localStorageなし
- ビルドなし
- GitHub Pagesだけで公開可能
- `data.js` に湧き位置を直書き
- PC / スマホのレスポンシブ対応
- Leaflet + SVGマップ
- KordMapと同じ 8192 x 8192 のシンプル座標系

## GitHub Pages 公開

スマホのGitHubでこの4ファイルをリポジトリ直下にアップロードしてください。

- `index.html`
- `styles.css`
- `data.js`
- `app.js`

その後:

1. Repository の `Settings`
2. `Pages`
3. `Build and deployment`
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/ (root)`
7. `Save`

公開URLは通常:

`https://<GitHub-ID>.github.io/kord-document-tracker/`

## 湧き位置を追加

`data.js` の `spawns` に追加します。

```js
{
  id: "customs-fin-001",
  map: "Customs",
  type: "Financial documents",
  title: "Crackhouse 2F",
  description: "本棚付近",
  x: 5000,
  y: 4000,
  floor: "2F",
  keyRequired: false
}
```

`x/y` は地図上をタップすると画面左の Coordinate Helper に表示されます。

> READMEやdata.jsに書いてあるサンプル座標は説明用です。実際の湧き位置として使わないでください。

## Credits

Map configuration is based on the public KordMap project and its credited community map sources.

- KordMap: `KalleLeskinen/KordMap`
- Tarkov.dev SVG maps: `the-hideout/tarkov-dev-svg-maps`
- Some custom maps credited by KordMap to reemr.se

This is an unofficial community tool and is not affiliated with Battlestate Games.

# お手伝いサークル公式サイト

## 概要

質問箱の機能を改善した Web アプリです。

実際のアプリは[こちら](https://otetsudai-circle.com/)です。

2022/02 ~ 2022/03 の間に製作しました。(その後実際に利用するための改修を 2023/02~2023/03 にも制作をしております。)
当時 Git でコードを管理していなかったため一旦完成したものを GitHub に上げた形になります。
基本的実装は全て Nuxt.js で行っており、ホスティングサービスはとしては Google App Engine、データベースは microCMS を使用しております。

## 開発の経緯

質問箱の改善により弊学サークルの活動を促進することができると考え開発を開始しました。
私が在籍している横浜国立大学では[お手伝いサークル](https://twitter.com/PALDOW2022)というTwitter上で活動する団体が存在しています。彼らは大学に関する情報発信や、新入生を始めとした情報を得られていない学生向けに質問の募集、回答を行っており、その手段として Twitter 上の質問箱を使用しております。しかし現行の質問箱を使用することによる問題点が何点かあり、また「このような機能を追加すれば更に円滑に質問者の疑問を解決できるのではないか」というアイデアもあったため、お手伝いサークルの運営の方に連絡を取り協議を重ね開発に至りました。
2023/3/7より本導入いただき現在も使用して頂いております。

## 改善・追加した機能

### 検索機能

- 課題：
  - 検索機能が無く、過去の質問を遡るのが難しい。特に毎日数十件単位で回答を行うアカウントではその課題の重大性に拍車がかかり、一覧性に欠けていた。
  - ↑ の一覧性の欠如によって質問の内容が既存の質問か判別できず、過去の質問と同様のものが複数回質問されておりユーザー、運営ともに負担が増加していた。
- 対策：検索機能を実装し、一覧性を向上させた。また頻出の質問をサジェストすることでより検索性を向上させた。また無限スクロールを導入し一度に読み込む質問を増加させることでUXの向上を図った。

### チェーン機能

- 課題：
  - 文字数を超過した回答を試みた場合に回答ツイートで「続きは質問箱へ」となりtwitter内で完結することができない。
  - ↑ によって運営側が回答の文字数を１ツイートに収めるために内容を削るなどの本質的でない問題が発生していた。
- 対策：規定文字数を超過した回答に関しては、テキストを分割し回答のツイートにチェーンで繋げ全文を表示する機能を実装。

### リプライ機能

- 課題：
  - 運営が把握していない質問(特に学部に関する質問など専門性のあるもの)を回答する際に「知ってる方情報ください」と改めて質問箱で情報を募集していたため、質問と質問に対する情報が質問箱内で混在していた。
  - ↑ に加え情報にタイムラグがあり、どの情報がどの質問に結びついたものか把握が困難だった。
- 対策：リプライ機能を実装し、匿名かつ質問に対する情報を紐付けた状態で送信が可能になった。また返信に関しても元質問のツイートにリプライとすることでTwitter上での情報提供の確認も容易になった。

## 使用技術

Nuxt.js, microCMS, Google App Engine, Firebase Authentication

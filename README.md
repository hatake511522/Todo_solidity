# はじめに
React + Solidity のTodoアプリです.
chrome に MetaMask をインストールし ropstenテストネットワークからテスト用のETHをもらっておいてください。
1ETHあれば十分です。


# 動作させるには

1. [http://remix.ethereum.org/](remix) を起動
2. new fileから Todo.sol を作成しこのフォルダの Todo.sol のコードを貼り付けコンパイル
3. remixの environment を `Injected Web3` に設定しデプロイ
4. 数分ほどしたらデプロイが終わるので Deployed Contracts から transaction のアドレスをコピー
5. user_ABI.jsの address に貼り付ける
6. `npm start`
7. Todoを作成、アーカイブすると MetaMask を通じてトランザクションが処理されていることを確認する



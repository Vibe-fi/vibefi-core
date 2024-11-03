# VibeFi Core SDK

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@vibefi/core)
![NPM Downloads](https://img.shields.io/npm/dm/%40vibefi%2Fcore)

## Install

```sh
npm install @vibefi/core --save
```

If you're using `yarn`:
```sh
yarn add @vibefi/core
```

If you're using `pnpm`:
```sh
pnpm add @vibefi/core
```

## Use

### Import

```ts
import Vibefi from "@vibefi/core";
```

### Initiate

```ts
const client = new Vibefi({
  apiKey: "YOUR_API_KEY_HERE",
});
```

## Usage

You can use the sdk to do multiple stuff. You will need to connect your wallet before this.

### Create a new Quest
New Quest means a new smart contract will get deployed with some custom values.

### Join a Quest
Join an existing quest. This would return a unique url which would act as a referral link for you. You can share this url on your social media to attract more audience to your audience. More followers you've, more you can earn.

### Join a Quest via Referral
If you are joining the quest via a referral, you're bound to get some additional benefits as well as the person whose referral you've used. Some quests will only have join via referral option available, so this might be the most common way to join a quest. The above rules still applies and you'll get your own referral link as well to share forward. You'll also get any reward associated with the referral.

😁

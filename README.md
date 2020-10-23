# hanuman

## How to use

<details>
<summary><b>Local docker development setup</b></summary>

- install vscode
- clone the repo
- install docker [Windows](https://www.docker.com/products/docker-desktop) , [Mac](https://www.docker.com/products/docker-desktop) or [Linux](https://docs.docker.com/install/#supported-platforms)
- install Remote container from microsoft - https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
- Click on the bottom left `><` icon and select `Remote-Containers: Reopen Container` or Press `F1` and search `Remote-Containers: Reopen Container`

If you followed the above steps, it should open your vscode in docker development container

</details>

<details>
<summary><b>Install Project</b></summary>

```bash
npm run c-install
```

#### Running app in development mode:

Open two terminals and run the two commands separately

```bash
npm run dev
```

```bash
npm run dev-server
```

#### Running app in single shell development mode

```bash
npm run dev-shell
```

#### Running app in server debug

Open two terminals and run the two commands separately

```bash
npm run dev
```

```bash
npm run debug-server
```

#### Analyze server and client bundles

```bash
npm run analyze
```

#### Running app in production mode

```bash
npm run build
npm run start
```

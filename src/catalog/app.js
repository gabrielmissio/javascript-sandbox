const data = [
    {
        label: 'BREAKOUT',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/breakout',
        imgUrl: 'images/breakout-demo.png',
        demoUrl: '../breakout/index.html'
    },
    {
        label: 'SNAKE',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/snake',
        imgUrl: 'images/snake-demo.png',
        demoUrl: '../snake/index.html'
    },
    {
        label: 'WHAC-A-MOLE',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/whac-a-mole',
        imgUrl: 'images/whac-a-mole-demo.png',
        demoUrl: '../whac-a-mole/index.html'
    },
    {
        label: 'MEMORY GAME',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/memory-game',
        imgUrl: 'images/memory-game-demo-temp.png',
        demoUrl: '../memory-game/index.html'
    },
    {
        label: 'CATALOG',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/catalog',
        imgUrl: 'images/catalog-demo.png',
        demoUrl: '../catalog/index.html'
    },
    {
        label: 'WHAC-A-MOLE',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/whac-a-mole',
        imgUrl: 'images/whac-a-mole-demo.png',
        demoUrl: '../whac-a-mole/index.html'
    },
    {
        label: 'SNAKE',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/snake',
        imgUrl: 'images/snake-demo.png',
        demoUrl: '../snake/index.html'
    },
    {
        label: 'BREAKOUT',
        repoUrl: 'https://github.com/gabrielmissio/javascript-sandbox/tree/main/src/breakout',
        imgUrl: 'images/breakout-demo.png',
        demoUrl: '../breakout/index.html'
    }
]

const catalogDisplay = document.querySelector('.catalog')

for (const item of data) {
     createCatalogItem(item)
}

function createCatalogItem({ label, imgUrl, demoUrl, repoUrl }) {
    const catalogItemDisplay = document.createElement('div')
    catalogItemDisplay.classList.add('catalog-item')
    catalogDisplay.appendChild(catalogItemDisplay)

    const catalogItemLink = document.createElement('a')
    catalogItemLink.setAttribute('href', demoUrl)
    catalogItemDisplay.appendChild(catalogItemLink)

    const catalogItemImage = document.createElement('img')
    catalogItemImage.setAttribute('src', imgUrl)
    const catalogItemLabel = document.createElement('h3')
    catalogItemLabel.innerHTML = label

    const labelAndGitIconDiv = document.createElement('div')
    const voidBox = document.createElement('div')
    voidBox.style.width = '25px'
    labelAndGitIconDiv.classList.add('small-icon')

    const gitIcon = document.createElement('img')
    const gitLink = document.createElement('a')
    gitLink.setAttribute('href', repoUrl)
    gitLink.appendChild(gitIcon)
    gitIcon.setAttribute('src', './images/git-icon-black.png')

    labelAndGitIconDiv.appendChild(voidBox)
    labelAndGitIconDiv.appendChild(catalogItemLabel)
    labelAndGitIconDiv.appendChild(gitLink)

    catalogItemLink.append(catalogItemImage)
    catalogItemDisplay.append(labelAndGitIconDiv)
}

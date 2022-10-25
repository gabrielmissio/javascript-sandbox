const data = [
    {
        label: 'BREAKOUT',
        imgUrl: 'images/breakout-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/breakout'
    },
    {
        label: 'SNAKE',
        imgUrl: 'images/snake-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/snake'
    },
    {
        label: 'WHAC-A-MOLE',
        imgUrl: 'images/whac-a-mole-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/whac-a-mole'
    },
    {
        label: 'MEMORY GAME',
        imgUrl: 'images/memory-game-demo-temp.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/memory-game'
    },
    {
        label: 'MEMORY GAME',
        imgUrl: 'images/memory-game-demo-temp.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/memory-game'
    },
    {
        label: 'WHAC-A-MOLE',
        imgUrl: 'images/whac-a-mole-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/whac-a-mole'
    },
    {
        label: 'SNAKE',
        imgUrl: 'images/snake-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/snake'
    },
    {
        label: 'BREAKOUT',
        imgUrl: 'images/breakout-demo.png',
        demoUrl: 'http://javascript-sandbox.s3-website-us-east-1.amazonaws.com/breakout'
    }
]

const catalogDisplay = document.querySelector('.catalog')

for (const item of data) {
     createCatalogItem(item)
}

function createCatalogItem({ label, imgUrl, demoUrl }) {
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

    catalogItemLink.append(catalogItemImage)
    catalogItemLink.append(catalogItemLabel)
}

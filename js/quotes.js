const quotes = [
    {
    quote: '인생 속에 있는 것은 무엇이건 간에 겁낼필요가 없다. 왜냐하면 그것은 오직 이해되도록 기다리고 있을 뿐이기 때문이다.',
    author: '퀴리 부인'
    },
    {
    quote: '지금 적극적으로 실행하는 괜찮은 계획이 다음주의 완벽한 계획보다 낫다.',
    author: '조진S.패튼'
    },
    {
    quote: '나는 날마다 모든 면에서 점점 좋아지고 있다.',
    author: '에밀 쿠에'
    },
    {
    quote: '불가능한 일을 해보는 것은 신나는 일이다.',
    author: '윌트 디즈니'
    },
    {
    quote: '네 운명을 사랑하라. 이것이 지금부터 나의 사랑이 될 것이다.',
    author: '프리드리히 니체'
    },
    {
    quote: '지나간 일로 미래를 설계할 수는 없다.',
    author: '에드먼드 버크'
    },
    {
    quote: '스스로를 아는 것부터 시작하라.',
    author: '프리드리히 니체'
    },
    {
    quote: '가장 비참한 건 앞날에 대한 불안감으로 인해 이미 불안해져 있는 마음이다.',
    author: '세네카'
    },
    {
    quote: '문제점을 찾지 말고 해결책을 찾으라.',
    author: '핸리 포드'
    },
    {
    quote: '성공이 끝은 아니다.',
    author: '윈스턴 처칠'
    },
    ];

    const quote = document.querySelector("#quote div:last-child");
    const author = document.querySelector("#quote div:first-child");

    const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
//const common = require("mocha/lib/interfaces/common");

//  Comment Functionality
form = document.getElementById('comment-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = (e.target['comment-input'].value);
    let comment = document.createElement('p');
    comment.innerText = text
    document.getElementById('list').append(comment);
    form.reset();
});

const counter = document.getElementById('counter');

//  Plus-Minus Buttons
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
minusBtn.addEventListener('click', () => counter.innerText--);
plusBtn.addEventListener('click', () => counter.innerText++);

//  Likes
const likeBtn = document.getElementById('heart')
likeBtn.addEventListener('click', () => {
    if (document.getElementById(`${counter.innerText}-like`)) {
        currentLike = document.getElementById(`${counter.innerText}-like`)
        currentLike.value++;
        currentLike.innerText = `${counter.innerText} has been liked ${currentLike.value} times.`
    } else {
        likeList = document.querySelector('.likes')
        like = document.createElement('li');
        like.id = `${counter.innerText}-like`;
        like.value = 1
        like.innerText = `${counter.innerText} has been liked ${like.value} time.`
        likeList.append(like);
    }
});

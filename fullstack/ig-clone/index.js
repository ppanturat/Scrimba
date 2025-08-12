const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("posts")

renderPosts()

function renderPosts(){
    let htmlString = ``
    for (let post of posts){
    htmlString += `
            <section>
                <div class="container flex">
                    <img class="avatar" src="${post.avatar}" alt="">
                    <div>
                        <p class="artist-name">${post.name}</p>
                        <p class="artist-loc">${post.location}</p>
                    </div>
                </div>
                <img class="container flex" src="${post.post}" alt="">
                <div class="container flex">
                    <img class="icon" src="images/icon-heart.png" alt="">
                    <img class="icon" src="images/icon-comment.png" alt="">
                    <img class="icon" src="images/icon-dm.png" alt="">
                </div>
                <div class="container divider">
                    <p class="bold like">${post.likes} likes</p>
                    <p><span class="bold user">${post.username}</span> ${post.comment}</p>
                </div>
            </section>
    `
    }
    main.innerHTML = htmlString
}
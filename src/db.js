const users = [{
    id: '1',
    name: 'Jared',
    email: 'jared@gmail.com',
    age: 29
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '1',
    title: 'reminders',
    body: 'remind me to finsh work',
    published: true,
    author: '1'
}, {
    id: '2',
    title: 'movies',
    body: 'Avengers was garbage!',
    published: false,
    author: '1'
}, {
    id: '3',
    title: 'Hostipal',
    body: 'Go pick up your medication',
    published: true,
    author: '2'
}]

const comments = [{
    id: '13',
    text: 'Wow she is bad',
    author: '3',
    post: '1'
}, {
    id: '14',
    text: 'Thas looks delicious',
    author: '1',
    post: '1'
}, {
    id: '15',
    text: 'How hurt of you fam',
    author: '2',
    post: '3'
}, {
    id: '16',
    text: 'That team cannot be beat!',
    author: '1',
    post: '2'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }
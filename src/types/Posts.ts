export type  Post = {
    id: number,
    title: string,
    body: string
    createdAt: Date
}
export type TPostStats = {
    comments: number,
    likes: {
        isLiked: boolean,
        amount: number
    }
}

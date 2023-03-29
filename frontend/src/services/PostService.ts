import { CreatedPost } from '../components/pages/ui/Postmaker/Postmaker'
import $api from '../http'
import { IPost } from '../types/post.interface'

export const PostService = {
  async getPosts() {
    const { data } = await $api.get<IPost[]>('/posts')
    return data.reverse()
  },

  async getPost(id: string) {
    const { data } = await $api.get<IPost>(`posts/${id}`)
    return data
  },

  async createPost(data: CreatedPost) {
    try {
      const response = await $api.post(`posts`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          type: 'formData'
        }
      })

      return response
    } catch (e) {
      return e
    }
  }
}
